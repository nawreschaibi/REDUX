import { EDIT_TASK } from "../const/Const";
import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import {editTask} from '../Redux/Actions/Action'
import {} from 'react-redux'


function Edit({item}) {
    const [show, setShow] = useState(false);
    const [editedText, setNewText] = useState(item.text)
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          EDIT
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input type='text' value={editedText}
          onChange={(e)=>setIditedtext(e.target.value)}>
          </input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>dispatch(editTask({id:item.id,text:editedText}))}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Edit  