import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, MatProgressSpinnerModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StepsComponent } from './steps/steps.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateChallengeComponent,
    StepsComponent,
    CompleteComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
