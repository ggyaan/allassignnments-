 console.log('----mix of arrays ------');

//1. Filter the elements of type: ‘dairy’ and calculate averageRating

filterration = superMarket
.filter((getByVegAndDairy) => {return getByVegAndDairy.type == "dairy"})
.reduce((summation, currentValue) => {return summation + currentValue.rating}, 0)
/superMarket.length;
console.log(filterration);

//-2. Filter the elements of type: ‘vegetable’ and calculate averagePrice 
averagePrice = superMarket
.filter(getByType => {return getByType.type == "vegetable";})
.reduce((summation, currentValue) => {return summation + currentValue.price},0) /
superMarket.length;
console.log(averagePrice)


// -3. Filter the elements of type: ‘fruit’ and add new property ‘isAvailable: true’ 
newPropertyByFruit = superMarket
 .filter(getByType => {return getByType.type == "fruit"})
 .map(addNewProperty => {return addNewProperty.isAvaliable = true})
 
checker = superMarket
 .filter(getByType => {return getByType.type == "fruit"})
 console.log(checker)


 //-4. Filter the elements of type: ‘dairy’ and ‘vegetable’ and add new property ‘isAvailable: true’ to the filtered elements under type: ‘dairy’ and add new property ‘isAvailable: false’ to the  filtered elements under type: ‘vegetable’


filterration = superMarket.filter(getByType =>{return getByType.type == "dairy" || getByType.type == "vegetable" })
.map((addNewProperty) => {
 if(addNewProperty.type == "dairy"){
 return addNewProperty.isAvaliable = true;
 }else if(addNewProperty.type == "vegetable"){
 return addNewProperty.isAvaliable = false;
 }})
console.log(filterration);
console.log(superMarket);

