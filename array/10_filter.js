/*
  filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素
*/

var words = ['hello', 'world', 'photochips', 'sam']

const result = words.filter(function(word) {
  return word.length > 3
})

console.log(result)          // ["hello", "world", "photochips"]

var test = ['apple', 'pear', 'banaba', 'grape']

// function filterItems (query) {
//   return test.filter((el) => {
//     el.toLowerCase().indexOf(query.toLowerCase()) > -1
//   })
// }

const filterItems = (query) => {
  return test.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('P'))      // ["apple", "pear", "grape"]
console.log(filterItems('ap'))     // ["apple", "grape"]