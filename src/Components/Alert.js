import React from 'react';
import './Alert.css';

const Alert = (props) => {

    return(
        <div className="alert">
            <span className="closebtn">&times;</span> 
                    {props.message}
        </div>
    )

}


export default Alert;