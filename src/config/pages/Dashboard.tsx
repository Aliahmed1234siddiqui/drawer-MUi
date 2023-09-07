import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './Dashboard.css'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Routers , Routes , Route , useNavigate } from 'react-router-dom'

import Calender from './Dashboard Pages/Calender';
import Chats from './Dashboard Pages/Chats';
import Customer from './Dashboard Pages/Customer';
import CustomerDetails from './Dashboard Pages/CustomerDetails';
import FoodDetails from './Dashboard Pages/FoodDetails';
import Foods from './Dashboard Pages/Foods';
import OrderDetails from './Dashboard Pages/OrderDetails';
import OrderList from './Dashboard Pages/OrderList';
import Reviews from './Dashboard Pages/Reviews';
import Wallet from './Dashboard Pages/Wallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Home from './Dashboard Pages/Home';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import RedeemIcon from '@mui/icons-material/Redeem';
import SettingsIcon from '@mui/icons-material/Settings';
import Analytics from './Dashboard Pages/Analytics';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

let Arr = [
    {
        name:"Dashboard",
        route:"Home",
        icon:<HomeIcon />,
    },
    {
        name:"OrderList",
        route:"OrderList",
        icon:<FormatListBulletedIcon />,
    },
    {
        name:"OrderDetails",
        route:"OrderDetails",
        icon:<ListAltRoundedIcon />,
    },
    {
        name:"Customer",
        route:"Customer",
        icon:<SupportAgentRoundedIcon />,
    },
    {
        name:"Analytics",
        route:"Analytics",
        icon:<AnalyticsIcon />,
    },
    {
        name:"Reviews",
        route:"Reviews",
        icon:<RateReviewRoundedIcon />,
    }, 
    {
        name:"Foods",
        route:"Foods",
        icon:<FastfoodRoundedIcon/>,
    },
    {
        name:"FoodDetails",
        route:"FoodDetails",
        icon:<MenuBookRoundedIcon />,
    },
    {
        name:"CustomerDetails",
        route:"CustomerDetails",
        icon:<ManageAccountsRoundedIcon />,
    },

    {
        name:"Calender",
        route:"Calender",
        icon:<CalendarMonthRoundedIcon />,
    },
    {
        name:"Chats",
        route:"Chats",
        icon:<ChatRoundedIcon />,
    },

   
   
   
      {
        name:"Wallet",
        route:"Wallet",
        icon:<AccountBalanceWalletRoundedIcon />,
    },
  
];
const navigate = useNavigate()
let openPage=(route:string)=>{
navigate(`../Dashboard/${route}`)

}



  const drawer = (
    <div><h2  className='text-center fw-bolder m-3' >Sedap</h2>
    <p className='text'>mordern admin dashboard</p>
      
      
     
      <List>
        {Arr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>{openPage(x.route)}}>
            <ListItemIcon>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      
        position="fixed"
        sx={{
          backgroundColor: 'black',
          color:"white",
          paddingTop:"4px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
          <InputGroup className="mb-1">
       
        <Form.Control width={75} placeholder='serach here' aria-label="Text input with checkbox" />
        <InputGroup.Text><SearchIcon />  </InputGroup.Text><CircleNotificationsIcon className='mx-2' />  <MarkChatUnreadIcon className='mx-2' />  <RedeemIcon className='mx-2'/>  <SettingsIcon className='mx-2'/>
       <SearchIcon />
      </InputGroup>
     
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      <Routes>
<Route path='Analytics' element={<Analytics/>} />
<Route path='Calender' element={<Calender/>} />
<Route path='Chats' element={<Chats/>} />
<Route path='Customer' element={<Customer/>} />
<Route path='CustomerDetails' element={<CustomerDetails/>} />
<Route path='FoodDetails' element={<FoodDetails/>} />
<Route path='Foods' element={<Foods/>} />
<Route path='OrderDetails' element={<OrderDetails/>} />
<Route path='OrderList' element={<OrderList/>} />
<Route path='Reviews' element={<Reviews/>} />
<Route path='Wallet' element={<Wallet/>} />
<Route path='Home' element={<Home/>} />


      </Routes>
      </Box>
    </Box>
  );
}