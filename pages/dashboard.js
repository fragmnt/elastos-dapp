import React, { Component } from 'react';
import Link from 'next/link';

class DashboardPg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            walletAddress: null,
        }
    }

    componentDidMount = async () => {
        var accountAddress = await localStorage.getItem('account');
        accountAddress ? this.setState({ walletAddress: accountAddress}) : null
    };

    render() {
        return (
            <>
                <Link href="/">
                    return to homepage
                </Link>
                {this.state.walletAddress ? this.state.walletAddress : null }
                <h2>Dashboard</h2>
            </>
        )
    }
};

export default DashboardPg;