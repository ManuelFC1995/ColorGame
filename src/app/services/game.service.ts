import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { HttpHeaders,HttpClient,HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
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

  private myPts:AngularFirestoreCollection<any>;
  
  constructor(public http: HttpClient,private fire:AngularFirestore) { 
    this.createObservable();
    this.myPts=fire.collection<any>(environment.PuntosCollection);
  }

  public createObservable():void{
    this.myObservable=new Observable((observer)=>{
      this.myObserver=observer;
    });
  }


  postpoint( point: any) {
    const newPoint = JSON.stringify(point);
    const headers = new HttpHeaders({ 
    'Content-Type': 'application/json'
    });
    return this.http.post( this.presURLB, newPoint, {headers}).pipe
    (map( res => {
    console.log(res); 
    return res;
    }));
  }

  getPoints():
   Observable<any>{
      return this.myPts.get();
    }
  
  
 


  
}
