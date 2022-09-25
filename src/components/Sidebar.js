import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = () => {
  return (
    <aside className={`sidebar showSidebar`}>
      <button className="close-btn">
        <IoMdClose/>
        </button>
        <div className="sidebar-container">
          <Links styleClass="sidebar-links"/>
        </div>
        </aside>
  )
}

export default Sidebar
