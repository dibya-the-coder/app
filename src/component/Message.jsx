import {useEffect, useState} from "react";
import './css/message.css'
import PropTypes from 'prop-types'

const Message = ({type, message}) => {
    const [style, setStyle] = useState('');

    useEffect(() => {
        if(type) setStyle('success')
        else setStyle('failure')
    }, []);


    return (
        <div className={`${style} msg`}>
            <p>{message}</p>
        </div>
    );
};

Message.propTypes = {
    type: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
}

export default Message;