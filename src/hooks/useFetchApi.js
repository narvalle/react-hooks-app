import { useEffect, useRef, useState } from 'react';

export const useFetchApi = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    err: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  },[]);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      err: null,
    });

    fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        setState({
          data: null,
          err,
          loading: false,
        });
      })
      .then((data) => {
        if (isMounted.current) {
          setState({
            data,
            err: null,
            loading: false,
          });
        }
      });
  }, [url]);

  return state;
};
