import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import logo from "../../Assets/logo5.png"
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "../../Context/AuthContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CartContext } from "../../Context/CartContext";

function Navbar() {
  const [collapesed, setCollapsed] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { cartItemCount, setCartItemCount } = useContext(CartContext);
  const [profOpen, setProfileOpen] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {
    function updateSize() {
      if (window.innerWidth > 960) {
        setCollapsed(false);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const toggleClasses = [
    Styles.linksWrapperMobile,
    collapesed ? Styles.activeNav : "",
  ].join(" ");
  const bar1 = [Styles.line1, collapesed ? Styles.a : ""].join(" ");
  const bar2 = [Styles.line2, collapesed ? Styles.a : ""].join(" ");
  const bar3 = [Styles.line3, collapesed ? Styles.a : ""].join(" ");

  // Go to Login Page
  const goToLoginPage = () => {
    navigate("/login");
  };

  // Go to Sign Up Page
  const goToSignUpPage = () => {
    navigate("/SignUp");
  };

  // Go to cart page
  const goToCardPage = () => {
    navigate("/cart");
  };

  return (
    <section className={Styles.heroSection}>
      <header className={Styles.header}>
        <nav className={Styles.navBar}>
          <NavLink
            to="/"
            // onClick={() => handleLinkClick(0, "/home")}
            className={Styles.logoContainer}
            aria-label="Go to homepage"
          >
            <img src={logo} height={85} alt=" Logo" />
          </NavLink>

          <ul className={Styles.linksWrapperContainer}>
            {/* Navbar beginning */}
            <ul className={Styles.linksWrapper}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? Styles.active : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/meals"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? Styles.active : ""
                  }
                >
                  Meals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cook"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? Styles.active : ""
                  }
                >
                  Cooks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? Styles.active : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? Styles.active : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            {/* Navbar Ending */}
            {/* SignUp LogIn beginning */}
            <div className={Styles.loSibad}>
              {!user && (
                <ul className={Styles.linksWrapperbtn}>
                  <li>
                    <Stack spacing={2} direction="row">
                      <Button
                        onClick={goToLoginPage}
                        variant="outlined"
                        sx={{
                          color: "#b55d4e",
                          borderColor: "#b55d4e",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: "#b55d4e",
                            backgroundColor: "#b55d4e",
                            color: "white",
                          },
                        }}
                      >
                        Log In
                      </Button>

                      <Button
                        onClick={goToSignUpPage}
                        variant="contained"
                        sx={{
                          bgcolor: "#b55d4e",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                          textTransform: "none",
                          "&:hover": {
                            bgcolor: "#b55d4e",
                            color: "white",
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Stack>
                  </li>
                </ul>
              )}
              {user && (
                <div className={Styles.profileWrapper}>
                  <Button
                    endIcon={<KeyboardArrowDownIcon />}
                    onClick={() => setProfileOpen(!profOpen)}
                    variant="contained"
                    sx={{
                      bgcolor: "#b55d4e",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      height: "2.2rem",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#b55d4e",
                        color: "white",
                      },
                    }}
                  >
                    My Profile
                  </Button>
                  {profOpen === true && (
                    <div className={Styles.profileDiv}>
                      <ul className={Styles.profile}>
                        {user.role === "Cook" && (
                          <li className={Styles.profileLi}>
                            <Button
                              variant="outlined"
                              onClick={() => navigate("/dashboard")}
                              sx={{
                                padding: "0.7rem 1.5rem",
                                borderColor: "transparent",
                                textTransform: "none",
                                color: "#b55d4e",
                                ":hover": {
                                  borderColor: "transparent",
                                },
                              }}
                            >
                              Dashboard
                            </Button>
                          </li>
                        )}
                        <li className={Styles.profileLi}>
                          <Button
                            variant="outlined"
                            onClick={() => logOut()}
                            sx={{
                              padding: "0.7rem 1.5rem",
                              borderColor: "transparent",
                              color: "#b55d4e",
                              textTransform: "none",
                              ":hover": {
                                borderColor: "transparent",
                              },
                            }}
                          >
                            Logout
                          </Button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
              {/* SignUp LogIn ending */}
              <ul>
                <li style={{ listStyle: "none" }}>
                  {/* Badge beginning */}

                  <IconButton
                    aria-label="cart"
                    onClick={goToCardPage}
                    sx={{
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    <Badge
                      badgeContent={cartItemCount}
                      color="secondary"
                      sx={{
                        color: "black",
                        "& .MuiBadge-badge": { bgcolor: "#b55d4e" },
                        "& .MuiBadge-badge:hover": {
                          bgcolor: "#A0471D",
                        },
                      }}
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </li>
              </ul>
            </div>
          </ul>

          {/* ///////////////
          /////////////////

          this for burger 
          
          /////////////////
          ////////////*/}

          <ul className={toggleClasses}>
            <li>
              <NavLink
                to="/"
                onClick={() => setCollapsed(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? Styles.active : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/meals"
                onClick={() => setCollapsed(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? Styles.active : ""
                }
              >
                meals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cook"
                onClick={() => setCollapsed(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? Styles.active : ""
                }
              >
                Cooks
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setCollapsed(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? Styles.active : ""
                }
              >
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setCollapsed(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? Styles.active : ""
                }
              >
                About Us
              </NavLink>
            </li>
            {!user && (
              <li>
                <Stack
                  direction="row"
                  sx={{
                    flexDirection: "column",
                    rowGap: "30px",
                    margin: "0 20px",
                  }}
                >
                  <Button
                    onClick={goToLoginPage}
                    variant="outlined"
                    sx={{
                      color: "#b55d4e",
                      borderColor: "#b55d4e",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#b55d4e",
                        backgroundColor: "#b55d4e",
                        color: "white",
                      },
                    }}
                  >
                    Log In
                  </Button>

                  <Button
                    onClick={goToSignUpPage}
                    variant="contained"
                    sx={{
                      bgcolor: "#b55d4e",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#b55d4e",
                        color: "white",
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </li>
            )}
            {user && (
              <li className={Styles.profileWrapper2}>
                <Button
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={() => setProfileOpen(!profOpen)}
                  variant="contained"
                  sx={{
                    bgcolor: "#b55d4e",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    height: "2.2rem",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#b55d4e",
                      color: "white",
                    },
                  }}
                >
                  My Profile
                </Button>
                {profOpen === true && (
                  <div className={Styles.profileDiv2}>
                    <ul className={Styles.profile2}>
                      {user.role === "Cook" && (
                        <li className={Styles.profileLi2}>
                          <Button
                            variant="outlined"
                            onClick={() => navigate("/dashboard")}
                            sx={{
                              padding: "1.5rem 1.5rem",
                              borderColor: "transparent",
                              height: "2rem",
                              color: "#b55d4e",
                              ":hover": {
                                borderColor: "transparent",
                              },
                              textTransform: "none",
                            }}
                          >
                            Dashboard
                          </Button>
                        </li>
                      )}
                      <li className={Styles.profileLi2}>
                        <Button
                          variant="outlined"
                          onClick={() => logOut()}
                          sx={{
                            padding: "1.5rem 1.5rem",
                            height: "2rem",
                            borderColor: "transparent",
                            color: "#b55d4e",
                            ":hover": {
                              borderColor: "transparent",
                            },
                            textTransform: "none",
                          }}
                        >
                          Logout
                        </Button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}
          </ul>
          <div
            className={Styles.burgerButton}
            onClick={() => setCollapsed(!collapesed)}
          >
            <div className={bar1}></div>
            <div className={bar2}></div>
            <div className={bar3}></div>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;