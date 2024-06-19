import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../features/carlist/carlistSlice";
import { v4 as uuidv4 } from "uuid";
import { brands, models } from "../marca";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px auto;
  width: 80%;
  align-items: center;
  color: #002eff;
  h2 {
    font-size: 56px;
    font-weight: 400;
    text-align: left;
  }
  img {
    width: 424px;
    height: auto;
  }

  @media (max-width: 480px) {
    img {
      width: 144px;
      height: auto;
    }
    h2 {
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
    }
  }
`;

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #cccccc;
  margin-top: -107px;
  @media (max-width: 480px) {
    margin-top: -55px;
  }
`;

const CenterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 30px auto;
  width: 60%;
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
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    width: 85%;
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
    h3 {
      font-size: 20px;
    }
  }
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: row-wrap;
  justify-content: space-between;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  input {
    width: 100%;
    height: 56px;
    padding: 0 10px;
    border: 2px solid #002eff;
    border-radius: 8px;
    margin-top: -15px;
    z-index: 0;
  }
  select {
    width: 100%;
    height: 56px;
    margin-top: 5px;
    padding: 0 10px;
    border: 2px solid #002eff;
    border-radius: 8px;
    margin-top: -15px;
    z-index: 0;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Cell = styled.div`
  width: 33%;
  label {
    font-size: 14px;
    font-weight: 600;
    color: #002eff;
    margin-left: 15px;
    padding: 0 10px;
    background-color: white;
    position: relative;

    &::after {
      content: " *";
      color: orange;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Cell1 = styled(Cell)`
  width: 66%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Cell3 = styled(Cell)`
  width: 100%;
`;

const BoxInfo1 = styled(BoxInfo)`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual tamaño */
  grid-gap: 10px; /* espacio entre columnas */
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  width: 140px;
  height: 48px;
  margin-left: 87%;
  padding: 12px 16px 12px 16px;
  border-radius: 100px;
  border: none;
  background-color: #002eff;
  color: white;
  font-size: 16px;
  @media (max-width: 480px) {
    //cebtrar boton
    margin-left: 10%;
    width: 80%;
  
  }
`;

function CarForm() {
  const [name, setName] = useState({
    name: "",
    seller_rut: "",
    brand: brands[0],
    model: models[brands[0]][0],
    license_plate: "",
    price: "",
  });

  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });

    if (name === "brand") {
      setName({
        ...name,
        brand: value,
        model: models[value][0],
      });
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Comprobar que datos se estan enviando
    console.log(name);
    dispatch(
      addCar({
        ...name,
        id: uuidv4(),
      })
    );
    navigate("/");
  };

  return (
    <div>
      <Banner>
        <h2>
          Formulario <b>de Prueba</b>
        </h2>
        <img src="src/assets/illustration.svg" alt="illustration" />
      </Banner>
      <FullContainer>
        <CenterForm>
          <div>
            <h2>Nuevo formulario</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the bed industry's standard dummy
              text ever since.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h3>Datos del vendedor:</h3>
              <BoxInfo>
                <Cell1>
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={name.name}
                    name="name"
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </Cell1>
                <Cell>
                  <label htmlFor="seller_rut">Rut Vendedor</label>
                  <input
                    type="text"
                    id="seller_rut"
                    value={name.seller_rut}
                    name="seller_rut"
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </Cell>
              </BoxInfo>
              <h3>Datos del vendedor:</h3>
              <BoxInfo1>
                <Cell3>
                  <label htmlFor="license_plate">Patente del vehículo</label>
                  <input
                    type="text"
                    id="license_plate"
                    value={name.license_plate}
                    name="license_plate"
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </Cell3>
                <Cell3>
                  <label htmlFor="brand">Marca del vehículo</label>
                  <select
                    name="brand"
                    id="brand"
                    value={name.brand}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  >
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </Cell3>
                <Cell3>
                  <label htmlFor="model">Modelo</label>
                  <select
                    name="model"
                    id="model"
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  >
                    {models[name.brand].map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </Cell3>
                <Cell3>
                  <label htmlFor="price">Precio del vehículo</label>
                  <input
                    type="text"
                    id="price"
                    value={name.price}
                    name="price"
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </Cell3>
              </BoxInfo1>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </CenterForm>
      </FullContainer>
    </div>
  );
}

export default CarForm;
