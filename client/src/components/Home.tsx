import React, { useState } from 'react'
import {
    Grid
} from 'semantic-ui-react'

import FollowSuggestions from './followSuggestions/FollowSuggestions';
import "./home.css";
import LeftNav from './leftNav/LeftNav';
import PostsFeed from './posts/PostsFeed';


const Home = () => {

    return <div>
        <Grid columns={3} className="layout">
            <Grid.Row >
                <Grid.Column width={3} className="leftNav">
                    <LeftNav />
                </Grid.Column>
                <Grid.Column width={8}>
                    <PostsFeed />
                </Grid.Column>
                <Grid.Column width={3}>
                    <FollowSuggestions />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </ div>
}

export default Home