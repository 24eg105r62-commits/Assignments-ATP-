import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj)=>{
    //navigate tp/ employee
    navigate("/employee",{state:empObj});
  }
  
  const gotoEditEmployee = (empObj)=>{
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp",{state:empObj});
  }
  
  const deleteEmpByID = async(id)=>{
    let res = await axios.delete(`https://employee-management-ksxo.onrender.com/employee-api/employee/${id}`);
    if(res.status===200){
      //get latest emps data;
      getEmps();
    }
  }
  //get all emps
  async function getEmps() {
      let res = await fetch("https://employee-management-ksxo.onrender.com/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        console.log((resObj))
        setEmps(resObj.payLoad);
      }
    }
  useEffect(() => {
  
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {emps?.map((empObj) => (
          <div key={empObj._id} className="bg-white border border-indigo-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-sm">{empObj.name?.[0]?.toUpperCase()}</span>
            </div>
            <p className="font-semibold text-indigo-800 truncate">{empObj.name}</p>
            <p className="text-sm text-indigo-400 truncate mb-4">{empObj.email}</p>
            <div className="flex gap-2">
              <button onClick={() => gotoEmployee(empObj)} className="flex-1 bg-indigo-100 text-indigo-700 text-sm py-1.5 rounded-lg hover:bg-indigo-200 transition">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="flex-1 bg-purple-100 text-purple-700 text-sm py-1.5 rounded-lg hover:bg-purple-200 transition">Edit</button>
              <button onClick={() => deleteEmpByID(empObj._id)} className="flex-1 bg-red-100 text-red-600 text-sm py-1.5 rounded-lg hover:bg-red-200 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;