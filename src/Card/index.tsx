import CardComponent from "./Card";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

type CardType = typeof CardComponent;

interface Card extends CardType {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

const Card = CardComponent as Card;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export * from "./Card";
export default Card;
