function normalizeForSort(s) {
  return String(s).replace(/\s+/g, '').toLowerCase();
}

function sortStringsIgnoringSpaces(arr = []) {
  return [...arr].sort((a, b) => normalizeForSort(a).localeCompare(normalizeForSort(b)));
}

module.exports = { sortStringsIgnoringSpaces };
