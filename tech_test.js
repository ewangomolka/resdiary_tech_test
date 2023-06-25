

const groupArrayElements = (array, N) => {
    const remainder = array.length % N;
    const numberInArray = Math.floor(array.length / N);
    let result = [];
    let index = 0;
    for (let i = 0; i < N; i++) {
        const item = i < remainder ? numberInArray + 1 : numberInArray;
        let chunk = array.slice(index, index + item);
        result.push(chunk)
        index += item;
    }
    return result
}

console.log(groupArrayElements([1, 2, 3, 4, 5], 3));

// The function groupArrayElements takes an array (array) and a positive integer (N) as its arguments.

// First, the function calculates the remainder of array.length divided by N. This tells us how many elements will be left over after we group array into N chunks of equal size.

// Next, the function calculates the number of elements to be included in each chunk (except for the last chunk). To do this, it calculates the numberInArray 
// which equals array.length divided by N, rounded down to the nearest integer using the Math.floor() method.

// The function then initializes an empty array result that will hold each of the chunks.

// Next, the function initializes a variable index to 0 which will be used to keep track of the starting index of the current chunk.

// The function then loops over each of the N chunks. In each iteration of the loop, we determine how many elements should be 
// allocated to the current chunk based on whether the current chunk will contain a remainder or not.

// If the current index i is less than remainder then we'll have a remainder of elements after divide array evenly into N chunks, we therefore add an additional 
// element to the current chunk by setting item to numberInArray + 1. Otherwise, we just set item to numberInArray.

// The function then uses the slice() method of the array array to slice out the elements that belong to the current chunk, using the starting index (index)
//  and the number of elements item. We then append this chunk to the result array using the push() method.

// Finally, we increment the value of index by the size of the current chunk (item) in order to move onto the next chunk.

// Once all chunks have been determined and added to the result array, the function returns result, which using the example psuedo-code
// returns the desired pseudo-code output.

// to run the function please enter into the integreated terminal => node tech_test.js
// you will see in the screenshot attached the result of the function running.