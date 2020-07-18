import { DamageRelation } from './damage-relation';

export interface InterfacePokemon {
    damage_relations:  DamageRelation,
    game_indices:      Array<any>,
    generation:        Object,
    id:                number,
    move_damage_class: Object,
    moves:             Array<any>,
    name:              string,
    names:             Array<any>,
    pokemon:           Array<any>
}
