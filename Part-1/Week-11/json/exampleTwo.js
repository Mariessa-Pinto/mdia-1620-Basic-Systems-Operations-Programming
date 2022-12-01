var jsonContainer = '{"firstName": "John", "age": 25, "country": "Canada"}';

console.log(jsonContainer);
var objectValues = JSON.parse(jsonContainer);

console.log(objectValues.firstName);