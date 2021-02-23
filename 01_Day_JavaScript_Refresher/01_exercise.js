// 1. Declare an _empty_ array;
let emptyArray = Array();
// 2. Declare an array with more than 5 number of elements
let fiveArray = Array(5).fill(1);
// 3. Find the length of your array
console.log(fiveArray.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(fiveArray[0])
console.log(fiveArray[Math.floor(fiveArray.length / 2)])
console.log(fiveArray[fiveArray.length - 1])
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    1,
    '1',
    true,
    null,
    {"a": 1},
    undefined,
    Symbol
]
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7. Print the array using _console.log()_
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])
// 10. Print out each company
itCompanies.map(item => {
    console.log(item);
})
// 11. Change each company name to uppercase one by one and print them out
itCompanies.map(item => {
    item = item.toUpperCase();
    console.log(item);
})
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let printString = 'Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.';
console.log(printString);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
itCompanies.indexOf('Google') == -1 ? itCompanies[itCompanies.indexOf('Google')] : 'not found'
// 14. Filter out companies which have more than one 'o' without the filter method
Array.prototype.fakeFilter = function fakeFilter(fn, content) {
    if(typeof fn != 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    let arr = this
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let result = fn.call(content, arr[i], i, arr)
        temp.push(result)
    }
    return temp
}
Array.fakeFilter(item => { item.indexOf('o') != -1 })
// 15. Sort the array using _sort()_ method
itCompanies.sort();
// 16. Reverse the array using _reverse()_ method
itCompanies.reverse();
// 17. Slice out the first 3 companies from the array
itCompanies.slice(0, 3);
// 18. Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length - 3)
// 19. Slice out the middle IT company or companies from the array
itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)
// 20. Remove the first IT company from the array
itCompanies.shift()
// 21. Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2))
// 22. Remove the last IT company from the array
itCompanies.splice(itCompanies.length - 1, 1)
// 23. Remove all IT companies
itCompanies.splice()

// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

// 1. First remove all the punctuations and change the string to array and count the number of words in the array

//    ```js
//    let text =
//      'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//    console.log(words)
//    console.log(words.length)
//    ```

//    ```sh
//    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//    13
//    ```

// 1. In the following shopping cart add, remove, edit items

//    ```js
//    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//    ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
//    - add Sugar at the end of you shopping cart if it has not been already added
//    - remove 'Honey' if you are allergic to honey
//    - modify Tea to 'Green Tea'

// 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// 1. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// 1. Concatenate the following two variables and store it in a fullStack variable.

//    ```js
//    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//    const backEnd = ['Node', 'Express', 'MongoDB']

//    console.log(fullStack)
//    ```

//    ```sh
//    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//    ```

// const person = {
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: ['HTML', 'CSS', 'JS'],
//   title: 'teacher',
//   address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki',
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//   },
// };
// let keys = Object.keys(person);
// console.log(keys);
// const address = Object.keys(person.address);
// console.log(address);
// const values = Object.values(person);
// console.log(values)
// const entries = Object.entries(person);
// console.log(entries);
// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('title'))

// Exercises

// // Create an empty object called dog
// let dog = {};
// // Print the the dog object on the console
// console.log(dog);
// // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// dog.name = 'haha'
// dog.legs = 'long'
// dog.color = 'white'
// dog.age = 10;
// dog.bark = function () {
//   return 'woof woof'
// }
// // Get name, legs, color, age and bark value from the dog object
// console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark())
// // Set new properties the dog object: breed, getDogInfo
// dog.breed = function() {
//   return 'get a new dog'
// }
// dog.getDogInfo = function() {
//   return Object.entries(this)
// }
// console.log(dog.getDogInfo())

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
// Find the person who has many skills in the users object.
// let manySkillsUser = [];
// let usersNameList = Object.keys(users);
// console.log(usersNameList)
// usersNameList.map(name => {
//   let user = users[name];
//   if(user.skills && user.skills.length > 1) manySkillsUser.push(user)
// })
// console.log(manySkillsUser);
// Count logged in users,count users having greater than equal to 50 points from the following object.
// let usersTemp = [];
// usersNameList.map(name => {
//   let user = users[name];
//   if(user.isLoggedIn && user.points >= 50) usersTemp.push(user)
// })
// console.log(usersTemp);
// Find people who are MERN stack developer from the users object
// let entries = Object.entries(users);
// let userTemp = []
// entries.map(userEntries => {
//   let skills = userEntries[1].skills
//   if(skills.includes('MongoDB ') || skills.includes('Express') || skills.includes('MongoDB') || skills.includes('Angular')) userTemp.push(users[userEntries[0]])
// })
// console.log(userTemp);
// Set your name in the users object without modifying the original users object
// let copyUsers = Object.assign({}, users);
// copyUsers['wds'] = {
//   email: 'wds@wds.com',
//   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//   age: 20,
//   isLoggedIn: true,
//   points: 70
// }
// // Get all keys or properties of users object
// console.log(Object.keys(users));
// // Get all the values of users object
// console.log(Object.values(users));
// // Use the countries object to print a country name, capital, populations and languages.

const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
  
  // Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
  // b. Create a function called signIn which allows user to sign in to the application
  let signUp = function (obj) {
    if(typeof obj != 'object') throw new TypeError(`${obj} is not a object`)
    let flag = false
    users.map(user => {
      if(user.name == obj.name) flag = true
    })
    if(!flag) users.push(obj)
  }
  
  // The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
  let rateProduct = function(user, product, rate){
    products.map(_product => {
      if(_product._id === product.id) {
        let isNew = true
        _product.likes.map(rating => {
          if(rating.userId == user._id){ 
            rating.rate = rate 
            isNew = false
          }
        })
      } 
    })
  }
  // Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
  let likeProduct = function(user, product) {
    products.map(_product => {
      if(_product._id === product.id) {
        _product.likes.indexOf(user._id) != -1 ? _product.likes.splice(_product.likes.indexOf(user._id)) : _product.likes.push(user._id)
      } 
    })
  }
  // const rectangle = { width: 20, height: 10 }
  // const calcualteArea = ({ width, height }) => width * height
  // let width = 20, height = 10;
  // const calculatePerimeter = (
  //   { width, height } = 2 * (width + height)
  // )
  // console.log(calculatePerimeter, '<----', typeof calculatePerimeter);
  class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  person1.setScore = 1
  person1.setSkill = 'HTML'
  person1.setSkill = 'CSS'
  person1.setSkill = 'JavaScript'
  
  person2.setScore = 1
  person2.setScore = 90
  person2.setSkill = 'Planning'
  person2.setSkill = 'Managing'
  person2.setSkill = 'Organizing'
  
  console.log(person1.score)
  console.log(person2.score)
  
  console.log(person1.skills)
  console.log(person2.skills)