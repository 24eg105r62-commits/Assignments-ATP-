import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
        <span className="text-white font-black text-2xl">E</span>
      </div>
      <h1 className="text-6xl font-bold text-indigo-700 mb-4">Employee Manager</h1>
      <p className="text-xl text-indigo-400 mb-10 max-w-md">
        Manage your team effortlessly — add, view, edit, and remove employees all in one place.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/create-emp")}
          className="bg-indigo-600 text-white text-lg px-8 py-3 rounded-full hover:bg-indigo-700 shadow-md transition"
        >
          + Add Employee
        </button>
        <button
          onClick={() => navigate("/list")}
          className="border-2 border-indigo-600 text-indigo-600 text-lg px-8 py-3 rounded-full hover:bg-indigo-100 transition"
        >
          View Employees
        </button>
      </div>
    </div>
  );
}

export default Home;