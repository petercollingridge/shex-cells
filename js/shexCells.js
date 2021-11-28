class Cell {
    constructor() {
        this.energy = 100;
        this.protein = 100;
        this.regulators = [
            new Regulator(),
            new Regulator(),
            new Regulator(),
            new Regulator(),
        ];
    }

    update() {
        // Get mapping of amounts
        const substrates = {
            energy: this.energy,
            protein: this.protein,
            reg1: this.regulators[0].activation,
            reg2: this.regulators[1].activation,
            reg3: this.regulators[2].activation,
            reg4: this.regulators[3].activation,
        }

        this.regulators.forEach(regulator => regulator.update(substrates))
    }
}