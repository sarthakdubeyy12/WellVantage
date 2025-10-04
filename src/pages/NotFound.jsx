// NotFound.jsx
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen bg-white">
      <h1 className="text-5xl font-bold text-green-700 mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <button
        className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}
