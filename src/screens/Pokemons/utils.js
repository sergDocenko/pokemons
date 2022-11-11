export function sortByType(a, b) {
  if (a.types[0].type.name > b.types[0].type.name) return 1;
  if (a.types[0].type.name === b.types[0].type.name) return 0;
  if (a.types[0].type.name < b.types[0].type.name) return -1;
}
