export default function Footer() {
  return (
    <footer className="mt-12">
      {/* Garis atas */}
      <div className="border-t border-gray-300" />

      {/* Copyright */}
      <div className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NR Codes. All rights reserved.
      </div>
    </footer>
  );
}
