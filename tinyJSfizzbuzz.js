/* 	

	tinyJSfizzbuzz

	* preincrement i to shorten the for loop
	* An empty string ('') is considered false.
	* Evaluate and assign the following: 
		a) if i mod 3 is true (not zero) then '', else 'fizz'
		b) if i mod 5 is true (not zero) then '', else 'buzz'
	* log the result of a + b or, if false ('' + '') then log i.

*/

for(var i=0;++i<101;)console.log((i%3?'':'fizz')+(i%5?'':'buzz')||i)