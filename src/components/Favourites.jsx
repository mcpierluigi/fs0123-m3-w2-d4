import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector(state => state.favourites.content);
  const dispatch = useDispatch();
  console.log(favourites);

  return (
    <Row>
      <Col sm={12}>
        <ListGroup variant="flush">
          {favourites.length > 0 ? (
            favourites.map((fav, i) => (
              <ListGroup.Item key={i} className="listaFav">
                {fav}
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: fav });
                  }}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>You don't have favourites 😒</ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Favourites;
