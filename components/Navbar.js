import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {

    return (
        <>
        <div className='wrapper' style={{
            background: '#000'
        }}>
            <a href="/">
                <span>ElastStorage</span>
            </a>
            <Link href="/dashboard">
                <a>Visit your dashboard</a>
            </Link>
            {props.loggedIn ? <p>
                address: {props.address},
            <button onClick={props.logout}>logout</button>
            </p> : null}
            <style jsx global>
                {`
                    * {
                        margin: 0 auto;
                        padding: 0;
                    }

                    a {
                        color: #FFF;
                        text-decoration: none;
                    }

                    p {
                        color: #FFF;
                    }
                `}
            </style>
        </div>
        </>
    )
}

export default Navbar;