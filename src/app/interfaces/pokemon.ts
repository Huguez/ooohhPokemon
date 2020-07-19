export interface Pokemon {
    abilities: Array<any>,
    base_experience: number,
    forms: Array<any>,
    game_indices: Array<any>,
    height: number,
    held_items: Array<any>,
    id:number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Array<any>,
    name: string,
    order: number,
    species: { name: string, url: string },
    sprites: any,
    stats: Array<any>,
    types: Array<any>,
    weight: number
}
