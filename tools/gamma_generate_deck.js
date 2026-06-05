const fs = require("fs");
const path = require("path");

function readArg(name, fallback) {
  const idx = process.argv.indexOf(name);
  if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1];
  return fallback;
}

function readConfig() {
  const configPath = readArg("--config", "");
  if (!configPath) return {};
  return loadConfig(configPath);
}

function mergeConfig(base, override) {
  const result = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      result[key] &&
      typeof result[key] === "object" &&
      !Array.isArray(result[key])
    ) {
      result[key] = mergeConfig(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function loadConfig(configPath) {
  const absolute = path.resolve(configPath);
  const config = JSON.parse(fs.readFileSync(absolute, "utf8"));
  if (!config.extends) return config;

  const basePath = path.resolve(path.dirname(absolute), config.extends);
  const base = loadConfig(basePath);
  const { extends: _extends, ...rest } = config;
  return mergeConfig(base, rest);
}

function readEnvKey() {
  if (process.env.GAMMA_API_KEY) return process.env.GAMMA_API_KEY.trim();

  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return "";

  const line = fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .find((entry) => /^\s*GAMMA_API_KEY\s*=/.test(entry));

  return line
    ? line.replace(/^\s*GAMMA_API_KEY\s*=\s*/, "").trim().replace(/^['"]|['"]$/g, "")
    : "";
}

async function gammaJson(url, apiKey, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs || 90000);
  try {
    const response = await fetch(url, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });

    const text = await response.text();
    if (!response.ok) {
      throw new Error(`Gamma API ${response.status}: ${text}`);
    }
    return JSON.parse(text);
  } finally {
    clearTimeout(timeout);
  }
}

async function download(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download failed ${response.status}: ${await response.text()}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, bytes);
}

async function main() {
  const config = readConfig();

  const promptPath = readArg("--prompt", config.promptPath);
  const outputStem = readArg("--output", config.outputStem || "gamma_deck");
  const exportAs = readArg("--exportAs", config.exportAs || "pptx");
  const format = readArg("--format", config.format || "presentation");
  const textMode = readArg("--textMode", config.textMode || "preserve");
  const cardSplit = readArg("--cardSplit", config.cardSplit || "inputTextBreaks");
  const numCards = Number.parseInt(readArg("--numCards", `${config.numCards || 7}`), 10);
  const imageSource = readArg("--imageSource", config.imageSource || "placeholder");
  const dimensions = readArg("--dimensions", config.dimensions || "16x9");
  const amount = readArg("--amount", config.textOptions?.amount || "");
  const tone = readArg("--tone", config.textOptions?.tone || "");
  const audience = readArg("--audience", config.textOptions?.audience || "");
  const themeId = readArg("--themeId", config.themeId || "");
  const additionalInstructionsArg = readArg("--instructions", config.additionalInstructions || "");
  const folderIds = config.folderIds || [];
  const sharingOptions = config.sharingOptions;

  if (!promptPath) throw new Error("Missing --prompt path.");

  const apiKey = readEnvKey();
  if (!apiKey) throw new Error("Missing GAMMA_API_KEY. Set it in .env.local or environment.");

  const inputText = fs.readFileSync(promptPath, "utf8");
  const payload = {
    inputText,
    format,
    textMode,
    numCards,
    cardSplit,
    exportAs,
    imageOptions: { source: imageSource },
    additionalInstructions:
      additionalInstructionsArg ||
      "Create a premium 16:9 B2B airport media sales deck with a product-launch / modern website feel. Use large numbers, editorial composition, strong visual hierarchy, full-bleed image areas, sharp cards, and restrained premium styling. Keep image placeholder notes visible as image slots/blocks for manual replacement. Do not use stock photos, AI images, fake client logos, or invented facts. Use Midnight Blue #0B1E3F, Saffron #F59E0B, Off White #FAFAF7, Ink #0A0A0A, Cloud #E5E7EB.",
  };

  if (config.imageOptions?.style) {
    payload.imageOptions.style = config.imageOptions.style;
  }
  if (config.imageOptions?.model) {
    payload.imageOptions.model = config.imageOptions.model;
  }

  if (format !== "webpage") {
    payload.cardOptions = {
      dimensions,
      headerFooter: {
        bottomLeft: {
          type: "text",
          value: "Rajkot Airport Media | Operated by Mukesh Arts",
        },
        bottomRight: {
          type: "cardNumber",
        },
        hideFromFirstCard: true,
        hideFromLastCard: false,
      },
    };
  }

  if (!exportAs || exportAs === "none") {
    delete payload.exportAs;
  }

  if (amount || tone || audience) {
    payload.textOptions = {};
    if (amount) payload.textOptions.amount = amount;
    if (tone) payload.textOptions.tone = tone;
    if (audience) payload.textOptions.audience = audience;
    payload.textOptions.language = "en";
  }
  if (themeId) payload.themeId = themeId;
  if (folderIds.length) payload.folderIds = folderIds;
  if (sharingOptions) payload.sharingOptions = sharingOptions;

  const apiBase = "https://public-api.gamma.app/v1.0/generations";
  const exportsDir = path.join(process.cwd(), "04_media_kit", "exports");
  fs.mkdirSync(exportsDir, { recursive: true });

  const stamp = new Date().toISOString().replace(/\D/g, "").slice(0, 14);
  const jsonPath = path.join(exportsDir, `${outputStem}_${stamp}.json`);

  const generation = await gammaJson(apiBase, apiKey, {
    method: "POST",
    body: payload,
  });

  fs.writeFileSync(jsonPath, JSON.stringify(generation, null, 2));
  console.log(`Generation ID: ${generation.generationId}`);
  console.log(`Saved initial result: ${jsonPath}`);

  let result = generation;
  for (let i = 1; i <= 60; i += 1) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    result = await gammaJson(`${apiBase}/${generation.generationId}`, apiKey);
    fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2));
    console.log(`Poll ${i}: ${result.status}`);
    if (result.status === "completed" || result.status === "failed") break;
  }

  console.log(`Saved result: ${jsonPath}`);
  console.log(`Status: ${result.status}`);
  if (result.gammaUrl) console.log(`Gamma URL: ${result.gammaUrl}`);
  if (result.exportUrl) {
    console.log(`Export URL: ${result.exportUrl}`);
    const deckPath = path.join(exportsDir, `${outputStem}_${stamp}.${exportAs}`);
    await download(result.exportUrl, deckPath);
    console.log(`Downloaded export: ${deckPath}`);
  }
  if (result.credits) {
    console.log(`Credits deducted: ${result.credits.deducted}`);
    console.log(`Credits remaining: ${result.credits.remaining}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
