// let animations = [];

// export function getAnimationForMergeSort(unsortedArray){
//   if (unsortedArray.length <= 1) {
//     return unsortedArray;
//   }
//   const auxiliaryArray = unsortedArray.slice();
//   mergeSort(unsortedArray,0,unsortedArray.length-1,auxiliaryArray);
//   console.log( "After Sorting" + unsortedArray);
//   return animations;
// }

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


export function getAnimationForMergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  console.log(array);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
  console.log("After Iteration : " + auxiliaryArray);
}
