import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, Phone, Mail, MapPin, MessageSquare } from 'lucide-react'
import { useSound } from './providers/SoundProvider'

export const Footer: React.FC = () => {
  const { playHover, playClick } = useSound()

  const scrollToTop = () => {
    playClick()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-900 text-gray-400 py-16 overflow-hidden border-t border-white/5">
      {/* Decorative ambient lighting inside footer */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link
              to="/"
              onClick={() => playClick()}
              onMouseEnter={playHover}
              className="flex items-center gap-2 font-display font-extrabold text-2xl tracking-wide text-white group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                <img src="/logo.png" alt="Raju Events Logo" className="w-full h-full object-cover" />
              </div>
              <span>
                Raju <span className="text-primary">Events</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-body">
              Making every birthday magical with premium decorations and customized party setups for over 10 years across Andhra Pradesh.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ), 
                  href: '#' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  ), 
                  href: '#' 
                },
                { icon: <MessageSquare className="w-5 h-5" />, href: 'https://wa.me/9948102259' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center text-gray-400 transition-all cursor-none interactive-card"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (col-span-3) */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Why Us', href: '/why-us' },
                { label: 'Process', href: '/process' },
                { label: 'Gallery', href: '/gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => playClick()}
                    onMouseEnter={playHover}
                    className="hover:text-primary transition-colors cursor-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info (col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            
            <div className="flex gap-3 items-start text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>K. Paul Colony, Jandrapeta, Chirala - 523165</span>
            </div>

            <div className="flex gap-3 items-center text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+91 9948102259</span>
            </div>

            <div className="flex gap-3 items-center text-sm">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>valluriraja0@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} Raju Events. All rights reserved.
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={playHover}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-none interactive-card uppercase font-bold tracking-widest text-[10px]"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  )
}
