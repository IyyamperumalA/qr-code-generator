export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t w-full mt-auto sticky bottom-0">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:items-start justify-between text-sm text-gray-600">
        
        {/* Left Side */}
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-bold text-gray-800">🔗 QRGen</span>
            <span className="text-gray-500">| QR Code Generator</span>
          </div>
          <p className="text-gray-500 text-xs">Email: contact@iyyam-qrcode.com</p>
          <p className="text-gray-400 text-xs mt-1">
            © {new Date().getFullYear()} QRGen. All rights reserved.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex space-x-6 text-xs md:text-sm">
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/services" className="hover:text-blue-600">Services</a>
          <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-600">Terms</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
