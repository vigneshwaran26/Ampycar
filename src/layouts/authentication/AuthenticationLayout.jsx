import {Fragment} from 'react'
const AuthenticationLayout = ({ children }) => {
    return (
      <>
        <Fragment>
          <main>{children}</main>
        </Fragment>
      </>
    );
  };
  
  export default AuthenticationLayout;
  