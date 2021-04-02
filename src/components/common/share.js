import React from 'react';
import facebookIcon from '../../assets/images/fb.svg'
import googlePlusIcon from '../../assets/images/gp.svg'
import twitterIcon from '../../assets/images/tw.svg'
import linkedinIcon from '../../assets/images/in.svg'

import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share';


const Share = ({ socialConfig }) => {
    return 	(
        <div className="post-social">
            <FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
                <span className="icon">
                    <img alt="facebook icon" src={facebookIcon} />
                </span>
            </FacebookShareButton>
            <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')}>
                <span className="icon">
                     <img alt="twiiter icon" src={twitterIcon} />
                </span>
            </TwitterShareButton>
            <LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
                <span className="icon">
                    <img alt="linkedin icon" src={linkedinIcon} />
                </span>
            </LinkedinShareButton>
        </div>
    )

}



export default Share;