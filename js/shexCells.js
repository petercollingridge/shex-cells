class Cell {
    constructor() {
        this.energy = new Chemical(100);
        this.protein = new Chemical(100);
        this.regulators = [
            new Regulator(),
            new Regulator(),
            new Regulator(),
            new Regulator(),
        ];
    }

    update() {

    }
}