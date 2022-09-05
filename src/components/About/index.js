// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="images"
                />
                <h1 className="para-light">About</h1>
              </div>
            </div>
          ) : (
            <div className="main-container">
              <Navbar />
              <div className="responsive-container-dark-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="images"
                />
                <h1 className="para-dark">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
