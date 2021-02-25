import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();
  private sizeAsSubject = new Subject<any>();

  sendClickEvent(shortType:String){
    this.subject.next(shortType);
  }

  sendSizeChangeEvent(size:any)
  {
    this.sizeAsSubject.next(size);
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }

  getChangeInSize():Observable<any>{
    return this.sizeAsSubject.asObservable();
  }

}
