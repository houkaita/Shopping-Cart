import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/FormatCurrency";
import { Button } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export function StoreItem({ id, title, price, image }: StoreItemProps) {
  const quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="300px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5">{title}</span>
          <span className="fs-5 ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-4">{quantity}</span> in the Cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
