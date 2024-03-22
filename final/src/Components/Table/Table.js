import { useState, useEffect } from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({
  data,
  isEdit,
  ForWhat,
  handleEditOpen,
  setSelectedRowData,
  handleOpenDelete,
}) => {
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState(false);
  const buton = isEdit === true ? true : false;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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

  const handleEdit = (e, row) => {
    e.preventDefault();
    handleEditOpen(row);
    setSelectedRowData(row);
  };

  const handleDelete = (e, row) => {
    e.preventDefault();
    handleOpenDelete(row);
    setSelectedRowData(row);
  };

  let visibleFields;
  useEffect(() => {
    try {
      if (ForWhat === "products") {
        visibleFields = [
          "name",
          "image",
          "description",
          "price",
          "weight",
          "slug",
          "ingredients",
          "category",
        ];
      } else {
     
        visibleFields = Object.keys(data[0]);
      }

      const updatedColumns = visibleFields.map((field) => ({
        field,
        headerName: field,
        flex: screenWidth < 800 ? 0 : 1,
        renderCell: (params) => {
          if (field === "image" && params.row.image) {
            return (
              <img
                src={params.row.image}
                 // Assuming the "icon" field contains the image URL
                alt="Icon"
                style={{ width: "140px", height: "100px" }}
              />
            );
          }
          if (field === "image" && !params.row.image) {
            return <Avatar alt={params.row.firstName} />;
          }
          if (field === "ingredients" && params.row.ingredients) {
            const ingredientsList = params.row.ingredients
              .split(",")
              .map((ingredient) => ingredient.trim());
            return (
              <>
                <ul
                  style={{
                    listStyle: "none",
                    overflowX: "scroll",
                    maxHeight: "7rem",
                  }}
                >
                  {ingredientsList.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </>
            );
          }
          if (field === "weight" && params.row.weight) {
            const weight = params.row.weight;
            return <div>{weight} Gr</div>;
          }
          if (field === "price" && params.row.price) {
            const price = params.row.price;
            return <div>${price}</div>;
          }

          if (field === "totalPrice" && params.row.totalPrice) {
            const price = params.row.totalPrice;
            return <div>${" " + price}</div>;
          }

          if (field === "userId" && params.row.userId.firstName && params.row.userId.lastName) {
            return (
              <p
                style={{
                  color: "black",
                }}
              >
                {params.row.userId.firstName + " " + params.row.userId.lastName}
              </p>
            );
          }

          if (field === "meals" && params.row.orderDetails) {
            return <div>{" " + params.row.orderDetails.length} meals</div>;
          }

          if (field === "category" && params.row.category) {
            return (
              <p
                style={{
                  color: "black",
                }}
              >
                {params.row.category.name}
              </p>
            );
          }
          return params.value;
        },
      }));

      if (buton === true) {
        updatedColumns.push({
          field: "actions",
          headerName: "Actions",
          renderCell: (params) => (
            <Grid
              container
              md={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <IconButton onClick={(e) => handleEdit(e, params.row)}>
                <EditIcon
                  sx={{
                    ":hover": {
                      color: "#B55D51 !important",
                    },
                  }}
                />
              </IconButton>
              <IconButton onClick={(e) => handleDelete(e, params.row)}>
                <DeleteIcon
                  sx={{
                    ":hover": {
                      color: "#B55D51 !important",
                    },
                  }}
                />
              </IconButton>
            </Grid>
          ),
        });
      }

      setColumns(updatedColumns);
      setError(false);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }, [ForWhat, buton, data, screenWidth]);

  return (
    <>
      <Box
        sx={{
          height: 707,
          mt: "3rem",
          mb: "3rem",
          fontFamily: "Helvetica Neue",
        }}
      >
        <DataGrid
          isCellEditable={(GridCellParams) => false}
          columns={columns}
          rows={data}
          getRowId={(row) => row._id}
          pageSizeOptions={[5, 10, 20, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          sx={{
            fontFamily: "Helvetica Neue",
            marginBottom: "4rem",
            width: "98%",
            border: "solid 1px #B55D51",
            "& .MuiToolbar-root , .MuiInputBase-input , .MuiDataGrid-columnHeaderTitleContainer , .MuiDataGrid-cell":
              {
                color: "black",
              },
            "& .MuiButtonBase-root , & .MuiSvgIcon-root , &  .MuiSvgIcon-root":
              {
                color: "#B55D51",
              },
            "& .MuiDataGrid-root , .MuiDataGrid-colCell, .MuiDataGrid-root , .MuiDataGrid-cell":
              {
                maxHeight: "150px !important",
              },
            "& .MuiDataGrid-root > *": {
              height: "100%",
            },
            "& .MuiInputBase-root , & .MuiInputBase-input": {
              color: "#000",
            },
            "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
              borderBottomColor: "#B55D51",
            },
            " & .Mui-selected ": {
              bgcolor: "#B55D51 !important",
            },
            "& .MuiDataGrid-row": {
              height: "150px !important",
              maxHeight: "150px !important",
            },
            "& .Mui-hovered": {
              bgcolor: " #08829557 !important",
            },
            "& .Mui-selected": {
              bgcolor: "#08829557 !important",
            },
            "& .MuiDataGrid-columnHeaders , & .MuiDataGrid-toolbarContainer , & .MuiDataGrid-footerContainer":
              {
                height: "100px !important",
                maxHeight: "100px !important",
                fontSize: "1.2rem",
                mb: screenWidth < 500 ? "1rem" : "0",
              },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              color: "#B55D51 !important",
            },
            ".MuiDataGrid-cell": {
              width: "8rem",
              maxHeight: "150px",
              height: "150px",
            },
            "& .MuiSelect-select , & .MuiTablePagination-select , & .MuiSelect-standard MuiInputBase-input css-194a1fa-MuiSelect-select-MuiInputBase-input":
              {
                color: "#B55D51 !important",
              },
          }}
        />
      </Box>
    </>
  );
};

export default Table;