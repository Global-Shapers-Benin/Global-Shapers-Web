import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SocialShareButtons() {
  const url = window.location.href;

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-700"
      >
        Facebook
      </a>

      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=I just donated to a great cause!`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700"
      >
        Twitter
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=I just donated! ${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-green-600 rounded-lg text-sm hover:bg-green-700"
      >
        WhatsApp
      </a>

      {/* Copy link */}
      <CopyToClipboard text={url}>
        <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600">
          Copy Link
        </button>
      </CopyToClipboard>
    </div>
  );
}
