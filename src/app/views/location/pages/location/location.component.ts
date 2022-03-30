import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from 'src/app/shared/interfaces/character';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  id:number;
  url: string = "https://rickandmortyapi.com/api/";
  location:LocationModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataSvc:DataService
  ) {}

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'] ?? '';
      if (this.id) {
        this.getLocation(this.id);
      }
    });
  }

  getLocation(id:number){
    let path = `${this.url}location/${id}`;
    this.dataSvc.getRequest(path).subscribe((res:any) => {
        this.location = res;
    })
  }

  getLengthResidents(arr:any){
    if(!arr) return
    return arr.length;
  }

}
