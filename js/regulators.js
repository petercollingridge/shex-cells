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
    addOutput(target, weight) {
        this.regulates.push([target, weight]);
    }

    updateActivation(substrates) {
        let activation = this.baseline;
        this.regulatedBy.forEach(([activator, weight]) => {
            activation += substrates[activator] * weight
        });
        this.activation = sigmoid(activation);
    }

    updateOutputs(outputs) {
        this.regulates.forEach(([target, weight]) => {
            outputs[target] += this.activation * weight;
        });
    }
}