import Header from "@/components/Header";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-24 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">QR Code Generator</h1>
        <p className="text-gray-600 mb-6">
          Generate QR codes instantly for URLs, text, WiFi, emails, and more.
        </p>
        <div className="border p-6 rounded-lg shadow-md bg-white max-w-xl mx-auto">
          <QRCodeGenerator />
        </div>
      </main>

      <Footer />
    </div>
  );
}
