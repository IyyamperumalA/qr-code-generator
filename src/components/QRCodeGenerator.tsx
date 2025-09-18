"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

const qrTypes = [
  { key: "url", label: "🌐 URL" },
  { key: "text", label: "📝 Text" },
  { key: "email", label: "✉️ Email" },
  { key: "wifi", label: "📶 WiFi" },
  { key: "vcard", label: "👤 vCard" },
];

export default function QRCodeGenerator() {
  const [type, setType] = useState("url");
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);

  const handleGenerate = () => {
    setQrValue(input);
  };

  const handleDownloadPNG = () => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  const handleDownloadSVG = () => {
    if (!svgRef.current) return;
    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svgRef.current);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    if (!qrValue) return;
    navigator.clipboard.writeText(qrValue);
    alert("✅ QR content copied to clipboard!");
  };

  const handleShare = async () => {
    if (navigator.share && qrValue) {
      try {
        await navigator.share({
          title: "My QR Code",
          text: "Scan this QR Code",
          url: qrValue,
        });
      } catch (err) {
        console.log("Share cancelled:", err);
      }
    } else {
      alert("❌ Web Share not supported in this browser.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* QR Type Menu */}
      <div className="flex space-x-4 overflow-x-auto pb-2 mb-4 border-b">
        {qrTypes.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setType(item.key);
              setInput("");
              setQrValue("");
            }}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              type === item.key ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Dynamic Input */}
      <div className="mb-4">
        {type === "url" && (
          <input
            type="url"
            placeholder="Enter the URL"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        )}
        {type === "text" && (
          <input
            type="text"
            placeholder="Enter the Text/Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        )}
        {type === "email" && (
          <input
            type="email"
            placeholder="Enter Email Address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        )}
        {type === "wifi" && (
          <div className="space-y-2">
            <input type="text" placeholder="WiFi SSID" className="w-full border px-4 py-2 rounded-lg" />
            <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded-lg" />
            <select className="w-full border px-4 py-2 rounded-lg">
              <option>WPA/WPA2</option>
              <option>WEP</option>
              <option>None</option>
            </select>
          </div>
        )}
        {type === "vcard" && (
          <textarea
            placeholder="Enter vCard details (Name, Phone, Email)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg"
          />
        )}
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Generate QR
      </button>

      {/* QR Preview + Actions */}
      {qrValue && (
        <div className="mt-6 flex flex-col items-center space-y-4">
          {/* Render both Canvas + SVG for downloads */}
          <QRCodeCanvas value={qrValue} size={200} />
          <QRCodeSVG ref={svgRef} value={qrValue} size={200} />

          <div className="flex space-x-4">
            <button
              onClick={handleDownloadPNG}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Download PNG
            </button>
            <button
              onClick={handleDownloadSVG}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Download SVG
            </button>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleCopy}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg"
            >
              Copy Content
            </button>
            <button
              onClick={handleShare}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
