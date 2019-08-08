/* 2.Given an array of strings and numbers. Print the number of integers and the number
of strings in the array. */  

 
 let arrItemCount=function(arr=[]){
 let countS=0, countN=0;
	arr.map(function(item){
		if (typeof(item)==='string'){
		countS+=1;
		}
		else if(typeof(item)==='number'){
		countN+=1;
		}
});
return `Numbers:${countN},Strings:${countS}`;
}

console.log(arrItemCount([1, '10', 'hi', 2, 3] )); // “Numbers: 3, Strings: 2”
console.log(arrItemCount([1, 4, 'i am a string', '456']));// “Numbers: 2, Strings: 2” 




/* 3· Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array.*/ 
		
    let arr=[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
    let sumArrays=arr.map(item => item.reduce(function(sum, elem){
        return sum+elem;
    }, 0));
    console.log(sumArrays);

//[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]];//   [45, 8, 0, -6]
/[[1], [2], [3], [4]]); //                                  [1, 2, 3, 4]






/*4. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array
length  */ 
        
    function oddNumMult(arr = []) {
	let oddNum = arr.filter(i => (i%2) !==0);
	let res = oddNum.map(it => it * oddNum.length );
        return res;
    }
console.log(oddNumMult([5, 4, 78, 0, -3, 7])); //        [15,-9,21]
console.log(oddNumMult([2, 4, 6, 88]));//                []
console.log(oddNumMult([])); //                          []






/* 5· Given an array of numbers. Create an array containing only elements once.*/;

function arrItemsOnce(arr=[]) {
    let res = arr.reduce(function(arrNew, item) {
	   if (!arrNew.includes(item))
           arrNew.push(item);
       return arrNew;
	},[]);
    return res;
}

		
console.log( arrItemsOnce([1, 2, 3, 3, 2, 5]));//          [1, 2, 3, 5]
console.log( arrItemsOnce([4, 4]));//                      [4]





