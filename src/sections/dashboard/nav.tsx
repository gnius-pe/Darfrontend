import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import userPhoto from "../../assets/images/navbar/user_photo.svg";
import logoHead from "../../assets/images/header/ic_logo.svg";
import { getAccessibleRoutes } from "../../routes/roleUtils.ts";
import navConfig from "../../layout/config-navigation.tsx";
import navBottom from "../../layout/config-navBot.tsx";

interface NavPropItems {
  navbarOpen: boolean;
  setnavbarOpen: (arg: boolean) => void;
}

const Nav = ({ navbarOpen, setnavbarOpen }: NavPropItems) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const sidebar = useRef<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const location = useLocation(); // Hook para obtener la ruta actual

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !navbarOpen ||
        sidebar.current.contains(event.target as Node) ||
        trigger.current.contains(event.target as Node)
      )
        return;
      setnavbarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [navbarOpen, setnavbarOpen]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!navbarOpen || event.keyCode !== 27) return;
      setnavbarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [navbarOpen, setnavbarOpen]);

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
  const accessibleRoutes = getAccessibleRoutes();

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      open={navbarOpen}
      onClose={() => setnavbarOpen(false)}
      ref={sidebar}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          paddingX:1,
          backgroundColor: "#071538",
        },
      }}
      ModalProps={{ keepMounted: true }}
    >
      <div className="flex flex-col h-full text-white">
        <div className="flex items-center justify-between p-3">
          {isMobile && (
            <IconButton
              ref={trigger}
              onClick={() => setnavbarOpen(false)}
              edge="start"
              aria-label="close drawer"
            >
              <ChevronLeftIcon sx={{ color: 'white' }} />
            </IconButton>
          )}
          <img src={logoHead} alt="logo" style={{ width: "50px", margin: "auto" }} />
        </div>
        <Divider />
        
        <div className="flex flex-col items-center gap-1 p-2">
          <h2 className="font-bold text-teal-300">Mision Tingua Huaraz</h2>
          <div className="flex justify-center gap-1">
            <img src={userPhoto} alt="user" style={{ height: "60px", borderRadius: "50%" }} />
            <div className="flex flex-col">
              <Typography variant="body1" color="#FFF" gutterBottom>
                {userInfo.username}
              </Typography>
              <Typography variant="body2" color="#FFF">
                {userInfo.role}
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-48 h-0 border border-teal-300 rounded-lg overflow-hidden self-center"></div>
        <List>
          {navConfig
            .filter((item) => accessibleRoutes.includes(item.path))
            .map((item) => (
              <ListItem
                button
                key={item.title}
                component={Link}
                to={item.path}
                sx={{
                  gap: 1,
                  backgroundColor: location.pathname === item.path ? '#374151' : 'inherit', // Gris claro para el item activo
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: location.pathname === item.path ? '#374151' : '#1e40af', // Gris claro si activo, celeste claro en hover si no
                    borderRadius: 2,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>

            ))}
        </List>
        <Divider />
        <List>
          {navBottom
            .filter((item) => accessibleRoutes.includes(item.path))
            .map((item) => (
              <ListItem
                button
                key={item.title}
                component={Link}
                to={item.path}
                sx={{
                  gap: 1,
                  backgroundColor: location.pathname === item.path ? '#374151' : 'inherit', // Gris claro para el item activo
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: location.pathname === item.path ? '#374151' : '#1e40af', // Gris claro si activo, celeste claro en hover si no
                    borderRadius: 2,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 25, height: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Nav;


