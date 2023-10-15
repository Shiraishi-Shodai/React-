// 問題1: 次の配列を、スプレット構文を使って反転した配列を作成してください。
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('numbers : ', numbers);

// 解答:

// 解答➀(スプレット構文なし)
// for (let i = 0; i< numbers.length/2; i++) {
//     temp = numbers[i];
//     numbers[i] = numbers[numbers.length - 1 - i];
//     numbers[numbers.length - 1 - i] = temp;
// }

// console.log('問1(スプレット構文なし: ', numbers);

// 解答➀(スプレット構文あり)
// const number2 = [...numbers];
// for(let i = 0; i < numbers.length; i++) {
//     numbers[i] = number2[number2.length - 1 - i];
// }

// console.log('問1(スプレット構文あり: ', numbers);

// 解答➀(スプレット構文あり)
// reverse()は元の配列やオブジェクトを破壊し、そのアドレスを返すが、スプレット構文を使うことで、元の配列が壊れるのを防いでいる
const reversedNumbers = [...numbers].reverse();
console.log('問1(スプレット構文あり(Google Bardの解答): ', reversedNumbers);


// 問題2: 次のオブジェクトを、スプレット構文を使って2つのオブジェクトに分割してください。
const person = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  };

// 解答➁
const {address, ...other} = person;
console.log('person: ', person);
console.log('アドレス: ', address);
console.log('その他: ', other);

// 解答➁(Google Bard)
const name2 = { name: person.name };
const address2 = { ...person.address };
console.log('Google Bard');
console.log('name : ', name2);
console.log('address : ', address2);

// 問題➂: 配列をマージする
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
console.log('numbers1 : ', numbers1);
console.log('numbers2 : ', numbers2);

// 解答➂
const numbers3 = [...numbers1, ...numbers2];
console.log('自分, Google Bard');
console.log('numbers3 : ', numbers3);

// 問題➃: オブジェクトをマージする
const person1 = {
    name: "John Doe",
    age: 30,
  };
  const person2 = {
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  };

console.log('person1 : ', person1);
console.log('person2 : ', person2);

// 解答➃
const person3 = {...person1, ...person2};
console.log('自分, Google Bard');
console.log('person3 : ', person3);

// 問題➄: 次のオブジェクトから、ageプロパティを削除してください。
const person4 = {
    name: "John Doe",
    age: 30,
  };

console.log('問題➄');
console.log('person4 : ', person4);

// 解答➄
console.log('自分');
// delete person4.age;
// console.log('person4 : ', person4);

console.log('Google Bard');
const personWithoutAge = { ...person, age: undefined };
console.log('personWithoutAge : ', personWithoutAge);

// 問題➅: 次の配列に、7を追加してください。
const number4 = [1, 2, 3, 4, 5];
console.log('問➅');
console.log('number4 : ', number4);
console.log('自分、Google Bard');
const numbers4PlusSeven = [...number4, 7];
console.log('numbers4PlusSeven : ', numbers4PlusSeven);
  