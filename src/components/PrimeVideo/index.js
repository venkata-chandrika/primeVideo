// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  //   console.log(comedyList, actionList)
  return (
    <>
      <div className="videos-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video"
        />
        <div className="movies-container">
          <h1 className="movie-heading">Action Movies</h1>

          <MoviesSlider moviesList={actionList} />

          <h1 className="movie-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyList} />
        </div>
      </div>
    </>
  )
}
export default PrimeVideo
