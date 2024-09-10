export default class TarifTable {
	wrapper;
	data;

	constructor() {
		this.wrapper = document.querySelector("#tarifTable");
		this.data = [];

		this.createTable();
	}

	createTable() {
		this.resetTable();

		if (getMedia() === "mobile") {
			const table = document.createElement("div");
			table.className = "tarif--table";

			table.innerHTML = `
            <div class="tarif--title">
                <h3>Adulte</h3>
            </div>
            <div class="tarif--row">
                <div class="tarif--cell categ">
                    <p>1 séance</p>
                </div>
                <div class="tarif--cell value">
                    <p>40€</p>
                </div>
            </div>
            <div class="tarif--row">
                <div class="tarif--cell categ">
                    <p>3 séances</p>
                </div>
                <div class="tarif--cell value">
                    <p>110€</p>
                </div>
            </div>
            <div class="tarif--row">
                <div class="tarif--cell categ">
                    <p>6 séances</p>
                </div>
                <div class="tarif--cell value">
                    <p>200€</p>
                </div>
            </div>
            `;
		}
	}

	resetTable() {}
}
