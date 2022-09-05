// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {!isDarkTheme ? (
            <div className="main-container">
              <Navbar />
              <div className="responsive-container-light-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="images"
                />
                <h1 className="para-light">Home</h1>
              </div>
            </div>
          ) : (
            <div className="main-container">
              <Navbar />
              <div className="responsive-container-dark-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="images"
                />
                <h1 className="para-dark">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
