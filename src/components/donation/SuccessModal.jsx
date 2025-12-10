export default function SuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6">
      <div className="bg-white text-black p-6 rounded-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Thank You!</h2>
        <p>Your donation has been received successfully.</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
