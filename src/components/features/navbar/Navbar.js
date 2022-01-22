// import React from 'react';
//  import {Link} from 'react-router-dom';
//  import "./Navbar.css";
//  import Button from '@restart/ui/esm/Button';
 
 
//  const Navbar = () => {

//   const [logged,setlog]=React.useState(false);
//    let username = localStorage.getItem("userdetail");
//    username=JSON.parse(username);
//    console.log(username);
//    React.useEffect(()=>{
//      if(username){
//        setlog(true)
//      } 
//    },[logged])  
//    function logout(){
//     localStorage.setItem('logged',false);
//     alert("Successfully Logout")
//     navigate('/summary');
//   }
//   return (
//     <div>
//     <div className="nav">
//     { logg && (
//       <>
//       <span className='username'>
//        <b> Username &nbsp;: &nbsp;</b> {username.users.name}
//       </span>
//       <Link to="/"><Button>Home</Button></Link>
//       <Button onClick={logout}>Logout</Button>
//       </>
//     )}
//       {/* <Link to="/"><Button>Home</Button></Link> */}
//       { !logg && (
//         <>
//          <Link to="/"><Button>Home</Button></Link>
//       <Link to="/login"><Button>Login</Button></Link>
//       <Link to="/signup"><Button>SignUp</Button></Link>

//       </>
//       )}
//     </div>
//     </div>
//   );
// };
 
// export default Navbar;


import React from 'react';
 import {Link} from 'react-router-dom';
 import "./Navbar.css";
 import Button from '@restart/ui/esm/Button';
 import { useNavigate } from 'react-router-dom';
 const Navbar = () => {
   

  const [logged,setlog]=React.useState(false);
  //const [button,setbutton]=React.useState(true);
  const navigate = useNavigate();
   let username = localStorage.getItem("userdetail");
   let logg=localStorage.getItem('logged')
    logg==='true'?logg=true:logg=false;
      username=JSON.parse(username);
   console.log(username);
   React.useEffect(()=>{
     if(username){
       setlog(true)
     } 
   },[logged])  
   function logout(){
     localStorage.setItem('logged',false);
     alert("Successfully Logout")
     navigate('/');
   }

  return (
    <div>
    <div className="nav">
    { logg && (
      <>
      <span className='username'>
       <b>  &nbsp; &nbsp; </b> {username.users.name}
      </span>
      <Link to="/"><Button>Home</Button></Link>
      <Button onClick={logout}>Logout</Button>
      </>
    )}
      {/* <Link to="/"><Button>Home</Button></Link> */}
      { !logg && (
        <>
         <Link to="/"><Button>Home</Button></Link>
      <Link to="/login"><Button>Login</Button></Link>
      <Link to="/signup"><Button>SignUp</Button></Link>

      </>
      )}
    </div>
    </div>
  );
};
 
export default Navbar;