import React, { useEffect, useState } from "react";
import style from "./Cooks.module.css";
import { fetchCooks } from "../../data/cookData";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import CookCard from "../../Components/CookCard/CookCard.js";
import imageFood from "../../Assets/AdobeStock_211143160_Preview.jpeg";
import imageFood1 from "../../Assets/AdobeStock_203047826_Preview.jpeg";
import imageFood2 from "../../Assets/AdobeStock_357694106_Preview.jpeg";
import imageFood3 from "../../Assets/goodimage.jpg";
import imageCook1 from "../../Assets/shein jackets.jpg";
import imageCook from "../../Assets/shein Zip front suede biker jackets .jpg";
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { fetchCategory } from "../../data/categoryData";

export default function Cooks() {
  const [cooks, setCooks] = useState(null);
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [checkboxes, setCheckboxes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { city } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [isError, setIsError] = useState({ state: false, message: "ok" });
  const [selectedCity, setSelectedCity] = useState(city ? [`${city}`] : []);
console.log(cooks)
  async function fetchData() {
    try {
      const response = await fetchCooks();
      if (response) {
        setCooks(response.data);
        setIsLoading(false);
      } else {
        setIsError({ state: true, message: "Network Error marwa" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const filteredProducts = cooks
    ? cooks.filter((cook) =>
        cook.firstName.toLowerCase().includes(searchInput.toLowerCase())
      ).filter((cook) =>
        selectedCity.length === 0 ||
        selectedCity.some((city) => city === cook.city)
      )
    : [];

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <section className={style.pageWrapper}>
         <h1>
                <p className={style.title}> Cooks</p>
              </h1>
        {isLoading ? (
          <Loading/>
        ) : (
            <div className={style.mealscard}>
              {cooks.map((cook, i) => (
                <div className={style.cardWrapper}>
                  <CookCard
                    id={cook._id}
                    firstName={cook.firstName}
                    lastName={cook.lasttName} // Fixed typo here
                    image={cook.image}
                    city={cook.city}
                  />
                </div>
              ))}
            </div>
        )}
      </section>
  );
}
























// import React from 'react'
// import { useState } from 'react'
// import style from "./Cooks.module.css"
// import CookCard from "../../Components/CookCard/CookCard.js"
// import image from "../../Assets/chef1.jpg"
// import image1 from "../../Assets/chef2.jpg"
// import image2 from "../../Assets/chef1.jpg"
// import image3 from "../../Assets/che4.jpg"
// import MealCard from '../../Components/MealCard/MealCard'
// import image4 from "../../Assets/chef5.jpg"
// import image5 from "../../Assets/chef6.jpg"
// import image6 from "../../Assets/chef5.jpg"
// import image7 from "../../Assets/chef7.jpg"

// export default function Cooks() {
//   const [cooks] = useState([
//     { name: 'Stevie Blight', location: 'Beirut', image:{image},price :22 },
//     { name: 'Another Cook', location: 'jbeil', image: {image1},price :22 },
//     { name: 'Yet Another Cook', location: 'tripoli', image: {image3} ,price :22 },
//     { name: 'Yet Another Cook', location: 'saida', image: {image4} ,price :22},
//     { name: 'Yet Another Cook', location: 'beirut', image: {image5} ,price :22},
//     { name: 'Yet Another Cook', location: 'tripoli', image: {image6} ,price :22},
//     { name: 'Yet Another Cook', location: 'saida', image: {image7},price :22 },
//   ]);


//   return (
//     <div>
//        <section className={style.homePage}>
//        <div className={style.titleCard}>
//           <div >
//             <h1> <p className={style.title}> Meals</p></h1>
//           </div>
//           <div className={style.mealscard}>
//             {cooks && cooks.map((meal, i) => (
//               <div className={style.cardWrapper}>
//                 <MealCard
//                   key={cooks.id}
//                   title={cooks.name}
//                   image={cooks.image}
//                   price={cooks.price}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
