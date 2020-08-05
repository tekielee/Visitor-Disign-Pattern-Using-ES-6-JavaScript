class Keyboard {
	constructor() {
	}
	
	accept(ComputerPartDisplayVisitor) {
		ComputerPartDisplayVisitor.visit_keyboard(this);
	}
}

class Monitor {
	constructor() {
	}
	
	accept(ComputerPartDisplayVisitor) {
		ComputerPartDisplayVisitor.visit_monitor(this);
	}
}

class Mouse {
	constructor() {
	}
	
	accept(ComputerPartDisplayVisitor) {
		ComputerPartDisplayVisitor.visit_mouse(this);
	}
}

class Computer {
	constructor() {
		this.parts = [new Keyboard(), new Monitor(), new Mouse()];
	}
	
	accept(ComputerPartDisplayVisitor) {
		for(var i = 0; i < this.parts.length; i++) {
			this.parts[i].accept(ComputerPartDisplayVisitor);
		}
		
		ComputerPartDisplayVisitor.visit_computer(this);
	}
}

class ComputerPartDisplayVisitor {
	constructor() {
		
	}
	
	visit_computer(Computer) {
		console.log('Diagnosing Computer');
	}
	
	visit_mouse(Mouse) {
		console.log('Diagnosing Mouse');
	}
	
	visit_keyboard(Keyboard) {
		console.log('Diagnosing Keyboard');
	}
	
	visit_monitor(Monitor) {
		console.log('Diagnosing Monitor');
	}
}

const computer = new Computer();
computer.accept(new ComputerPartDisplayVisitor());