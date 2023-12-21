import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function CardModel({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Image data={data.imagePath} />
      <Card.Body>
        <Card.Title>
          <Name data={data.name} />
        </Card.Title>
        <Card.Text>
          <Description data={data.description} />
        </Card.Text>
        <Price data={data.price} />
      </Card.Body>
    </Card>
  );
}

export default CardModel;
