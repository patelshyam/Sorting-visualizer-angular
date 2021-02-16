import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';
import { getAnimationForMergeSort } from './Algorithm';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

   NUMBER_OF_ARRAY_BARS = 5;

   Array = [];

   // This is the main color of the array bars.
   PRIMARY_COLOR = 'turquoise';

   // This is the color of array bars that are being compared throughout the animations.
   SECONDARY_COLOR = 'red';

   ANIMATION_SPEED_MS = 10;

  clickEventSubscription:Subscription;

  constructor(private sharedService:SharedService) {
    this.resetArray();
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe((shortType)=>{
      switch(shortType){
        case "re-define":{
          this.resetArray();
        }
        case "merg":{
          this.mergShort();
        }
        case "quick":{

        }
        case "bubble":{

        }
        case "heap":{

        }
      }
    })
   }

   resetArray(){
    const array = [];
    array.push(100);
    array.push(10);
    array.push(90);
    array.push(20);
    array.push(80);
    array.push(30);
    array.push(70);
    array.push(40);
    array.push(60);
    array.push(50);
    // for (let i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
    //   array.push(this.randomIntFromInterval(5, 730));
    // }
    this.Array = array;
   }

   mergShort(){
    let AllBars = document.getElementsByClassName("array-bar");
    let animations = getAnimationForMergeSort(this.Array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
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

  ngOnInit() {
  }

  // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  randomIntFromInterval(min:any,max:any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



}
