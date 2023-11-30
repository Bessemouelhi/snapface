import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  imports:      [
    BrowserModule,
    FaceSnapComponent,
    NgbModule,
    FaceSnapListComponent,
    HeaderComponent,
    AppRoutingModule
  ],
  declarations: [  AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
