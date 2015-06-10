// Clear fields on input click

function clear (inputID, answerID) {
    inputID.addEventListener('focus', function () {
        inputID.value = '';
        if (answerID.innerHTML !== '') {
            answerID.innerHTML = '';
        }
    });
}


// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

var answer = document.querySelector("#answer");
var submitBtn = document.querySelector("#submitBtn");
var numOne = document.querySelector("#numOne");
var numTwo = document.querySelector("#numTwo");

function max(x, y){
    x = Number(numOne.value);
    y = Number(numTwo.value);
    if (x > y) {
        answer.innerHTML = x
        return x
    }
    else if (y > x) {
        answer.innerHTML = y
        return y
    }
    else {
        answer.innerHTML = "Try two different numbers."
    }

}

clear(numOne, answer);
clear(numTwo, answer);
submitBtn.addEventListener("click", max);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var answer2 = document.querySelector("#answer2");
var submitBtn2 = document.querySelector("#submitBtn2");
var numberOne = document.querySelector("#numberOne");
var numberTwo = document.querySelector("#numberTwo");
var numberThree = document.querySelector("#numberThree");

function maxOfThree(a, b, c){
    var num1 = Number(numberOne.value);
    var num2 = Number(numberTwo.value);
    var num3 = Number(numberThree.value);

    if (num1 > num2 && num1 > num3) {
        answer2.innerHTML = num1;
        return num1;
    }

    else if (num2 > num1 && num2 > num3) {
        answer2.innerHTML = num2;
        return num2;
    }

    else if (num3 > num1 && num3 > num2) {
        answer2.innerHTML = num3;
        return num3;
    }

    else {
        answer2.innerHTML = "Oops! Enter three <em>different</em> numbers.";
    }
}

clear(numberOne, answer2);
clear(numberTwo, answer2);
clear(numberThree, answer2);
submitBtn2.addEventListener("click", maxOfThree);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var answer3 = document.querySelector("#answer3");
var submitBtn3 = document.querySelector("#submitBtn3");
var letter = document.querySelector("#letter");

function isVowel(char){
    var character = letter.value;
    var answer = "aeiou".indexOf(character) >= 0
    if (answer === true) {
        answer3.innerHTML = "Yep! It's a vowel."
    }
    else {
        answer3.innerHTML = "Nope. Not a vowel."
    }
}

clear(letter, answer3);
submitBtn3.addEventListener("click", isVowel);


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

// Not clearing when I use this in my online form. Working code below.

var answer4 = document.querySelector("#answer4");
var submitBtn4 = document.querySelector("#submitBtn4");
var rov = document.querySelector("#rov");

var newPhrase = [];

function rovarspraket(phrase){
    var phraseInput = rov.value;
    var charArray = phraseInput.split('');

    charArray.forEach(function(letter) {
        if ("aeiou ".indexOf(letter) < 0) {
            newPhrase.push(letter + "o" + letter);
        }
        else if ("aeiou ".indexOf(letter) >= 0) {
            newPhrase.push(letter);
        }
    });
    answer4.innerHTML = newPhrase.join('');
};

clear(rov, answer4);
submitBtn4.addEventListener("click", rovarspraket);

// ---------------------------------------------------
// Below is working code, not including DOM

// var newPhrase = [];

// function rovarspraket(phrase){
//     var charArray = phrase.split('');
//     console.log(charArray);

//     charArray.forEach(function(letter) {
//         if ("aeiou ".indexOf(letter) < 0) {
//             newPhrase.push(letter + "o" + letter);
//         }
//         else if ("aeiou ".indexOf(letter) >= 0) {
//             newPhrase.push(letter);
//         }
//     })

// return newPhrase.join('');

// }
// ------------------------------------------------------


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


// -----------------------------------------------
// NOTE FROM KELLEY: add is working with DOM, multiply not so much. Working code below my attempt to make it work with my HTML.


var answer5a = document.querySelector("#answer5a");
var addBtn = document.querySelector("#addBtn");
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var num3 = document.querySelector("#num3");
var num4 = document.querySelector("#num4");
var num5 = document.querySelector("#num5");
var num6 = document.querySelector("#num6");


