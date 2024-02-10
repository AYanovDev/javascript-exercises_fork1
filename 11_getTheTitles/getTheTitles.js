const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (obj) {
  let result = [];
  for (let i = 0; i < obj.length; i++) {
    result.push(Object.values(obj[i]));
  }
  let flattened = result.flat();
  let regex = /Book/;
  let filtered = flattened.filter((item) => regex.test(item));
  return filtered;
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
