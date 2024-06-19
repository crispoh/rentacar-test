import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      id: 1,
      seller_rut: "12345678-9",
      name: "Juan Carlos Perez Sanchez",
      brand: "Audi",
      model: "R5",
      license_plate: "AB1234",
      price: 20000000,
    },
    {
      id: 2,
      seller_rut: "12543678-3",
      name: "Maria Josefa Lopez Martinez",
      brand: "Fiat",
      model: "500",
      license_plate: "CD5678",
      price: 25000000,
    },
    {
      id: 3,
      seller_rut: "12345867-K",
      name: "Pedro Andres Perez Diaz",
      brand: "BMW",
      model: "X6",
      license_plate: "EF9012",
      price: 30000000,
    },
    {
      id: 4,
      seller_rut: "23456789-1",
      name: "Ana Luisa Gonzalez Flores",
      brand: "Honda",
      model: "Civic",
      license_plate: "GH3456",
      price: 22000000,
    },
    {
      id: 5,
      seller_rut: "34567890-2",
      name: "Luis Alberto Fernandez Rodriguez",
      brand: "Nissan",
      model: "GTR",
      license_plate: "IJ7890",
      price: 28000000,
    },
    {
      id: 6,
      seller_rut: "45678901-3",
      name: "Jorge Enrique Ramirez Vasquez",
      brand: "Audi",
      model: "TT",
      license_plate: "KL2345",
      price: 27000000,
    },
    {
      id: 7,
      seller_rut: "56789012-4",
      name: "Carmen Patricia Castillo Rojas",
      brand: "Fiat",
      model: "124 Spider",
      license_plate: "MN6789",
      price: 23000000,
    },
    {
      id: 8,
      seller_rut: "67890123-5",
      name: "Felipe Arturo Torres Soto",
      brand: "BMW",
      model: "Z4",
      license_plate: "OP1234",
      price: 32000000,
    },
    {
      id: 9,
      seller_rut: "78901234-6",
      name: "Laura Isabel Ruiz Hernandez",
      brand: "Honda",
      model: "Accord",
      license_plate: "QR5678",
      price: 26000000,
    },
    {
      id: 10,
      seller_rut: "89012345-7",
      name: "Gabriel Ignacio Fuentes Araya",
      brand: "Nissan",
      model: "Z350",
      license_plate: "ST9012",
      price: 29000000,
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
