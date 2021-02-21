import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';
import { getAnimationForMergeSort } from './Algo/mergSort.js';
import { getAnimationsForQuickSort } from './Algo/quickSort.js';
import { getAnimationsForBubbleSort } from './Algo/bubbleSort';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

   NUMBER_OF_ARRAY_BARS = 150;

   Array = [];

   // This is the main color of the array bars.
   PRIMARY_COLOR = '#0080FF';

   // This is the color of array bars that are being compared throughout the animations.
   SECONDARY_COLOR = 'red';

   ANIMATION_SPEED_MS = 10;

   PIVOT_COLOR = "green";

  clickEventSubscription:Subscription;

  constructor(private sharedService:SharedService) {
    this.resetArray();
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe((shortType)=>{
      switch(shortType){
        case "re-define":{
          this.resetArray();
          break;
        }
        case "merg":{
          this.mergSort();
          break;
        }
        case "quick":{
          this.quickSort();
          break;
        }
        case "bubble":{
          this.bubbleSort();
          break;
        }
        case "heap":{
          break;
        }
      }
    })
   }

   resetArray(){
    const array = []

    for (let i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
      array.push(this.randomIntFromInterval(5, 730));
    }

    this.Array = array;
   }

   mergSort(){
    const arrayBars = document.getElementsByClassName('array-bar');
    let animations = getAnimationForMergeSort(this.Array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
        const barTwoStyle = <HTMLElement>arrayBars[barTwoIdx];
        const color = i % 3 === 0 ? this.SECONDARY_COLOR : this.PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.style.backgroundColor = color;
          barTwoStyle.style.backgroundColor = color;
        }, i * this.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
          barOneStyle.style.height = `${newHeight}px`;
        }, i * this.ANIMATION_SPEED_MS);
      }
    }
   }

   quickSort(){
    console.log(this.Array);
    let arrayBars = document.getElementsByClassName('array-bar');
    let animations = getAnimationsForQuickSort(this.Array);

    for(let i = 0; i< animations.length; i++)
    {
      let check = animations[i][0];
      if(check === "pivoton")
      {
        let pivotBar = animations[i][1];
        const barPivotStyle = <HTMLElement>arrayBars[pivotBar];
        setTimeout(() => {
         barPivotStyle.style.backgroundColor = this.PIVOT_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if(check === "highLighton")
      {
        const [barOneIdx,barTwoIdx] = animations[i].slice(1);
        const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
        const barTwoeStyle = <HTMLElement>arrayBars[barTwoIdx];

        setTimeout(() => {
          barOneStyle.style.backgroundColor = this.SECONDARY_COLOR;
          barTwoeStyle.style.backgroundColor = this.SECONDARY_COLOR;
         }, i * this.ANIMATION_SPEED_MS);
      }
      else if(check === "highLightoff")
      {
        const [barOneIdx,barTwoIdx] = animations[i].slice(1);
        const barOneStyle = <HTMLElement>arrayBars[barOneIdx];
        const barTwoeStyle = <HTMLElement>arrayBars[barTwoIdx];

        setTimeout(() => {
          barOneStyle.style.backgroundColor = this.PRIMARY_COLOR;
          barTwoeStyle.style.backgroundColor = this.PRIMARY_COLOR;
         }, i * this.ANIMATION_SPEED_MS);
      }
      else if(check === "pivotOff")
      {
        let pivotBar = animations[i][1];
        const barPivotStyle = <HTMLElement>arrayBars[pivotBar];
        setTimeout(() => {
         barPivotStyle.style.backgroundColor = this.PRIMARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);
      }
      else if(check === "swap")
      {
        const [barIndexOne,barValueOne,barIndexTwo,barValueTwo] = animations[i].slice(1);
        const barOneStyle = <HTMLElement>arrayBars[barIndexOne];
        const barTwoeStyle = <HTMLElement>arrayBars[barIndexTwo];

        setTimeout(() => {
          barOneStyle.style.height = `${barValueOne}px`;
          barTwoeStyle.style.height = `${barValueTwo}px`;
         }, i * this.ANIMATION_SPEED_MS);

      }
    }

   }

   bubbleSort()
   {
      let animations = getAnimationsForBubbleSort(this.Array);
      let arrayBars = document.getElementsByClassName('array-bar');

      for(let i = 0; i< animations.length; i++)
      {
        const [check,v1,v2,v3,v4] = animations[i].slice();
        if(check === "HighLightOn")
        {
          let barOneStyle = <HTMLElement>arrayBars[v1];
          let barTwoStyle = <HTMLElement>arrayBars[v2];

          setTimeout(() => {
            barOneStyle.style.backgroundColor = this.SECONDARY_COLOR;
            barTwoStyle.style.backgroundColor = this.SECONDARY_COLOR;
           }, i * this.ANIMATION_SPEED_MS);
        }
        else if(check === "HighLightOff")
        {
          let barOneStyle = <HTMLElement>arrayBars[v1];
          let barTwoStyle = <HTMLElement>arrayBars[v2];

          setTimeout(() => {
            barOneStyle.style.backgroundColor = this.PRIMARY_COLOR;
            barTwoStyle.style.backgroundColor = this.PRIMARY_COLOR;
           }, i * this.ANIMATION_SPEED_MS);
        }
        else if(check === "Swap")
        {
          let barOneStyle = <HTMLElement>arrayBars[v1];
          let barTwoStyle = <HTMLElement>arrayBars[v3];

          setTimeout(() => {
            barOneStyle.style.height = `${v2}px`;
            barTwoStyle.style.height = `${v4}px`;
           }, i * this.ANIMATION_SPEED_MS);
        }
      }
   }


  ngOnInit() {
  }

  // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  randomIntFromInterval(min:any,max:any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



}
