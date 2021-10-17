Question 1: Line 12 prints out the length of prices since var variable, i is initialised and able to be accessed throughout the function and incremented prices.length time.

Question 2: Line 13 prints the discounted price of the last item in the prices array since discountedPrice is a var variable with function scope. The last time dicountedPrice is assigned is on the last iteration of the for loop.

Question 3: Line 13 prints the value of finalPrice on the last iteration of the for loop, equivalently it would also be the last element in discounted. This happens since finalPrice has function scope.

Question 4: The discounted returns an array of the discounted prices since the var discounted is declared as an array literal and the for loop pushes finalPrices to the array. 

Question 5: Line 12 would cause an error since i is a 'let' variable and ony has block scope for the for loop. A reference error would occur when trying to use i in console.log(i) since it's not defined in that scope.

Question 6: Line 13 also causes an error due to the discounted price only having a block scope for the for loop. It is not defined in the scope of the console.log() call.

Question 7: Since final price is declared outside of the for-loop, line 14 prints the finalPrice on the final iteration of the for loop since it's able to be reassigned in the for-loop and retain the value since it was declared outside of the for-loop.

Question 8: The function returns an array of the discounted prices since the discounted 'let' variable is declared outside of the for-loop.

Question 9: Line 11 would cause an error since the variable 'i' is not defined in the scope. It is only defined in the for-loop.

Question 10: Line 12 prints the length of the prices array since it's decalred outside of the for-loop;

Question 11: The function returns an array of the discounted prices, even though discount is a const, it isn't being reassigned and it's declared outside of the for-loop so no errors would occur and the values are able to be pushed in.

Question 12: 
A - student.name;
B - student['Grad Year'];
C - student.greeting();
D - student['Favorite Teacher'].name;
E - student.courseLoad[0];

Question 13: 
A - 32 since integer is mapped to string literal.
B - 1 since '-' is arithmetic operation 3 is mapped to an integer.
C - 3 since null is mapped to 0 with arthimetic addition operator.
D - 3null since 3 is a string and + is a string operator, null is mapped to a string. 
E - 4 since true is mapped to 1.
F - 3 since false is mapped to 0.
G - 3undefined since undefined is mapped to the string literal since '3' is a string and + is a string operator.
H - NaN which represents not a number since you can't use the arithmetic minus operator on undefined and a string. 

Question 14: 
A - true since '2' becomes 2
B - true dictionary comparison
C - true since '2' becomes 2.
D - false since strict equality doesn't type convert
E - false since true is mapped to 1
F - true since Boolean(2) converts to true

Question 15: '==' represents equality and converts the variables to the same type first. '===' represents strict equality with no type conversion.

Question 17: The result would be returning an array, [2, 4, 6]. The modifyArray function takes in two arguments, array and callback. It creates a new array and for each element in the array argument it uses the callback function on it and pushes the resulting value into the array and returns it. In this case, the dosomething function doubles the number so each element of 'array' argument was doubled and returned.

Question 19: <br />
1 <br />
4 <br />
3 <br />
2 <br />



