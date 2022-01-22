import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CarInventory() {
    
    
    const[car,setcar]=useState([]);
    const [logged,setlog]=React.useState(false);
    
    let username = localStorage.getItem("userdetail");
     username=JSON.parse(username);
     console.log(username);
     React.useEffect(()=>{
       if(username){
         setlog(true)
       } 
     },[logged])  
   
    const getcardata = async()=>{
    try{
      const data = await axios.get("http://localhost:5001/api/carlist");
  
        setcar(data.data);
        console.log("json items")
        console.log(data.data)

        }catch(e){
            console.log(e);
        }
    };
  
    const bookingConfirm = (id) =>{
      localStorage.setItem("bookedCar",JSON.stringify(car[id]))
     
  } 
  
    useEffect(()=>{
        getcardata();
    },[]);
      return(
  <div>
    <div className="card-columns">
  <h1 className="card-title">select your car</h1>
  
     
       {car.map((item,idx)=>{
          return(   
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title key= {item.id} >{item.title}</Card.Title>
              <Card.Text >₹ {item.price}</Card.Text>
              <Card.Text >{item.description}</Card.Text>
             
             { logged && (
                    <>
                    <Link to="/login" type="submit">
                    <Button  key= {item.id} variant="primary"
                    onClick={() => bookingConfirm(idx)}
                    >Book</Button>
                    </Link>
                    </>
             )}
        
            { !logged && (
                    <>
                    <Link to='/signup'>
                    <Button  key= {item.id} variant="primary"
                     onClick={() => bookingConfirm(idx)}
                    >Book</Button>
                    </Link>
        
                    </>
            )}
            &nbsp;
            &nbsp;
            <Link to="/" type="submit"><Button variant="secondary"> Cancel </Button>
            </Link>
            </Card.Body>
          </Card>
           )
               })}
        </div>
        </div>
  ); 
  };

// class Cars extends React.Component{

//   // const[car,setcar]=useState([]);
//   constructor(props){
//     super(props)
//     this.state = {
//       car:[],
//     }
// }

// async componentDidMount(){
  
//       await axios.get("http://localhost:7050/api/carlist")
//       .then(res =>{
//         console.log(res)
//         this.setState({car:res.data});
//       })
      
//   }

// render(){
//   return(
    

// <div class="card-columns">
//       <h1 class="card-title">select your car</h1>
//      {this.state.car.map((item)=>{
//         return( 
//           <Card style={{ width: '25rem' }}>
//           <Card.Img variant="top" src={item.image} />
//           <Card.Body>
//             <Card.Title key= {item.id} >{item.title}</Card.Title>
//             <Card.Text >₹ {item.price}</Card.Text>
//             <Card.Text >{item.description}</Card.Text>
//             </Card.Body><Button  key= {item.id} variant="primary">Book</Button>

//               { !logged && (
//                      <>
//                      <Link to="/login" type="submit">
//                      <Button  key= {item.id} variant="primary"
//                      onClick={() => bookingConfirm(idx)}
//                      >Book</Button>
//                      </Link>
//                      </>
//               )}
        
//              { logged && (
//                      <>
//                     <Link to='/signup'>
//                      <Button  key= {item.id} variant="primary"
//                      onClick={() => bookingConfirm(idx)}
//                      >Book</Button>
//                      </Link>
        
//                     </>
//              )}
//              &nbsp;
//              &nbsp;
//              <Link to="/" type="submit"><Button variant="secondary"> Cancel </Button>
//             </Link>
//           </Card.Body>
//         )
//              },
//              )}
//         </Card>
//   </div>
  
//             };
            
//       }
//              }
//             }
// export default Cars;
