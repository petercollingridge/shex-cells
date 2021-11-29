const MAX_ENERGY = 1000;
const MAX_PROTEIN = 1000;


class Cell {
    constructor() {
        this.energy = 100;
        this.protein = 100;
        this.regulators = [
            new Regulator(10),
            new Regulator(0),
            new Regulator(0),
            new Regulator(0),
        ];
    }

    update() {
        // Map inputs to their current amount/activation level
        const inputs = this._getRegulatorActivation();
        inputs.energy = this.energy / MAX_ENERGY;
        inputs.protein = this.protein / MAX_PROTEIN;

        // Regulators activated/inhibited by inputs
        this.regulators.forEach(regulator => regulator.updateActivation(inputs))

        // Regulators activate/inhibit outputs
        const outputs = this._getRegulatorActivation();
        outputs.storage = 0;
        outputs.synthesis = 0;

        // Regulators activates/inhibits outputs
        this.regulators.forEach(regulator => regulator.updateOutputs(outputs));
        console.log(outputs);
    }

    _getRegulatorActivation() {
        return {
            reg1: this.regulators[0].activation,
            reg2: this.regulators[1].activation,
            reg3: this.regulators[2].activation,
            reg4: this.regulators[3].activation,
        };
    }
}