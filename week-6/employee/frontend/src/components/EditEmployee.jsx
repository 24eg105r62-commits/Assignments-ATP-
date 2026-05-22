import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";

function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const { state } = useLocation();
  const navigate = useNavigate();

  // preload form data
  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      const res = await axios.put(
        `https://employee-management-ksxo.onrender.com/employee-api/employee/${state._id}`,
        modifiedEmp
      );

      if (res.status === 200) {
        navigate("/list");
      }
    } catch (err) {
      console.log("Error updating employee:", err);
    }
  };

  const inputClass = "mb-3 border-2 border-indigo-200 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white";

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 border border-indigo-100">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Edit Employee</h1>
      <form onSubmit={handleSubmit(saveModifiedEmp)}>
        <input type="text" placeholder="Full Name" {...register("name")} className={inputClass} />
        <input type="email" placeholder="Email Address" {...register("email")} className={inputClass} />
        <input type="number" placeholder="Mobile Number" {...register("mobile")} className={inputClass} />
        <input type="text" placeholder="Designation" {...register("designation")} className={inputClass} />
        <input type="text" placeholder="Company Name" {...register("companyName")} className={inputClass} />
        <button type="submit" className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition shadow">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;