import React from 'react';
import { render } from 'react-dom';
import { googleSDK } from '../sdk/google';

export default class YoutubeButton extends React.Component {

    componentDidMount() {
        googleSDK(document, 'script');
    }

    render() {

        let { className, url, channelId, layout, count } = this.props;

        return(
            <div>
                <div
                    className = {className}
                    data-channelid = {channelId}
                    data-layout = {layout}
                    data-count = {count}>
                    <a href={url}>Subscribe to MTV News</a>
                </div>
            </div>
        );
    }
}

YoutubeButton.propTypes = {
    className : React.PropTypes.string,
    url : React.PropTypes.string,
    channelId : React.PropTypes.string,
    layout : React.PropTypes.string,
    count : React.PropTypes.string
}
