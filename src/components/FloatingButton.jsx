import React from 'react';
import Add from '@material-ui/icons/Add';

const FloatingButton = () => {
    return (
        <div className="floating-btn">
          <a>
              <Add style={{height: 40, width: 40}}/>
          </a>
        </div>
    )
}

export default FloatingButton;

