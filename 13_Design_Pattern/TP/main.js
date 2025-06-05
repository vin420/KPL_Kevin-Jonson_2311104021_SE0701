import { subject } from './subject.js';
import { ConcreteObserver } from './observer.js';

const mySubject = new subject();

const observer1 = new ConcreteObserver("Observer A");
const observer2 = new ConcreteObserver("Observer B");

mySubject.subscribe(observer1);
mySubject.subscribe(observer2);

console.log("Subject mengirim data: Perubahan #1");
mySubject.notify("Perubahan #1");

mySubject.unsubscribe(observer2);

console.log("Subject mengirim data: Perubahan #2");
mySubject.notify("Perubahan #2");