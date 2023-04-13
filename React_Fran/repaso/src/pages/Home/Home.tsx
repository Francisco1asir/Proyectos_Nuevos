import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Home() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Amafron</Modal.Title>
        </Modal.Header>
<img src="https://talently.tech/blog/wp-content/uploads/2020/12/bolsa-de-trabajo-de-amazon-para-programadores-1200x900.jpg" alt="" />
      </Modal>
    </div>
  );
}

export default Home;
