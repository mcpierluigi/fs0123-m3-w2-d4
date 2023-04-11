import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button, Badge } from "react-bootstrap";

const FavouritesBtn = () => {
  const favourites = useSelector(state => state.favourites.content.length);

  return (
    <Container className="d-flex justify-content-end my-2">
      <Button className="btnfav">
        <Link className="navbar-brand" to="/favourites">
          Favourites
          <span className="ms-2">
            <Badge className="bg-dark">{favourites}</Badge>
          </span>
        </Link>
      </Button>
    </Container>
  );
};

export default FavouritesBtn;
