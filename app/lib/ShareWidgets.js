import React from 'react';
import { render } from 'react-dom';
import FacebookButton from './widgets/FacebookButton';
import TwitterButton from './widgets/TwitterButton';
import YoutubeButton from './widgets/YoutubeButton';
import InstagramButton from './widgets/InstagramButton';
import { config } from './config/config';
import styles from '../styles/main.css';

export default class ShareWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                    showButton: false,
                    followButtons: '',
                    click: false
                    };
    }

    handleMouseEnter = (e) => {
        this.setState({showButton: true});
        e.preventDefault();
    }

    handleMouseLeave = (e) => {
        this.setState({showButton: false});
        e.preventDefault();
    }

    componentDidUpdate() {
        if (typeof(FB) != 'undefined' && FB != null )
        {
            FB.XFBML.parse();
        }

        if (typeof(twttr) != 'undefined' && twttr != null )
        {
            twttr.widgets.load();
        }
    }

    render() {

        if (this.state.showButton) {
            this.state.followButtons =  <div>
                                            <FacebookButton
                                                url = "http://www.mandalapa.com"
                                                className = "fb-share-button"
                                                layout = "button" />
                                            <TwitterButton
                                                url = {config.twitter.options.url}
                                                className = {config.twitter.options.className}
                                                dataSize = {config.twitter.options.dataSize}
                                                showScreenName = {config.twitter.options.showScreenName} />
                                            <YoutubeButton
                                                url = {config.youtube.options.url}
                                                className = {config.youtube.options.className}
                                                channelId = {config.youtube.options.channelId}
                                                layout = {config.youtube.options.layout}
                                                count = {config.youtube.options.count} />
                                            <InstagramButton
                                                url = {config.instagram.options.url}
                                                className = {config.instagram.options.className} />
                                        </div>;
        }

        return(
            <div className = {styles.follow_widget_container} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>
                Share Widgets
                <div className = {styles.follow_widget_overlay}>
                    {this.state.followButtons}
                </div>
            </div>
        )
    }
}
