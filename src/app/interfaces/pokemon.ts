export interface Pokemon {
    abilities: Array<Object>,
    base_experience: number,
    forms: Array<Object>,
    game_indices: Array<Object>,
    height: number,
    held_items: Array<any>,
    id:number,
    is_default: boolean,
    location_area_encouters: string,
    moves: Array<Object>,
    name: string,
    order: number,
    species: { name: string, url: string },
    sprites: Object,
    stats: Array<Object>,
    types: Array<Object>,
    weight: number
}
