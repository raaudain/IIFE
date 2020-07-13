// What is an IIFE and why are they used?

// Immediately Invoked Function Expression: A Function that is executed right after it is created

// Used to preserve a private scoop

// Example
(function doubleNumber(num){
  return num * 2;
})(10);