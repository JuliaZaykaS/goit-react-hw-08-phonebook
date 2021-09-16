import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onBtnClick }) {
  return (
    <ol className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactItem} key={id}>
          <span className={s.contactInfo}>
            {name}: {number}
          </span>
          <button
            className={s.button}
            type="button"
            onClick={() => onBtnClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
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
