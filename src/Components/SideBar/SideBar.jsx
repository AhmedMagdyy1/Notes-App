import React from 'react'
import styles from './SideBar.module.css'

export default function SideBar() {
  return (
    <>
   <nav className={`${styles.sidebar} vh-100`}>
  <div className={styles.customMenu}>
    <button type="button" id="sidebarCollapse" className="btn btn-primary">
      <i className="fa fa-bars" />
      <span className="sr-only">Toggle Menu</span>
    </button>
  </div>
  <div className="p-4 pt-5">
    <h1><a href="index.html" className="logo">Notes</a></h1>
    <ul className="list-unstyled components mb-5">
      <li className="d-flex align-items-center my-4">
        <a href="#">Sign In</a>
        <i class="fa-solid fa-user text-black mx-4"></i>
      </li>
      <li className='d-flex align-items-center'>
        <a href="#">Register</a>
        <i class="fa-solid fa-right-to-bracket text-black mx-3"></i>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}
