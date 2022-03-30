import { AfterContentInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from 'src/app/shared/interfaces/character';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersListComponent implements OnInit,AfterContentInit {
  @Input() public character:CharacterModel;
  episode:Observable<string>; 
  constructor(
    private dataSvc:DataService
  ) { }

  ngAfterContentInit(): void {
    this.searchEpisode(this.character.episode[0]);
  }

  ngOnInit(): void {}

  searchEpisode(episode:string):any{
    this.dataSvc.getRequest(episode).subscribe((res:any) => {     
      this.episode = res.name
    })
  }
    
}
