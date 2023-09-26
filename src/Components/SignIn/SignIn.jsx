import React from 'react'
import styles from './SignIn.module.css'

export default function SignIn() {
  return (
    <section className="sign-in">
  <div className="container boxShadow">
    <div className="signin-content row">
      <div className="signin-image col-md-6">
        <figure><img src="Images/signin-image.jpg" alt="sing in image" /></figure>
      </div>
      <div className="signin-form col-md-6">
        <h2 className="form-title">Sign in</h2>
        <form method="POST" className="register-form mt-4" id="login-form">
          <div className="form-group d-flex mb-4">
            <label htmlFor="your_name">
            <i className="fa-solid fa-user "></i>
            </label>
            <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
          </div>
          <div className="form-group d-flex mb-4">
            <label htmlFor="your_pass">
            <i class="fa-solid fa-lock"></i>
            </label>
            <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
          </div>
          {/* <div className="form-group d-flex w-50 mb-4 lh-sm">
            <input type="checkbox" name="remember-me" id="remember-me" className="agree-term w-25" />
            <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
          </div> */}
          <button className='btn btn-primary'>Sign In</button>
        </form>
        <div className="social-login d-flex justify-content-center align-items-baseline mt-4">
          <span className="social-label me-4 fs-5">Or login with</span>
          <ul className="socials d-flex justify-content-evenly  list-unstyled">
            <li className=''><i className={`fa-brands fa-facebook ${styles.facebookIcon}`}></i></li>
            <li><i className={`fa-brands fa-twitter ${styles.twitterIcon}`}></i></li>
            <li><i className={`fa-brands fa-google-plus-g ${styles.googleIcon}`}></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
