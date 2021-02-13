import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();

  sendClickEvent(shortType:String){
    this.subject.next(shortType);
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }

}
