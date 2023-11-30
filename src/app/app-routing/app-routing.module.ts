// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaceSnapListComponent} from "../face-snap-list/face-snap-list.component";

const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FaceSnapListComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
