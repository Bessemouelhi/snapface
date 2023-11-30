import {Component, OnInit, LOCALE_ID, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {HeaderComponent} from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) private locale: string) {
    registerLocaleData(fr.default, locale);
  }

  ngOnInit(): void {
  }
}
