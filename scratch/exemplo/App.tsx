import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User, 
  Layers, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Link as LinkIcon, 
  Mail, 
  Sun, 
  Github, 
  Linkedin 
} from 'lucide-react';
import Background3D from './components/Background3D';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'Sobre' },
  { id: 'projects', icon: Layers, label: 'Projetos' },
  { id: 'skills', icon: Code, label: 'Habilidades' },
  { id: 'education', icon: GraduationCap, label: 'Educação' },
  { id: 'experience', icon: Briefcase, label: 'Experiência' },
  { id: 'links', icon: LinkIcon, label: 'Links' },
  { id: 'contact', icon: Mail, label: 'Contato' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('PT');

  return (
    <div className="min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black">
      <Background3D />

      {/* Navigation Bar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <nav className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-2.5 rounded-full transition-all duration-300 relative group ${
                activeTab === item.id ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={18} />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex items-center gap-2">
          <div className="flex items-center gap-1 px-2">
            {['PT', 'EN', 'ES'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors ${
                  lang === l ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="w-px h-4 bg-white/10" />
          <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
            <Sun size={18} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full mb-6 uppercase">
              Estudante de Engenharia de Software
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Construo soluções que unem <br />
              <span className="text-white/90">código e propósito.</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium text-yellow-400 mb-8 flex items-center gap-2">
              Design funcional.
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1 h-8 bg-yellow-400"
              />
            </div>

            <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
              Estudante de Engenharia de Software focado em CyberSecurity, com experiência em automação 
              de processos e interesse em análise de segurança, redes e proteção de sistemas.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105">
                Ver projetos
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3.5 rounded-full font-bold transition-all">
                Entrar em contato
              </button>
            </div>

            <div className="flex gap-6 text-gray-500 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Github size={16} /> GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={16} /> Email
              </a>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 blur-[80px] -mr-32 -mt-32 group-hover:bg-yellow-400/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2 block">Perfil</span>
                  <h2 className="text-2xl font-bold mb-1">Gustavo Barreto Fogliati</h2>
                  <p className="text-gray-400 text-sm">Estudante de Engenharia de Software</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                    <span className="text-[10px] text-gray-500 uppercase block mb-1">Localização</span>
                    <p className="text-sm font-bold">Porto Alegre, RS, Brasil</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                    <span className="text-[10px] text-gray-500 uppercase block mb-1">CV / Resume</span>
                    <p className="text-sm font-bold text-gray-400 italic">Em breve</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 group/edu hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-yellow-400">Engenharia de Software</h3>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">UNINTER - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Site Map Section */}
        <section className="mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full mb-6 uppercase">
              Mapa do site
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl">
              Cada área do portfólio agora vive em uma página dedicada.
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              A navegação central assume um papel mais visual e transforma as páginas em destinos com 
              identidade própria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { title: 'Sobre mim', desc: 'Minha trajetória e motivações.' },
              { title: 'Projetos', desc: 'Exploração técnica e criativa.' },
              { title: 'Experiência', desc: 'Atuação profissional e acadêmica.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs uppercase tracking-widest font-bold">
          <p>© 2026 Gustavo Barreto Fogliati</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
