import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

function Home (){
    const categories = useSelector(state => state.categories);
    return (
        <Row xs={1} md={2} className="g-4 justify-content-center">
      {categories.map((category) => (
        <Col md={5}>
          <Card>
            <Card.Img variant="top" src={category.img} />
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    )
}

export default Home;