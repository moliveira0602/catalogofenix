import React from 'react';
import { Printer, MessageCircle, Phone, Sun, CheckCircle, EyeOff, Award, Sparkles, Star, Home, Shield, Maximize, X, ChevronDown, Mail } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const Logo = () => (
  <div className="flex flex-col items-center justify-center py-8 z-10 relative">
    <img 
      src="/logo/logo-fenix.png" 
      alt="Fênix Portas e Janelas" 
      className="h-20 object-contain"
    />
  </div>
);

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-4 z-50 no-print">
      <a href="https://wa.me/5581981712560" target="_blank" rel="noreferrer" className="bg-[#E90D2A] text-white p-5 md:p-6 rounded-full shadow-xl hover:bg-red-700 transition-all flex items-center justify-center group relative transform hover:scale-105 duration-300">
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Fale agora no WhatsApp
        </span>
      </a>
    </div>
  );
};

const CoverPage = () => (
  <div className="folder-page flex flex-col bg-white relative text-[#132C6C] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img crossOrigin="anonymous" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Fachada Moderna" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95"></div>
    </div>
    
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-14 text-center">
      <div className="mb-16">
        <img 
          src="/logo/logo-fenix.png" 
          alt="Fênix Portas e Janelas" 
          className="h-16 md:h-20 object-contain mx-auto"
        />
      </div>

      <div className="w-24 h-1.5 bg-[#E90D2A] mb-12 rounded-full"></div>

      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-6 drop-shadow-sm">
        Catálogo <span className="text-[#E90D2A]">Premium</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-600 max-w-3xl leading-relaxed mb-12">
        A união perfeita entre segurança robusta, design sofisticado e acabamento de alto padrão.
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm md:text-base font-bold tracking-widest uppercase text-gray-600">
        <span className="flex items-center gap-2"><Shield size={20} className="text-[#E90D2A]" /> Segurança</span>
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        <span className="flex items-center gap-2"><Star size={20} className="text-[#E90D2A]" /> Design</span>
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        <span className="flex items-center gap-2"><Award size={20} className="text-[#E90D2A]" /> Qualidade</span>
      </div>
    </div>

    <div className="relative z-10 pb-12 flex flex-col items-center justify-end animate-bounce">
      <span className="uppercase tracking-widest text-xs font-bold mb-3 text-gray-500">Arraste para conhecer</span>
      <ChevronDown size={32} className="text-[#E90D2A]" />
    </div>
  </div>
);

