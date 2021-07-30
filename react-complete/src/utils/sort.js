export const sortByNameAsc = (a, b) => (a.name > b.name) ? 1 : -1;
export const sortByNameDesc = (a, b) => -(sortByNameAsc(a,b));
