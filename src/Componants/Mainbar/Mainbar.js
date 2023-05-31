import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './main.css'
const Mainbar = () => {
    const deviceLabel = [
        {label:"Device Name"},
        {label:"Status"},
        {label:"Last Response"},
    ]

    const deviceData = [

        {device:"Test Device 01",status:"online",lr:"Wed April 26 2023; 03:00"},
        {device:"Test Device 01",status:"online",lr:"Wed April 26 2023; 03:00"},
        {device:"Test Device 01",status:"online",lr:"Wed April 26 2023; 03:00"},
        {device:"Test Device 01",status:"online",lr:"Wed April 26 2023; 03:00"},
        {device:"Test Device 01",status:"online",lr:"Wed April 26 2023; 03:00"},
    ]
    return (

    //     <div className={"rowFlex"} style={{justifyContent:"space-between",width:"90%",padding:20}}>
    //     <div>
    //      <div style={{backgroundColor:"#fff",padding:20}}>
    //          <div style={{textAlign:"left"}}>General Information</div>
    //          <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //             <div style={{color:"#ccc"}} className={"mt10 ml10"}>Projects</div>
    //             <div className={"mt10 ml10"} style={{width:"12rem"}}><ProgressBar 
    //                    completed="20"
    //                    bgColor="#0B3366"
    //                   //  className="wrapper"
    //                   //  barContainerClassName="container"
    //                   //  completedClassName="barCompleted"
    //                   //  labelClassName="label"
    //                  />
    //           </div>
    //           <div className={"mt10 ml10"}>2/10</div>
    //          </div>
    //          <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //             <div style={{color:"#ccc"}} className={"mt10 ml10"}>Users</div>
    //             <div className={"mt10 ml10"} style={{width:"12rem"}}><ProgressBar 
    //                    completed="100"
    //                    bgColor="#0B3366"
    //                   //  className="wrapper"
    //                   //  barContainerClassName="container"
    //                   //  completedClassName="barCompleted"
    //                   //  labelClassName="label"
    //                  />
    //           </div>
    //           <div className={"mt10 ml10"}>10/10</div>
    //          </div>
    //          <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //             <div style={{color:"#ccc"}} className={"mt10 ml10"}>Channels</div>
    //             <div className={"mt10 ml10"} style={{width:"12rem"}}><ProgressBar 
    //                    completed="100"
    //                    bgColor="#0B3366"
    //                   //  className="wrapper"
    //                   //  barContainerClassName="container"
    //                   //  completedClassName="barCompleted"
    //                   //  labelClassName="label"
    //                  />
    //           </div>
    //           <div className={"mt10 ml10"}>10/10</div>
    //          </div>
    //          <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //             <div style={{color:"#ccc"}} className={"mt10 ml10"}>Devices</div>
    //             <div className={"mt10 ml10"} style={{width:"12rem"}}><ProgressBar 
    //                    completed="50"
    //                    bgColor="#0B3366"
    //                   //  className="wrapper"
    //                   //  barContainerClassName="container"
    //                   //  completedClassName="barCompleted"
    //                   //  labelClassName="label"
    //                  />
    //           </div>
    //           <div className={"mt10 ml10"}>5/10</div>
    //          </div>
    //         </div>
    //         <div className={"mt20"}>
    //          <div style={{backgroundColor:"#fff",padding:20}}>
    //               <div style={{margin:10,textAlign:"left"}}>Device Status</div>
    //               <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //                   { deviceLabel.map((item,index)=>(
    //                       <div style={{textAlign:"start"}}>{item.label}</div>
    //                   ))
                      
    //                   }
    //               </div>
    //               { deviceData?.map((item,index)=>(
    //                    <div  className={"rowFlex"} style={{justifyContent:"space-between",marginBottom:10}}>
    //                       <div>{item.device}</div>
    //                       <div style={{pading:2,backgroundColor:"green",marginLeft:60}}>{item.status}</div>
    //                       <div style={{marginLeft:30}}>{item.lr}</div>
    //                   </div>
    //               ))
                     
    //               }
                  
    //           </div>
    //          </div>
    //      </div>
    //      <div>
    //       <div>
    //         <div style={{backgroundColor:"#fff",padding:20}}>
    //           <div style={{textAlign:"left"}}>Live Statistics</div>
    //           <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //               <div style={{  marginLeft:10 }}>
    //                  <div style={{ width: 100, height: 100}}> <CircularProgressbar value={15} text={"15"} /></div>
    //                   <div>Info</div>
    //               </div>
    //               <div style={{  marginLeft:10 }}>
    //                  <div style={{ width: 100, height: 100}}><CircularProgressbar value={26} text={"26"} /></div>
    //                   <div>Warnings</div>
    //               </div>
    //               <div style={{ width: 100, height: 100,marginLeft:10 }}>
    //                   <CircularProgressbar value={10} text={"10"} />
    //                   <div> Errors</div>
    //               </div>
    //           </div>
    //           </div>
    //           <div style={{marginTop:20}}>
    //           <div style={{backgroundColor:"#fff",padding:20}}>
    //               <div style={{textAlign:"left",marginBottom:10}}>Activity Logs</div>
    //               <div className={"rowFlex"} style={{justifyContent:"space-between"}}>
    //                   <div style={{textAlign:"left",color:"grey"}}>
    //                       <div style={{fontSize:14}} >Device</div>
    //                       <div style={{fontSize:12}}>FutureIK-device-1 report generted successfully</div>
    //                   </div>
    //                   <div style={{fontSize:14,color:"#ccc"}}>
    //                       <div> 16 Mar 2023</div>
    //                       <div>06:30:25 PM</div>
    //                   </div>
                      
                     
    //               </div>

    //               <div className={"rowFlex"} style={{justifyContent:"space-between",marginTop:10}}>
    //                   <div style={{textAlign:"left",color:"grey"}}>
    //                       <div style={{fontSize:14}} >Campaigns</div>
    //                       <div style={{fontSize:12}}>FutureIK-Cinemas modified successfully</div>
    //                   </div>
    //                   <div style={{fontSize:14,color:"#ccc"}}>
    //                       <div> 16 Mar 2023</div>
    //                       <div>06:30:25 PM</div>
    //                   </div>
                      
                     
    //               </div>
    //               <div className={"rowFlex"} style={{justifyContent:"space-between",marginTop:10}}>
    //                   <div style={{textAlign:"left",color:"grey"}}>
    //                       <div style={{fontSize:14}} >Zones</div>
    //                       <div style={{fontSize:12}}>FutureIK-dispalay 1 created successfully</div>
    //                   </div>
    //                   <div style={{fontSize:14,color:"#ccc"}}>
    //                       <div> 16 Mar 2023</div>
    //                       <div>06:30:25 PM</div>
    //                   </div>
                      
                     
    //               </div>
    //           </div>
    //           </div>

    //         </div>
    //      </div>
        
    //   </div>
        <div class="grid grid-cols-3 gap-2 py-5">
            <div class="col-span-2">
                <div class="grid grid-cols-2 gap-4">
             
                    <div class="bg-red-500 text-white p-4">2</div>
                    <div class="bg-green-500 text-white p-4">2</div>
                    <div class="bg-green-500 text-white p-4">2</div>
                    <div class="bg-green-500 text-white p-4">2</div>
                </div>
            </div>
            <div className='col-span-1'>
                <div class="bg-red-500 text-white p-4">3</div>
                <div class="bg-red-500 text-white my-4 p-4">3</div>
            </div>
        </div>
    )
}

export default Mainbar