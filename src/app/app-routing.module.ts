import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'first',
        loadChildren: () =>
          import('./modules/first-module/first-module.module').then(
            (m) => m.FirstModuleModule
          ),
      },
      {
        path: 'second',
        loadChildren: () =>
          import('./modules/second-module/second-module.module').then(
            (m) => m.SecondModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
