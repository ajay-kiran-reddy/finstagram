import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import { Modal, Grid, Button, Icon, TextArea } from 'semantic-ui-react';

interface Props {
    handleOpen: any;
    open: boolean
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    }
};

function CreatePost(props: Props) {
    const { handleOpen, open } = props;

    const [files, setFiles]: any = useState([]);
    const handleFileInput = (e: any) => {
        const files = [...e.target.files];
        setFiles(files.map((file: any) => URL.createObjectURL(file)));
    }

    return (
        <Modal
            open={open}
        >
            <Modal.Header>
                <Grid columns={2} >
                    <Grid.Row>
                        <Grid.Column style={{ textAlign: "left" }}>
                            Upload image
                        </Grid.Column>
                        <Grid.Column style={{ textAlign: "right" }}>
                            <Button basic primary>Next</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Header>
            <Modal.Content>
                {files.length === 0 && <input type="file" onChange={handleFileInput} multiple />}
                <Grid columns={2} >
                    <Grid.Row>
                        <Grid.Column style={{ textAlign: "left" }} width={12}>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {files.map((file: any, i: number) => {
                                    return <div style={{
                                        backgroundImage: `url(${file})`, width: "900px", height: "500px", backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }} />
                                })}
                            </Carousel>
                        </Grid.Column>
                        {files.length > 0 && <Grid.Column width={4}>
                            <Icon name="user" />
                            <h5 style={{ display: "inline" }}>Ajay Kiran Reddy</h5>
                            <TextArea style={{ border: "none", marginTop: "0.5rem", minHeight: "200px" }} placeholder="Write a caption" >

                            </TextArea>
                        </Grid.Column>}
                    </Grid.Row>
                </Grid>
                {files.length > 0 && <Modal.Description>
                </Modal.Description>}
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => handleOpen(false)}>Cancel</Button>
                <Button onClick={() => handleOpen(false)} positive>
                    Ok
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default CreatePost
