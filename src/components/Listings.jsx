import React from 'react'
import Nav from './Nav'
import house1 from "./images/house-img-1.webp";
import house2 from "./img/5-1.jpg";
import house3 from "./img/1-1.jpg";
import house4 from "./img/3-1.jpeg";
import house5 from "./img/4-1.jpg";
import house6 from './images/house-img-6.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Listings = () => {
    document.title = "All Listings";

    const list_data=[{
        name:"ujjwal",
        logo:"U",
        date:"12/12/2022",
        location:"pune,maharashtra",
        bed:3,
        bath:2,
        sqft:"1000sqft"
      },
      {
        name:"shivam",
        logo:"K",
        date:"1/10/2020",
        location:"Noida,Delhi",
        bed:2,
        bath:2,
        sqft:"800sqft"
      },
      {
        name:"Kedar",
        logo:"K",
        date:"12/12/2022",
        location:"pune,maharashtra",
        bed:3,
        bath:2,
        sqft:"1000sqft"
      },
      {
        name:"Aditya",
        logo:"A",
        date:"02/02/2022",
        location:"pimpri,maharashtra",
        bed:3,
        bath:2,
        sqft:"740sqft"
      },
      {
        name:"Tejas",
        logo:"T",
        date:"12/12/2022",
        location:"Bihar,utter pradesh",
        bed:3,
        bath:2,
        sqft:"900sqft"
      },
      {
        name:"pratik",
        logo:"P",
        date:"6/07/2023",
        location:"pune,maharashtra",
        bed:3,
        bath:2,
        sqft:"810sqft"
      },
      {
        name:"Omkar",
        logo:"O",
        date:"1/12/2022",
        location:"mumbai,maharashtra",
        bed:3,
        bath:2,
        sqft:"1000sqft"
      },
      {
        name:"Kunal",
        logo:"K",
        date:"12/12/2022",
        location:"pune,maharashtra",
        bed:1,
        bath:1,
        sqft:"400sqft"}]
    return (
        <>
            <Nav />
            <section class="listings">

                <h1 class="heading">All Listings</h1>

                <div class="box-container">

                {
                        list_data.map((data)=>{
                            return(
                                <>
                                <div class="box">
                        <div class="admin">
                            <h3>{data.logo}</h3>
                            <div>
                                <p>{data.name}</p>
                                <span>{data.date}</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house1} alt="" />
                        </div>
                        <h3 class="name">Modern Flats and Appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>{data.location}</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>{data.bed}</span></p>
                            <p><i class="fas fa-bath"></i><span>{data.bath}</span></p>
                            <p><i class="fas fa-maximize"></i><span>{data.sq}</span></p>
                        </div>
                        <Link to="/view_property" class="btn">View Property</Link>
                    </div>
                                
                                </>
                            )
                        })
                    }

                </div>

            </section>
            <Footer />
        </>
    )
}

export default Listings
