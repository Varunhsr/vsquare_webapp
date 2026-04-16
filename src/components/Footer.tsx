import { motion } from "motion/react";
import { Code2, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[50px] border-t border-border-dim flex items-center justify-between px-10 bg-bg">
      <div className="text-[11px] text-text-dim">
        &copy; {currentYear} Vsquare Software Consultants LLP. All rights reserved.
      </div>
      <div className="flex gap-4">
        {["FinTech-X 2023", "LogiTrack AI", "HealthConnect"].map((tag) => (
          <span key={tag} className="text-[10px] bg-brand-500/10 text-brand-500 px-2 py-0.5 rounded-sm uppercase font-bold tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </footer>
  );
}
