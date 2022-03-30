import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: 'detalle/:id',
    component: CharactersDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
