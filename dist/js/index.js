'use strict';

// const changeColor = () => {document.getElementById('myBtn').addEventListener('click', () => document.body.classList.add('backgnd'))};
//
// changeColor();

var Person = function Person(name) {
  this.name = name;
  this.channel = function (channel) {
    return 'Hola soy ' + name + '!, y esto es' + channel;
  };
};

var Ian = new Person('Ian');
console.log(Ian.channel('Aprendiendo frontend'));s;