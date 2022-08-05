// JavaScript Document

// var foundYou = document.getElementById('overview');
// console.log(foundYou);
// console.log(foundYou.innerText);
// foundYou.innerText = ">>I Changed You<<";

// var foundYou = document.getElementsByTagName('p');
// console.log(foundYou);
// console.log(foundYou[2].innerText);
// foundYou[1].innerText = "I changed you!"

// var foundYou = document.getElementsByName('description');
// console.log(foundYou[1].innerHTML);
// foundYou[1].innerHTML = "I changed you!!!"

// var foundYou = document.getElementsByClassName('smallCenter');
// console.log(foundYou);
// console.log(foundYou[0].innerText)
// foundYou[0].innerText = "I changed you!!!"

var foundYou = document.querySelectorAll('ul#fn_list li');
console.log(foundYou[0].innerText);
console.log("length of collection " + foundYou.length)
foundYou[0].innerText = "I changed you!!!";