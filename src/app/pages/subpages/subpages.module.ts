import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubpagesRoutingModule } from './subpages-routing.module';
import { SubpagesComponent } from './subpages.component';
import { SubblankComponent } from './subblank/subblank.component';


@NgModule({
  declarations: [SubpagesComponent, SubblankComponent],
  imports: [
    CommonModule,
    SubpagesRoutingModule
  ]
})
export class SubpagesModule { }
