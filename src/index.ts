//* Interface - це структура, яка описує форму об'єкта. Інтерфейси визначають, які властивості та методи повинен мати об'єкт, але не містять конкретної реалізації. Вони служать для перевірки того, що об'єкти, які реалізують інтерфейс, відповідають певним вимогам до структури.

// Custom Types
// type User = {
//   name: string;
//   city: string;
//   age?: number;
// };

// const user: User = {
//   name: 'Alice',
//   city: 'Lviv',
//   age: 28,
// };

// console.log(user);

//* Interface

// interface IUser {
//   name: string;
//   city: string;
//   age?: number;
// }

// const user: IUser = {
//   name: 'Alice',
//   city: 'Lviv',
//   age: 28,
// };

// console.log(user);

// Додати значення до властивостей далі по коду (використовується коли працюємо з бібліотеками) - розширення властивостей інтерфейсу

// interface IUser {
//   hobby: 'JS' | 'TS';
// }

/*
interface IUser {
  name: string;
  city: string;
  age?: number;
  hobby: 'JS' | 'TS';
}
*/

// const user: IUser = {
//   name: "Alice",
//   hobby: "TS",
//   city: "Lviv",
//   age: 28,
// };

// Якщо потрібно зробити кастомний тип з простими типами (Union type) то тільки type

// type hobby = "JS" | 'TS'

// const userHobby: hobby = 'TS'

// interface hobby {
//   name: 'JS' | 'TS';
// }

// const userHobby: hobby = {
//   name: 'TS',
// };

//* Тому маємо загальне правило (рекомендація) коли працюємо з об'єктами ми використавуємо interface, а з простими типами type

//? Практика

//* Generics
//? Створіть функцію reverseArray, яка приймає масив будь-якого типу та повертає його в оберненому порядку.
// Використовуйте Generics, щоб функція була гнучкою і працювала для різних типів масивів.

// function reverseArray<T>(array: T[]): T[] {
//   return array.reverse();
// }

//* Приклади використання
// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers); // <number | string>
// console.log(reversedNumbers); // [5, 4, 3, 2, 1]

// const words = ["apple", "banana", "cherry"];
// const reversedWords = reverseArray(words);
// console.log(reversedWords); // ["cherry", "banana", "apple"]

//* TASK-2
// створити функцію mergeObjects, яка об'єднує два об'єкти в один, при цьому зберігаючи типи об'єктів.

// interface Person {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   zipCode: string;
// }

// type FunctionType = <T, U>(obj1: T, obj2: U) => T & U;

// const mergeObjects: FunctionType = (obj1, obj2) => ({ ...obj1, ...obj2 });

// function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }

// // Приклад використання
// const person: Person = { name: 'John', age: 30 };
// const address: Address = { city: 'New York', zipCode: '10001' };

// const mergedObject = mergeObjects(person, address);

// console.log(mergedObject);
// // { name: 'John', age: 30, city: 'New York', zipCode: '10001' }

// console.log(mergedObject.name); // 'John'
// console.log(mergedObject.city); // 'New York'

// ****************Class*******************

//* public - публічне поле - доступне повсюди (і всередині класу, і в екземплярі і в класі який наслідується)

//* private - приватне поле - доступне тільки всередині класу (не доступне в екземплярі і не доступне в наслідуванні)

//* protected - захищене поле - доступне всередині класу і в класах які наслідуються (не доступне в екземплярі)

//* static - статичне поле - можна звернутись тільки через клас Class.staticField

//* readonly - коли ми ставимо поле readonly це означає що його можна тільки прочитати і при спробі перезаписати поле виникне помилка компілятора (але якщо у вас readonly є масив або обʼєкт то ви все одно можете додавати нові поля або пушити в масив не дивлячись на readonly, тому що readonly захищає тільки від перезапису, чимось нагадує поведінку константи)

// class User {
//   private email: string;
//   protected city: string;

//   constructor(public name: string, public readonly age: number, email: string, city: string) {
//     this.city = city;
//     this.email = email;
//   }

//   displayUserInfo() {
//     console.log(`User: ${this.name}\nAge: ${this.age}\nEmail: ${this.email}`);
//   }
// }

// const user = new User('Dima', 29, 'dima@gmail.com', 'Dnipro');