const Folder1 = () => (
  <div className="folder-page flex flex-col bg-white">
    <Logo />
    <div className="flex-1 px-6 md:px-14 py-6 flex flex-col">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-[#132C6C] uppercase tracking-widest mb-3">Lançamento</h2>
        <h3 className="text-2xl text-[#E90D2A] font-medium tracking-wider">Nova Linha Fênix Alumínio</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 flex-1">
        <div className="flex flex-col gap-6">
          <div className="flex-1 min-h-[280px] md:min-h-0 bg-gray-50 rounded-2xl overflow-hidden relative shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <img src="/porta-liso/Gemini_Generated_Image_u3jb3nu3jb3nu3jb.png" alt="Porta com Vidro Liso" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-center text-[#132C6C] font-bold text-xl tracking-wide">Com Vidro Liso</h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex-1 min-h-[280px] md:min-h-0 bg-gray-50 rounded-2xl overflow-hidden relative shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <img src="/porta-liso/Gemini_Generated_Image_tehjg2tehjg2tehj.png" alt="Porta com Vidro Liso 2" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-center text-[#132C6C] font-bold text-xl tracking-wide">Design Elegante</h3>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex-1 min-h-[280px] md:min-h-0 bg-gray-50 rounded-2xl overflow-hidden relative shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <img src="/porta-liso/Gemini_Generated_Image_35mjgy35mjgy35mj.png" alt="Porta com Vidro Liso 3" className="w-full h-full object-cover object-right" />
          </div>
          <h3 className="text-center text-[#132C6C] font-bold text-xl tracking-wide">Linha Premium</h3>
        </div>
      </div>

      <div className="bg-[#132C6C] text-white p-10 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-4 h-full bg-[#E90D2A]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Sun size={48} className="text-white mb-4" />
            <span className="font-bold tracking-widest text-xl">LUMINOSIDADE</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle size={48} className="text-white mb-4" />
            <span className="font-bold tracking-widest text-xl">FINO ACABAMENTO</span>
          </div>
        </div>
        <h4 className="text-2xl md:text-3xl font-light tracking-wide">Transforme seus ambientes com nossas portas</h4>
      </div>
    </div>
  </div>
);

const Folder2 = () => (
  <div className="folder-page flex flex-col bg-white">
    <Logo />
    <div className="flex-1 px-6 md:px-14 py-6 flex flex-col">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-extrabold text-[#132C6C] uppercase tracking-widest mb-1">Linha Premium</h2>
        <h3 className="text-2xl text-[#E90D2A] font-medium tracking-wider">Com Vidro Reflex</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-6 md:gap-8 mb-6 flex-1">
        <div className="col-span-2 md:row-span-3 min-h-[320px] md:min-h-0 rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_ivv6jjivv6jjivv6.png" alt="Vidro Reflex 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#132C6C]/90 to-transparent p-6">
            <p className="text-white font-bold text-xl tracking-wider uppercase">Design Exclusivo</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 min-h-[180px] md:min-h-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_nvnj1znvnj1znvnj.png" alt="Vidro Reflex 2" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 min-h-[180px] md:min-h-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_owycsnowycsnowyc.png" alt="Vidro Reflex 3" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 min-h-[180px] md:min-h-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_4ty29k4ty29k4ty2.png" alt="Vidro Reflex 4" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 min-h-[180px] md:min-h-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_v6iyplv6iyplv6iy.png" alt="Vidro Reflex 5" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 min-h-[180px] md:min-h-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_8ywt228ywt228ywt.png" alt="Vidro Reflex 6" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl relative border-2 border-gray-100 min-h-[180px] md:min-h-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <img src="/porta-reflex/Gemini_Generated_Image_8wj1148wj1148wj1.png" alt="Vidro Reflex 7" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-gray-100 py-4 px-6 rounded-3xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-3 text-[#132C6C]">
            <EyeOff className="text-[#E90D2A] shrink-0" size={28} />
            <span className="font-bold text-[11px] uppercase tracking-widest leading-tight text-left">Luminosidade<br/>com Privacidade</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-[#132C6C]">
            <Award className="text-[#E90D2A] shrink-0" size={28} />
            <span className="font-bold text-[11px] uppercase tracking-widest leading-tight text-left">Fino<br/>Acabamento</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-[#132C6C]">
            <Sparkles className="text-[#E90D2A] shrink-0" size={28} />
            <span className="font-bold text-[11px] uppercase tracking-widest leading-tight text-left">Modernidade<br/>e Sofisticação</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Folder3 = () => {
  const [selectedImage, setSelectedImage] = React.useState<{src: string, name: string} | null>(null);

  return (
    <div className="folder-page flex flex-col bg-white">
    <Logo />
    <div className="flex-1 px-6 md:px-14 py-6 flex flex-col">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-[#132C6C] uppercase tracking-widest mb-3">Catálogo Completo</h2>
        <h3 className="text-2xl text-[#E90D2A] font-medium tracking-wider">Conheça Toda a Linha Fênix</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
        {['70x210', '80x210', '90x210', '100x210', '120x210'].map(size => (
          <div key={size} className="bg-[#132C6C] text-white px-5 py-2 rounded-full font-mono text-sm md:text-base font-bold shadow-md border-2 border-[#132C6C]">
            {size}
          </div>
        ))}
      </div>
      
      <div className="text-center mb-4">
        <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide">Clique nas imagens para visualizar em tamanho maior</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-10 flex-1">
        {[
          { src: '/porta-liso/Gemini_Generated_Image_u3jb3nu3jb3nu3jb.png', name: 'Porta de Giro Palito Lux Alumínio Branco Vidro Liso', id: 'Liso 1' },
          { src: '/porta-liso/Gemini_Generated_Image_tehjg2tehjg2tehj.png', name: 'Porta de Giro Lux Alumínio Branco Vidro Liso', id: 'Liso 2' },
          { src: '/porta-liso/Gemini_Generated_Image_35mjgy35mjgy35mj.png', name: 'Porta de Giro Lambri Bandeira Alumínio Branco Vidro Liso', id: 'Liso 3' },
          { src: '/porta-reflex/Gemini_Generated_Image_ivv6jjivv6jjivv6.png', name: 'Porta de Giro Lambri Bandeira Alumínio Branco Vidro Reflex', id: 'Reflex 1' },
          { src: '/porta-reflex/Gemini_Generated_Image_nvnj1znvnj1znvnj.png', name: 'Porta de Giro Palito Lux Alumínio Branco Vidro Reflex', id: 'Reflex 2' },
          { src: '/porta-reflex/Gemini_Generated_Image_owycsnowycsnowyc.png', name: 'Porta de Giro Lux Alumínio Branco Vidro Reflex', id: 'Reflex 3' },
          { src: '/porta-reflex/Gemini_Generated_Image_4ty29k4ty29k4ty2.png', name: 'Porta de Giro Postigo Alumínio Branco Vidro Reflex', id: 'Reflex 4' },
          { src: '/porta-reflex/Gemini_Generated_Image_v6iyplv6iyplv6iy.png', name: 'Porta de Giro Duplo Alumínio Branco Vidro Reflex', id: 'Reflex 5' },
          { src: '/porta-reflex/Gemini_Generated_Image_8ywt228ywt228ywt.png', name: 'Porta de Giro Bandeira Alumínio Branco Vidro Reflex', id: 'Reflex 6' },
          { src: '/porta-reflex/Gemini_Generated_Image_8wj1148wj1148wj1.png', name: 'Janela de Correr 2 Folhas Alumínio Branco Vidro Reflex', id: 'Reflex 7' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col group" title={item.name}>
            <div 
              className="flex-1 min-h-[180px] md:min-h-0 bg-gray-50 rounded-2xl overflow-hidden shadow-xl mb-4 relative border-2 border-gray-100 cursor-pointer hover:ring-2 hover:ring-[#E90D2A] transition-all hover:shadow-2xl hover:scale-105 duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.src} alt={item.name} className={`w-full h-full object-cover transition-transform duration-300 ${item.id === 'Liso 3' ? 'object-right' : ''}`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-[#132C6C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="h-12 flex items-center justify-center px-2">
              <p className="text-center text-[#132C6C] font-semibold text-[10px] leading-tight tracking-wide line-clamp-3">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#E90D2A] text-white p-4 md:p-6 rounded-xl text-center shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-4">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
            <Sun size={16} className="text-white" />
            <span className="font-bold tracking-widest text-sm md:text-base">LUMINOSIDADE</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
            <CheckCircle size={16} className="text-white" />
            <span className="font-bold tracking-widest text-sm md:text-base">FINO ACABAMENTO</span>
          </div>
        </div>
        <p className="text-sm md:text-base font-light mb-4 tracking-wide">Transforme seus ambientes</p>
        <a href="https://wa.me/5581981712560" target="_blank" rel="noreferrer" className="bg-white text-[#E90D2A] px-4 md:px-6 py-2 rounded-full font-bold uppercase tracking-widest shadow-md flex items-center justify-center mx-auto gap-2 text-xs md:text-sm hover:bg-gray-100 transition-all hover:scale-105 transform duration-300">
          <MessageCircle size={16} />
          Contate
        </a>
      </div>
    </div>

    {selectedImage && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 no-print" 
        onClick={() => setSelectedImage(null)}
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-[#E90D2A] transition-colors" 
          onClick={() => setSelectedImage(null)}
        >
          <X size={40} />
        </button>
        <div 
          className="max-w-5xl max-h-[90vh] flex flex-col items-center animate-in fade-in zoom-in duration-300" 
          onClick={e => e.stopPropagation()}
        >
          <img 
            src={selectedImage.src} 
            alt={selectedImage.name} 
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" 
          />
          <p className="text-white text-xl font-bold mt-6 text-center tracking-wide uppercase">
            {selectedImage.name}
          </p>
        </div>
      </div>
    )}
  </div>
);
};

const Folder4 = () => (
  <div className="folder-page flex flex-col bg-white relative">
    <div className="absolute inset-0 z-0">
      <img src="/porta-lux/Gemini_Generated_Image_w8kzk6w8kzk6w8kz.png" alt="Casa Moderna" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
    
    <div className="relative z-10 flex-1 flex flex-col">
      <Logo />
      
      <div className="flex-1 flex flex-col justify-end px-6 md:px-14 py-6 md:py-8">
        <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl border-b-4 border-[#E90D2A] text-[#132C6C] shadow-2xl w-full text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest mb-3">
            O Toque Final Que Seu Projeto Merece
          </h2>
          <p className="text-sm md:text-base font-medium mb-6 text-gray-600 max-w-lg mx-auto leading-relaxed">
            Surpreenda logo na entrada. A <strong className="text-[#132C6C]">Linha Lux</strong> une segurança robusta e design de alto padrão para valorizar imediatamente o seu imóvel.
          </p>
          
          <a href="https://wa.me/5581981712560" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-[#E90D2A] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl inline-flex items-center justify-center gap-4 text-base hover:bg-red-700 transition-all hover:scale-105 transform duration-300 hover:shadow-2xl">
            <MessageCircle size={24} />
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Folder5 = () => (
  <div className="folder-page flex flex-col bg-white">
    <Logo />
    <div className="flex-1 px-6 md:px-14 py-6 flex flex-col">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-[#132C6C] uppercase tracking-widest mb-3">Linha Lux</h2>
        <h3 className="text-2xl text-[#E90D2A] font-medium tracking-wider">Detalhes que Fazem a Diferença</h3>
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex-1 min-h-[300px] md:min-h-0 rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-50">
            <img src="/porta-lux/Gemini_Generated_Image_kertomkertomkert.png" alt="Detalhe Porta Lux" className="w-full h-full object-cover" />
            <div className="absolute top-6 right-6 bg-[#E90D2A] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl">
              Premium
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
          <div>
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#132C6C] mb-6 uppercase tracking-wide">Porta de Giro Palito Lux</h4>
            <p className="text-gray-600 leading-relaxed text-lg">
              Equipada com vidro reflex de alta performance, a Linha Lux oferece o equilíbrio perfeito entre entrada de luz natural e privacidade absoluta durante o dia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[#132C6C] shadow-md flex items-center gap-6">
              <Shield className="text-[#132C6C]" size={40} />
              <div>
                <h5 className="font-bold text-[#132C6C] text-xl mb-1 uppercase tracking-wider">Segurança</h5>
                <p className="text-gray-500">Estrutura reforçada em alumínio branco</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-[#E90D2A] shadow-md flex items-center gap-6">
              <Maximize className="text-[#E90D2A]" size={40} />
              <div>
                <h5 className="font-bold text-[#132C6C] text-xl mb-1 uppercase tracking-wider">Amplitude</h5>
                <p className="text-gray-500">Valorização do pé-direito do ambiente</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <a href="https://wa.me/5581981712560" target="_blank" rel="noreferrer" className="w-full bg-[#132C6C] text-white py-5 md:py-6 rounded-2xl font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-4 text-lg hover:bg-blue-900 transition-all hover:scale-105 transform duration-300 hover:shadow-2xl">
              <MessageCircle size={28} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="folder-page flex flex-col bg-white relative text-[#132C6C] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img crossOrigin="anonymous" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80" alt="Fachada Moderna" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/95"></div>
    </div>
    
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-14 text-center">
      <div className="mb-12">
        <img 
          src="/logo/logo-fenix.png" 
          alt="Fênix Portas e Janelas" 
          className="h-16 md:h-20 object-contain mx-auto"
        />
      </div>

      <div className="w-24 h-1.5 bg-[#E90D2A] mb-10 rounded-full"></div>

      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-6 drop-shadow-sm">
        Fale <span className="text-[#E90D2A]">Conosco</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-light tracking-[0.1em] text-gray-600 max-w-2xl leading-relaxed mb-12">
        Estamos prontos para atender o seu projeto com a excelência que ele merece.
      </h2>
      
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <a 
          href="https://wa.me/5581981712560" 
          target="_blank" 
          rel="noreferrer"
          className="w-full bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-4 text-lg hover:bg-[#128C7E] transition-colors hover:scale-105 transform duration-300"
        >
          <MessageCircle size={28} />
          (81) 9 8171-2560
        </a>
        
        <a 
          href="mailto:comercial@fenixaluminio.com.br"
          className="w-full bg-[#132C6C] text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl flex items-center justify-center gap-4 text-lg hover:bg-blue-900 transition-colors hover:scale-105 transform duration-300"
        >
          <Mail size={28} />
          comercial@fenixaluminio.com.br
        </a>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8 print:py-0 print:bg-white print:block">
      <FloatingButtons />
      
      <div id="catalog-content" className="flex flex-col items-center gap-4 md:gap-8 print:block print:gap-0">
        <CoverPage />
        <Folder1 />
        <Folder2 />
        <Folder3 />
        <Folder4 />
        <Folder5 />
        <ContactPage />
      </div>
    </div>
  );
}
