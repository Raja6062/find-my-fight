import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FilterModal = (props) => {
    return (
        <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
                </Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                <h2>Filter</h2>
                <Form>
                <Form.Group className="mb-3 filterCheckbox" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="User Name" />
                    <Form.Check type="checkbox" label="#tags" />
                </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Type here" />
                  </Form.Group>
                  <h3>Category</h3>

                  <Form.Group className="mb-3 filterCheckbox filterBtmCheck" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Gym" />
                    <Form.Check type="checkbox" label="Trainer" />
                    <Form.Check type="checkbox" label="Athlete" />
                    <Form.Check type="checkbox" label="Business" />
                    <Form.Check type="checkbox" label="Promotions" />
                    <Form.Check type="checkbox" label="Community" />
                    <Form.Check type="checkbox" label="Officials" />
                </Form.Group>
      
                  <Button variant="primary" type="submit">
                      Search
                  </Button>
                  </Form>
              </Modal.Body>
              {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer> */}
            </Modal>
    )
}

export default FilterModal;
