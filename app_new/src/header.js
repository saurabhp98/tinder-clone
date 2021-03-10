import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function header() {
    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img src="https://png2.cleanpng.com/sh/9313104ce7c3606f7af7457b36d7320f/L0KzQYm3VMA4N6lofZH0aYP2gLBuTgRqdpVqip91b3fyPbT2jgB2fJZ3Rdtsb372PbP8jfJtbV5yedDwbz35dbT7jCIuPZJoUNQ7NEi2QLa6gsAvO2oASKIBMkC0RYO6UcAzOmk1SqI5Mz7zfri=/kisspng-tinder-logo-computer-icons-bumble-mango-vector-5ac8b24830e3b0.3990062015231022802003.png" alt="its logo"
            className="header_logo" />
            <IconButton>
                 <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
            
            
        </div>
    )
}

export default header;
