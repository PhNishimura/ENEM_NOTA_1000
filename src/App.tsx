import React, { useState, useCallback, useEffect } from 'react';
import minhaFoto from './assets/icon.png';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';

import { 
  Star, 
  CheckCircle, 
  Users, 
  BookOpen, 
  Award, 
  Clock,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Target,
  TrendingUp,
  FileText,
  MessageCircle,
  BookCheck,
  Shield,
  Zap,
  Download,
  Timer,
  Crown,
  Sparkles
} from 'lucide-react';

type PropType = {
  enabled: boolean
  onClick: () => void
}

const PrevButton: React.FC<PropType> = (props) => {
  const { enabled, onClick } = props;
  return (
    <button
      className="embla__button embla__button--prev"
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowLeft className="h-6 w-6 text-gray-700" />
    </button>
  );
}

const NextButton: React.FC<PropType> = (props) => {
  const { enabled, onClick } = props;
  return (
    <button
      className="embla__button embla__button--next"
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowRight className="h-6 w-6 text-gray-700" />
    </button>
  );
}

// Componente de Countdown Timer
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full">
      <Timer className="h-5 w-5" />
      <span className="font-bold">
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
      align: 'start',
      loop: true,
      breakpoints: {
        '(min-width: 640px)': { align: 'center' },
      }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi]);

  const testimonials = [
    { 
      name: "João Vitor Madero", 
      score: "1000", 
      text: "Depois que li as dicas e entendi as competências, consegui melhorar minha nota na redação de 640 para 1000! Incrível!", 
      course: "Engenharia - UTFPR 2024",
      before: "640",
      improvement: "+360"
    },
    { 
      name: "Pedro Henrique", 
      score: "920", 
      text: "Incrível como dicas simples podem fazer tanta diferença. Saí de 520 para 920 na redação em apenas 2 meses!", 
      course: "Medicina - UFPI 2023",
      before: "520",
      improvement: "+400"
    },
    { 
      name: "Mariana Oliveira", 
      score: "1000", 
      text: "Melhor investimento que já fiz. Depois que melhorei minha redação, tive o poder de escolher qual universidade queria!", 
      course: "Direito - USP 2024",
      before: "680",
      improvement: "+320"
    },
    { 
      name: "Lucas Almeida", 
      score: "960", 
      text: "O material é direto ao ponto e muito eficaz. Consegui aumentar minha nota em mais de 300 pontos em pouco tempo!", 
      course: "Administração - FGV 2023",
      before: "580",
      improvement: "+380"
    },
    { 
      name: "Matheus Silva", 
      score: "980", 
      text: "Com o material e as dicas, consegui passar na universidade que tanto sonhei! Recomendo demais!", 
      course: "Engenharia - UFRJ 2023",
      before: "620",
      improvement: "+360"
    },
  ];

  const faqs = [
    { 
      question: "Como recebo o conteúdo após o pagamento?", 
      answer: "Em até 5 minutos após a confirmação do pagamento, você receberá o acesso completo ao material em seu e-mail. O conteúdo fica disponível 24/7 na plataforma Kiwify." 
    },
    { 
      question: "Há garantia de satisfação?", 
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito com o conteúdo, devolvemos 100% do valor investido, sem perguntas." 
    },
    { 
      question: "Posso imprimir o material?", 
      answer: "Claro! O conteúdo é em formato PDF otimizado e é seu para sempre. Você pode imprimir, salvar no celular, tablet ou computador e acessar quantas vezes quiser." 
    },
    { 
      question: "As dicas realmente funcionam?", 
      answer: "SIM! Nosso método foi testado por mais de 2.847 alunos, com taxa de aprovação de 94% em redações acima de 900 pontos. Os resultados falam por si só." 
    },
    { 
      question: "Funciona para qualquer vestibular?", 
      answer: "Embora seja focado no ENEM, as técnicas se aplicam a qualquer redação dissertativa-argumentativa, incluindo vestibulares de universidades federais e estaduais." 
    },
    { 
      question: "Preciso de conhecimento prévio?", 
      answer: "Não! O método foi criado para funcionar do zero. Mesmo se você nunca tirou uma nota boa em redação, conseguirá aplicar as técnicas imediatamente." 
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Estrutura Comprovada",
      description: "Fórmula exata testada em mais de 2.847 redações aprovadas"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Repertórios Exclusivos",
      description: "20 repertórios únicos que impressionam qualquer corretor"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Aplicação Imediata",
      description: "Técnicas que você aplica na próxima redação que escrever"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Método Elite",
      description: "Criado por estudantes que tiraram 1000 e aprovados nas melhores universidades"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Melhorado */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={minhaFoto} 
                alt="Logo Elite Redação" 
                className="h-10 w-10 rounded-full" 
              />
              <div>
                <span className="text-xl font-bold text-gray-900">Elite Redação</span>
                <div className="text-xs text-blue-600 font-medium">NOTA 1000 GARANTIDA</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Benefícios</a>
              <a href="#resultados" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Resultados</a>
              <a href="#promocao" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Oferta</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">FAQ</a>
              <a href="#promocao" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                Garantir Minha Vaga
              </a>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-4">
                <a href="#beneficios" className="text-gray-600 hover:text-blue-600 font-medium">Benefícios</a>
                <a href="#resultados" className="text-gray-600 hover:text-blue-600 font-medium">Resultados</a>
                <a href="#promocao" className="text-gray-600 hover:text-blue-600 font-medium">Oferta</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium">FAQ</a>
                <a href="#promocao" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full w-fit font-semibold">
                  Garantir Minha Vaga
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section Melhorada */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Crown className="h-4 w-4 mr-2" />
                    MÉTODO EXCLUSIVO
                  </div>
                  <CountdownTimer />
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    REDAÇÃO
                  </span>
                  <span className="block text-4xl lg:text-5xl">NOTA 1000</span>
                  <span className="block text-2xl lg:text-3xl font-bold text-gray-700">GARANTIDA</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  <strong className="text-blue-600">15 dicas secretas</strong> criadas por estudantes que tiraram 1000 
                  e foram aprovados nas <strong>melhores universidades do Brasil</strong>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600">2.847+</div>
                  <div className="text-sm text-gray-600">Alunos Aprovados</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#promocao" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-xl text-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center group shadow-lg">
                  <Download className="mr-3 h-6 w-6" />
                  BAIXAR AGORA POR R$ 19,90
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#resultados" className="border-2 border-gray-300 text-gray-700 px-8 py-5 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors bg-white/80 backdrop-blur-sm">
                  Ver Resultados Reais
                </a>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-500" />
                  Garantia 7 dias
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                  Acesso imediato
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-blue-500" />
                  Pagamento seguro
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 mr-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">Avaliações Reais</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-green-800">João Vitor M.</span>
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">NOTA 1000</span>
                      </div>
                      <p className="text-green-700 text-sm">"Consegui tirar 1000 seguindo exatamente as dicas!"</p>
                      <p className="text-green-600 text-xs mt-1">UTFPR - Engenharia 2024</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-blue-800">Pedro H.</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">+400 PONTOS</span>
                      </div>
                      <p className="text-blue-700 text-sm">"Saí de 520 para 920 em 2 meses!"</p>
                      <p className="text-blue-600 text-xs mt-1">UFPI - Medicina 2023</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-purple-800">Mariana O.</span>
                        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">USP APROVADA</span>
                      </div>
                      <p className="text-purple-700 text-sm">"Melhor investimento que já fiz!"</p>
                      <p className="text-purple-600 text-xs mt-1">USP - Direito 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-xl font-bold transform rotate-3 shadow-xl border-2 border-white">
                  🏆 MÉTODO TESTADO!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios Melhorada */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Por que <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2.847 estudantes</span> escolheram nosso método?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nosso método não é teoria. São <strong>técnicas práticas e comprovadas</strong> que funcionam 
              na vida real, criadas por quem realmente tirou nota 1000.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-gray-200 h-full">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preview do Conteúdo */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">📖 Prévia do Conteúdo Exclusivo</h3>
              <p className="text-blue-100 text-lg">Veja algumas das dicas que você vai descobrir:</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">Dica #3: Gancho Magnético</h4>
                <p className="text-blue-100 text-sm">Como criar uma introdução que prende o corretor desde a primeira linha...</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl mb-3">💎</div>
                <h4 className="font-bold mb-2">Dica #7: Repertório Certeiro</h4>
                <p className="text-blue-100 text-sm">A técnica secreta para escolher o repertório perfeito para qualquer tema...</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Dica #12: Conclusão Killer</h4>
                <p className="text-blue-100 text-sm">O modelo de conclusão que garante nota máxima na competência 5...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section Melhorada */}
      <section id="resultados" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Resultados que <span className="text-green-600">Transformam Vidas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como nossos alunos saíram do zero e conquistaram suas vagas dos sonhos
            </p>
          </div>

          <div className="relative">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {testimonials.map((testimonial, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl h-full border border-gray-100 hover:shadow-2xl transition-all">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                              {testimonial.improvement}
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                              Nota {testimonial.score}
                            </span>
                          </div>
                        </div>
                        
                        <blockquote className="text-gray-700 text-lg mb-6 flex-grow leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div className="ml-3">
                              <div className="font-bold text-gray-900">{testimonial.name}</div>
                              <div className="text-gray-600 text-sm">{testimonial.course}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">Nota anterior:</div>
                            <div className="text-lg font-bold text-gray-400 line-through">{testimonial.before}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000</div>
              <div className="text-gray-600">Nota Máxima Possível</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Dicas Exclusivas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">7</div>
              <div className="text-gray-600">Dias de Garantia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5min</div>
              <div className="text-gray-600">Para Receber</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Urgência */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ⚠️ ATENÇÃO: O ENEM 2025 está chegando!
            </h2>
            <p className="text-xl text-red-100 leading-relaxed">
              Não deixe para a última hora. Milhares de estudantes já estão se preparando com nosso método. 
              <strong className="text-white"> Garante sua vaga agora!</strong>
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
              <div className="text-2xl font-bold mb-2">🗓️ Cronograma ENEM 2025</div>
              <div className="text-red-100">Inscrições: Maio • Provas: Novembro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Principal Melhorada */}
      <section id="promocao" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-600">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-bold text-lg">OFERTA ESPECIAL - ÚLTIMAS HORAS</span>
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Elite Redação Nota 1000
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-3xl text-gray-500 line-through">R$ 97,00</span>
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">-80% OFF</span>
                  </div>
                  <div className="text-6xl lg:text-7xl font-black text-blue-600">
                    R$ 19,90
                  </div>
                  <p className="text-xl text-gray-600">Pagamento único • Acesso vitalício</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    O que você vai receber:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">📚 PDF com 15 Dicas Secretas</span>
                        <p className="text-gray-600 text-sm">Método completo passo a passo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">🎯 Estrutura da Redação Perfeita</span>
                        <p className="text-gray-600 text-sm">Fórmula exata que os corretores procuram</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">💎 20 Repertórios Exclusivos</span>
                        <p className="text-gray-600 text-sm">Que funcionam para qualquer tema</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">✨ Lista de Conectivos Mágicos</span>
                        <p className="text-gray-600 text-sm">Que elevam sua nota instantaneamente</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">🏆 Modelo de Conclusão Nota 1000</span>
                        <p className="text-gray-600 text-sm">Garante pontuação máxima na competência 5</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="h-6 w-6 text-green-500 mr-3" />
                    Suas Garantias:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700">🛡️ <strong>7 dias de garantia</strong> incondicional</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700">⚡ <strong>Acesso imediato</strong> após pagamento</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700">💳 <strong>Pagamento 100% seguro</strong> via Kiwify</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700">📱 <strong>Acesso vitalício</strong> em qualquer dispositivo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 mb-6 shadow-xl">
                  🚀 QUERO GARANTIR MINHA NOTA 1000 AGORA
                </button>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1 text-green-500" />
                    Compra Segura
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-500" />
                    Acesso Imediato
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1 text-purple-500" />
                    Garantia Total
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Melhorada */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dúvidas <span className="text-blue-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos tudo para você tomar a melhor decisão
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors rounded-2xl"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`h-6 w-6 text-blue-600 transform transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Melhorado */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-bold">
              <Timer className="h-5 w-5 mr-2" />
              ÚLTIMAS HORAS - OFERTA EXPIRA EM BREVE
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Sua Aprovação Está a
              <span className="block text-yellow-300">UM CLIQUE de Distância!</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Não deixe sua vaga dos sonhos escapar por causa da redação. 
              <strong className="text-white"> Mais de 2.847 alunos já garantiram suas aprovações!</strong>
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <div className="text-center space-y-4">
                <div className="text-lg text-blue-100">🎯 Última chance de garantir por:</div>
                <div className="text-6xl font-black text-yellow-300">R$ 19,90</div>
                <div className="text-red-200 font-semibold">⏰ Oferta expira em algumas horas!</div>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-12 py-6 rounded-2xl text-2xl font-black hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl border-4 border-white">
              🔥 SIM! QUERO GARANTIR MINHA NOTA 1000
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Garantia de 7 dias
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Liberação imediata
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Método comprovado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Melhorado */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={minhaFoto} 
                  alt="Logo Elite Redação" 
                  className="h-10 w-10 rounded-full" 
                />
                <div>
                  <span className="text-xl font-bold">Elite Redação</span>
                  <div className="text-xs text-blue-400">NOTA 1000 GARANTIDA</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando estudantes em redatores nota 1000 desde 2023. 
                Mais de 2.847 aprovações conquistadas!
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-400">Navegação</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
                <li><a href="#promocao" className="hover:text-white transition-colors">Oferta Especial</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-400">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2 text-blue-400" />
                  @menteapravada_
                </li>
                <li>contato@eliteredacao.com.br</li>
                <li className="text-sm">Suporte: Segunda a Sexta, 9h às 18h</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-blue-400">Garantias</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-green-400" />
                  7 dias de garantia
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                  Acesso imediato
                </li>
                <li className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-purple-400" />
                  Método comprovado
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">&copy; 2025 Elite Redação. Todos os direitos reservados.</p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Política de Reembolso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;