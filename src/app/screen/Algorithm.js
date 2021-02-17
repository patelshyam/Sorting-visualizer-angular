let animations = [];
let finalAnimations = [];

export function getAnimationForMergeSort(unsortedArray){
  // const auxiliaryArray = unsortedArray.slice();
  // mergeSort(unsortedArray,0,unsortedArray.length-1,auxiliaryArray);
  // console.log( "After Sorting" + unsortedArray);
  // return animations;
  console.log(unsortedArray);
  console.log(mergeSort(unsortedArray));
  console.log(animations);
  getIndexOfAnimations(animations,unsortedArray);
  console.log(finalAnimations);
  return finalAnimations;
}

// function mergeSort (unsortedArray,startIndex,endIndex,auxArray) {
//     if (startIndex === endIndex) return;
//     const middleIndex = Math.floor((startIndex + endIndex) / 2);
//     mergeSort(auxArray,startIndex,middleIndex,unsortedArray);
//     mergeSort(auxArray,middleIndex + 1, endIndex,unsortedArray);
//     merge(unsortedArray,startIndex,middleIndex,endIndex,auxArray);
//   }

//   function merge (array, startIndex,middleIndex,endIndex,auxArray) {
//     let k= startIndex;
//     let i= startIndex;
//     let j= middleIndex + 1;

//     while(i<=middleIndex && j<=endIndex)
//     {
//       animations.push([i,j]);
//       animations.push([i,j]);
//       if(array[i] <= array[j])
//       {
//         animations.push([k,auxArray[i]]);
//         array[k++] = auxArray[i++];
//       }
//       else
//       {
//         animations.push([k,auxArray[j]]);
//         array[k++] = auxArray[j++];
//       }
//     }

//     while( i <= middleIndex)
//     {
//       animations.push([i,i]);
//       animations.push([i,i]);
//       animations.push([k,auxArray[i]]);
//       array[k++] = auxArray[i++];
//     }
//     while( j <= endIndex)
//     {
//       animations.push([j,j]);
//       animations.push([j,j]);
//       animations.push([k,auxArray[j]]);
//       array[k++] = auxArray[j++];
//     }
//     console.log("Interation: " + array);
//   }

//
// Merge Sort Implentation (Recursion)
//

function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
      animations.push(["highLight",left[leftIndex],right[rightIndex]]);
      animations.push(["highLight",left[leftIndex],right[rightIndex]]);

    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      animations.push(["swap",right[rightIndex],left[leftIndex]]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      animations.push(["swap",left[leftIndex],right[rightIndex]]);
			rightIndex++; // move right array cursor
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop
  // return resultArray
  //         .concat(left.slice(leftIndex))
  //         .concat(right.slice(rightIndex));
  left.slice(leftIndex).forEach(element => {
    animations.push(["highLight",element,element]);
    animations.push(["highLight",element,element]);
    resultArray.push(element);
    animations.push(["swap",element,element]);
  });

  right.slice(rightIndex).forEach(element => {
    animations.push(["highLight",element,element]);
    animations.push(["highLight",element,element]);
    resultArray.push(element);
    animations.push(["swap",element,element]);
  });

  return resultArray;
}

function getIndexOfAnimations(animate,array)
{
  // for(let i = 0; i< animate.length; i++)
  // {
  //   let temp1 = array.findIndex(x => x === animate[i][0]);
  //   let temp2 = array.findIndex(x => x === animate[i][1]);
  //   finalAnimations.push([temp1,temp2]);
  // }

  animate.forEach(element => {
      if(element[0] === "highLight")
      {
        let temp1 = array.findIndex(x => x === element[1]);
        let temp2 = array.findIndex(x => x === element[2]);
        finalAnimations.push([temp1,temp2]);
      }
      else
      {
        let temp1 = array.findIndex(x => x === element[1]);
        let temp2 = element[2];
        finalAnimations.push([temp1,temp2]);
      }
  });
}
