// import React from 'react';
// import { Modal, Button, Card, Form } from 'react-bootstrap';

// function PasswordModal(props) {
//   const { character, show, handleClose, password, setPasswordHelper, setFormVisible, setShowFormModal, redirectToScripts, setRedirectToScripts, handlePasswordSubmit, showFormModal, handleFormModalClose, handleFormSubmit } = props;

//   if (!character) return null;

//   const handleFormButtonClick = () => {
//     setFormVisible(true);
//     setShowFormModal(true);
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{character.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Card>
//             <Card.Img variant="top" src={character.image_url} />
//             <Card.Body>
//               <Card.Text>{character.description}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Modal.Body>
//         <Modal.Footer>
    
//           {(character._id !== 1 && character._id !== 2) && (
//             <Button variant="primary" onClick={handleFormButtonClick}>
//               Submit Password
//             </Button>
//           )}
//         </Modal.Footer>
//       </Modal>

//       <Modal show={showFormModal} onHide={handleFormModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Enter Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Group controlId="formPassword">
//               <Form.Control
//                 type="password"
//                 value={password}
//                 onChange={setPasswordHelper}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default PasswordModal;

import React from 'react';
import { Modal, Button, Card, Form } from 'react-bootstrap';

function PasswordModal(props) {
  const { character, show, handleClose, password, setPasswordHelper, setFormVisible, setShowFormModal, redirectToScripts, setRedirectToScripts, handlePasswordSubmit, showFormModal, handleFormModalClose, handleFormSubmit } = props;

  if (!character) return null;

  const handleFormButtonClick = () => {
    setFormVisible(true);
    setShowFormModal(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={character.image_url} />
            {/* <Card.Body>
              <Card.Text>{character.description}</Card.Text>
            </Card.Body> */}
          </Card>
        </Modal.Body>
        <Modal.Footer>
    
          {(character._id !== 1 && character._id !== 2) && (
            <Button variant="primary" onClick={handleFormButtonClick}>
              Submit Password
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showFormModal} onHide={handleFormModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                value={password}
                onChange={setPasswordHelper}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PasswordModal;
