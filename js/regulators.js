class Regulator {
    constructor(baseline) {
        this.baseline = baseline;
        this.regulatedBy = [];
        this.regulates = [];
        this.activation = 0;
    }

    // Add an input causing this regulator to be actived/inhibited by another body
    addInput(activator, weight) {
        this.regulatedBy.push([activator, weight]);
    }

    // Add an output that this regulator regulate
    addOutput(activator, weight) {
        this.regulates.push([activator, weight]);
    }

    update(substrates) {
        const activation = this.baseline;
        this.regulatedBy.forEach(([activator, weight]) => {
            activation += substrates[activator] * weight
        });
        this.activation = sigmoid(activation);
    }
}