import Header from "@/components/Header";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Pre-Main (Page Title + Subtitle) */}
      <main className="flex-grow pt-28 container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[color:var(--color-text-primary)]">
          QR Code Generator
        </h1>
        <p className="text-[color:var(--color-text-secondary)] mb-8">
          Generate QR codes instantly for URLs, text, WiFi, emails, and more.
        </p>

        {/* Main Body Card/Form/QR Preview */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <QRCodeGenerator />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
