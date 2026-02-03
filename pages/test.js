export default class test {
    constructor(root = document) {
        this.root = root; // root element for this page
        this.state = {};  // internal state
        // other private properties
    }

    init() {
        // attach event listeners, initialize UI, fetch data, etc.
        // all logic stays inside this instance
        console.log('TestPage init');
        this.setupUI();
        this.loadData();
        return this; // optional for chaining
    }

    destroy() {
        // remove event listeners, timers, cancel requests, etc.
        console.log('TestPage destroyed');
        this.cleanupUI();
    }

    // --- all internal methods and logic ---
    setupUI() {
        // manipulate DOM under this.root
    }

    loadData() {
        // fetch API data, set this.state
    }

    cleanupUI() {
        // remove listeners or extra DOM elements
    }

}