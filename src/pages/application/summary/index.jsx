
import React from 'react';
import "./summary.css";


const ride = {
    cartitle:"Car type :  Maruti swift",
    cartype:"Geartype : Manual",
    carfuel:"fueltype :  petrol",
    startdate:"Tue, 11 dec, 12:00am",
    enddate:"web, 15 dec 06:30pm",
    deliverypoint:"Ekatuthangal",
    tripPrice:"Rs: 13,712"
}

// const dummy = {
//     Date: "2021-12-24",
// ​    Fromlocation: "salem",
//     TripNo: 36,
// ​    createdAt: "2021-12-16T05:13:51.348Z",
// ​    description: "we would like to deliver our customers the best world class at very cheap cost of service",
// ​    id: 3,
// ​    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/mg_zs_ev_660_240120020437.jpg",
// ​    price: 7000,
// ​    published: 1,
// ​    title: "MG ZS EV",
// ​    updatedAt: "2021-12-16T05:13:51.348Z"
// }


export default function BookingSummary() {

    const bookedUserDetail = JSON.parse(localStorage.getItem("trip-detail"));
    const bookedCarDetail = JSON.parse(localStorage.getItem("bookedCar"));
    
    const tripSummary = {
         ...bookedCarDetail,
         ...bookedUserDetail
    };
    

    const successpage = ()=>{
        console.log("successfully checkout...")
        console.log(tripSummary);
    }

    return (
        <div className='summary_container'>
           <div className='summary_card'> 
            <div className=''>
             <p className='car_name'>   
            {  tripSummary.title}</p>
             <div className='vechile_type'>
                 <p>{ride.cartype}</p>
                 <p>{ride.carfuel}</p>
             </div>
             <div className='trip_dates'>
                 <p>
                   {tripSummary.startdate}
                 </p>
                 <p>
                   {ride.enddate}
                 </p>
             </div>
             <div className='delivery point'>
                 <p>
                     Pickup point {tripSummary.From_location}
                 </p>
             </div>
             <div className='price_chart'>
                 <p className='price'>
                     {tripSummary.price}
                 </p>
                 <button className='checkout_btn' onClick={successpage}>Checkout SUmmary</button>
             </div>
            </div>
        </div></div>
    )
}
