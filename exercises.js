// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

var answer = document.querySelector("#answer");
var submitBtn = document.querySelector("#submitBtn");
var numOne = document.querySelector("#numOne");
var numTwo = document.querySelector("#numTwo");

function max(number1, number2){
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


function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    }

    else if (num2 > num1 && num2 > num3) {
        return num2;
    }

    else if (num3 > num1 && num3 > num2) {
        return num3;
    }

    else {
        "Oops! Enter three different numbers.";
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function isVowel(char){
    return "aeiou".indexOf(char) >= 0
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var newPhrase = [];

function rovarspraket(phrase){
    var charArray = phrase.split('');
    console.log(charArray);

    charArray.forEach(function(letter) {
        if ("aeiou ".indexOf(letter) < 0) {
            newPhrase.push(letter + "o" + letter);
        }
        else if ("aeiou ".indexOf(letter) >= 0) {
            newPhrase.push(letter);
        }
    })

return newPhrase.join('');

}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numberArray){
    var answer = numberArray.reduce(function(a,b) {
        return a + b;
    });
    return answer;
};


function multiply(numberArray2){
    var answer = numberArray2.reduce(function(a,b) {
        return a * b;
    });
    return answer;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(stringArray){
    var answer = stringArray.split('').reverse().join('');
    return answer;
};

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

