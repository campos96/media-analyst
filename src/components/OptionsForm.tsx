import { ChangeEvent, useState } from "react";
import {
  Badge,
  Card,
  Col,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import RadioButtonGroup from "./RadioButtonGroup";
import CheckboxButtonGroup from "./CheckboxButtonGroup";

import genres from "../genres";
import ratings from "../ratings";

const results = [
  "Having less than two similarities renders the rating of  Off Topic.",
  "Having similarity in two of the three categories renders the rating of Acceptable.",
  "Having similarity in the three aspects renders the rating of Good.",
];

type Variable = {
  type: string;
  value: string | undefined;
};

const OptionsForm = () => {
  const [genresA, setGenresA] = useState<Array<string>>([]);
  const [genresB, setGenresB] = useState<Array<string>>([]);

  const [ratingA, setRatingA] = useState<string | undefined>();
  const [ratingB, setRatingB] = useState<string | undefined>();
  const [result, setResult] = useState<string | undefined>();

  const [cast, setCast] = useState<string | undefined>();
  const [director, setDirector] = useState<string | undefined>();
  const [studio, setStudio] = useState<string | undefined>();

  const [themeA, setThemeA] = useState<string | undefined>();
  const [themeB, setThemeB] = useState<string | undefined>();

  const [similar, setSimilar] = useState<boolean>();

  const similarGenres = genresA.filter((genre) => genresB.includes(genre));

  const variables = [
    { type: "cast", value: cast },
    { type: "director", value: director },
    { type: "studio", value: studio },
  ] as Array<Variable>;

  const handleGenresAOnchange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    if (genresA.includes(value)) {
      const genres = genresA.filter((genre) => genre !== value);
      setGenresA(genres);
    } else {
      const genres = [...genresA];
      genres.push(value);
      setGenresA(genres);
    }
  };

  const handleGenresBOnchange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    if (genresB.includes(value)) {
      const genres = genresB.filter((genre) => genre !== value);
      setGenresB(genres);
    } else {
      const genres = [...genresB];
      genres.push(value);
      setGenresB(genres);
    }
  };

  const handleOnchangeResult = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setResult(value);
  };

  const handleRatingAOnchange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setRatingA(value);
  };

  const handleRatingBOnchange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setRatingB(value);
  };

  function handleChangeCast(event: ChangeEvent<HTMLInputElement>): void {
    setCast(event.target.value !== "" ? event.target.value : undefined);
  }

  function handleChangeDirector(event: ChangeEvent<HTMLInputElement>): void {
    setDirector(event.target.value !== "" ? event.target.value : undefined);
  }

  function handleChangeStudio(event: ChangeEvent<HTMLInputElement>): void {
    setStudio(event.target.value !== "" ? event.target.value : undefined);
  }

  function handleChangeThemeA(event: ChangeEvent<HTMLInputElement>): void {
    setThemeA(event.target.value !== "" ? event.target.value : undefined);
  }

  function handleChangeThemeB(event: ChangeEvent<HTMLInputElement>): void {
    setThemeB(event.target.value !== "" ? event.target.value : undefined);
  }

  function handleOnChangeSimilar(event: ChangeEvent<HTMLInputElement>): void {
    setSimilar(event.target.value === "true");
  }

  return (
    <Row>
      <Col>
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Result</Card.Title>
            <RadioButtonGroup
              list={ratings}
              selected={ratingA}
              name="rating-a"
              onChange={handleRatingAOnchange}
            />
            <hr />
            <CheckboxButtonGroup
              list={genres}
              selected={genresA}
              name="genres-a"
              onChange={handleGenresAOnchange}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Intent</Card.Title>
            <RadioButtonGroup
              list={ratings}
              selected={ratingB}
              name="rating-b"
              onChange={handleRatingBOnchange}
            />
            <hr />
            <CheckboxButtonGroup
              list={genres}
              selected={genresB}
              name="genres-b"
              onChange={handleGenresBOnchange}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Row>
          <Col>
            <Card className="shadow mt-3">
              <Card.Body>
                {ratingA && (
                  <Badge bg={ratingA === ratingB ? "success" : "secondary"}>
                    {ratingA}
                  </Badge>
                )}
                <hr />
                {genresA.sort().map((genre) => (
                  <Badge
                    bg={genresB.includes(genre) ? "primary" : "secondary"}
                    className="me-1"
                    key={`span-genre-a-${genre}`}
                  >
                    {genre}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow mt-3">
              <Card.Body>
                {ratingB && (
                  <Badge bg={ratingA === ratingB ? "success" : "secondary"}>
                    {ratingB}
                  </Badge>
                )}
                <hr />
                {genresB.sort().map((genre) => (
                  <Badge
                    bg={genresA.includes(genre) ? "primary" : "secondary"}
                    className="me-1"
                    key={`span-genre-b-${genre}`}
                  >
                    {genre}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col md={12}>
        <Card className="shadow mt-3">
          <Card.Body>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="cast">Cast:</Form.Label>
                  <Form.Control
                    type="text"
                    id="cast"
                    value={cast}
                    onChange={handleChangeCast}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="director">Director:</Form.Label>
                  <Form.Control
                    type="text"
                    id="director"
                    value={director}
                    onChange={handleChangeDirector}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="studio">Studio:</Form.Label>
                  <Form.Control
                    type="text"
                    id="studio"
                    value={studio}
                    onChange={handleChangeStudio}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Card className="shadow mt-3">
          <Card.Body>
            <Row>
              <Col md={12}>
                <ToggleButtonGroup
                  name="similar"
                  type="radio"
                  className="d-inline"
                >
                  <ToggleButton
                    id="similar-yes"
                    key="similar-yes"
                    value="true"
                    onChange={handleOnChangeSimilar}
                    variant="outline-success"
                  >
                    Yes
                  </ToggleButton>
                  <ToggleButton
                    id="similar-no"
                    key="similar-no"
                    value="false"
                    onChange={handleOnChangeSimilar}
                    variant="outline-danger"
                  >
                    No
                  </ToggleButton>
                </ToggleButtonGroup>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="theme-a">Result:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    id="theme-a"
                    value={themeA}
                    onChange={handleChangeThemeA}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="theme-b">Intent:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    id="theme-b"
                    value={themeB}
                    onChange={handleChangeThemeB}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12}>
        <Card className="shadow mt-3">
          <Card.Body>
            <RadioButtonGroup
              list={results}
              name="result-list"
              selected={result}
              onChange={handleOnchangeResult}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col md={12}>
        <Card className="shadow mt-3">
          <Card.Body>
            {ratingA !== undefined &&
              ratingA === ratingB &&
              similarGenres.length > 0 && (
                <span>
                  Both titles share target audience; both are rated: {ratingA}
                  <span>
                    {" "}
                    and share the genres:{" "}
                    {similarGenres.map((genre) => (
                      <span>{genre}, </span>
                    ))}{" "}
                  </span>
                </span>
              )}

            {ratingA !== undefined &&
              (ratingA !== ratingB || similarGenres.length === 0) && (
                <span>
                  They don't share target audience, the result is rated:{" "}
                  {ratingA}, genre:{" "}
                  {genresA.map((genre) => (
                    <span>{genre}, </span>
                  ))}{" "}
                  and the intent is rated: {ratingB}, genre:{" "}
                  {genresB.map((genre) => (
                    <span>{genre}, </span>
                  ))}{" "}
                </span>
              )}

            <br />

            {cast === undefined &&
              director === undefined &&
              studio === undefined && (
                <span>
                  They do not share factual aspects such as cast, director or
                  studio.
                </span>
              )}

            {variables.filter((variable) => variable.value !== undefined)
              .length > 0 && (
              <span>
                Both titles share factual aspects such as
                {variables
                  .filter((variable) => variable.value !== undefined)
                  .map((variable) => (
                    <span>
                      {" "}
                      {variable.type}: {variable.value},
                    </span>
                  ))}
              </span>
            )}

            {similar && <p>The theme is similar both {themeA}</p>}

            {!similar && (
              <p className="mb-0">
                The theme is different, the result is about {themeA} and the
                other is about {themeB}
              </p>
            )}

            {result && <p>{result}</p>}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default OptionsForm;
