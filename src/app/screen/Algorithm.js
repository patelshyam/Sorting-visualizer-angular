let animations = [];

export function getAnimationForMergeSort(unsortedArray){
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  mergeSort(unsortedArray,0,unsortedArray.length-1);
  return animations;
}

function mergeSort (unsortedArray,startIndex,endIndex) {


    if (startIndex === endIndex) return;
    const middleIndex = Math.floor(unsortedArray.length / 2);



    merge(
      mergeSort(unsortedArray,startIndex,middleIndex), mergeSort(unsortedArray,middleIndex+1,endIndex)
    );

  }

  function merge (array, startIndex,endIndex) {
    let resultArray = [], leftIndex = startIndex, rightIndex = endIndex;


    while (leftIndex < left.length && rightIndex < right.length) {

        animations.push([leftIndex,rightIndex]);
        animations.push([leftIndex,rightIndex]);

      if (array[leftIndex] < array[rightIndex]) {
        resultArray.push(array[leftIndex]);
        animations.push([leftIndex,array[leftIndex]]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(array[rightIndex]);
        animations.push([rightIndex,array[rightIndex]]);
        rightIndex++; // move right array cursor
      }
    }

  }
