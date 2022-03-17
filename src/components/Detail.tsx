import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

export const Detail: React.FC<Props> = (props) => {
  const [state, setState] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGifs = async () => {
      let fetchGifResp = null;
      setIsLoading(true);
      try {
        fetchGifResp = await fetch(
          `https://api.giphy.com/v1/gifs/${id}?api_key=Ugb5ctrsKDB0NoK9iAqLrh5yszy9PXlt`
        );
        const fetchJson = await fetchGifResp.json();
        setState(fetchJson.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        alert("oops, there was an error");
      }
    };
    if (!!id) {
      fetchGifs();
    }
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      {state && (
        <>
          <video
            autoPlay
            src={state.images.preview.mp4}
            style={{ objectFit: "cover", height: 400, width: 400 }}
          />
          <h2>{state.title}</h2>
          <a href={state.url}>{state.url}</a>
        </>
      )}
    </div>
  );
};
