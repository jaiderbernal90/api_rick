export interface CharacterModel {
    id?:number,
    name:string,
    status:string,
    species:string,
    type?: string,
    dimension?: string,
    gender:string,
    origin: OriginModel,
    location: LocationModel,
    image:string,
    episode: Array<any>,
    url:string,
    residents?:Array<any>,
    created?:string
}
export interface OriginModel{
    name:string,
    url:string
}
export interface LocationModel{
    name:string,
    url:string,
    dimension?:string,
    residents?:string,
    type?:string
}