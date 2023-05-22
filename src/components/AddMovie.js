import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddMovie = ({ addMovie }) => {

    // modal show / hide
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

// 1. title input value
  const [title, setTitle] = useState("");
// 2.  get the input value from input while typing (onchange event)
  const handleTitle = (e) => {
// 3.  using setTitle: updating title with new value
    setTitle(e.target.value);
  };
//   ----------------------------------------------


// same work here
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [posterUrl, setPosterUrl] = useState("");

  const handleDesct = (e) => {
    setDescription(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handlePoster = (e) => {
    setPosterUrl(e.target.value);
  };
// ----------------------------------------
// 4. create a function that create a new Object called newMovie contains all new values
// (title, desc, poster ,rate)
  const handleMovie = () => {
    let newMovie = {
      title,
      description,
      rate,
      posterUrl,
    };
    // 5.  send new movie to addMovie function in app.js and execut it 
    addMovie(newMovie);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>movie title</Form.Label>
            <Form.Control onChange={handleTitle} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>movie description</Form.Label>
            <Form.Control onChange={handleDesct} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>movie rating</Form.Label>
            <Form.Control onChange={handleRate} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>movie poster</Form.Label>
            <Form.Control onChange={handlePoster} />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
