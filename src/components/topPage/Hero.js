import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FillExample() {
  return (
    <div className="hero">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/hotels">Hotel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Flight</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form className="search-field d-flex">
        <Form.Control
          type="search"
          placeholder="Where are you going?"
          className="rounded-0 w-25"
          aria-label="Search"
        />
        <div>
          <span>date - date</span>
        </div>
        <div>
          <span>2 adults 2 children 1 room</span>
        </div>
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}

export default FillExample;
