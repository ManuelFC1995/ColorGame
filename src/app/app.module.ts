import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BarComponent } from './components/bar/bar.component';
import { GameService } from './services/game.service';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule, ɵAngularFireSchedulers } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,
      AngularFirestoreModule)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
