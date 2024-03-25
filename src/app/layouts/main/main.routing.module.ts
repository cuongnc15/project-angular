import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
// import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../../features/home/home.component').then(
            (m) => m.HomeComponent,
          ),
      },
      {
        path: 'bao-cao',
        loadComponent: () =>
          import('../../features/class-edit/class-edit.component').then(
            (m) => m.ClassEditComponent,
          ),
      },
      {
        path: '/bao-cao/tao-moi',
        loadComponent: () =>
          import(
            '../../features/class-edit/create-page/create-page.component'
          ).then((m) => m.CreatePageComponent),
      },
      {
        path: 'truy-van',
        loadComponent: () =>
          import('../../features/truy-van/list/list.component').then(
            (m) => m.ListComponent,
          ),
      },
      {
        path: 'ban-nhap',
        loadComponent: () =>
          import('../../features/class-edit/class-edit.component').then(
            (m) => m.ClassEditComponent,
          ),
      },
      {
        path: 'thung-rac',
        loadComponent: () =>
          import('../../features/class-edit/class-edit.component').then(
            (m) => m.ClassEditComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
