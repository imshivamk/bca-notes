---
dg-publish: true
---
###  01 Random number generator

1. '+ min' -  adds the minimum value to the generated num as by default the count starts from 0, it adjusts that
2. the value generated is between 0 and 1 so by multiplying it to max, we can get max when the value is 1 and min when the generated value is 0

```js
let min = 1, max = 6;
let rand = (Math.random()*max) + min
let randomNo = Math.floor(Math.random() *max ) + min;
```

