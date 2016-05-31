import React from 'react';
import { render } from 'react-dom';
import { instagramSDK } from '../sdk/instagram';
import styles from '../../styles/instagram.css';

export default class InstagramButton extends React.Component {

    componentDidMount() {
        instagramSDK(document, 'script');
    }

    render() {

        let { className, url} = this.props;

        return(
            <div>
                {/*<span
                    className="ig-follow"
                    data-id="5479dee"
                    data-handle="mtvnews"
                    data-count="true"
                    data-size="small"
                    data-username="false">
                    Like MTV News
                </span>*/}
                <a href={url} className={className}>
                    <img src="//badges.instagram.com/static/images/ig-badge-view-24.png" alt="Instagram" />
                </a>
            </div>
        );
    }
}

InstagramButton.propTypes = {
    url : React.PropTypes.string,
    className : React.PropTypes.string
}
