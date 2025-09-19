'use client';
import {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			'hasError': false
		}
	}

	// errors detected from React related to state
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	// general UI errors detected 
	componentDidCatch(error, errorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
	}

	render() {
	    if (this.state.hasError) {
	      return (
	        <div className="tc pa5">
	          <h2>Something went wrong.</h2>
	          <button 
	            onClick={() => this.setState({ hasError: false })}
	            className="f5 link dim br-pill ph3 pv2 mb2 dib white bg-red"
	          >
	            Try again
	          </button>
	        </div>
	      );
	    }

	    return this.props.children;
  	}
}

export default ErrorBoundary;