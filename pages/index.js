import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from 'next/router';

import Web3 from 'web3';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';

class IndexPg extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			toggled: false,
			walletAddress: null
		}
		this.connectWallet = this.connectWallet.bind(this);
		this.checkAuth = this.checkAuth.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.logout = this.logout.bind(this);
	}

	connectWallet = async () => {
		localStorage.clear()
		let eth = window.ethereum;
		try {
			const web3 = new Web3(eth);
			await eth.enable();
			const accounts = await web3.eth.getAccounts();
			
			this.setState({ walletAddress: accounts[0] });
			localStorage.setItem('account', accounts[0]);
			Router.push('/dashboard');

			// ABI, Contract - Connect to SpendPool Pod
			const abi = await web3.eth.abi.encodeFunctionSignature();

			this.toggleModal;
		} catch (err) {
			console.log(err);
		}
	};

	checkAuth = async () => {
		var account = await localStorage.getItem('account');
		await account ? this.setState({ isLoggedIn: true }) : this.setState({ isLoggedIn: false});
		if (this.state.isLoggedIn === true) {
			this.setState({ walletAddress: account });
			// pass address to navbar
		} else {
			return;
		}
	}

	toggleModal = () => {
		this.setState({toggled: !this.state.toggled});
	};

	closeModal = (e) => {
		this.setState({
			toggled: false
		});
	}

	logout = () => {
		localStorage.clear();
		// refresh page or window
	}

	componentDidMount = () => {
		window.document.title = "ElastStorage";
		this.checkAuth();
	}

	componentWillUnmount = () => {

	};

	render() {
		return (
		<>
			<Navbar
				loggedIn={this.state.isLoggedIn}
				logout={this.logout}
				address={this.state.walletAddress}
			/>
			{this.state.toggled ? <Modal connect={this.connectWallet} close={this.closeModal}/> : null}
			<h1>Elastic Storage</h1>
			<p>A elastOS dApp built on top of Ionic and Hive with Trinity plugins.</p>
			<button onClick={this.toggleModal}>
				Connect your Metamask wallet
			</button>
		</>);
	}

}

export default IndexPg;
