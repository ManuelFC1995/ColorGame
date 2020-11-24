import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  Rojos: any[] = [];
  Azules: any[] = [];
  constructor(public gameS: GameService) { 

   
  }

  ngOnInit(): void {
    if (this.gameS.myObservable) {
      try {
        this.gameS.myObservable.subscribe((data) => {
         
       
        

            
          
        });
      } catch (err) {
        console.log(err);
      }
    }  this.gameS.getRedPoints()
    .subscribe(Red => {
    for ( const id$ in Red) {
    const p = Red[id$];
    p.id$ = id$;
    this.Rojos.push(Red[id$]);
    }
    })
    this.gameS.redPoints=this.Rojos.length;
    this.gameS.getBluePoints()
    .subscribe(Blue => {
    for ( const id$ in Blue) {
    const p = Blue[id$];
    p.id$ = id$;
    this.Rojos.push(Blue[id$]);
    }
    })
    this.gameS.bluePoints=this.Azules.length;
    if(this.gameS.bluePoints>=100 || this.gameS.redPoints>=100){
      this.gameS.isGameStartedRed=false;
      this.gameS.isGameStartedBlue=false;
      this.gameS.winner=(this.gameS.bluePoints>this.gameS.redPoints)?"AZUL":"ROJO";
      //this.gameS.myObserver.complete();
     
      this.gameS.bluePoints=0;
      this.gameS.redPoints=0;
      this.gameS.isGameStarted=false;
  }
  }
}