function sum(numArray){
    var numberArray = [Number(num1.value), Number(num2.value), Number(num3.value), Number(num4.value), Number(num5.value), Number(num6.value)];
    var answer = numberArray.reduce(function(a, b) {
        return a + b;
    });

    answer5a.innerHTML = answer;
};

clear(num1, answer5a);
clear(num2, answer5a);
clear(num3, answer5a);
clear(num4, answer5a);
clear(num5, answer5a);
clear(num6, answer5a);
addBtn.addEventListener("click", sum);

var answer5b = document.querySelector("#answer5b");
var multiplyBtn = document.querySelector("#multiplyBtn");
var num1b = document.querySelector("#num1b");
var num2b = document.querySelector("#num2b");
var num3b = document.querySelector("#num3b");
var num4b = document.querySelector("#num4b");
var num5b = document.querySelector("#num5b");
var num6b = document.querySelector("#num6b");

function multiply(numArray2){

    var numberArray2 = [Number(num1b.value), Number(num2b.value), Number(num3b.value), Number(num4b.value), Number(num5b.value), Number(num6b.value)];
    var answerb = numberArray2.reduce(function(a, b) {
        return a * b;
    });
    answer5b.innerHTML = answerb;
};

clear(num1b, answer5b);
clear(num2b, answer5b);
clear(num3b, answer5b);
clear(num4b, answer5b);
clear(num5b, answer5b);
clear(num6b, answer5b);
multiplyBtn.addEventListener("click", multiply);


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

var answer6 = document.querySelector("#answer6");
var submitBtn7 = document.querySelector("#submitBtn6");
var word1 = document.querySelector("#word");

function reverse(string){
    var answer = word.value.split('').reverse().join('');
    answer6.innerHTML = answer;
};

clear(word1, answer6);
submitBtn6.addEventListener("click", reverse);

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

var answer7 = document.querySelector("#answer7");
var submitBtn7 = document.querySelector("#submitBtn7");
var word1 = document.querySelector("#word1");
var word2 = document.querySelector("#word2");
var word3 = document.querySelector("#word3");
var word4 = document.querySelector("#word4");
var word5 = document.querySelector("#word5");
var word6 = document.querySelector("#word6");


function findLongestWord(words){
    var wordArray = [word1.value, word2.value, word3.value, word4.value, word5.value, word6.value];
    var longest = wordArray.sort(function(a, b) {
        return b.length - a.length;
    })[0];
    answer7.innerHTML = longest;
};

clear(word1, answer7);
clear(word2, answer7);
clear(word3, answer7);
clear(word4, answer7);
clear(word5, answer7);
clear(word6, answer7);
submitBtn7.addEventListener("click", findLongestWord);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var answer8 = document.querySelector("#answer8");
var submitBtn8 = document.querySelector("#submitBtn8");
var compareWord = document.querySelector("#compareWord");
var otherWord1 = document.querySelector("#otherWord1");
var otherWord2 = document.querySelector("#otherWord2");
var otherWord3 = document.querySelector("#otherWord3");
var otherWord4 = document.querySelector("#otherWord4");
var otherWord5 = document.querySelector("#otherWord5");

function filterLongWords(words, i){
    wordsArray = [];
        [otherWord1.value, otherWord2.value, otherWord3.value, otherWord4.value, otherWord5.value].forEach(function(word) {
        if (word.length > compareWord.value.length) {
            wordsArray.push(word);
        };
    });
    answer8.innerHTML = wordsArray;
}

clear(compareWord, answer8);
clear(otherWord1, answer8);
clear(otherWord2, answer8);
clear(otherWord3, answer8);
clear(otherWord4, answer8);
clear(otherWord5, answer8);
submitBtn8.addEventListener("click", filterLongWords);


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------


var answer9 = document.querySelector("#answer9");
var submitBtn9 = document.querySelector("#submitBtn9");
var lastWord = document.querySelector("#lastWord");

function charFreq(string){
    var frequency = new Object();
    var string = lastWord.value;
    for (var i=0; i < string.length; i++) {
        var character = string.charAt(i);
    if(frequency[character]) {
        frequency[character]++;
    }
    else {
        frequency[character] = 1;
    }
  }
  answer9.innerHTML = JSON.stringify(frequency, null, 4);
};

clear(lastWord, answer9);
submitBtn9.addEventListener("click", charFreq);


