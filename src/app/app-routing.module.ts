import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/base/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: "personajes",
        loadChildren: () => import('./views/characters/characters.module').then(m => m.CharactersModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
