import { Row } from "react-bootstrap";
import React from "react";
import useBebidas from "../hooks/useBebidas";
import Bebida from "./Bebida";

const ListadoBebidas = () => {
  const { bebidas } = useBebidas();
  // console.log("LISTADO BEBIDAS bebidasidDrink", bebida.idDrink);
  return (
    <Row className="mt-5">
      {bebidas.map((bebida) => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  );
};

export default ListadoBebidas;
