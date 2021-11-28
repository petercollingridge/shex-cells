// A chemical in the cel
// Has an amount and a previous amount for dealing with how regulators work

class Chemical {
    constructor(amount) {
        this.amount = amount;
        this.oldAmount = amount;
    }

    update() {
        this.oldAmount = this.amount;
    }
}