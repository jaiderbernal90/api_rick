export interface CharacterModel {
    id?:number,
    name:string,
    status:string,
    species:string,
    type?: string,
    gender:string,
    origin: OriginModel[],
    location: LocationModel[],
    image:string,
    episode: any,
    url:string,
    created: Date
}
export interface OriginModel{
    name:string,
    url:string
}
export interface LocationModel{
    name:string,
    url:string
}