import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  // cuando es montado inicia en true
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // cuando es desmontado se declara false
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setState si todavía está montado
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log(
            "setState() no se llamó debido a que el componente fue desmontado mientras se realizaba el fetch"
          );
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: `No se pudo cargar la info.`,
        });
      });
  }, [url]);

  return state;
};
