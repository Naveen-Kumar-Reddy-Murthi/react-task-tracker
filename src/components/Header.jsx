import PropTypes from 'prop-types';
import Button from './Button';
function Header({title, onAdd, showAdd}) {
    return ( 
        <header className='header'>
        {/* <h1 style= {headingStyple}>{title}</h1> */}
        <h1>{title}</h1>
        <Button color={showAdd? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
     );
}

//const headingStyple = {color:'black', backgroundColor:'white'};
Header.defaultProps ={
    'title' : 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header;