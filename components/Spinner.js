import React from 'react';

const Spinner = (props) => {

    return(
        <>
        <div style={{
            filter: 'blur(2px)',
        background: 'rgba(0,0,0,0.575)',
        position: 'fixed',
        zIndex: '1',
        paddingTop: '100px',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto'
        }}>
        </div>
        <div style={{
              position: 'fixed',
            margin: 'auto',
              zIndex: '1000',
              display: 'flex',
              alignSelf: 'center',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              color: '#FFF',
              fontSize: '56px'
        }}>
            you are not authorized to view this page. try connecting your wallet again.
        </div>
        </>
 )
}

export default Spinner;