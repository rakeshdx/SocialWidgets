import React from 'react';
import { render } from 'react-dom';
import FacebookButton from './widgets/FacebookButton';
import TwitterButton from './widgets/TwitterButton';
import YoutubeButton from './widgets/YoutubeButton';
import InstagramButton from './widgets/InstagramButton';
import { config } from './config/config';
import styles from '../styles/main.css';
import {TransitionMotion, spring, Motion} from 'react-motion';

export default class LightFollowWidgets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                    showButton: false,
                    followButtons: '',
                    click: false
                    };
    }

    componentDidUpdate() {
    }

    handleMouseEnter = (e) => {
        this.setState({showButton: true});
        e.preventDefault();
    }

    handleMouseLeave = (e) => {
        this.setState({showButton: false});
        e.preventDefault();
    }

    handleClick = (e) => {
        this.setState({click: !this.state.click});
    }

    render() {

        if (this.state.showButton) {
            var followButtons =  (<div>
                                            <a
                                                href = {config.facebook.options.url}
                                                className = {styles.light_twitter_button}>
                                                F
                                            </a>
                                            <a
                                                href = {config.twitter.options.url}
                                                className = {styles.light_twitter_button}>
                                                T
                                            </a>
                                            <a
                                                href = {config.youtube.options.url}
                                                className = {styles.light_twitter_button}>
                                                Y
                                            </a>
                                            <a
                                                href = {config.instagram.options.url}
                                                className = {styles.light_twitter_button}>
                                                I
                                            </a>
                                        </div>);
        }

        return(
            <div onMouseEnter = {this.handleMouseEnter} onClick = {this.handleClick} onMouseLeave = {this.handleMouseLeave}>
                Light Follow MTV News

                    <Motion style={{x: spring(this.state.click ? 400 : 0)}}>
                          {({x}) =>
                          (<div style= {{
                             height: x,
                             position: 'absolute',
                             overflow: 'hidden'
                          }}>
                              <ul >
                              <li>
                              <a
                                  href = {config.facebook.options.url}
                                  className = {styles.light_twitter_button}>
                                  F
                              </a>
                              </li>
                              <li>
                              <a
                                  href = {config.twitter.options.url}
                                  className = {styles.light_twitter_button}>
                                  T
                              </a>
                              </li>
                              <li>
                              <a
                                  href = {config.youtube.options.url}
                                  className = {styles.light_twitter_button}>
                                  Y
                              </a>
                              </li>
                              <li>
                              <a
                                  href = {config.instagram.options.url}
                                  className = {styles.light_twitter_button}>
                                  I
                              </a>
                              </li>
                              </ul>
                          </div>)
                      }
                    </Motion>
            </div>
        )
    }
}
