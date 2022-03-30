import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersListComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
