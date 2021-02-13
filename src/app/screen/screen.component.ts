import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  clickEventSubscription:Subscription;

  constructor(private sharedService:SharedService) {
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe((x)=>{
      console.log(x);
    })
   }

  ngOnInit() {
  }



}
