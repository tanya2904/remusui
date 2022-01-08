import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import Left from "./components/Left.js";
import Right from "./components/Right.js";
// import useViewport from "./viewport";
// import ViewportProvider from "./viewport/ViewportProvider.js";
// import { Typography } from '@mui/material';

function App() {
  // const {width,height,isMobile,isTablet} = useViewport();
  return (
     <div className="App">
        <Navbar />
        <div style={{display:"flex"}}>
         <div>
           <div style={{display: "flex" , justifyContent: "center" }}>
               <Left />
               <Right />
           </div>
         </div>
         <img src="/assets/Group_61.png" style={{position:"absolute" , top:"65px" , marginLeft:"36.1px" , left:"1212px" , height:"135.9px" , width:"67.94px"}} align="right"></img>
       </div>
         
         <img src="/assets/Footer.jpeg" style={{position:"absolute",height: "285px" , width:"1285px" , top:"1491px" , left:"-5px"  }}></img>
     </div>

    // <div className='App'>
    //   <ViewportProvider>
    //     <Navbar />
    //     <Typography variant="h3" marginLeft="5%" fontFamily="'Libre Baskerville', serif" fontStyle="italic"
    //                         style={{ color: isMobile ? 'blue' : isTablet ? 'red' : "green"}}>
    //                             Let Your Imagination Soar
    //     </Typography>
    //   </ViewportProvider>
    // </div>
  );
}

export default App;
