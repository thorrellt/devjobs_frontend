import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import NightModeToggle from '../NightModeToggle'
const Menu = (props) => {
  const {
    darkMode,
    switchMode,
    screenSize,
    toggleNav,
    navActive,
    logOut,
    logIn,
    userName,
    loggedIn,
  } = props

  console.log(loggedIn)
  console.log('userName:' + userName)

  return (
    <>
      <div className={`bg-screen`}></div>

      <div
        className={`menu flex-container 
      ${darkMode ? 'bg-blue-700' : 'bg-white'}`}
      >
        <div className="flex-container exit-wrapper">
          <button onClick={toggleNav} className="menu-exit-btn">
            <i
              className={`bi bi-x 
      ${darkMode ? 'font-white' : 'font-blue-700'}`}
            />
          </button>
        </div>

        <div
          className={`menu-header flex-container ${darkMode ? 'dark' : ''} ${
            !loggedIn ? 'padding' : ''
          } `}
        >
          {loggedIn && (
            <>
              <i className={`bi bi-person-circle font-violet-500`} />
              <h3 className={`${darkMode ? 'font-white' : 'font-blue-700'}`}>
                {`${userName}`}
              </h3>
            </>
          )}

          {screenSize !== 'desktop' && (
            <NightModeToggle
              darkMode={darkMode}
              switchMode={switchMode}
              primColor={darkMode ? 'font-white' : 'font-violet-500'}
              bgColor={darkMode ? 'bg-white' : 'bg-violet-500'}
              secColor={darkMode ? 'bg-violet-500' : 'bg-white'}
            />
          )}
        </div>

        <div className="links-container flex-container">
          {loggedIn && (
            <>
              <NavLink
                to={`/devjobs/`}
                className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
              >
                Saved Jobs
              </NavLink>
              <NavLink
                to={`/devjobs/`}
                className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
              >
                Post Job
              </NavLink>
              <NavLink
                to={`/devjobs/`}
                onClick={logOut}
                className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
              >
                Log Out
              </NavLink>
            </>
          )}

          {!loggedIn && (
            <NavLink
              to={`/devjobs/`}
              onClick={logIn}
              className={`link ${darkMode ? 'font-white' : 'font-blue-700'}`}
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </>
  )
}

export default Menu
