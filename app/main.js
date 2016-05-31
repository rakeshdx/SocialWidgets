import React from 'react';
import { render } from 'react-dom';
import FollowWidgets from './lib/FollowWidgets';
import ShareWidgets from './lib/ShareWidgets';
import LightFollowWidgets from './lib/LightFollowWidgets';

export default class App extends React.Component {

    render() {
        return(
            <div>
                <div>
                    <LightFollowWidgets />
                </div>
                <div style = {{marginTop : '300px'}}>
                    <FollowWidgets />
                </div>
                <div style = {{marginTop : '200px'}}>
                    <ShareWidgets />
                </div>

            </div>
        );
    }
}

render(<App />, document.getElementById('social-widgets'));
