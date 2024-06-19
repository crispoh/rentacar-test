import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../features/carlist/carlistSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 988.47px;
  height: 100vh;

  font-family: "Barlow", sans-serif;
  font-weight: 500;
  color: black;

  //estilo del contenedor
  h2 {
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    margin-top: 15px;
  }

  //estilo de la tabla
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }
  th,
  td {
    border-bottom: 1px solid #cccccc;
    padding: 1.1em 0em;
    text-align: center;
  }
  th {
    font-size: 16px;
  }
  td {
    align-items: center;
    font-size: 14px;
  }
`;
//icono button eliminar centrado azul y hover
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  color: #002eff;
  border: none;
  background-color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
  svg {
    font-size: 20px;
  }

  &:hover {
    color: red;
    transition: 0.3s;
  }
`;

const CentroP = styled.p`
  text-align: center;
  padding: 15px 0;
`;

function CarList() {
  const dispatch = useDispatch();
  //Cantidad de autos
  const carlength = useSelector((state) => state.carlist.cars.length);

  //Eliminar auto
  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  //Obtener autos
  const cars = useSelector((state) => state.carlist.cars);
  //comprobar que se obtienen los autos
  //console.log("CarList", cars);

  return (
    <MainContainer>
      <div>
        <h2>Lista formulario</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry's standard dummy text
          ever since.
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Rut Vendedor</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Patente</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cars.slice(-10).map((cars) => (
            <tr key={cars.id}>
              <td>{cars.name}</td>
              <td>{cars.seller_rut}</td>
              <td>{cars.brand}</td>
              <td>{cars.model}</td>
              <td>{cars.license_plate}</td>
              <td>${cars.price}</td>
              <td>
                <Button onClick={() => handleDelete(cars.id)}>
                  <FaRegTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CentroP>
        Mostrando registros del 1 al 10 de un total de {carlength} registros.
      </CentroP>
    </MainContainer>
  );
}

export default CarList;
