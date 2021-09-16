import PropTypes from 'prop-types';
export default function TechInfo({ message }) {
  return <h2>{message}</h2>;
}

TechInfo.propTypes = {
  // message: PropTypes.string.isRequired,
  message: PropTypes.string,
};
