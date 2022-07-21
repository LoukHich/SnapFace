import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { FaceSnapeListComponent } from './face-snape-list/face-snape-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SinglefaceComponent } from './singleface/singleface.component';
const routes:Routes=[

  {path: 'facesnaps', component: FaceSnapeListComponent},
  { path: '', component: LandingPageComponent },
  {path:'facesnaps/:id',component:SinglefaceComponent},
  {path:'creat',component:NewFaceSnapComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
