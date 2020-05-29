import React from 'react';

const Modal = (props) => {

    return (
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

        zIndex: '1000',

        width: '80%',

        maxWidth: '20vw',

        maxHeight: '50vh',

        display: 'flex',

        flexDirection: 'column',

        boxShadow: '0 4px 10px rgba(0,0,0,.2)',

        alignSelf: 'center',

        margin: 'auto',

        top: '0',
        left: '0',
        right: '0',
        bottom: '0',

        background: 'rgba(255,255,255,1)',

        borderRadius: '10px'
    }}>
        <button onClick={props.close}>
            X
        </button>
        <h1>Connect your wallet</h1>
        <button onClick={props.connect}>
            MetaMask
        </button>
    </div>
    </>
    );
}

export default Modal;