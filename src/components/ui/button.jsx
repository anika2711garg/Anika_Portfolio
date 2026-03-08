export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
