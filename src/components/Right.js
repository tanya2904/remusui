import { Typography , Rating} from '@mui/material'
import React from 'react'
import Right_part from "../css/Right_part.css"

const Right = () => {
    return (
        <>
           <div style={{ height: "953px" , width: "397px" , top:"111px" , left:"800px" , position:"absolute" }}> 
                <div className='top_right' >
                    <div style={{display:"flex",width:"397px",height:"170px" , borderRadius:"7px"}}>
                        <div style={{width:"208px"}}>
                            <img src="/assets/image_2.png" style={{height: "85px" , width:"85px" , marginTop:"28px",marginLeft:"29px"}} ></img>
                        </div>
                        <div style={{width:"164px",height:"30px"}}>
                            <Typography 
                                style={{fontFamily:"Poppins",fontStyle:"normal",fontWeight:600,fontSize:"18px",color: "#FFFFFF",marginLeft:"4px",marginTop:"26px"}}>
                                Any Any Doubts?
                            </Typography>
                            <div 
                                style={{color:"#fff",
                                    // width:"160px",
                                    // height:"13px",
                                    fontFamily:"Poppins",
                                    fontStyle:"normal",
                                    fontWeight:"normal",
                                    fontSize:"12px"}}>
                                <ul>
                                    <li  style={{height:"13px" , width:"134px" ,  marginRight:"55px"}}>Talk to our mentors</li>
                                    <li style={{height:"14px" ,marginTop:"8px" , width:"144px"}}>Get expert Guidence</li>
                                    <li  style={{height:"13px" ,marginTop:"8px" , width:"134px"}}>Talk to our mentors</li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                    <div 
                        style={{
                            width:"377px",
                            height:"30px",
                            marginLeft:"10px",
                            marginTop:"-40px",
                            border:"1px solid #ffffff",
                            // filter: "drop-shadow("0px 5px 9px rgba(0, 0, 0, 0.14))",
                            borderRadius:"3px"}}>
                        <Typography
                            style={{
                                height:"24px",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "16px",
                                color: "#ffffff",
                                marginTop:"3px"}} align='center'>
                            Book Your Free Mentorship Session Now!
                        </Typography>
                    </div>
                </div>
                {/* lower part */}
                <div className='down_right'>

                    <div style={{marginLeft:"11px",marginTop:"8px",display:"flex",height: "38px"}}>
                        <img  alt='course' src="/assets/college_college_c1.png" style={{height: "35px" , width:"19px" ,marginTop:"2px"}}></img>
                        <div>
                            <div className='course' > My Courses</div>
                        </div>   
                    </div>
                    
                    {/* rectangle 1 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"8.15px"}}>
                        <img  alt='course' src="/assets/corses4.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal", fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 2 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"27.99px"}}>
                        <img  alt='course' src="/assets/courses5.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 3 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"27px"}}>
                        <img  alt='course' src="/assets/EDTCH9_M-image16.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 4 */}
                    <div style={{width:"109.02px",height:"108px",display:"flex",marginTop:"30px"}}>
                        <img  alt='course' src="/assets/Rectangle_24.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>

                    {/* rectangle 5 */}
                    <div style={{width:"109.02px",height:"109.14px",display:"flex",marginTop:"31px"}}>
                        <img  alt='course' src="/assets/Rectangle_20.png" style={{height: "109.14px" , width:"194.02px",marginLeft:"11px"}}></img>
                        <div style={{height: "109.14px" , width:"194.02px",marginLeft:"9.98px"}}>
                            <Typography 
                                style={{width:"166px",height: "28px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"17.8px",fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                                Lorem ipsum sit a
                            </Typography>

                            <Typography 
                                style={{color:"#666666",width:"171px",height: "33px",fontFamily:"Poppins",fontStyle:"normal",fontSize:"9.9px",fontWeight:400,display:"flex",justifyContent:"center",alignItems:"center",marginTop:"3px"}}>
                                 Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
                            </Typography>

                            <div style={{marginTop:"18.05px"}}>
                            <Rating name="size-medium" defaultValue={5} style={{color:"#FCEE21"}} />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             
             <img src="/assets/Group_63.png" style={{ position:"absolute" , top:"1042px" , left:"795px" , height:"32px" , width:"30px"}}></img>
        </>
    )
}

export default Right
