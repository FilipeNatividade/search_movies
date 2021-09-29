import { createContext, useContext, useEffect, useState } from "react";
import Api from "../../api";

const StateContext = createContext();

export const StatePtoviders = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data)
  const [movieSelected, setMovieSelected] = useState({});
  const [idMovie, setIdMovie] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [count, SetCount] = useState(1);
 
  useEffect(() => {
    Api.get(`?&apikey=69630ed6&s=${title}&page=${count}`).then((response) => {
      setPages(Math.ceil(Number(response.data.totalResults) / 10));
      setData(response.data.Search);
    });

  }, [title, count]);

  return (
    <StateContext.Provider
      value={{
        data,
        setData,
        movieSelected,
        setMovieSelected,
        idMovie,
        setIdMovie,
        inputValue,
        setInputValue,
        title,
        setTitle,
        pages,
        setPages,
        count,
        SetCount,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateProvider = () => useContext(StateContext);