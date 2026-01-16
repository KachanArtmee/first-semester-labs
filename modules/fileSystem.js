const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');

const DEFAULT_EXCLUDE = new Set(['node_modules', '.git']);

function abs(p) {
  return path.isAbsolute(p) ? p : path.join(process.cwd(), p);
}

function normalizeNoise(text) {
  return String(text)
    .replace(/\d+/g, '')
    .toLowerCase();
}


function writeFileSync(filePath, content) {
  fs.mkdirSync(path.dirname(abs(filePath)), { recursive: true });
  fs.writeFileSync(abs(filePath), content, 'utf8');
}

function readFileSync(filePath) {
  return fs.readFileSync(abs(filePath), 'utf8');
}

function replaceFileSync(filePath, newContent) {
  fs.writeFileSync(abs(filePath), newContent, 'utf8');
}

function clearFileSync(filePath) {
  fs.writeFileSync(abs(filePath), '', 'utf8');
}

function cleanNoiseInFileSync(filePath) {
  const cleaned = normalizeNoise(readFileSync(filePath));
  replaceFileSync(filePath, cleaned);
  return cleaned;
}

function copyFileSync(fromPath, toPath) {
  fs.mkdirSync(path.dirname(abs(toPath)), { recursive: true });
  fs.copyFileSync(abs(fromPath), abs(toPath));
}

function createDirSync(dirPath) {
  fs.mkdirSync(abs(dirPath), { recursive: true });
}

function removeDirSync(dirPath) {
  fs.rmSync(abs(dirPath), { recursive: true, force: true });
}

function listProjectFilesSync(root = process.cwd(), exclude = DEFAULT_EXCLUDE) {
  const result = [];

  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const e of entries) {
      if (exclude.has(e.name)) continue;
      const p = path.join(current, e.name);
      if (e.isDirectory()) walk(p);
      else result.push(p);
    }
  }

  walk(abs(root));
  return result;
}

function cleanProjectSync(root = process.cwd(), exclude = DEFAULT_EXCLUDE) {
  const rootAbs = abs(root);
  const entries = fs.readdirSync(rootAbs, { withFileTypes: true });

  for (const e of entries) {
    if (exclude.has(e.name)) continue;
    fs.rmSync(path.join(rootAbs, e.name), { recursive: true, force: true });
  }
}


async function writeFileAsync(filePath, content) {
  await fsp.mkdir(path.dirname(abs(filePath)), { recursive: true });
  await fsp.writeFile(abs(filePath), content, 'utf8');
}

async function readFileAsync(filePath) {
  return fsp.readFile(abs(filePath), 'utf8');
}

async function replaceFileAsync(filePath, newContent) {
  await fsp.writeFile(abs(filePath), newContent, 'utf8');
}

async function clearFileAsync(filePath) {
  await fsp.writeFile(abs(filePath), '', 'utf8');
}

async function cleanNoiseInFileAsync(filePath) {
  const cleaned = normalizeNoise(await readFileAsync(filePath));
  await replaceFileAsync(filePath, cleaned);
  return cleaned;
}

async function copyFileAsync(fromPath, toPath) {
  await fsp.mkdir(path.dirname(abs(toPath)), { recursive: true });
  await fsp.copyFile(abs(fromPath), abs(toPath));
}

async function createDirAsync(dirPath) {
  await fsp.mkdir(abs(dirPath), { recursive: true });
}

async function removeDirAsync(dirPath) {
  await fsp.rm(abs(dirPath), { recursive: true, force: true });
}

async function listProjectFilesAsync(root = process.cwd(), exclude = DEFAULT_EXCLUDE) {
  const result = [];

  async function walk(current) {
    const entries = await fsp.readdir(current, { withFileTypes: true });
    for (const e of entries) {
      if (exclude.has(e.name)) continue;
      const p = path.join(current, e.name);
      if (e.isDirectory()) await walk(p);
      else result.push(p);
    }
  }

  await walk(abs(root));
  return result;
}

async function cleanProjectAsync(root = process.cwd(), exclude = DEFAULT_EXCLUDE) {
  const rootAbs = abs(root);
  const entries = await fsp.readdir(rootAbs, { withFileTypes: true });

  await Promise.all(
    entries.map(async (e) => {
      if (exclude.has(e.name)) return;
      await fsp.rm(path.join(rootAbs, e.name), { recursive: true, force: true });
    })
  );
}

module.exports = {

  writeFileSync,
  readFileSync,
  replaceFileSync,
  clearFileSync,
  cleanNoiseInFileSync,
  copyFileSync,
  createDirSync,
  removeDirSync,
  listProjectFilesSync,
  cleanProjectSync,

  writeFileAsync,
  readFileAsync,
  replaceFileAsync,
  clearFileAsync,
  cleanNoiseInFileAsync,
  copyFileAsync,
  createDirAsync,
  removeDirAsync,
  listProjectFilesAsync,
  cleanProjectAsync
};
