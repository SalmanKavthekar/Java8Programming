import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function GetStudents () {
    const [studentinfo,setStudents] = useState([]);
    const [err,setErr] = useState("")
    const navigate = useNavigate()

    
    useEffect(()=>{
        fetch("http://localhost:9000/Studentinfo")
        .then(resp => resp.json())
        .then(allstudents => setStudents(allstudents))
        .catch(error => setErr("Server not available"))
    },[])

    return (
       <div>
                {
                    studentinfo.map(v=>{
                        return  <form>
        
	
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
		<input type="submit" value="LOGIN" />
	          <td> <a onFocus={()=>{navigate("/editstudent",{state: v})}}> EDIT </a></td>
                     
                        </form>
                  
                    })
                }
          
          {err}
       </div>
    )
}

