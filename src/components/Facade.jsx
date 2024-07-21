
import Icon from '../assets/icons/audio.svg'
import IconBlack from '../assets/icons/audio_black.svg'



function Facade({ page, title, headline, text, backgroundVideo,setFullscreen }) {
    
    return (
        <>
            <div className={`header header-${page} ${page}`}>
                <div className={`calltoaction-header-${page}`} onClick={()=>{setFullscreen(true)}}>
                    {backgroundVideo ?
                        <>
                            <div className={`overlay`}></div>
                            <video

                                className={`background`}
                                autoPlay={true}
                                loop={true}
                                controls={false}
                                playsInline
                                muted
                                src={backgroundVideo}
                                type="video/mp4"
                            />
                        <img src={Icon} alt="fullscreen" onClick={()=>{setFullscreen(true)}}/>
                            <div className={`welcome`}>
                                <h2 className={`welcome-title`}>{title} </h2>
                                <p className={`welcome-text`}>
                                    <b className={`welcome-headline`}>{headline} </b><br />
                                    {text}
                                    <img src={IconBlack} alt="fullscreen-desktop"/>
                                </p>
                            </div>
                        </> :
                        <>
                            <h2>{title}</h2>
                            <p>
                                <b>{headline}</b><br />
                                {text}
                            </p>
                        </>
                    }

                </div>
            </div>

        </>
    )
}
export default Facade;