import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import StyleDashProducts from "./dashboard.module.css";
import {
  FormControl,
  TextField,
  Button,
  Switch,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  FormControlLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

function DashMeals() {
  const [isAddPopUp, setIsAddPopUp] = useState(false);
  const [isEditPopUp, setIsEditPopUp] = useState(false);
  const [isDeletePopUp, setIsDeletePopUp] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    weight: 0,
    ingredients: "",
    display: false,
    category: "",
    user: "",
  });

  const handleOpenPopUp = () => {
    setIsAddPopUp(true);
  };

  const {
    isPending: isProductsPending,
    error: productsError,
    data: productsData,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["mealsData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}meal`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching meal:", error);
        throw error;
      }
    },
  });

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


  const {
    isPending: isCookPending,
    error: cookError,
    data: cookData,
  } = useQuery({
    queryKey: ["cookData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}user/cook`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching cook:", error);
        throw error;
      }
    },
  });


  if (isCategoriesPending || isProductsPending || isCookPending) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading ...</h1>
      </div>
    );
  }

  if (categoriesError || productsError || cookError) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>An error occured while fetching Data</h1>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    // Check if the input type is file for handling images
    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        setFormData({
          ...formData,
          image: file,
        });
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      await axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}meal/add`,
        formDataToSend
      );
      toast.success(`the meal added successfuly 😍`);
      // console.log(response.data);
      setIsAddPopUp(false);
      await refetchProducts();
      setFormData({
        name: "",
        image: "",
        description: "",
        price: 0,
        weight: 0,
        ingredients: "",
        display: false,
        category: "",
        user:"",
      });
    } catch (error) {
      console.log(error);
      // toast.error("Error adding user");
      toast.error(`Error adding Meal 😢`);
    }
  };

  const handleEditClose = () => {
    setIsEditPopUp(false);
    setFormData({
      name: "",
      image: "",
      description: "",
      price: 0,
      weight: 0,
      ingredients: "",
      display: false,
      category: "",
      user:"",
    });
  };

  const handleEditOpen = (selectedRowData) => {
    setIsEditPopUp(true);
    setFormData({
      name: selectedRowData.name,
      image: selectedRowData.image,
      description: selectedRowData.description,
      price: selectedRowData.price,
      weight: selectedRowData.weight,
      ingredients: selectedRowData.ingredients,
      display: selectedRowData.display,
      category: selectedRowData.category._id,
      user: selectedRowData.user._id,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        id: selectedRowData._id,
        name: formData.name,
        description: formData.description,
        price: formData.price,
        weight: formData.weight,
        ingredients: formData.ingredients,
        display: formData.display,
        slug: formData.slug,
        category: formData.category,
      };
  
      const updatedFormData = new FormData();
      Object.entries(updatedData).forEach(([key, value]) => {
        if (key === "image" && value) {
          updatedFormData.append(key, value);
        } else if (value !== undefined && value !== null) {
          updatedFormData.append(key, value);
        }
      });
  
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}meal/edit`,
        updatedFormData
      );
  
      if (response.status === 200) {
        toast.success(`The meal updated successfully 😍`);
        setIsEditPopUp(false);
        await refetchProducts();
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error updating meal 😢`);
      setIsEditPopUp(true);
    }
  };

  const handleDelete = async (e) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}meal/delete`,
        {
          data: {
            id: selectedRowData._id
          }
        }
      );
  
      toast.success(`The meal deleted successfully 😍`);
      setIsDeletePopUp(false);
      await refetchProducts();
    } catch (error) {
      console.error(error);
      toast.error(`Error deleting meal 😢`);
    }
  };

  const handleOpen = (selectedRowData) => {
    // console.log("hi")
    // console.log(selectedRowData._id)
    setIsDeletePopUp(true);
  };
  const handleClose = () => setIsDeletePopUp(false);

  const diplay = screenWidth < 650 ? "column" : "row";
  const width = screenWidth < 650 ? "100%" : "50%";
  const scroll = screenWidth < 650 ? "scroll" : "";
  return (
    <>
      {isAddPopUp && (
        <>
          <Box
            className={StyleDashProducts.addPopUp}
            sx={{
              "& .MuiOutlinedInput-notchedOutline ": {
                border: "1.5px solid  gray !important",
                borderRadius: "4px",
              },
              "& .Mui-focused > .MuiOutlinedInput-notchedOutline ": {
                border: "2px solid #B55D51 !important",
                borderRadius: "4px",
              },
              "& .Mui-focused.MuiFormLabel-root ": {
                color: "#B55D51 !important",
              },
            }}
          >
            <h1
              style={{
                width: "100%",
                textAlign: "left",
                marginBottom: "1.5rem",
              }}
            >
              Add A Meal
            </h1>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: diplay,
                columnGap: "1rem",
                width: "100%",
                rowGap: "1rem",
                overflow: scroll,
                paddingTop: "0.5rem",
              }}
            >
              <Stack rowGap="2rem" width={width}>
                <FormControl fullWidth>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Price
                  </InputLabel>
                  <OutlinedInput
                    name="price"
                    type="number"
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {isCategoriesPending ? (
                      <MenuItem disabled>Loading categories...</MenuItem>
                    ) : categoriesError ? (
                      <MenuItem disabled>Error loading categories</MenuItem>
                    ) : (
                      categoriesData.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                          {category.name}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel htmlFor="user">Cook</InputLabel>
                  <Select
                    label="Cook"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                  >
                    {isCookPending ? (
                      <MenuItem disabled>Loading cook...</MenuItem>
                    ) : cookError ? (
                      <MenuItem disabled>Error loading cook</MenuItem>
                    ) : (
                      cookData.map((cook) => (
                        <MenuItem key={cook._id} value={cook._id}>
                          {cook.firstName} {cook.lastName}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>

                {screenWidth > 650 && (
                  <>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#B55D51",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#b5736b",
                          color: "white",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </Stack>
              <Stack rowGap={"2rem"} width={width}>
                <FormControl fullWidth>
                  <TextField
                    label="Weight"
                    name="weight"
                    type="number"
                    inputProps={{ min: 0 }}
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <input
                    className={StyleDashProducts.input}
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <FormControlLabel
                    label="Display"
                    control={
                      <Switch
                        name="display"
                        checked={formData.display}
                        onChange={handleChange}
                      />
                    }
                  />
                </FormControl>
                {screenWidth < 650 && (
                  <>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#B55D51",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#b5736b",
                          color: "white",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </Stack>
            </form>
          </Box>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1002,
            }}
            onClick={() => setIsAddPopUp(false)}
          ></div>
        </>
      )}
      {isEditPopUp && (
        <>
          <Box
            className={StyleDashProducts.addPopUp}
            sx={{
              "& .MuiOutlinedInput-notchedOutline ": {
                border: "1.5px solid  gray !important",
                borderRadius: "4px",
              },
              "& .Mui-focused > .MuiOutlinedInput-notchedOutline ": {
                border: "2px solid #B55D51 !important",
                borderRadius: "4px",
              },
              "& .Mui-focused.MuiFormLabel-root ": {
                color: "#B55D51 !important",
              },
            }}
          >
            <h1
              style={{
                width: "100%",
                textAlign: "left",
                marginBottom: "1.5rem",
              }}
            >
              Edit Meal
            </h1>
            <form
              onSubmit={(e) => handleUpdate(e)}
              style={{
                display: "flex",
                flexDirection: diplay,
                columnGap: "1rem",
                width: "100%",
                rowGap: "1rem",
                overflow: scroll,
                paddingTop: "0.5rem",
              }}
            >
              <Stack rowGap="2rem" width={width}>
                <FormControl fullWidth>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Price
                  </InputLabel>
                  <OutlinedInput
                    name="price"
                    type="number"
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {isCategoriesPending ? (
                      <MenuItem disabled>Loading categories...</MenuItem>
                    ) : categoriesError ? (
                      <MenuItem disabled>Error loading categories</MenuItem>
                    ) : (
                      categoriesData.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                          {category.name}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>


                <FormControl fullWidth>
                  <InputLabel htmlFor="user">Cook</InputLabel>
                  <Select
                    label="Cook"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                  >
                    {isCookPending ? (
                      <MenuItem disabled>Loading cook...</MenuItem>
                    ) : cookError ? (
                      <MenuItem disabled>Error loading cook</MenuItem>
                    ) : (
                      cookData.map((cook) => (
                        <MenuItem key={cook._id} value={cook._id}>
                          {cook.firstName} {cook.lastName}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>




                {screenWidth > 650 && (
                  <>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#B55D51",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#b5736b",
                          color: "white",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </Stack>

              <Stack rowGap={"2rem"} width={width}>
                <FormControl fullWidth>
                  <TextField
                    label="Weight"
                    name="weight"
                    type="number"
                    inputProps={{ min: 0 }}
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <input
                    className={StyleDashProducts.input}
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <FormControlLabel
                    label="Display"
                    control={
                      <Switch
                        name="display"
                        checked={formData.display}
                        onChange={handleChange}
                      />
                    }
                  />
                </FormControl>
                {screenWidth < 650 && (
                  <>
                    <FormControl fullWidth>
                      <FormControlLabel
                        label="Stock"
                        control={
                          <Switch
                            name="stock"
                            id="stock"
                            checked={formData.stock}
                            onChange={handleChange}
                            label="Stock"
                          />
                        }
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#B55D51",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#b5736b",
                          color: "white",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </>
                )}
              </Stack>
            </form>
          </Box>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1002,
            }}
            onClick={() => handleEditClose()}
          ></div>
        </>
      )}
      {isDeletePopUp && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={handleOpen}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={handleOpen}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Are you sure to Delete this Meal?
              </Typography>
              {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography> */}
              <div
                style={{
                  display: "flex",
                  columnGap: "20px",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#B55D51",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#b5736b",
                      color: "white",
                    },
                  }}
                  onClick={() => handleDelete(selectedRowData)}
                >
                  Confirm
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#B55D51",
                    borderColor: "#B55D51",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#b5736b",
                      backgroundColor: "#b5736b",
                      color: "white",
                    },
                  }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </Box>
          </Fade>
        </Modal>
      )}
      <div
        style={{
          marginLeft: "5rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            mt: "2rem",
            fontWeight: "bold",
          }}
        >
          Manage Meals
        </Typography>
        <Button
          onClick={handleOpenPopUp}
          endIcon={<AddIcon />}
          variant="contained"
          size="big"
          sx={{
            bgcolor: "#B55D51",
            transition: "background-color 0.3s ease, color 0.3s ease",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#b5736b",
              color: "white",
            },
            mt: "2rem",
          }}
        >
          Add Meal
        </Button>
        <Table
          data={productsData}
          ForWhat={"products"}
          isEdit={true}
          handleEditOpen={handleEditOpen}
          setSelectedRowData={setSelectedRowData}
          handleOpenDelete={handleOpen}
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default DashMeals;