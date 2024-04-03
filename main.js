"use strict";
// 18. Seeing the World: 
// Think of at least five places in the world you’d like to visit.
//• Store the locations in an array. Make sure the array is not in alphabetical order.
let placetoVisit = ["usa", "uk", "austriala", "germany", "italy", "france"];
// • Print your array in its original order
console.log(placetoVisit);
//• array in alphabetical order without modifying the actual list. 
console.log(placetoVisit.slice().sort());
//• array is still in its original order by printing it.
console.log(placetoVisit);
//• array in reverse alphabetical order without changing the order of the original list.
console.log(placetoVisit.slice().sort().reverse());
//• array is still in its original order by printing it again.
console.log(placetoVisit);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Order has changed:", placetoVisit.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("Its original order:", placetoVisit.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order changed in alphabetical :", placetoVisit.slice().sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Order has changed.", placetoVisit.sort().reverse());
