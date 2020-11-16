import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    {
      provide: SETTINGS,
      useValue: environment.shouldUseEmulator
        ? { host: 'localhost:8080', ssl: false }
        : undefined,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
