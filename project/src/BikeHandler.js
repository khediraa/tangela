export function getBike(index) {
  return bikes[index];
}

export function rentBike(index) {
  bikes[index].rented = true;
}