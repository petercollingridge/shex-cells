const cell = new Cell();

cell.regulators[0].addInput('energy', 0.5);
cell.regulators[1].addInput('energy', 0.25);
cell.update();