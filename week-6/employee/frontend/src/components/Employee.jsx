
import { useLocation, useNavigate } from 'react-router';

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const fields = [
    { label: "Email", value: state.email },
    { label: "Mobile", value: state.mobile },
    { label: "Designation", value: state.designation },
    { label: "Company", value: state.companyName },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-md border border-indigo-100 p-8">
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow mb-3">
          <span className="text-white font-black text-2xl">{state.name?.[0]?.toUpperCase()}</span>
        </div>
        <h2 className="text-2xl font-bold text-indigo-700">{state.name}</h2>
      </div>
      <div className="space-y-3">
        {fields.map(({ label, value }) => (
          <div key={label} className="flex justify-between border-b border-indigo-50 pb-2">
            <span className="text-indigo-400 text-sm font-medium">{label}</span>
            <span className="text-indigo-800 text-sm font-semibold">{value}</span>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/list")} className="mt-6 w-full border-2 border-indigo-600 text-indigo-600 py-2 rounded-xl hover:bg-indigo-50 transition font-medium">
        ← Back to List
      </button>
    </div>
  );
}

export default Employee;