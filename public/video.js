import './style.css';
import ReactPlayer from 'react-player'

function video() {
    const vidUrl = "https://www.youtube.com/watch?v=pB1XR89J5Uc"
    return (
        <div className='video'>
            <ReactPlayer
                url={vidUrl}
                playing={false}
                vollume={0.1}
            />
        </div>

    );
}
export default video;