// console.log(user);
// // user.age = 30; //! Cannot assign to 'age' because it is a read-only property.
// console.log(user.age);
// // console.log(user.email);//! Property 'email' is private and only accessible within class 'User'

// user.displayUserInfo();

// class Student extends User {
//   constructor(name: string, age: number, email: string, city: string) {
//     super(name, age, email, city); //* викликаємо конструктор батьківсього класу User для ініціалізації полів
//   }

// //   getEmail(){
// //     return this.email; //! Property 'email' is private and only accessible within class 'User'.
// //   }

//   getCity(){
//     return this.city;
//   }

// }

// const student = new Student('Alice', 25, 'alice@gmail.com', 'Lviv');

// console.log(student);
// console.log(student.getCity());
// console.log(student.city); //! Property 'city' is protected and only accessible within class 'User' and its subclasses.

//* class interface - інтерфейси описують тільки які властивості та методи повинні бути у класі або об'єкті, але не як вони мають бути реалізовані.

// interface IUser {
//   name: string;
//   age: number;
//   displayInfo(): void;
// }

// interface IUserData {
//   email: string;
//   city: string;
// }

// class User implements IUser, IUserData {
//   constructor(public name: string, public age: number, public email: string, public city: string) {}

//   displayInfo(): void {
//     console.log(`Name: ${this.name}\nAge: ${this.age}`);
//   }
// }

// const user = new User('Gleb', 30, 'gleb@gmail.com', 'Kyiv');
// console.log(user);
// user.displayInfo();

//! ===========

// interface IFlyable {
//   speed: number;
//   fly(): void;
// }

// class Bird implements IFlyable {
//   constructor(public birdKind: string, public speed: number) {}

//   fly(): void {
//     console.log(`Bird ${this.birdKind} fly with speed ${this.speed}km/h`);
//   }
// }

// class Plane implements IFlyable {
//   constructor(public planeKind: string, public speed: number) {}

//   fly(): void {
//     console.log(`Plane ${this.planeKind} fly with speed ${this.speed}km/h`);
//   }
// }

// const sparrow = new Bird('sparrow', 20);
// const boeing = new Plane('boeing', 900);

// sparrow.fly();
// boeing.fly();

//* abstract class - це клас, який призначений для того, щоб бути базою для інших класів, але не може бути створений самостійно. Це свого роду шаблон, що описує загальні характеристики та поведінку, які будуть реалізовані в похідних класах.

/*
Особливості абстрактних класів:

* 1. Не можна створити екземпляр: Не можна створити об'єкт абстрактного класу. Його можна використовувати тільки як основу для інших класів.

* 2. Абстрактні методи: Абстрактний клас може містити абстрактні методи – методи без реалізації, які обов’язково потрібно реалізувати в дочірніх класах. Це дозволяє задавати загальні методи, які можуть мати різну реалізацію в кожному з підкласів.

* 3. Загальні властивості та методи: Абстрактний клас також може містити звичайні методи з реалізацією, які будуть доступні в усіх класах-нащадках.
*/

// interface IUser {
//   name: string;
//   age: number;
//   displayInfo(): void;
// }

// abstract class AbstractUserClass implements IUser {
//   constructor(public name: string, public readonly age: number) {}

//   displayInfo(): void {
//     console.log(`Name: ${this.name}\nAge: ${this.age}`);
//   }

//   abstract getBirthYear(): number;
// }

// const abstractUser = new AbstractUserClass("Roma", 26); //! Cannot create an instance of an abstract class.

// class Student extends AbstractUserClass {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }

//   getBirthYear(): number {
//     return new Date().getFullYear() - this.age;
//   }
// }

// const student = new Student('Tima', 37);

// student.displayInfo();

// console.log(student.getBirthYear());

//! ==============

abstract class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving.`);
  }

  abstract sound(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  sound(): void {
    console.log('Bark-Bark');
  }
}

class Fish extends Animal {
  constructor(name: string) {
    super(name);
  }

  // overload
  move(): void {
    console.log(`${this.name} is swimming.`);
  }

  sound(): void {
    console.log('Blub-Blub');
  }
}

const dog = new Dog('Barsik');
const fish = new Fish('Golda');

console.log(dog);
console.log(fish);

dog.move();
dog.sound();

fish.move();
fish.sound();
