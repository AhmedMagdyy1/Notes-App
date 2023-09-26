import React from 'react'
import './Register.module.css'

export default function Register() {
  return (
    <>
   <section className="signup">
  <div className="container boxShadow">
    <div className="signup-content row">
      <div className="signup-form col-md-6">
        <h2 className="form-title">Sign up</h2>
        <form method="POST" className="register-form mt-4" id="register-form">
          <div className="form-group d-flex mb-4">
            <label htmlFor="name">
            <i class="fa-solid fa-user"></i>
            </label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group d-flex mb-4">
            <label htmlFor="email">
                <i class="fa-solid fa-envelope"></i>
            </label>
            <input type="email" name="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group d-flex mb-4">
            <label htmlFor="pass">
            <i class="fa-solid fa-lock"></i>
            </label>
            <input type="password" name="pass" id="pass" placeholder="Password" />
          </div>
          <div className="form-group d-flex mb-4">
            <label htmlFor="re-pass">
            <i class="fa-solid fa-phone"></i>
            </label>
            <input type="password" name="re_pass" id="re_pass" placeholder="Phone" />
          </div>
          <div className="form-group d-flex mb-4">
            <label htmlFor="re-pass">
            <i class="fa-solid fa-globe"></i>
            </label>
            <input type="password" name="re_pass" id="re_pass" placeholder="Age" />
          </div>
          <button className='btn btn-danger'>Register</button>
        </form>
      </div>
      <div className="signup-image col-md-6 d-flex justify-content-end">
        <figure><img src="Images/signup-image.jpg" alt="sing up image" /></figure>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
