import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/shared/interfaces/character';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  page: number = 1;
  characters: CharacterModel[] = [];
  url: string = "https://rickandmortyapi.com/api/";
  next: string = "";
  prev: string = "";
  
  constructor(
    private dataSvc:DataService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(url= ''){
    let path = (!url) ? `${this.url}character` : url; 

    this.dataSvc.getRequest(path).subscribe((res:any) => {
      this.characters = res.results;
      this.next = res.info.next;
      this.prev = res.info.prev;
    })

  }

  paginate(type: string = 'next') {
    if(type != 'next') {this.getCharacters(this.prev); return}
    this.getCharacters(this.next);
  }


}
