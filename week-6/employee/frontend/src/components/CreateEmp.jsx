import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch("https://employee-management-ksxo.onrender.com/employee-api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  const inputClass = "mb-3 border-2 border-indigo-200 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white";

  if (loading) {
    return <p className="text-center text-2xl text-indigo-500 mt-20">Loading...</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-xl mt-20">{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 border border-indigo-100">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Create New Employee</h1>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="Full Name" {...register("name")} className={inputClass} />
        <input type="email" placeholder="Email Address" {...register("email")} className={inputClass} />
        <input type="number" placeholder="Mobile Number" {...register("mobile")} className={inputClass} />
        <input type="text" placeholder="Designation" {...register("designation")} className={inputClass} />
        <input type="text" placeholder="Company Name" {...register("companyName")} className={inputClass} />
        <button type="submit" className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;