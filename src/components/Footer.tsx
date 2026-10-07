import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#09090b] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <BrainCircuit className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">Viva Simulator</span>
            </Link>
            <p className="text-zinc-500 text-sm mb-6 max-w-xs">
              Prepare. Defend. Improve.<br/>
              The AI-powered project defense platform for students.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-sm text-zinc-500 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-zinc-500 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#demo" className="text-sm text-zinc-500 hover:text-white transition-colors">Demo</Link></li>
              <li><Link href="#pricing" className="text-sm text-zinc-500 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Viva Preparation</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#faq" className="text-sm text-zinc-500 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 Viva Simulator. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
