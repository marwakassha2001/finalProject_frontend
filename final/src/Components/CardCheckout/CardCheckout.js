import React, { useContext, useState } from "react";
import styles from "./CardCheckout.module.css";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../Utils/AxiosInstance";
import { AuthContext } from "../../Context/AuthContext";
import { Box, FormControl, InputLabel, TextField } from "@mui/material";
import useApi from "../../Hooks/UseApi";
import NoteModal from "../Note/Note";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../Context/CartContext";

export default function CardCheckout({ totalPrice, cartItems }) {
  const { setCartItemCount, setCartItems } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [delevery, setDelevery] = useState(2);
  const [openNote, setOpenNote] = useState(false);
  const { apiCall, error } = useApi();


  const SendOrder = async (e) => {
    e.preventDefault();
    if (!user) {
      setOpenNote(true);
      return;
    } else {
      try {
        await apiCall({
          method: "post",
          url: "/order",
          data: {
            userId: user.id,
            address: address,
            phone:phone,
            orderDetails: cartItems,
            deliveryFee: delevery,
          },
        });

        if (error) {
          toast.error("An error occured, order not sent !!");
        } else {
          localStorage.removeItem("cart");
          toast.success("Order sent Successfuly ");
          toast.success("Items removed from your cart ");
          setCartItems([]);
          setCartItemCount(null)
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box
      className={styles.cardPage}
      sx={{
        "& .MuiOutlinedInput-notchedOutline ": {
          border: "1.5px solid  gray !important",
          borderRadius: "4px",
        },
        "& .Mui-focused > .MuiOutlinedInput-notchedOutline ": {
          border: "2px solid #B55D51 !important",
          borderRadius: "4px",
        },
        "& .Mui-selected > .MuiOutlinedInput-notchedOutline ": {
          border: "2px solid #B55D51 !important",
          borderRadius: "4px",
        },
        "& .Mui-focused.MuiFormLabel-root ": {
          color: "#b27068 !important",
        },
        ".MuiFormLabel-root": {
          fontSize: "1.1rem",
        },
      }}
    >
   
      <div className={styles.cardWrapper}>
        <p className={styles.titleCard}>Checkout your Order</p>
        <form className={styles.form} onSubmit={(e) => SendOrder(e)}>
          <div className={styles.price}>
            <p>Price</p>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className={`${styles.deliveryPart} ${styles.form}`}>
            <TextField
              required
              id="outlined-required"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
              <TextField
              required
              id="outlined-required"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p>
            Delivery Fees: ${delevery} All around Tripoli
            </p>
          </div>
          <div className={styles.totalPrice}>
            <p>Total Price</p>
            <div>${(totalPrice + delevery).toFixed(2)}</div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#B55D51",
                textTransform: "none",
                transition: "background-color 0.3s ease, color 0.3s ease",
                "&:hover": {
                  bgcolor: "#b27068",
                  color: "white",
                },
              }}
            >
              Checkout
            </Button>
            <ToastContainer />
          </div>
        </form>
      </div>
      <NoteModal openNote={openNote} handleClose={() => setOpenNote(false)} />
    </Box>
  );
}