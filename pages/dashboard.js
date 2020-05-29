import React, { Component } from 'react';

import Router from 'next/router';
import Link from 'next/link';

import Spinner from '../components/Spinner';

import {delay} from '../utils';

class DashboardPg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            walletAddress: null,
            loading: true,
        }
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    componentDidMount = async () => {
        
        var accountAddress = await localStorage.getItem('account');
        accountAddress ? this.setState({ loading: false}) : null;
        accountAddress ? this.setState({ walletAddress: accountAddress}) : this.redirectToHome();
        
    };

    redirectToHome = async () => {
        // await toastify message, saying you are not authed or a loading spinner.
        await delay(4000);
        this.setState({ loading: false });
        Router.push('/');
    };

    render() {
        return (
            <>
                {this.state.loading ? <Spinner/> : null}
                <Link href="/">
                    <a>return to homepage</a>
                </Link>
                <p>{this.state.walletAddress ? this.state.walletAddress : null }</p>
                <h2>Dashboard</h2>
            </>
        )
    }
};

export default DashboardPg;