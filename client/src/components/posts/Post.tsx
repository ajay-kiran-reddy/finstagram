import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

interface Props { }

function Post(props: Props) {
    const { } = props

    return (
        <Feed.Event>
            <Feed.Label image='/images/avatar/small/helen.jpg' />
            <Feed.Content>
                <Feed.Summary>
                    <a>Helen Troy</a> added <a>2 new illustrations</a>
                    <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                    <a>
                        <img src='/images/wireframe/image.png' />
                    </a>

                </Feed.Extra>
                <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like' />1 Like
                    </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
        </Feed.Event>
    )
}

export default Post
