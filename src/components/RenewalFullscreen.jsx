import Close from '../assets/icons/close.svg'
import backgroundVideo from '../assets/Video.mp4'

function RenewalFullscreen({setFullscreen}){
    return(
<>
                <div className={`fullscreen-wrap`}>
                    <img src={Close} alt="close" style={{ width: '14%', margin: '1rem' }} className={`icon close-icon-fullscreen`} onClick={()=>{setFullscreen(false)}}/>
                <video
                                className={`background-fullscreen`}
                                autoPlay={true}
                                loop={true}
                                controls={false}
                                playsInline
                                src={backgroundVideo}
                                type="video/mp4"
                                />
                                </div>
                                </>
    )
}

export default RenewalFullscreen;