console.log('----------------second bit filter ------------------------');

//1. Filter the elements with rating < 2 

let filter2=superMarket.filter((element) => element.rating<2);
console.log(filter2);

//2. Filter the elements with type ‘dairy’

let dairy=superMarket.filter((element) => element.type=='dairy');
console.log(dairy);

// 3. Filter the elements with price >20 

let price=superMarket.filter((element) => element.price>20);
console.log(price);

//4. Filter the elements with title which contains the word ‘with’ 

let withelement= superMarket.filter((element) => element.title.includes('with'));
console.log(withelement);



// 5. Filter the elements with description which contains the word ‘with'

let description= superMarket.filter((element) => element.description.includes('with'));
console.log(description);



// 6. Filter the elements with height = 600 and width = 400 map() 

let heightFilter=superMarket.filter((element) => element.height==600);
console.log(heightFilter);

let widthFilter=superMarket.filter((element) => element.width==450);
console.log(widthFilter);

//7.  

    

