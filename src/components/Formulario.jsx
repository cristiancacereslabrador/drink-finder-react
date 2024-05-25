import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "Tequila",
    categoria: "Shot",
  });
  const [alerta, setAlerta] = useState("");
  const { categorias } = useCategorias();
  const { consultarBebida } = useBebidas();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("All fields are required");
      return;
    }
    setAlerta("");
    consultarBebida(busqueda);
  };
  useEffect(() => {
    consultarBebida(busqueda);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && (
        <Alert className="text-center" variant="danger">
          {alerta}
        </Alert>
      )}
      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Drink Name</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              className="shadow"
              placeholder="Ex.: Tequila, Vodka, Ron, etc."
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          {" "}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Category Drink</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria" //nombre?
              className="shadow"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option value="">-- Select Category --</option>
              {categorias.map((cat) => (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className="d-flex align-items-center pt-3">
          <Button
            className="text-uppercase w-100 shadow button-pressed d-flex align-items-center element-hover"
            variant="primary"
            type="submit"
          >
            Search Drinks
          </Button>
        </Col>
      </Row>
      {/* <Row className="justify-content-end">
      </Row> */}
    </Form>
  );
};

export default Formulario;
