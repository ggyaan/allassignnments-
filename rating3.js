
//1. Find the element with rating >= 3 


let user=superMarket.find((element) => element.rating >= 3);
console.log(user);

//2. Find the element with type ‘vegetable’ 

let users=superMarket.find((element) => element.type == 'vegetable');
console.log(users);

//3. Find the element with price < 15 

let user2=superMarket.find((element) => element.price < 15);
console.log(user2);

//4. Find the element with title which contains the word ‘Lemon’

let withElement= superMarket.find((element) => element.title.includes('lemon'));
console.log(withElement);

//5. Find the element with height = 450 and width = 450 

let height=superMarket.find((element) => element.height==450);
console.log(height);

let width=superMarket.find((element) => element.width==450);
console.log(width);


