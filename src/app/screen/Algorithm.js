let animations = [];

export function getAnimationForMergeSort(unsortedArray){
  mergeSort(unsortedArray,0);
  let Animations = getIndexOfAnimations(animations,unsortedArray);
  console.log(Animations);
  return Animations;
}



function mergeSort (unsortedArray,startIndex) {
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
    mergeSort(left,startIndex), mergeSort(right,middle),startIndex
  );
}

// Merge the two arrays: left and right
function merge (left, right,startIndex) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  let k = startIndex;
  // We will concatenate values into the resultArray in order
  console.log(k);
  while (leftIndex < left.length && rightIndex < right.length) {

      animations.push(["highLight",k,right[rightIndex]]);
      animations.push(["highLight",k,right[rightIndex]]);

    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      animations.push(["swap",k,left[leftIndex]]);
      leftIndex++; // move left array cursor
      k++;
    } else {
      resultArray.push(right[rightIndex]);
      animations.push(["swap",k,right[rightIndex]]);
			rightIndex++; // move right array cursor
      k++;
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop

  left.slice(leftIndex).forEach(element => {
    animations.push(["highLight",k,element]);
    animations.push(["highLight",k,element]);
    resultArray.push(element);
    animations.push(["swap",k,element]);
    k++;
  });

  right.slice(rightIndex).forEach(element => {
    animations.push(["highLight",k,element]);
    animations.push(["highLight",k,element]);
    resultArray.push(element);
    animations.push(["swap",k,element]);
    k++;
  });

  return resultArray;
}

function getIndexOfAnimations(animate,array)
{

  let finalAnimations = [];
  animate.forEach(element => {
      if(element[0] === "highLight")
      {
        // let temp1 = array.findIndex(x => x === element[1]);
        let temp1 = element[1];
        let temp2 = array.findIndex(x => x === element[2]);
        finalAnimations.push([temp1,temp2]);
      }
      else
      {
        //let temp1 = array.findIndex(x => x === element[1]);
        let temp1 = element[1];
        let temp2 = element[2];
        finalAnimations.push([temp1,temp2]);
      }
  });
  animations = [];
  return finalAnimations;
}
