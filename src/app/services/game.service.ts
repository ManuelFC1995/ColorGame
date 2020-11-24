import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient,HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  public isGameStarted:boolean=false;
  public isGameStartedRed:boolean=false;
  public isGameStartedBlue:boolean=false;
  public redPoints:number=0;
  public bluePoints:number=0;
  public winner:any=null;

  public myObserver:Observer<any>=null;  //input 
  public myObservable:Observable<any>=null;  //output


  constructor() { 
    this.createObservable();
  }

  public createObservable():void{
    this.myObservable=new Observable((observer)=>{
      this.myObserver=observer;
    });
  }


}
