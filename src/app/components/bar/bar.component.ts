import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(public gameS: GameService) { }

  ngOnInit(): void {
    if (this.gameS.myObservable) {
      try {
        this.gameS.myObservable.subscribe((data) => {
         
          console.log(data);
          if(data=="red"){
            this.gameS.redPoints++;
          }
          if(data=="blue"){
            this.gameS.bluePoints++;
          }
          if(this.gameS.bluePoints>=100 || this.gameS.redPoints>=100){
            this.gameS.isGameStartedRed=false;
            this.gameS.isGameStartedBlue=false;
            this.gameS.winner=(this.gameS.bluePoints>this.gameS.redPoints)?"AZUL":"ROJO";
            //this.gameS.myObserver.complete();
           
            this.gameS.bluePoints=0;
            this.gameS.redPoints=0;
            this.gameS.isGameStarted=false;

            
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

}
