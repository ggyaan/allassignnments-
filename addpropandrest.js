

//1. Calculate the averageRatings of all the element 

let averageRating= superMarket
.filter(getByType => {return getByType.rating;})
.reduce((summation, currentValue) => {return summation + currentValue.rating},0) /
superMarket.length;
console.log(`average rating: ${averageRating}`);

//2. Calculate the averageHeight of all the element

let averageHeight= superMarket
.filter(getByType => {return getByType.height;})
.reduce((summation, currentValue) => {return summation + currentValue.height},0) /
superMarket.length;
console.log(`average rating: ${averageHeight}`);

//3. Calculate the averageWidth of all the element


let averageWidth= superMarket
.filter(getByType => {return getByType.width;})
.reduce((summation, currentValue) => {return summation + currentValue.width},0) /
superMarket.length;
console.log(`average rating: ${averageWidth}`);

//4. Calculate the averagePrice of all the element

let averagePrice= superMarket
.filter(getByType => {return getByType.width;})
.reduce((summation, currentValue) => {return summation + currentValue.width},0) /
superMarket.length;
console.log(`average rating: ${averagePrice}`);

