import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { PreloadAllModules, provideRouter, Routes, withPreloading, withRouterConfig } from "@angular/router";
import {FaceSnapListComponent} from "./app/face-snap-list/face-snap-list.component";
import {AppComponent} from "./app/app.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "",
  },
  {
    path: "",
    component: FaceSnapListComponent,
  },
  {
    path: "toto",
    component: FaceSnapListComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: "reload",
      })
    ),
  ],
}).catch((err) => console.error(err));
