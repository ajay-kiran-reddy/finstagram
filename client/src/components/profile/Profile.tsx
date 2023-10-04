import React from 'react'
import { Grid } from 'semantic-ui-react'
import FollowSuggestions from '../followSuggestions/FollowSuggestions'
import LeftNav from '../leftNav/LeftNav'
import PostsFeed from '../posts/PostsFeed'

interface Props { }

function Profile(props: Props) {
    const { } = props

    return (
        <Grid columns={3} className="layout">
            <Grid.Row >
                <Grid.Column width={3} className="leftNav">
                    <LeftNav />
                </Grid.Column>
                <Grid.Column width={8}>
                    Profile
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}

export default Profile
