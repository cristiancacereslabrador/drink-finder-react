import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaID, setBebidaID] = useState(null);
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    const obtenerReceta = async () => {
      if (!bebidaID) null;
      try {
        // const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaID}`;
        const url = `${
          import.meta.env.VITE_COCKTAIL_URL
        }lookup.php?i=${bebidaID}`;
        const { data } = await axios(url);
        // console.log("data :>> ", data.drinks[0]);
        // setReceta(data.drinks[0]);
        console.log("data:", data);
        console.log("data.drinks:", data.drinks);
        if (data.drinks && data.drinks.length > 0 && data.drinks[0]) {
          // Verificar si data.drinks tiene datos y el primer elemento no es null

          // Verificar si data.drinks tiene datos
          console.log("data :>> ", data.drinks[0]);
          setReceta(data.drinks[0]);
        } else {
          console.log("No se encontraron bebidas");
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setCargando(false);
      }
    };
    obtenerReceta();
  }, [bebidaID]);

  const consultarBebida = async (datos) => {
    try {
      // const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
      const url = `${import.meta.env.VITE_COCKTAIL_URL}filter.php?i=${
        datos.nombre
      }&c=${datos.categoria}`;

      const { data } = await axios(url);
      // console.log("dataConsultada", data.drinks);
      setBebidas(data.drinks);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaIDClick = (id) => {
    setBebidaID(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        bebidas,
        modal,
        consultarBebida,
        handleModalClick,
        handleBebidaIDClick,
        receta,
        cargando,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
