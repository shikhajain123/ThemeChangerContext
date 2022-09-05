// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="images"
                />
                <h1 className="lost-way-heading-light">Lost Your Way?</h1>
                <p className="para-light">
                  We cannot seem to find the page you are looking for
                </p>
              </div>
            </div>
          ) : (
            <div className="main-container">
              <Navbar />
              <div className="responsive-container-dark-theme">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="images"
                />
                <h1 className="lost-way-heading-dark">Lost Your Way?</h1>
                <p className="para-dark">
                  We cannot seem to find the page you are looking for
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
