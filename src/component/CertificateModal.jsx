import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// 1. Impor ikon-ikon yang dibutuhkan dari lucide
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; 

// Hapus semua komponen SVG (CloseIcon, ChevronLeftIcon, ChevronRightIcon) dari sini

export default function CertificateModal({ certificate, onClose, onNext, onPrev, isFirst, isLast }) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && !isLast) onNext();
      if (event.key === 'ArrowLeft' && !isFirst) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev, isFirst, isLast]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 lg:p-8 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Tutup modal"
      >
        {/* 2. Ganti ikon tutup */}
        <X className="h-8 w-8" />
      </button>

      {!isFirst && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
          disabled={isFirst}
          aria-label="Sertifikat sebelumnya"
        >
          {/* 3. Ganti ikon navigasi kiri */}
          <ChevronLeft className="h-8 w-8" />
        </button>
      )}

      <img
        src={certificate.image}
        alt={t(certificate.title)}
        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {!isLast && (
         <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10"
          disabled={isLast}
          aria-label="Sertifikat berikutnya"
        >
          {/* 4. Ganti ikon navigasi kanan */}
          <ChevronRight className="h-8 w-8" />
        </button>
      )}
    </div>
  );
}