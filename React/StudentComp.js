import { useState } from 'react';

function StudentForm(){
    const[studId,setstudId]=useState("");
    const[fullName,setfullName]=useState("");
    const[Address,setAddress]=useState("");
    const[email,setemail]=useState("");
    const[mobile,setmobile]=useState("");
    
    const[linktext,setLinktext]=useState("show")
    const handleClick = () => {
        setLinktext(linktext=="show"?"Hide":"Show")
    }
    return(
        <div>
            <h1>Student Form</h1>
            <form>
            StudentId:
		<input type="text" name="studid" /> <br/>
    Full name:
		<input type="text" name="FullName" /> <br/>
    Address:
		<input type="text" name="Address" /> <br/>
    Emailid:
		<input type="text" name="Emailid" /> <br/>
    Mobile:
		<input type="text" name="Mobile" /> <br/>
		
	</form>
                
              
            
        </div>
    )
}
export default StudentForm;