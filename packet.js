
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
    let fibo = new Array();
    if (n < 0) {
        System.out.println("Positive Numbers Only Dumbo");
        return null;
    } else if (n == 0) {
        return fibo[n - 1];
    } else if (n == 1) {
        fibo.push(0);
        return fibo[n - 1];
    } else if (n == 2) {
        fibo.push(0);
        fibo.push(1);
        return fibo[n - 1];
    } else {
        fibo.push(0);
        fibo.push(1);
        for (i = 2; i < n; i++) {
            j = fibo[i - 2] + fibo[i - 1];
            fibo.push(j);
        }
        return fibo[n - 1];
    }
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray) {
    for (i = 0; i < numArray.length; i++) {
        let swap = false;
        for (j = 0; j < numArray.length - 1 - i; j++) {
            let one = numArray[j];
            let two = numArray[j + 1];
            if (one > two) {
                numArray[j] = two;
                numArray[j + 1] = one;
                swap = true;
            }
        }
        if (!swap) {
            return numArray;
        }
    }
    return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let letters = Array.from(someStr);
    let result = '';
    for (i = letters.length - 1; i >= 0; i--) {
        result = '' + result + letters[i];
    }
    return result;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum) {
    let result = 1;
    for (i = 1; i <= someNum; i++) {
        result = 1 * result * i;
    }
    return result;
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function invalidInput(someStr) {
    console.log(someStr);
}
function substring(someStr, length, offset) {
    if (length + offset > someStr.length) {
        return invalidInput("Invalid input: your offset and length combined are too big");
    } else if (offset < 0) {
        return invalidInput("Invalid input: your offset is negative");
    } else if (offset > someStr.length) {
        return invalidInput("Invalid input: your offset is too high");
    } else if (length < 0) {
        return invalidInput("Invalid input: your length is negative");
    } else if (length > someStr.length) {
        return invalidInput("Invalid input: your length is too long");
    } else {
        return someStr.substring(offset, offset + length + 1);
    }

}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum) {
    let evens = ['0', '2', '4', '6', '8'];
    let digits = Array.from(someNum.toString());
    let even = false;
    for (i = 0; i < evens.length; i++) {
        if (evens[i] === digits[digits.length - 1]) {
            even = true;
        }
    }
    return even;
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr) {
    let letters = Array.from(someStr);
    let result = '';
    let reversable = false;
    for (i = letters.length - 1; i >= 0; i--) {
        result = '' + result + letters[i];
    }
    if (someStr === result) {
        reversable = true;
    }
    return reversable;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character) {
    let result = '';
    switch (shape) {
        case "Square":
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < height; j++) {
                    result = result + character;
                }
                result = result + '\n'
            }
            console.log(result);
            break;
        case "Triangle":
            for (let i = 0; i < height; i++) {
                for (let j = 0; j <= i; j++) {
                    result = result + character;
                }
                result = result + '\n'
            }
            console.log(result);
            break;
        case "Diamond":
            for (let i = 0; i < height; i++) {
                for (let k = 0; k <= i; j++) {
                    result = result + character;
                }
                result = result + '\n'
            }
            console.log(result);
            break;
    }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(someObj) {
    let txt = '';
    for (x in someObj) {
        txt += x + '  :  ' + someObj[x] + '\n';
      }
    console.log(txt);
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);

function Person(name, age) {
    this.personName = name;
    this.personAge = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

function getPerson(name, age) {
    let person = { personName: name, personAge: age }
    return person;
}
