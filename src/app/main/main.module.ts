import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnityModuleComponent } from './unity-module/unity-module.component';
import { TextInputComponent } from './text-input/text-input.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    UnityModuleComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
