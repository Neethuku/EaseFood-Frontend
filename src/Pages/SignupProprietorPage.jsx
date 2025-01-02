
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import bg1 from '../assets/bg1.jpg';

function SignupProprietorPage() {
  const [signInStatus, setSignInStatus] = useState(false);

  const handleSignIn = () => {
    setSignInStatus(true);
  };

  const handleSignUp = () => {
    setSignInStatus(false);
  };

  return (
    <div className="container py-4 mt-4" style={{maxWidth:'1100px'}}>
      <div className="row justify-content-center align-items-center m-0">
        <div className="col-lg-2 bg-dark d-none d-lg-block p-0"></div>

        <div className="col-lg-8 col-md-10 col-sm-12 sign-up-card d-flex flex-column flex-md-row align-items-stretch p-0">
          {/* Left Side - Image and Text */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4 position-relative text-white">
            <img
              src={bg1}
              alt="Signup Illustration"
              className="img-fluid w-100 h-100 position-absolute top-0 start-0  left-card"
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <div className="position-relative z-1 text-center">
              <h2 className="fw-bold mb-3">
                {signInStatus ? 'Welcome Back' : 'Join Us'}
              </h2>
              <p>
                {signInStatus
                  ? "Don't have an account?"
                  : 'Already have an account?'}
              </p>
              <Button
                onClick={signInStatus ? handleSignUp : handleSignIn}
                className="signIn-Btn"
                variant="outline-light"
              >
                {signInStatus ? 'Sign Up' : 'Sign In'}
              </Button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <h3 className="fw-bold text-center mb-4 Logo">
              {signInStatus ? 'Sign In' : 'Create Account'}
            </h3>
            <Form>
              {/* Radio Buttons for Sign Up */}
              {!signInStatus && (
                <fieldset className="mb-3 radioIcon">
                  <Form.Check
                    inline
                    label="Hotel"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                  />
                  <Form.Check
                    inline
                    label="College"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                  />
                  <Form.Check
                    inline
                    label="Hospital"
                    name="group1"
                    type="radio"
                    id="inline-radio-3"
                  />
                </fieldset>
              )}

                {/* Email Field */}
                <Form.Group controlId="nameInput" className="mb-3">
                <Form.Label className='formlabel'>Hotel/Canteen</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Hotel/Canteen"
                  className='formControl'
                />
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="useremailInput" className="mb-3">
                <Form.Label className='formlabel'>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className='formControl'
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group controlId="userpasswordInput" className="mb-4">
                <Form.Label className='formlabel'>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className='formControl'
                />
              </Form.Group>

              {/* Sign In/Sign Up Button */}
              <Button className="w-100 mb-2 signup-Btn" variant="primary">
                {signInStatus ? 'Sign In' : 'Sign Up'}
              </Button>
            </Form>
          </div>
        </div>

        <div className="col-lg-2 bg-dark d-none d-lg-block p-0"></div>
      </div>
    </div>
  );
}

export default SignupProprietorPage;










// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import bg1 from '../assets/bg1.jpg';

// function SignupProprietorPage() {
//   const [signInStatus,setSignInStatus] = useState(false)
//   const handleSignIn = () => {
//     setSignInStatus(true)
//   }
//   const handleSignUp = () => {
//     setSignInStatus(false)
//   }
//   return (
//     <div 
//       className="container py-4 mt-4"
//       style={{
//         maxWidth: '1100px',
//         padding: '0',
//         margin: '0 auto',
//       }}
//     >
//       <div className="row justify-content-center align-items-center m-0">
//         <div className="col-lg-2 bg-dark d-none d-lg-block p-0"></div>
//         <div
//           className="col-lg-8 col-md-10 col-sm-12 sign-up-card d-flex flex-column flex-md-row align-items-center p-0"
//           style={{
//             borderRadius: '8px',
//             overflow: 'hidden',
//             margin: '0',
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               margin: 0,
//               position: 'relative',
//               height: '500px',
//               overflow: 'hidden',
//             }}
//             className="text-center d-flex justify-content-center align-items-center"
//           >
//             <img
//               src={bg1}
//               alt="Signup Illustration"
//               className="img-fluid rounded-0"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 zIndex: 0,
//               }}
//             />
//             <div
//               style={{
//                 position: 'relative',
//                 zIndex: 1,
//                 color: 'white',
//               }}
//               className="d-flex flex-column align-items-center justify-content-center"
//             >
//               <h2
//                 className="textColor mb-3"
//                 style={{
//                   fontWeight: 'bold',
//                 }}
//               >
//                 Welcome Back
//               </h2>
//               <p className="textColor">
//                 {
//                   `${!signInStatus ? ` Already have an account ?` : `Don't have an account?`}`
//                 }
              
//               </p>
//               {
//                 !signInStatus ? (
//                   <Button onClick={handleSignIn} className='signIn-Btn'>Sign In</Button>
//                 ) : (
//                   <Button onClick={handleSignUp} className='signIn-Btn'>Sign Up</Button>
//                 )
//               }
              
//             </div>
//           </div>


//           <div
//             className="form-container d-flex flex-column align-items-stretch p-4"
//             style={{
//               flex: 1,
//             }}
//           >
//             <h3 className="fw-bold text-center mb-4 Logo">
//               {
//                 `${!signInStatus ? `Create Account` : `Sign In`} `
//               }
//               </h3>
//             <Form>
//   {!signInStatus && (
//     <>
//       <fieldset className="mb-3 radioButton radioIcon">
//         <Form.Check
//           className="radioIcon"
//           inline
//           label="Hotel"
//           name="group1"
//           type="radio"
//           id="inline-radio-1"
//         />
//         <Form.Check
//           inline
//           label="College"
//           name="group1"
//           type="radio"
//           id="inline-radio-2"
//         />
//         <Form.Check
//           inline
//           label="Hospital"
//           name="group1"
//           type="radio"
//           id="inline-radio-3"
//         />
//       </fieldset>

//       <Form.Group controlId="canteenInput" className="mb-3">
//         <Form.Label className="formlabel">Canteen/Hotel Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="canteen/hotel name"
//           className="formControl"
//         />
//       </Form.Group>
//     </>
//   )}

//   <Form.Group controlId="useremailInput" className="mb-3">
//     <Form.Label className="formlabel">Email</Form.Label>
//     <Form.Control
//       type="email"
//       placeholder="name@example.com"
//       className="formControl"
//     />
//   </Form.Group>

//   <Form.Group controlId="userpasswordInput" className="mb-4">
//     <Form.Label className="formlabel">Password</Form.Label>
//     <Form.Control
//       type="password"
//       placeholder="password"
//       className="formControl"
//     />
//   </Form.Group>

//   <Button className="signup-Btn w-100 mb-2">
//     {signInStatus ? "Sign In" : "Sign Up"}
//   </Button>
// </Form>

//           </div>
//         </div>
//         <div className="col-lg-2 bg-dark d-none d-lg-block p-0"></div>
//       </div>
//     </div>
//   );
// }

// export default SignupProprietorPage;
