import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function RanderData(props) {
  return (

            <div className='shortlink' >
                <div className='links'>
                    <span>{props.link1}</span>
                    <CopyToClipboard text={props.link1}
                    >
                        <div className='copy'>
                            Copy Link
                        </div>
                    </CopyToClipboard>
                </div>
                <div className='links'>
                    <span>{props.link2}</span>
                    <CopyToClipboard text={props.link2}
                    >
                        <div className='copy'>
                            Copy Link
                        </div>
                    </CopyToClipboard>

                </div>
                <div className='links'>
                    <span>{props.link3}</span>
                    <CopyToClipboard text={props.link3}
                    >
                        <div className='copy'>
                            Copy Link
                        </div>
                    </CopyToClipboard>
                </div>
            </div >
        )
    }

export default RanderData;