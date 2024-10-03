/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

/*
    1. вішаємо обробник подій по кліку на кнопку старт (блокуємо кнопку до кінця гри)
    2. отримуємо масив дітей контейнера і запускаємо метод map який зробить проміс під кожен слот (в промісі рандомно переводити його в стан фулфілд 🤑 або реджектед 👿)
    3. за допомогою методу allSettled чекаємо поки виконаються всі проміси і потім оброблюємо масив виконаних промісів
    4. показуємо результат кожного слота з затрикою в 1 секунду
    5. робимо перевірку на переможця: якщо всі проміси одного типу - ми перемогли. Тобто, якщо всі проміси в стані fullfilled, або всі проміси в стані rejected - ми перемогли. за допомогою методу every
    6. і розблоковуємо кнопку
*/

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStartGame);

function handleStartGame(event) {
  //* step 1
  event.target.disabled = true;
  result.textContent = ''; // очищуємо результат від попередньої гри

  //* step 2

  //   const pormises = [...container.children].map(
  //     () => new Promise((res, rej) => (Math.random() > 0.5 ? res('🤑') : rej('👿')))
  //   );
  const pormises = [...container.children].map(() =>
    Math.random() > 0.5 ? Promise.resolve('🤑') : Promise.reject('👿')
  );

  console.log(pormises);

  //* step 3
  Promise.allSettled(pormises).then(items => {
    console.log(items);
    //* step 4
    items.forEach((item, i) => {
      container.children[i].textContent = ''; // очищуємо всі слоти від попередніх результатів гри

      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;
      }, 1000 * (i + 1));
      /*
      1000 * (i + 1) - для послідовних відображень
      1. i = 0 -> 1000 * (0 + 1) -> 1000
      2. i = 1 -> 1000 * (1 + 1) -> 2000
      3. i = 2 -> 1000 * (2 + 1) -> 3000
        */
    });

    //* step 5
    const isWinner =
      items.every(({ status }) => status === 'fulfilled') ||
      items.every(({ status }) => status === 'rejected');

    //* step 6
    setTimeout(() => {
      event.target.disabled = false;
      result.textContent = isWinner ? 'Winner' : 'Loser';
    }, container.children.length * 1000);
    // container.children.length * 1000 -> 3 * 1000 -> 3000 -> затримка в секундах буде рівна кількості слотів, у нас 3 слоти - значить і затримка буде 3 секунди
  });
}
