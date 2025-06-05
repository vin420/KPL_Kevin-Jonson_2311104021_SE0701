export class ConcreteObserver {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} menerima update: ${data}`);
  }
}