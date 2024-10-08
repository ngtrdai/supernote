import { createMongoAbility } from "@casl/ability";
import { SpaceAbility } from './permissions.types.ts';

export const useSpaceAbility = (rules: any) => {
  if (!rules) {
    rules = [];
  }

  const ability = createMongoAbility<SpaceAbility>(rules);

  return {
    can: ability.can.bind(ability),
    cannot: ability.cannot.bind(ability),
  };
};
