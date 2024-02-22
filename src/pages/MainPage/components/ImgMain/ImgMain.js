import React from 'react'

import FirstImg from './FirstImg'
import SecondImg from './SecondImg'
import ThirdImg from './ThirdImg'

import '../styles/ImgMain.css'

import { isBrowser, isMobile } from 'react-device-detect'

const ImgMain = () => {
    return (
        <div className="ImgMain">
            <FirstImg />
            <SecondImg />
            <ThirdImg />
        </div>
    )
}

export default ImgMain
