import React from 'react'
import './styles/IntroduceMain.css'

import MoreStory from './MoreStory'

// image
import img_picnic from '../../../assets/images/main/main_img_picnic.png'
import img_mt from '../../../assets/images/main/main_img_mt.png'
import img_party from '../../../assets/images/main/main_img_party.png'

const IntroduceMain = () => {
    return (
        <div className="IntroduceMain">
            <div className="IntroduceMainBox">
                <div className="IntroduceMainLetterBox_1">
                    소수라서 더 끈끈한
                </div>
                <div className="IntroduceMainPictureBox_1">
                    <div className="IntroduceMainPictureBox_1_1">
                        <img src={img_picnic} className="ImgIntroduceStyle" />
                        <div className="IntroduceMainLetterBox_2">소풍</div>
                    </div>
                    <div className="IntroduceMainPictureBox_1_1">
                        <img src={img_mt} className="ImgIntroduceStyle" />
                        <div className="IntroduceMainLetterBox_2">MT</div>
                    </div>
                    <div className="IntroduceMainPictureBox_1_1">
                        <img src={img_party} className="ImgIntroduceStyle" />
                        <div className="IntroduceMainLetterBox_2">
                            크리스마스 파티
                        </div>
                    </div>
                </div>
                <div className="IntroduceMainMoreStory">
                    <MoreStory />
                </div>
            </div>
        </div>
    )
}

export default IntroduceMain
