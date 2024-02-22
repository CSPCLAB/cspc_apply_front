import React from 'react'

// components
import ImgMain from './components/ImgMain/ImgMain'
import IntroduceMain from './components/IntroduceMain'
import ApplyCard from '../../components/ApplyCard'

import { Container, Row, Col } from 'react-bootstrap'
import { isBrowser, isMobile } from 'react-device-detect'
import ImgIntroduce from 'mobile/IntroducePage/components/ImgIntroduce'

const Main = () => {
    return (
        <>
            <ImgMain />
            {isBrowser ? <IntroduceMain /> : null}
            {isBrowser ? <ApplyCard /> : null}
        </>
    )
}

export default Main
