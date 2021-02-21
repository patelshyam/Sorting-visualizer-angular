let animations = [];

export function getAnimationsForBubbleSort(array)
{
  let tempArray = array.slice();
  bubbleSort(tempArray);
  let tempAnimations = animations.slice();
  animations = [];
  return tempAnimations;
}

function bubbleSort(array){
  let arrayLength = array.length;

  for(let i=0; i< arrayLength-1; i++)
  {
    for(let j=0; j< arrayLength-i-1; j++)
    {
      if(array[j] > array[j+1])
      {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;

        animations.push(["HighLightOn",j,j+1]);
        animations.push(["HighLightOff",j,j+1]);
        animations.push(["Swap",j,array[j],j+1,array[j+1]]);
      }
    }
  }

  console.log(array);
}
