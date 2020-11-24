import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { HttpHeaders,HttpClient,HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  presURLR= 'https://colorgame-8b3d3.firebaseio.com/RedPoints.json';
  presURLB= 'https://colorgame-8b3d3.firebaseio.com/BluePoints.json';
  preURLB = 'https://colorgame-8b3d3.firebaseio.com/BluePoints'
  preURLR = 'https://colorgame-8b3d3.firebaseio.com/RedPoints'
  public isGameStarted:boolean=false;
  public isGameStartedRed:boolean=false;
  public isGameStartedBlue:boolean=false;
  public redPoints:number=0;
  public bluePoints:number=0;
  public winner:any=null;

  public myObserver:Observer<any>=null;  //input 
  public myObservable:Observable<any>=null;  //output


  constructor(public http: HttpClient) { 
    this.createObservable();
  }

  public createObservable():void{
    this.myObservable=new Observable((observer)=>{
      this.myObserver=observer;
    });
  }
  postRed( Red: any) {
    const newRed = JSON.stringify(Red);
    const headers = new HttpHeaders({ 
    'Content-Type': 'application/json'
    });
    return this.http.post( this.presURLR, newRed, {headers}).pipe
    (map( res => {
    console.log(res); 
    return res;
    }));
  }

  postBlue( Blue: any) {
    const newBlue = JSON.stringify(Blue);
    const headers = new HttpHeaders({ 
    'Content-Type': 'application/json'
    });
    return this.http.post( this.presURLB, newBlue, {headers}).pipe
    (map( res => {
    console.log(res); 
    return res;
    }));
  }

  getRedPoints(){
    return this.http.get(this.presURLR).pipe(map(res=>res));
  
  }
 

    getBluePoints(){
      return this.http.get(this.presURLB).pipe(map(res=>res));
    
    }
 
}
