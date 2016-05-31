import React from 'react';
import { render } from 'react-dom';
import { twitterSDK } from '../sdk/twitter';

export default class TwitterButton extends React.Component {

    componentDidMount() {
        twitterSDK(document, 'script', 'twitter-wjs');
    }

    render() {

        let { className, url, dataSize, showScreenName } = this.props;

        return(
            <div>
                <a
                    className = {className}
                    href = {url}
                    data-size = {dataSize}
                    data-show-screen-name= {showScreenName} >
                    Follow @MTVNews
                </a>
            </div>
        );
    }
}

TwitterButton.propTypes = {
	className : React.PropTypes.string,
	url : React.PropTypes.string,
    dataSize : React.PropTypes.string,
    showScreenName : React.PropTypes.bool
}
