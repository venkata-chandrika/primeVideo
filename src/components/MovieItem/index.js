// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieItemDetails} = props
  const {thumbnailUrl, videoUrl} = movieItemDetails
  return (
    <Popup
      modal
      trigger={
        <div>
          <img src={thumbnailUrl} alt="thumbnail" className="movie-img" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            className="close-btn"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="20" className="close" />
          </button>

          <ReactPlayer url={videoUrl} />
        </>
      )}
    </Popup>
  )
}

export default MovieItem
