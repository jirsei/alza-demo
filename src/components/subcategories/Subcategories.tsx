import './Subcategories.scss';
import { useEffect, useState, type ReactNode } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function Subcategories() {
  const [subcategories, setSubcategories] = useState<ReactNode[] | null>(null);

  const subcategoryNames = [
    'Ovládání domácnosti',
    'Chytré zabezpečení',
    'Chytré osvětlení',
    'Chytrá elektroinstalace',
    'Chytré bytové doplňky',
    'Chytré vytápění a chlazení',
    'Chytrá zahrada a dílna',
    'Chytré domácí spotřebiče',
    'Smart Health',
    'Smart Pet',
    'Chytrá elektronika',
    'Philips HUE',
    'Apple HomeKit',
    'Google Assistant',
    'Amazon Alexa',
    'Tuya',
    'Matter',
    'AI, umělá inteligence',
    'Roboti',
  ];

  useEffect(() => {
    setSubcategories(
      [...subcategoryNames].map((value: string, index: number) => (
        <Col
          className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-1"
          key={index}
        >
          <Button
            className="subcategory p-1"
            onClick={() =>
              console.log('"' + value + '"' + ' subcategory button clicked')
            }
          >
            <div className="name align-content-center">{value}</div>
          </Button>
        </Col>
      )),
    );
  }, []);

  return (
    <Col className="subcategories w-100">
      <Row>{subcategories}</Row>
    </Col>
  );
}

export default Subcategories;
