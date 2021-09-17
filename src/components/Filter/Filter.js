import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { InputGroup, FormControl } from 'react-bootstrap';
export default function Filter({ filter, onFindName }) {
  return (
    <>
      {/* <h3>Find contact by name</h3>
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onFindName}
      ></input> */}
      <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Find contact by name</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
          aria-describedby="basic-addon1"
          // className={s.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onFindName}
    />
  </InputGroup>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};
