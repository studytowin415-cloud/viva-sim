import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#09090b] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <BrainCircuit className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-[#fafafa]">Viva Simulator</span>
            </Link>
            <p className="text-[#a1a1aa] text-sm mb-6 max-w-xs font-medium">
              Prepare. Defend. Improve.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[#fafafa] font-semibold mb-6 text-sm">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="#demo" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Demo</Link></li>
              <li><Link href="#pricing" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[#fafafa] font-semibold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Viva preparation</Link></li>
              <li><Link href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#faq" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[#fafafa] font-semibold mb-6 text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#a1a1aa] text-sm">
            © 2026 Viva Simulator.
          </p>
        </div>
      </div>
    </footer>
  );
}
