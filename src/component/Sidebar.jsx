import { useEffect, useState } from "react";
import { Home, User, Folder, Mail } from "lucide-react";

export default function Sidebar() {
    const links = [
        { id: "home", icon: <Home />, href: "#home" },
        { id: "about", icon: <User />, href: "#about" },
        { id: "projects", icon: <Folder />, href: "#projects" },
        { id: "contact", icon: <Mail />, href: "#contact" },
    ];

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = links
            .map(link => document.getElementById(link.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } // lebih fleksibel
        );

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <nav className="fixed right-0 top-1/4 h-[50vh] w-14 flex flex-col justify-evenly bg-gray-700 rounded-s-3xl p-4 space-y-8">
            {links.map((link, i) => (
                <a
                    key={i}
                    href={link.href}
                    className={`relative flex items-center justify-center text-gray-200 hover:text-gray-400 transition-colors duration-300
            ${activeSection === link.id ? "text-white" : ""}`}
                >
                    {link.icon}
                    {activeSection === link.id && (
                        <span className="absolute bottom-[-6px] w-6 h-[2px] bg-white rounded-full"></span>
                    )}
                </a>
            ))}
        </nav>
    );
}
