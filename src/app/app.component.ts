import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { MeteoService } from './services/meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';
  constructor(
    public gameS:GameService)
  {}


 

  public startGameRed(){
    if(!this.gameS.isGameStartedRed && this.gameS.myObserver){
      this.gameS.isGameStartedRed=true;
      this.gameS.redPoints=0;
      this.gameS.bluePoints=0;
    }
  }
  public startGame(){
    if(!this.gameS.isGameStarted && this.gameS.myObserver){
      this.gameS.isGameStarted=true;
      this.gameS.winner=null;
    
    }
  }

  public startGameBlue(){
    if(!this.gameS.isGameStartedRed && this.gameS.myObserver){
      this.gameS.isGameStartedBlue=true;
      this.gameS.redPoints=0;
      this.gameS.bluePoints=0;
    }
  }
  public Red(){
    if(this.gameS.myObserver)
      this.gameS.myObserver.next("red");
  }
  public Blue(){
    if(this.gameS.myObserver)
      this.gameS.myObserver.next("blue");
  }
  
}
