import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }

  MakeShorting(shortType:String)
  {
    this.sharedService.sendClickEvent(shortType);
  }
}
