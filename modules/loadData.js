async function loadData(url) {
  const state = { data: [], isLoading: true, error: null };

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    state.data = await res.json();
    state.isLoading = false;
    return state;
  } catch (e) {
    state.error = e;
    state.isLoading = false;
    return state;
  }
}

module.exports = { loadData };
