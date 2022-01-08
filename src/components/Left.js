import { Typography } from '@mui/material'
import React from 'react'
import Left_part from "../css/Left_part.css"

const Left = () => {
    return (
        <>
            <img src="/assets/Group_62.png" style={{position:"absolute" , height: "60px" , width:"60px" , top:"375px" , left:"35px" , marginRight:"18px"}}></img>
            <img src="/assets/Group_64.jpeg" style={{position:"absolute" , height: "113.76px" , width:"56.88px" , top:"1380.92px" , left:"27px" , marginRight:"21px"}}></img>
            <div style={{display:"flex" , flexDirection: "column" ,   left:"105px" , top:"112px" , position:"absolute" , width: "655px"  }}>
                <div style={{background:"#fff" ,  height:"285px" , display: "flex" , justifyContent:"center" , borderRadius: "7px"}}>
                    <div style={{ width: "247px" , borderTopLeftRadius: "7px" , borderBottomLeftRadius: "7px" }}>
                        <img src="/assets/Group_55.png" style={{position: "absolute" , height: "158px" , width:"158px" , marginTop: "26px" , marginLeft: "32px" }}></img>
                        <img src="/assets/Rectangle_35.png" style={{position: "relative" , height: "138px" , width:"136px" ,marginTop: "37px" , marginLeft: "42px" , marginRight : "475px" }}></img>
                        {/* <div style={{display: "flex"}}>
                        <img src="/assets/Twitter_Squared.png" style={{height: "16px" , width: "16px" , marginTop: "207px" , marginLeft: "70px"}}></img>
                        </div> */}
                        <div  style={{display:"flex",height:"16px",marginTop:"34px"}}>
                                <img src="/assets/Twitter_Squared.png" style={{height:"16px",width:"16px",marginLeft:"70px"}} ></img>
                                 <img src="/assets/Facebook_logo.png" style={{height:"16px",width:"16px",marginLeft:"17px"}} ></img>
                                <img src="/assets/Instagram_logo.png" style={{height:"16px",width:"16px",marginLeft:"18px"}} ></img> 
                                
                            </div>
                    
                    </div>
                    <div style={{width:"408px", borderTopRightRadius:"7px",borderBottomRightRadius:"7px"}}>
        
                        <div style={{display:"flex",marginTop:"11px",height:"45px"}}>
                                <Typography 
                                style={{fontSize:"30px",fontFamily:"'Poppins', sans-serif",fontWeight:550,marginRight:75}} 
                                align='left'>
                                Remus Lupin
                                </Typography>
                                <button type="button" class="btn btn-outline-dark" style={{height:"23.55px",width: "87px" , fontWeight: 400 , fontSize: "12px", marginRight: "20px",paddingTop:"3px", marginTop:"9px" ,border: "0.5px solid #000000",boxSizing: "border-box",borderRadius: "4px"}}>Edit Profile</button> 
                             </div>
                            <Typography 
                                style={{fontSize:"13px",fontFamily:"Poppins",fontWeight:"400" , fontStyle:"normal"}} align="left">
                                JEE Aspirant
                            </Typography>
                        <div className='flex_style' style={{marginTop:"14px"}}>
                            <div className='smallbox' style={{ width: "32.04px"}}> Jee</div> 
                            <div className='smallbox' style={{marginLeft:"4em",width: "51.97px"}}> Calculus</div>
                            <div className='smallbox' style={{marginLeft:"10.5em",width: "62.03px"}}> Mechanics</div> 
                            <div className='smallbox' style={{marginLeft:"18em",width: "53.4px"}}> Organic</div> 
                            <div className='smallbox' style={{marginLeft:"24.5em",width: "42px"}}> B.Tech</div> 
                            <div className='smallbox' style={{marginLeft:"30em",width: "91px"}}> Thermodynamics</div>  
                        
                        </div>
                        <div className='flex_style' style={{marginTop:"40px"}}>
                            <div className='smallbox' style={{width: "51.97px"}}> Calculus</div>
                            <div className='smallbox' style={{marginLeft:"6.5em",width: "62.03px"}}> Mechanics</div> 
                            <div className='smallbox' style={{marginLeft:"14em",width: "30px"}}> CSE</div> 
                            <div className='smallbox' style={{marginLeft:"18em",width: "53.4px"}}> Organic</div> 
                            <div className='smallbox' style={{marginLeft:"24.5em",width: "32.04px"}}> Jee</div> 
                            <div className='smallbox' style={{marginLeft:"29em",width: "42px"}}> B.Tech</div>  
                        </div>
                        <div className='flex_style' style={{marginTop:"66px"}}>
                            <div className='smallbox'style={{width: "91px"}}> Thermodynamics</div>
                            <div className='smallbox'style={{marginLeft:"11em",width: "42px"}}> B.Tech</div>
                            <div className='smallbox'style={{marginLeft:"16.5em",width: "51.97px"}}> Calculus</div>
                            <div className='smallbox'style={{marginLeft:"23em",width: "53.4px"}}> Organic</div>                                    
                        </div>
                         <div>
                            <hr style={{marginTop:"108px", width:"389px",border:"1px solid #000000" , marginRight:"19px"}} />
                        </div>
                            
                            <div style={{width:"380px",height: "99px",fontFamily:"Poppins",fontSize:"12px",fontWeight:400,marginTop:"4%"}} align="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, turpis cras in pellentesque at blandit velit. Magna at lobortis lacus, ultricies in vel morbi adipiscing. Nibh purus a sollicitudin scelerisque. Integer eget dui orci, dis tellus.
                            </div>
                    </div>
                </div>
                <div style={{background: "#fff" , height: "1032px" , width: "655px" , marginTop : "19px" , borderRadius : "7px"}}>
                    <div style={{display:"flex" , width:"655px" , height:"45px" , marginTop:"11px"}}>
                        <img src="../assets/Discover_Lifelong_1.png" style={{height:"32px" , width: "32px" , marginLeft: "8px" , marginTop: "7px"}}></img>
                        <Typography
                                style={{color: "#000237" , lineHeight: "45px" , fontSize:"30px",fontFamily:"Poppins",fontWeight:600,  fontStyle: "normal" , marginLeft:"6px"}} >
                                Upcoming Classes
                        </Typography>
                    </div>
                    <div style={{display: "flex" , height:"20px" , width: "655px" , marginTop:"14px", marginLeft: "16px"  }}>
                        <Typography
                                style={{  fontSize:"13px",fontFamily:"Poppins" , fontStyle: "normal" , fontWeight:400 }}>
                            Today
                        </Typography>
                        <hr style={{height: "0px" , width: "579px" , marginTop:"12px" , border: "1px solid #000000" ,  opacity: 0.4 ,  marginLeft:"7px" , marginRight:"12px"}} />
                    </div>
                    {/* rectangle 1 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"8px",background:"#fff",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/assets/Courses_1.jpeg" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 
                 {/* <div className='imagebox' style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></div> */}
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"38px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/assets/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                4:00-6:00 PM </Typography> 
                            </div>
                        </div>
                        
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                     {/* <Button variant="contained" sx={{width:"108px",height:"25px",borderRadius:"5px",marginLeft:"370px",marginTop:"-2em"}}>join now</Button>  */}
                     <button type="button" class="btn btn-primary" 
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            {/* rectangle 2 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"16px",background:"#fff",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/assets/Courses_2.jpeg" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/assets/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                8:00-9:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                    
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            <div style={{display:"flex",marginTop:"29px",height:"20px"}}>
                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "13px",marginLeft:"16px",width:"53"}}>
                16/09/21 </Typography>   
                <hr style={{marginLeft:"5px",width:"569px",height:"0px",border:"1px solid #000000"}} /> 
            </div>
            {/* rectangle 3*/}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"18px",background:"#fff",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/assets/Courses_1.jpeg" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/assets/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                4:00-6:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                     {/* <Button variant="contained" sx={{width:"108px",height:"25px",borderRadius:"5px",marginLeft:"370px",marginTop:"-2em"}}>join now</Button>  */}
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            {/* rectangle 4 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"25px",background:"#fff",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/assets/Courses_2.jpeg" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/assets/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                8:00-9:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                    
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                    {/* <img src="/assets/" */}
                 </div>
            </div>
            
            {/* rectangle 5 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"25px",background:"#fff",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/assets/Courses_1.jpeg" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 
                 {/* <div className='imagebox' style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></div> */}
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/assets/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                4:00-6:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                     {/* <Button variant="contained" sx={{width:"108px",height:"25px",borderRadius:"5px",marginLeft:"370px",marginTop:"-2em"}}>join now</Button>  */}
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>

            {/* rectangle 6 */}
            <div style={{display:"flex",width:"635px",height:"128px",marginLeft:"8px",marginTop:"25px",marginRight:"13px",background:"#fff",borderRadius:"21px",border:"1.5px solid #FAFAFA"}}>
                 <img src="/assets/Courses_2.jpeg" style={{height: "111px" , width:"111px",marginLeft:"8px",marginTop:"8px",borderRadius:"13px"}}></img>
                 <div style={{width:"502px",height:"111px",marginLeft:"14px",marginTop:"8px"}}>
                    <div style={{display:"flex",alignItems:"center",height:"30px"}}>
                        <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"500",fontSize: "19.8px",width:"278px",height:"38px"}}>
                        Lorem ipsum sit amet </Typography> 
                        <div style={{marginLeft:"95px",height:"20px",width:"16px",}}>
                            <div className='clockbox' style={{display:"flex"}}>
                                <img src="/assets/Story_Time.png" style={{height: "18px" , width:"18px"}} ></img>
                                <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:700,fontSize: "12.9px"}}>
                                8:00-9:00 PM </Typography> 
                            </div>
                        </div>
                    </div>
                    <Typography style={{fontFamily: "Poppins",fontStyle: "normal",fontWeight:"400",fontSize: "10.9px",height:"53px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla pharetra hash. 
                    </Typography>
                    
                     <button type="button" class="btn btn-primary" disabled
                        style={{position:"absolute" , height:"25px",width: "85px" , fontWeight: 600 , fontSize: "13.9px", marginLeft:"393px",marginTop:"-1em",background: "#29A5FF",borderRadius: "5px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            Join Now
                    </button>
                 </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Left
