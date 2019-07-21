import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UnityModuleComponent } from './main/unity-module/unity-module.component';
import { TextInputComponent } from './main/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UnityModuleComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
