import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../Logo/logo_menu.png";
import { Link } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import { useNavigate } from "react-router-dom";

const pages = [
  ["Accueil", "../home"],
  ["PollAir c'est quoi ?", "../about"],
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function deconnexion() {
    UserProfile.setId("");
    navigate("/");
  }

  React.useEffect(() => {
    if (UserProfile.getId() === "") {
      navigate("/");
    }
  }, []);

  console.log(UserProfile.getId());
  return (
    <AppBar sx={{ bgcolor: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} alt="logo" height="75" width="200" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ fill: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page[1]}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      color="black"
                      sx={{
                        fontFamily: "Roboto",
                        textTransform: "capitalize",
                      }}
                    >
                      {page[0]}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <img src={logo} alt="logo" height="75" width="200" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link key={page} to={page[1]} style={{ textDecoration: "none" }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "Roboto",
                  }}
                >
                  {page[0]}
                </Button>
              </Link>
            ))}
          </Box>
          {UserProfile.getId() !== "" && (
            <>
            <Box sx={{ flexGrow: 0, fontFamily: "Roboto",marginRight: 2 }}>
              <Typography sx={{color: "black"}} >ID:{UserProfile.getId()}</Typography>
            </Box>
            <Box sx={{ flexGrow: 0, fontFamily: "Roboto" }}>
              <Button
                sx={{
                  backgroundColor: "#0bbbd7",
                  textTransform: "capitalize",
                  ":hover": {
                    bgcolor: "#d9d9d9",
                    color: "black",
                  },
                }}
                onClick={() => {
                  deconnexion();
                }}
                color="inherit"
              >
                Déconnexion
              </Button>
            </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
