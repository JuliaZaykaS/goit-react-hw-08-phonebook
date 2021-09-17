import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { Button, ListGroup } from 'react-bootstrap';

export default function ContactList({ contacts, onBtnClick }) {
  return (
    <ListGroup variant="flush" className={s.contactList}>
    {/* // <ListGroup className={s.contactList}> */}
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item key={id} variant="warning">
          <span className={s.contactInfo} >
          {name}: {number}
        </span>
          <Button variant="outline-danger" onClick={() => onBtnClick(id)}>Delete</Button>
        </ListGroup.Item>
      ))}
  
</ListGroup>
     
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
