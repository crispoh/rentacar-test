import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      id: 1,
      seller_rut: "12345678-9",
      name: "Juan Perez",
      brand: "Toyota",
      model: "Corolla",
      license_plate: "AB1234",
      price: 20000000,
    },
    {
      id: 2,
      seller_rut: "12543678-3",
      name: "Maria Lopez",
      brand: "KIA",
      model: "Rio 5",
      license_plate: "CD5678",
      price: 25000000,
    },
    {
      id: 3,
      seller_rut: "12345867-K",
      name: "Pedro Perez",
      brand: "BMW",
      model: "Z1",
      license_plate: "EF9012",
      price: 30000000,
    },
  ],
};

export const carlistSlice = createSlice({
  name: "carlist",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, deleteCar } = carlistSlice.actions;
export default carlistSlice.reducer;
