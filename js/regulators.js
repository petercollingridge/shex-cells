class Regulator {
    constructor(cell) {
        this.cell = cell;
        this.regulatedBy = [];
        this.regulates = [];
        this.previousActivation = 0;
        this.currentActivation = 0;
    }

    // Add an input causing this regulator to be actived/inhibited by another body
    addInput(activator, weight, baseline) {
        this.regulatedBy.push([activator, weight, baseline]);
    }

    // Add an output that this regulator regulate
    addOutput(activator, weight, baseline) {
        this.regulates.push([activator, weight, baseline]);
    }

    update() {
        this.currentActivation = 0;
        this.regulatedBy.forEach(obj => )
        this.previousActivation = this.currentActivation;
    }
}