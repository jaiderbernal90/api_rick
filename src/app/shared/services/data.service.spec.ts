import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CharacterModel } from '../interfaces/character';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClientSpy: { get : jasmine.Spy }

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [DataService]
  }));

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = new DataService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe de retornar el objeto con la información de los personajes', (done:DoneFn) => {
      
    let path = 'https://rickandmortyapi.com/api/character';
    const result = {
      "info": {
          "count": 126,
          "pages": 7,
          "next": "https://rickandmortyapi.com/api/location?page=2",
          "prev": null
        },
      "results": [
        {
          "id": 1,
          "name": "Earth",
          "type": "Planet",
          "dimension": "Dimension C-137",
          "residents": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            // ...
          ],
          "url": "https://rickandmortyapi.com/api/location/1",
          "created": "2017-11-10T12:42:04.162Z"
        }
        // ...
      ]
    } 

    httpClientSpy.get.and.returnValue(of(result));

    service.getRequest(path).subscribe((res:any) => {
      expect(res).toEqual(result);
      done();
    })
  });

  it('Debe de retornar el objeto con la información de un personaje', (done:DoneFn) => {
      
    let path = 'https://rickandmortyapi.com/api/character/2';
    const result:CharacterModel = {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/2",
      "created": "2017-11-04T18:50:21.651Z"
    } 

    httpClientSpy.get.and.returnValue(of(result));

    service.getRequest(path).subscribe((res:any) => {
      expect(res).toEqual(result);
      done();
    })
  });

  it('Debe de retornar el objeto con la información de una ubicación', (done:DoneFn) => {
      
    let path = 'https://rickandmortyapi.com/api/location/2';
    const result = {
      "id": 3,
      "name": "Citadel of Ricks",
      "type": "Space station",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/8",
        "https://rickandmortyapi.com/api/character/14",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/location/3",
      "created": "2017-11-10T13:08:13.191Z"
    } 

    httpClientSpy.get.and.returnValue(of(result));

    service.getRequest(path).subscribe((res:any) => {
      expect(res).toEqual(result);
      done();
    })
  });
});
