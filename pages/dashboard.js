import React, { Component } from 'react';
import Link from 'next/link';

class DashboardPg extends Component {

    render() {
        return (
            <>
                <Link href="/">
                    return to homepage
                </Link>
                <h2>Dashboard</h2>
            </>
        )
    }
};

export default DashboardPg;