import React from 'react';
import { render } from 'react-dom';
import { fbSDK } from '../sdk/facebook';

export default class FacebookButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {initialized: false};
    }

    initializeSDK = () => {
        this.setState({initialized: true})
    }

    componentDidMount() {
        if(this.state.initialized === true)
        {
            return;
        }
        else
        {
            fbSDK(document, 'script', 'facebook-jssdk');
        }

        this.initializeSDK();
    }

    render() {
        let { className, url, layout, action, share } = this.props;

        return(
            <div>
                <div
                    className = {className}
                    data-href = {url}
                    data-layout = {layout}
                    data-action = {action}
                    data-share = {share}>
                    Like MTV News
                </div>
            </div>
        );
    }
}

FacebookButton.propTypes = {
	className : React.PropTypes.string,
	url : React.PropTypes.string,
    layout : React.PropTypes.string,
    action : React.PropTypes.string,
    share : React.PropTypes.bool
}
