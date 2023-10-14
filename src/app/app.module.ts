import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunicationService } from './communication.service';
import { DoorComponent } from './door/door.component';
import { LoginComponent } from './login/login.component';
import { SessionService } from './session.service';
import { SigneComponent } from './signe/signe.component';
import { ClientdasboardComponent } from './clientdasboard/clientdasboard.component';
import { AdmindasboardComponent } from './admindasboard/admindasboard.component';
import { AnalyzeComponent } from './clientdasboard/analyze/analyze.component';
import { ConverService } from './conver.service';
import { UsageComponent } from './usage/usage.component';
import { UnleashComponent } from './unleash/unleash.component';


@NgModule({
  declarations: [
    AppComponent,
    DoorComponent,
    LoginComponent,
    SigneComponent,
    ClientdasboardComponent,
    AdmindasboardComponent,
    AnalyzeComponent,
    UsageComponent,
    UnleashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommunicationService, SessionService, ConverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
