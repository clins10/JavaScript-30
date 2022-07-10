const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
// console.log('%c I am a styled string!', 'font-size: 50px; background: orange;');

// warning!
// console.warn('OH NOOO');

// Error :|
// console.error('damn!');

//info
// console.info('%c I am an info string!', 'font-size: 50px; background: #BADA55;');

// Testing
const p = document.querySelector('p');
//console.assert only fears when the condition is false
// console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing the console
console.clear();

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

// console.clear()

// Grouping together
dogs.forEach(dog => {
//   console.group(`${dog.name}`);
//   console.log(`This is ${dog.name}`);
//   console.log(`${dog.name} is ${dog.age} years old`);
//   console.groupEnd(`${dog.name}`);
});

// counting
// console.count('Wes');
// console.count('Wes');
// console.count('Steve');
// console.count('Steve');
// console.count('Wes');
// console.count('Steve');
// console.count('Wes');
// console.count('Steve');
// console.count('Steve');
// console.count('Steve');
// console.count('Steve');
// console.count('Steve');

// timing
// console.time('fetching data');
fetch('https://api.github.com/users/clins10')
    .then(data => data.json())
    .then(data => {
    //   console.timeEnd('fetching data');
    //   console.log(data);
    });

//table
// console.table(dogs);