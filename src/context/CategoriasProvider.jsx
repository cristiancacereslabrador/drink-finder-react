import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    try {
      // const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const url = `${import.meta.env.VITE_COCKTAIL_URL}list.php?c=list`;
      const { data } = await axios(url);
      console.log("data.drinks :>> ", data.drinks);
      setCategorias(data.drinks);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);
  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };
export default CategoriasContext;
