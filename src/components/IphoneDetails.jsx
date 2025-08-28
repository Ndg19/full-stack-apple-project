import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import FourO4 from "../pages/FourO4/FourO4";

const IphoneDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/iphones/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchPhone();
  }, [id]);

  if (product) {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg rounded-4">
            <Card.Img
              variant="top"
              src={product.product_img}
              alt={product.product_name}
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="fs-2 fw-bold text-center mb-3">
                {product.product_name}
              </Card.Title>

              <Card.Subtitle className="text-muted text-center mb-3">
                {product.product_brief_description}
              </Card.Subtitle>

              <Card.Text className="mb-4">
                {product.product_description}
              </Card.Text>

              <h5 className="text-success fw-bold">
                Starting Price: {product.starting_price}
              </h5>
              <p className="text-secondary">{product.price_range}</p>

              <div className="d-flex justify-content-between mt-4">
                <Button
                  variant="secondary"
                  onClick={() => navigate(-1)} // go back to product list
                >
                  ⬅ Back to Products
                </Button>

                <Button
                  variant="primary"
                  href={product.product_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Apple
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}else{
return < FourO4 />
}
};

export default IphoneDetails;
