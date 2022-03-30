import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterModel } from 'src/app/shared/interfaces/character';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  id:number;
  character:CharacterModel;
  url: string = "https://rickandmortyapi.com/api/";
  episodes:any[] = [];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataSvc:DataService
  ) {}

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] ?? '';
      if (this.id) {
        this.getCharacter(this.id);
      }
    });
  }

  getCharacter(id:number){
    let path = `${this.url}character/${id}`;
    this.dataSvc.getRequest(path).subscribe((res:any) => {
      this.character = res;
      this.character.episode.forEach((episode:string) =>{
        this.searchEpisode(episode);
      })
    })
  }

  searchEpisode(episode:string):any{
    if(!episode) return 
    
    this.dataSvc.getRequest(episode).subscribe((res:any) => {     
      this.episodes.push(res.name);      
    })
  }

  goToLocation(url:string) {
    if(!url) return
    let id = url.split('/').reverse()[0];
    this.router.navigate(['/', 'ubicaciones', 'detalle', id])
  }
}
