var bikes = [{title: "Monark Sture",
              city: "Alingsås",
              startDate: "2019/05/01",
              endDate: "2019/05/30",
              price: "50",
              rented: false}, 
            {title: "Crescent Deca",
             city: "Örkelljunga",
             startDate: "2019/04/04",
             endDate: "2019/06/27",
             price: "70",
             rented: false}];

export function getBike(index) {
  return bikes[index];
}

export function rentBike(index) {
  bikes[index].rented = true;
}