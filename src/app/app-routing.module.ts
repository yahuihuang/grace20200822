import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ColorComponent } from './utilities/color/color.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'utilities',
      children: [
        { path: 'color', component: ColorComponent },
        { path: 'color/:type', component: ColorComponent },
      ]
    },
    {
      path: 'pages',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    { path: 'blank2', loadChildren: () => import('./pages/blank2/blank2.module').then(m => m.Blank2Module) },
    { path: '**', component: PathNotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
