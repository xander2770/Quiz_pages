class DataFetch {
  constructor(api) {
    this.api = api;
    this.fetch();
  }

  async fetch() {
    const response = await fetch(this.api);
    this.data = await response.json();
  }
}
