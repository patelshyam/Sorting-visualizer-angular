import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

   NUMBER_OF_ARRAY_BARS = 300;

   Array = [];

  clickEventSubscription:Subscription;

  constructor(private sharedService:SharedService) {
    this.resetArray();
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe((shortType)=>{
      console.log(shortType);
      switch(shortType){
        case "re-define":{
          this.resetArray();
        }
      }
    })
   }

   resetArray(){
    const array = [];
    for (let i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
      array.push(this.randomIntFromInterval(5, 730));
    }
    this.Array = array;
    console.log(this.Array);
   }

  ngOnInit() {
  }

  // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  randomIntFromInterval(min:any,max:any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



}
