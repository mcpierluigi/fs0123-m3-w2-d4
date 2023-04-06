import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const Favourites = useSelector(state => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ListGroup variant="flush">
          {Favourites.length > 0 ? (
            Favourites.map((fav, i) => (
              <ListGroup.Item key={i}>
                {fav.company_name}
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: i });
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
