import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule,
    MaterialModule
  ]
})
export class FirstModuleModule { }
