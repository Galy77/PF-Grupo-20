import React, { useState } from 'react';
import { Form, Button, Container  } from 'react-bootstrap';
import style from "./Contact.module.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log('Formulario enviado');
  };

  return (
<>
    <Container className={`d-flex justify-content-center ${style.container}`} style={{ height: '80vh' }}>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '800px' }}>
        <h1>Contactanos</h1>
        <hr />
        <Form.Group controlId="formName">
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribe tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
</>
  );
};

export default Contact;