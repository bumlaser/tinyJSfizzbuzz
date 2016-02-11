# tinyJSfizzbuzz
Trying to find the most obnoxiously tiny and unreadable fizz-buzz solution possible.

>Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

```js
for(var i=0;++i<101;)console.log((i%3?'':'fizz')+(i%5?'':'buzz')||i)
```

* Pre-increment i to shorten the for loop to truly unpleasant levels.
* An empty string ('') is considered false.
* a) if i mod 3 is true (not zero) then '', else 'fizz', added to:
* b) if i mod 5 is true (not zero) then '', else 'buzz'
* log the result of a + b or, if false ('' + '') then just log i.