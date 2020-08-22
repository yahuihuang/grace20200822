import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpagesComponent } from './subpages.component';
import { SubblankComponent } from './subblank/subblank.component';

const routes: Routes = [
  { path: '', component: SubpagesComponent },
  { path: 'subblank', component: SubblankComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubpagesRoutingModule { }
