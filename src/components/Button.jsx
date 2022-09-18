import PropTypes from 'prop-types';
function Button({ color, text, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}

//const headingStyple = {color:'black', backgroundColor:'white'};

Button.defaulProps = {
  color: 'steelblue',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick:PropTypes.func
};
export default Button;
