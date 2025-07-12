import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <footer name="footer" id='footer' className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Locify. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Footer