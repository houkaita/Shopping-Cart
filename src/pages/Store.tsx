import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem"

type ProductsTypes = {
    id: number;
    title: string;
    price: number;
    image: string;
  };

export function Store() {
  const [products, setProducts] = useState<ProductsTypes[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.map(e => (
          <Col key={e.id}>
            <StoreItem {...e} />
          </Col>
        ))}
      </Row>
    </>
  );
}
