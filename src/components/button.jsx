export default function Button({ content, functions = null }) {
  return (
    <button
      onClick={functions}
      className="w-full h-10 bg-yellow-300 border-4 border-yellow-950 rounded text-yellow-900 font-semibold"
    >
      {content}
    </button>
  );
}
