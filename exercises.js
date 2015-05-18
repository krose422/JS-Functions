// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

var answer = document.querySelector("#answer");
var submitBtn = document.querySelector("#submitBtn");
var numOne = document.querySelector("#numOne");
var numTwo = document.querySelector("#numTwo");

function max(x, y){
    var number1 = Number(numOne.value);
    var number2 = Number(numTwo.value);
    if (number1 > number2) {
        answer.innerHTML = number1
        return number1
    }
    else if (number2 > number1) {
        answer.innerHTML = number2
        return number2
    }
    else {
        answer.innerHTML = "Try two different numbers."
        return "Try two different numbers."
    }
}

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
        answer2.innerHTML = "Oops! Enter three different numbers.";
        return "Oops! Enter three different numbers.";
    }
}

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

submitBtn3.addEventListener("click", isVowel);


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var answer4 = document.querySelector("#answer4");
var submitBtn4 = document.querySelector("#submitBtn4");
var rov = document.querySelector("#rov");

var newPhrase = [];

function rovarspraket(phrase){
    var phraseInput = rov.value;
    var charArray = phraseInput.split('');
    // console.log(charArray);

    charArray.forEach(function(letter) {
        if ("aeiou ".indexOf(letter) < 0) {
            newPhrase.push(letter + "o" + letter);
        }
        else if ("aeiou ".indexOf(letter) >= 0) {
            newPhrase.push(letter);
        }
    });

answer4.innerHTML = newPhrase.join('');
return newPhrase.join('');

};


submitBtn4.addEventListener("click", rovarspraket);


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

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
    var answer = numberArray.reduce(function(a,b) {
        return a + b;
    });
    answer5a.innerHTML = answer;
    return answer;
};

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
    var answerb = numberArray2.reduce(function(a,b) {
        return a * b;
    });
    answer5b.innerHTML = answerb;
    return answerb;
};

multiplyBtn.addEventListener("click", multiply);

// working function below....

// function multiply(numberArray2){
//     var answer = numberArray2.reduce(function(a,b) {
//         return a * b;
//     });
//     return answer;
// };

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

var answer6 = document.querySelector("#answer6");
var submitBtn7 = document.querySelector("#submitBtn6");
var word1 = document.querySelector("#word");

function reverse(string){
    var answer = word.value.split('').reverse().join('');
    answer6.innerHTML = answer;
    return answer;
};

submitBtn6.addEventListener("click", reverse);

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
   var longest = words.sort(function(a, b) {
        return b.length - a.length;
    })[0];
   return longest;
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    wordsArray = [];
    words.forEach(function(word) {
        if (word.length > i) {
            wordsArray.push(word);;
        };
    });
    return wordsArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var frequency = new Object();
    for (var i=0; i < string.length; i++) {
        var character = string.charAt(i);
    if(frequency[character]) {
        frequency[character]++;
    }
    else {
        frequency[character] = 1;
    }
  }
  return frequency;
};

