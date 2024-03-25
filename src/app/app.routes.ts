import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { ClassEditComponent } from './features/class-edit/class-edit.component';
import { CreatePageComponent } from './features/class-edit/create-page/create-page.component';
import { ListComponent } from './features/truy-van/list/list.component';
import { CreateQueryComponent } from './features/truy-van/create-query/create-query.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ClassEditComponent,
        title: 'Class Info',
      },
      {
        path: 'bao-cao',
        component: ClassEditComponent,
        title: 'Class Edit',
      },
      {
        path: 'bao-cao/tao-moi',
        component: CreatePageComponent,
        title: 'tao moi',
      },
      {
        path: 'truy-van',
        component: ListComponent,
        title: 'Truy van',
      },
      {
        path: 'truy-van/tao-moi',
        component: CreateQueryComponent,
        title: 'Truy van',
      },
      {
        path: 'thung-rac',
        component: ClassEditComponent,
        title: 'Class Edit',
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
    title: 'Home page',
  },
];
