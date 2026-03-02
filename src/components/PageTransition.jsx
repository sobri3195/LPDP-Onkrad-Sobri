import { useEffect, useState } from 'react'
import './PageTransition.css'

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleExit = () => {
    setIsExiting(true)
  }

  return (
    <div
      className={`page-transition ${isVisible ? 'visible' : ''} ${isExiting ? 'exiting' : ''}`}
    >
      {children}
    </div>
  )
}

export default PageTransition
