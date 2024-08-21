import {useState} from "react";
import './css/message.css'
import PropTypes from 'prop-types'

const Message = ({type, message}) => {
    const [style, setStyle] = useState('');
    if(type) setStyle('success')
    else setStyle('failure')
    console.log('called')
    return (
        <div className={`${style} msg`}>
            <h3>{message}</h3>
        </div>
    );
};

Message.propTypes = {
    type: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}

export default Message;