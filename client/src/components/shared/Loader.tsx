import React from 'react'
import { Loader } from 'semantic-ui-react'

const LoaderExampleInlineCentered = ({ active }: any) => {
    return <Loader active={active} size="massive" inline='centered' style={{ position: "absolute", width: "100vw", top: "40%" }} />

}

export default LoaderExampleInlineCentered;