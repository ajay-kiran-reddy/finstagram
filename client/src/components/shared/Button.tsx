import React from 'react'
import { Button } from 'semantic-ui-react';
import "./styles.css";

interface Props {
    label?: string,
    addProps?: any
}

export default function OutlinedButton(props: Props) {
    return (
        <>
            <Button className='outlined' {...props.addProps}>
                {props.label}
            </Button>
        </>
    )
}
