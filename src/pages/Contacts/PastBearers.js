import React from "react";
import senateData from "../../data/senateData";
import Styles from "../../styles/pages/past.module.css";
export default function PastBearers() {

    const president=senateData.President;
    const honTreasurer=senateData.HonyTreasurer ;
    const vicePresident=senateData.VicePresident;

 return(<div className={Styles.sbody} >
    <center>
     <h1>
        Presidents</h1>

   
     {president.map((obj)=>{


     return<>
     
     <tr className={Styles.row1}>
            <td className={Styles.col1p}>{`${obj.year}`}</td>
            <td className={Styles.col2p}> {`${obj.name}`}</td>

     </tr>
     


     
     </>
 })
}
<br/>
<br/>
{/* <h1>
        Honrary Treasurer</h1>

   
     {honTreasurer.map((obj)=>{


     return<>
     
     <tr className={Styles.row1}>
            <td className={Styles.col1}>{`${obj.year}`}</td>
            <td className={Styles.col2}> {`${obj.name}`}</td>

     </tr>
     
     </>
 })
} */}
<br/>
<br/>
{/* <h1>
        Vice President</h1>

   
     {vicePresident.map((obj)=>{


     return<>
     
     <tr className={Styles.row1}>
            <td className={Styles.col1}>{`${obj.year}`}</td>
            <td className={Styles.col2}> {`${obj.name}`}</td>

     </tr>
     
     </>
 })
}
<br/>
<br/>
<h1>
        Vice President</h1>

   
     {vicePresident.map((obj)=>{


     return<>
     
     <tr className={Styles.row1}>
            <td className={Styles.col1}>{`${obj.year}`}</td>
            <td className={Styles.col2}> {`${obj.name}`}</td>

     </tr>
     
     </>
 })
} */}

</center>

</div>);
  
}
