import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIDClick } = useBebidas();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4 element-hover">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          {/* <Card.Text>Algo mas...</Card.Text> */}
          <Button
            className="w-100 text-uppercase mt-2 shadow button-pressed element-hover"
            style={{ fontWeight: "bold" }}
            variant={"warning"}
            onClick={() => {
              handleModalClick();
              handleBebidaIDClick(bebida.idDrink);
            }}
          >
            See Recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
