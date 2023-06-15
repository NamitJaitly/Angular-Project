import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'second',
        loadChildren: () =>
          import('./modules/second-module/second-module.module').then(
            (m) => m.SecondModuleModule
          ),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./modules/master/master.module').then(
      (m) => m.MasterModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
