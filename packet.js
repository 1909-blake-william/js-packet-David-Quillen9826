
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n) {
    fibo = new Array();
    if (n < 0) {
        System.out.println("Positive Numbers Only Dumbo");
        return null;
    } else if (n == 0) {
        return fibo[n-1];
    } else if (n == 1) {
        fibo.push(0);
        return fibo[n-1];
    } else if (n == 2) {
        fibo.push(0);
        fibo.push(1);
        return fibo[n-1];
    } else {
        fibo.push(0);
        fibo.push(1);
        for (i = 2; i < n; i++) {
            j = fibo[i - 2] + fibo[i - 1];
            fibo.push(j);
        }
        return fibo[n-1];
    }
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray){
    for (i = 0; i < numArray.length; i++) {
        swap = false;
        for (j = 0; j < numArray.length - 1 - i; j++) {
            one = numArray[j];
            two = numArray[j + 1];
            if (one > two) {
                numArray[j] = two;
                numArray[j + 1] = one;
                swap = true;
            }
        }
        if(!swap) {
            return numArray;
        }
    }
    return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr){
    letters = Array.from(someStr);
    result = '';
    for (i = letters.length-1; i>= 0; i--) {
        result = '' + result + letters[i];
    }
    return result;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum){
    result = 1;
    for(i = 1; i <= someNum; i++){
        result = 1 * result * i;
    }
    return result;
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset){
    
}