import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import bg1 from '../assets/bg1.jpg';
function SignupUserPage() {
  const [signInStatus, setSignInStatus] = useState(false)
  const [userData, setUserData] = useState({
    username: "", email: "", Password: ""
  })
  const handleSignIn = () => {
    setSignInStatus(true)
  }
  const handleSignUp = () => {
    setSignInStatus(false)
  }

  const handlePassword = (e) => {
    Password = e.target.value
    setUserData({...userData,Password})
  }
  return (
    <div
      className="container py-4 mt-4"
      style={{
        maxWidth: '1100px',
        padding: '0',
        margin: '0 auto',
      }}
    >
      <div className="row justify-content-center align-items-center m-0">
        <div className="col-lg-2 bg-dark d-none d-lg-block p-0"></div>
        <div
          className="col-lg-8 col-md-10 col-sm-12 sign-up-card d-flex flex-column flex-md-row align-items-center p-0"
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '0',
          }}
        >
          <div
            style={{
              flex: 1,
              margin: 0,
              position: 'relative',
              height: '500px',
              overflow: 'hidden',
            }}
            className="text-center d-flex justify-content-center align-items-center"
          >
            <img
              src={bg1}
              alt="Signup Illustration"
              className="img-fluid rounded-0"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                color: 'white',
              }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h2
                className="textColor mb-3"
                style={{
                  fontWeight: 'bold',
                }}
              >
                Welcome Back
              </h2>
              <p className="textColor">
                {
                  `${!signInStatus ? ` Already have an account ?` : `Don't have an account?`}`
                }

              </p>
              {
                !signInStatus ? (
                  <Button onClick={handleSignIn} className='signIn-Btn'>Sign In</Button>
                ) : (
                  <Button onClick={handleSignUp} className='signIn-Btn'>Sign Up</Button>
                )
              }

            </div>
          </div>


          <div
            className="form-container d-flex flex-column align-items-stretch p-4"
            style={{
              flex: 1,
            }}
          >
            <h3 className="fw-bold text-center mb-4 Logo">
              {
                `${!signInStatus ? `Create Account` : `Sign In`} `
              }
            </h3>
            <Form>
              {
                !signInStatus && (
                  <Form.Group controlId="canteenInput" className="mb-3">
                    <Form.Label className="formlabel">Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="username"
                      className="formControl"
                      onChange={e => setUserData({ ...userData, username: e.target.value })}
                    />
                  </Form.Group>
                )

              }



              <Form.Group controlId="useremailInput" className="mb-3">
                <Form.Label className="formlabel">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="formControl"
                />
              </Form.Group>

              <Form.Group controlId="userpasswordInput" className="mb-4">
                <Form.Label className="formlabel">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className="formControl"
                  onChange={handlePassword}
                /> 
              </Form.Group>

              <Button className="signup-Btn w-100 mb-2">
                {signInStatus ? "Sign In" : "Sign Up"}
              </Button>
            </Form>

          </div>
        </div>
        <div className="col-lg-2 bg-dark d-none d-lg-block p-0"></div>
      </div>
    </div>
  )
}

export default SignupUserPage

































