/*
1-Write a function called getPeopleBornIn that takes an array and string month,
and returns a new array of people and their birthday information who were all born in the given month.

A sample input array would look like:

var staff = [
  {name: {first: "Alyssa", last: "Hacker"}, birthDay: {month: "June", day: 5, year: 1987}},
  {name: {first: "Ben", last: "Bitdiddle"}, birthDay: {month: "August", day: 19, year: 1984}},
  {name: {first: "Eva", last: "Ator"}, birthDay: {month: "March", day: 29, year: 1980}},
  {name: {first: "Lem", last: "Tweakit"}, birthDay: {month: "August", day: 11, year: 1989}},
  {name: {first: "Louis", last: "Reasoner"}, birthDay: {month: "November", day: 17, year: 1992}}
];
A call to your function getPeopleBornIn(staff, 'August');

Would return:

["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]

*/
function getPeopleBornIn(array , string){
	var str = '';
	var newarray = [];
	for(var i = 0 ; i < array.length ; i++){
		if(array[i]['birthDay']['month'] === string){
            newarray.push(array[i]['name']['first']+' '+array[i]['name']['last'] + ' : '+ array[i]['birthDay']['month']+' '+array[i]['birthDay']['day']+', ' +array[i]['birthDay']['year']);
		}
	} 
  return newarray;
}

