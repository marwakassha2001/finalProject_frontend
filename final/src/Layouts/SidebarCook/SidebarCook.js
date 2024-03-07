import { useEffect, useState } from 'react';
import style from './Sidebar.module.css';
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Reveal } from "../../RevealAnimation";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchCategory } from "../../data/categoryData";
import StyleProducts from "./SidebarCook.module.css"
import Loading from "../../Components/Loading/Loading.js";
const SidebarCook = ({setSelectedCategories,setSearchInput,mealsData}) => {
console.log(mealsData,'helllooo')
  // const { categoryId } = useParams();
  // const [searchInput, setSearchInput] = useState("");
  // const [selectedCategories, setSelectedCategories] = useState(
  //   categoryId ? [`${categoryId}`] : []
  // );
  // const [checkboxes, setCheckboxes] = useState({});
  // const productsPerPage = 12;

  // const [currentPage, setCurrentPage] = useState(1);
  const [sidePanelWidth, setSidePanelWidth] = useState(400);
  const {
    isPending: isCategoriesPending,
    error: categoriesError,
    data: categoriesData,
  } = useQuery({
    queryKey: ["categoriesData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}category`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }
    },
  });

  const handleSearchInputChange = (event, newValue) => {
    if (typeof newValue === "object" && newValue !== null) {
      setSearchInput(newValue.name || "");
    } else {
      setSearchInput(newValue || "");
    }
  };

  const updateSideBar = () => {
    if (window.innerWidth > 959) {
      setSidePanelWidth(400);
    } else if (window.innerWidth < 750) {
      setSidePanelWidth(400);
    } else {
      setSidePanelWidth(0);
    }
  };

  useEffect(() => {
    updateSideBar();
    window.addEventListener("resize", updateSideBar);
    return () => {
      window.removeEventListener("resize", updateSideBar);
    };
  }, []);

  if (!categoriesData) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
      </div>
    );
  }
  if (categoriesError ) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <h1>An error occured while fetching Data</h1> */}
        <Loading />
      </div>
    );
  }

  const openNav = () => {
    setSidePanelWidth(400);
  };

  const closeNav = () => {
    setSidePanelWidth(0);
  };

  // For showing products based on search or categories
  const handleCheckboxChange = (event, categoryId) => {
    const isChecked = event.target.checked;

    // setCheckboxes((prevCheckboxes) => ({
    //   ...prevCheckboxes,
    //   [categoryId]: isChecked,
    // }));

    setSelectedCategories((prevSelected) =>
      isChecked
        ? [...prevSelected, categoryId]
        : prevSelected.filter((id) => id !== categoryId)
    );
  };

  console.log(mealsData,'hhhhhhhh')

  // const filteredProducts = meals
  // .filter((meal) =>
  //   meal.name.toLowerCase().includes(searchInput.toLowerCase())
  // )
  // .filter((meal) => {
  //   const matchesCategory =
  //     selectedCategories.length === 0 ||
  //     selectedCategories.some(
  //       (categoryId) => categoryId === meal.category._id
  //     );

  //   return matchesCategory;
  // }) : [];



  // const startIndex = (currentPage - 1) * productsPerPage;
  // const endIndex = startIndex + productsPerPage;

  // const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    return (
 <>
            <section className={StyleProducts.sideBarTitle}>
              <h1>Categories</h1>
            </section>
            <Reveal>
              <section className={StyleProducts.searchArticle}>
                <article>
                  <h3>Cook</h3>

                  <Stack
                    className={StyleProducts.stack}
                    sx={{ padding: "10px 0px" }}
                  >
                    <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                /* Ensure mealsData is an array before mapping */
                options={mealsData?.map((meal) => ({
                  name: meal?.user?.firstName, // Handle potential null values
                }))}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    className={`${StyleProducts.searchInput}`}
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
                onChange={handleSearchInputChange}
              />
                  </Stack>
                </article>
              </section>
            </Reveal>

            <Reveal>
              <section className={StyleProducts.categoryArticle}>
                <article>
                  <h3>Categories</h3>
                  <div className={StyleProducts.checkBoxContainer}>
                  {categoriesData.map((category) => (
                <div
                  key={category._id}
                  className={StyleProducts.checkBoxLine}
                >
                  <input
                    type="checkbox"
                    id={category.name}
                    name={category.name}
                    value={category.name}
                    data-id={category.id}
                    className={StyleProducts.customCheckbox}
                    onChange={(e) =>
                      handleCheckboxChange(e, category._id)
                    }
                  />
                  <label htmlFor={category.name}>{category.name}</label>
                </div>
              ))}
                  </div>
                </article>
              </section>
            </Reveal>
          </>

    )
}
export default SidebarCook;