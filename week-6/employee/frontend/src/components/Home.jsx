import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-700 mb-4">Employee Manager</h1>
      <p className="text-xl text-gray-500 mb-10 max-w-md">
        Manage your team effortlessly — add, view, edit, and remove employees all in one place.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/create-emp")}
          className="bg-gray-700 text-white text-lg px-8 py-3 rounded-2xl hover:bg-gray-800 transition"
        >
          Add Employee
        </button>
        <button
          onClick={() => navigate("/list")}
          className="border-2 border-gray-700 text-gray-700 text-lg px-8 py-3 rounded-2xl hover:bg-gray-100 transition"
        >
          View Employees
        </button>
      </div>
    </div>
  );
}

export default Home;