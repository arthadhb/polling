import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {AppComponent} from '../app.component'
  import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreatepollService {

  constructor(private http:HttpClient) { }

  createNewPoll(polldetails:Object): Observable<Object>{
  console.log('poll id',polldetails);
  // var pollId=polldetails['pollId'];
  // var pollTitle=polldetails['polltitle'];
  // var option1=polldetails['polloption1'];
  // var option2=polldetails['polloption2'];
  // var option3=polldetails['polloption3'];
  // var option4=polldetails['polloption4'];
  // var body:{pollId: any,pollTitle: any,option1: any,option2: any,option3: any,option4: any};
  var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(AppComponent.API_URL+'/account/createpoll',polldetails);
  // return this.http.post(AppComponent.API_URL+'/account/createpoll'+'/'+pollId+'/'+pollTitle+'/'+option1+'/'+option2+'/'+option3+'/'+option4,polldetails);
  // return this.http.post(AppComponent.API_URL+'/account/createpoll', body,{
  //   headers : headers
  //     }).subscribe(
  //         () =>{},
  //         err => console.error(err)
  //     );  
}
}
