import { useEffect, useState } from 'react';

export const useFetchApi = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    err: null,
  });

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
          data:null,
          err,
          loading: false,
        });
      })
      .then((data) => {
        setState({
          data,
          err:null,
          loading: false,
        });
      });
      
  }, [url]);

  return state;
};
