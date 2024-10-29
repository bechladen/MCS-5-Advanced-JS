//* Interface - це структура, яка описує форму об'єкта. Інтерфейси визначають, які властивості та методи повинен мати об'єкт, але не містять конкретної реалізації. Вони служать для перевірки того, що об'єкти, які реалізують інтерфейс, відповідають певним вимогам до структури.

// Custom Types
// type User = {
//   name: string;
//   city: string;
//   age: number;
// };

// const user: User = {
//   name: "Alice",
//   city: "Lviv",
//   age: 28,
// };

// Interface

// interface User {
//   name: string;
//   city: string;
//   age: number;
// }

// const user: User = {
//   name: "Alice",
//   city: "Lviv",
//   age: 28,
// };

// Додати значення до властивостей далі по коду (використовується коли працюємо з бібліотеками) - розширення властивостей інтерфейсу

// interface User {
//   hobby: "JS" | "TS";
// }

// const user: User = {
//   name: "Alice",
//   hobby: "TS",
//   city: "Lviv",
//   age: 28,
// };

// Якщо потрібно зробити кастомний тип з простими типами (Union type) то тільки type

// type hobby = "JS" | 'TS'

// interface hobby {
//   name: "JS" | "TS"
// }

//* Тому маємо загальне правило (рекомендація) коли працюємо з об'єктами ми використавуємо interface, а з простими типами type

//? Практика

//* Generics
//? Створіть функцію reverseArray, яка приймає масив будь-якого типу та повертає його в оберненому порядку.
// Використовуйте Generics, щоб функція була гнучкою і працювала для різних типів масивів.

// const numbers = [1, 2, 3, 4, 5];

// const words = ["apple", "banana", "cherry"];

// function reverseArray(array) {
//   return array.reverse();
// }

//* Приклади використання
// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers); // [5, 4, 3, 2, 1]

// const words = ["apple", "banana", "cherry"];
// const reversedWords = reverseArray(words);
// console.log(reversedWords); // ["cherry", "banana", "apple"]

// TASK-2
//  створити функцію mergeObjects, яка об'єднує два об'єкти в один, при цьому зберігаючи типи об'єктів.

// interface Person {
//   name: string;
//   age: number;
// }

// interface Address {
//   city: string;
//   zipCode: string;
// }

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// Приклад використання
// const person: Person = { name: "John", age: 30 };
// const address: Address = { city: "New York", zipCode: "10001" };

// const mergedObject = mergeObjects(person, address);

// console.log(mergedObject);
// { name: 'John', age: 30, city: 'New York', zipCode: '10001' }

// console.log(mergedObject.name); // 'John'
// console.log(mergedObject.city); // 'New York'

// ****************Class*******************

//* class interface - інтерфейси описують тільки які властивості та методи повинні бути у класі або об'єкті, але не як вони мають бути реалізовані.


//* abstract class - це клас, який призначений для того, щоб бути базою для інших класів, але не може бути створений самостійно. Це свого роду шаблон, що описує загальні характеристики та поведінку, які будуть реалізовані в похідних класах.
/*
Особливості абстрактних класів:

* 1. Не можна створити екземпляр: Не можна створити об'єкт абстрактного класу. Його можна використовувати тільки як основу для інших класів.

* 2. Абстрактні методи: Абстрактний клас може містити абстрактні методи – методи без реалізації, які обов’язково потрібно реалізувати в дочірніх класах. Це дозволяє задавати загальні методи, які можуть мати різну реалізацію в кожному з підкласів.

* 3. Загальні властивості та методи: Абстрактний клас також може містити звичайні методи з реалізацією, які будуть доступні в усіх класах-нащадках.
*/

