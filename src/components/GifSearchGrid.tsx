import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";

type Props = {};

export const GifSearchGrid: React.FC<Props> = (props) => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    const fetchGifs = async () => {
      let fetchGifResp = null;
      setIsLoading(true);
      try {
        fetchGifResp = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=Ugb5ctrsKDB0NoK9iAqLrh5yszy9PXlt&q=${search}&limit=10`
        );
        const fetchJson = await fetchGifResp.json();
        setState(fetchJson.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        alert("oops, there was an error");
      }
    };
    if (!!search) {
      fetchGifs();
    }
  }, [search]);

  const sortedResults =
    sort === "asc"
      ? state.sort((a: any, b: any) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        )
      : state.sort((a: any, b: any) =>
          b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1
        );

  return (
    <div style={{ padding: 20 }}>
      <Button
        style={{ marginBottom: 10 }}
        onClick={() => setSort((s) => (s === "asc" ? "dsc" : "asc"))}
      >
        {" "}
        {sort}{" "}
      </Button>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="text"
        id="search"
        aria-describedby="passwordHelpBlock"
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Search for a gif
      </Form.Text>

      {isLoading && <h2>Loading...</h2>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "auto",
          gridGap: 20,
        }}
      >
        {sortedResults.length &&
          sortedResults.map((el: any) => (
            <Link key={el.id} to={`/detail/${el.id}`}>
              <div>
                <video
                  autoPlay
                  src={el.images.preview.mp4}
                  style={{ objectFit: "cover", height: 100, width: 100 }}
                />
                <p style={{ fontSize: 12 }}>{el.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
