import Image from 'next/image';
import Link from 'next/link';

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.link/lc7lfp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        width={30}
        height={30}
      />
    </Link>
  );
};

export default WhatsAppButton;
