import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WebcamModule } from 'ngx-webcam';
import { CameraPageComponent } from './camera-page/camera-page.component';
import { Camera2PageComponent } from './camera2-page/camera2-page.component';

@NgModule({
  declarations: [
    AppComponent,
      HomePageComponent,
      CameraPageComponent,
      Camera2PageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    WebcamModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
