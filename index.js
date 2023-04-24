// use if else statments to create a code

// ill be using a function to test the values in loops ill be printing the results one after the other accordingly

//check is truthy

function check(input) {
  if (input === "i am a string") {
    console.log(true);
  } else if (input === false) {
    console.log("the boolean value false is falsy");
  } else if (input === null) {
    console.log("the null value is falsy");
  } else if (input === undefined) {
    console.log("undefined is falsy");
  } else if (input === 0) {
    console.log("the number 0 is falsy (the only falsy number)");
  } else if (input === "") {
    console.log("the empty string is falsy( the only falsy string)");
  }
}

// Number line

function sum(num1, num2) {
  var sum = num1 + num2;
  if (sum > 100) {
    console.log(sum + " is greater than 100");
  } else if (sum > 0) {
    console.log(sum + "is larger than 0");
  } else if (sum === 0) {
    console.log(sum + "is equal to 0");
  } else if (sum >= -1000) {
    console.log(sum + "is a negative number");
  } else {
    console.log(sum + "is less than -1000");
  }
}

// greater than or equal to 5

function input(num1, num2) {
  if (num1 >= 5 && num2 >= 5) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// compair and pair

function pair(input1a, input1b, input2a, input2b) {
  if ((input1a === input1b) === true || (input2a === input2b) === true) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// test functions with inpus truthy

check("i am a string");
check(false);
check(null);
check(undefined);
check(0);
check("");
// test functions number line

sum(50, 51);
sum(99, -2);
sum(0, 101);
sum(500, -500);
sum(-1000, 0);
sum(-5, 0);

// test function greater than 5

input(5, 6);
input(10, 11);
input(0, 0);
input(1000, -1000);
input(6, 4);
input(5, 5);

// pair and compare
pair("cat", "cat", 6, "6");
pair("five", 5, "dog", "dawg");
pair(0, false, "horse", "horse");
pair("eight", "eight", "ate", "ate");
pair(11, "eleven", "four", "for");
pair("cake", "cake", "pie", "pie");
