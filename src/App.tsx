// 1. IMPORTAÇÕES CORRETAS E COMPLETAS
import React, { useState, useCallback, useEffect } from 'react';
import minhaFoto from './assets/icon.png';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css'; // Certifique-se que este arquivo existe e tem o CSS que te passei

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
  BookCheck
} from 'lucide-react';

// 2. COMPONENTES DOS BOTÕES (Fora do componente App)
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


// 3. COMPONENTE PRINCIPAL APP
function App() {
  // 4. TODOS OS HOOKS PRIMEIRO, EM ORDEM!
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

  // 5. CONSTANTES E DADOS DEPOIS DOS HOOKS
  const testimonials = [
    { name: "João Vitor Madero", score: "1000", text: "Depois que li as dicas e entendi as competências e consegui melhorar minha nota na redação!", course: "ENEM 2024" },
    { name: "Pedro Henrique", score: "920", text: "Incrível como dicas simples podem fazer tanta diferença. Sai de 520 para 920 na redação", course: "ENEM 2023" },
    { name: "Mariana Oliveira", score: "1000", text: "Melhor investimento que já fiz. Depois que melhorei minha redação tive o poder de escolher qual universidade queria.", course: "ENEM 2024" },
    { name: "Lucas Almeida", score: "960", text: "O material é direto ao ponto e muito eficaz. Consegui aumentar minha nota em mais de 300 pontos em pouco tempo!", course: "ENEM 2023" },
    { name: "Matheus Silva", score: "960", text: "Com o material e a correção com segui passar na universidade que tanto sonhei! UFRJ", course: "ENEM 2023" },
  ];

  const faqs = [
    { question: "Como recebo o conteudo após o pagamento?", answer: "Em até alguns minutos após o pagamento, o material já estará disponível para você na Kiwify, de forma rápida e segura." },
    { question: "Há garantia de satisfação?", answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito com o conteúdo, devolvemos 100% do valor investido." },
    { question: "Prefiro ler no papel é possivel?", answer: "Claro! O conteudo é em formato PDF e é seu para sempre. Você pode imprimir, salvar no celular, tablet ou computador e acessar quantas vezes quiser." },
    { question: "As dicas realmente funcionam?", answer: "SIM!, após inumeros testes e simulados conseguimos juntar todas as dicas que realmente funcionam." }
  ];

  // 6. O RESTO DO SEU COMPONENTE (O JSX)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src={minhaFoto} 
                alt="Logo Elite Redação" 
                className="h-12 w-13" 
              />
              <span className="text-xl font-bold text-gray-900">Elite Redação</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#conteudo" className="text-gray-600 hover:text-blue-600 transition-colors">Conteúdo</a>
              <a href="#resultados" className="text-gray-600 hover:text-blue-600 transition-colors">Resultados</a>
              <a href="#promocao" className="text-gray-600 hover:text-blue-600 transition-colors">Oferta</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#promocao" className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit">
                Fazer parte da elite
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
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#conteudo" className="text-gray-600 hover:text-blue-600">Conteúdo</a>
                <a href="#resultados" className="text-gray-600 hover:text-blue-600">Resultados</a>
                <a href="#promocao" className="text-gray-600 hover:text-blue-600">Oferta</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                <a href="#promocao" className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit">
                  Fazer parte da elite
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ... (Cole aqui as seções Hero e Metodologia, elas não mudam) ... */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  Garanta sua nota 1000 em redação
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Elite Redação
                  <span className="block text-blue-600">NOTA 1000 ENEM</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  O guia definitivo com as 15 dicas secretas, que foram criadas por estudantes e aplicadas em provas reais. <strong>Método testado e aprovado!</strong>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">15 Dicas Secretas</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">Liberação Imediata</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">Garantia 7 dias</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#promocao" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group">
                  Garanta sua nota 1000
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#resultados" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Resultados de Alunos
                </a>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center mb-6">
                    <span className="ml-4 text-xl text-black">Algumas avaliações dos nossos alunos</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center text-green-700">
                        <Award className="h-5 w-5 mr-2" />
                        <span className="font-semibold">"Com esse conteudo, consegui tirar 1000!"</span>
                      </div>
                      <p className="text-green-600 text-sm mt-1">João Vitor - Eng. Auto. e Controle UFTPR 2024</p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center text-blue-700">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        <span className="font-semibold">"Dicas incríveis!"</span>
                      </div>
                      <p className="text-blue-600 text-sm mt-1">Pedro - Computação UFPI 2024</p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center text-yellow-700">
                        <Target className="h-5 w-5 mr-2" />
                        <span className="font-semibold">"Melhor investimento!"</span>
                      </div>
                      <p className="text-yellow-600 text-sm mt-1">Gustavo - Psicologia UFMG</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold transform rotate-3 shadow-lg">
                  🏆 Metodo testado!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="conteudo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que você vai <span className="text-blue-600">Descobrir</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 dicas poderosas que foram criadas por estudantes, aplicadas em provas reais para garantir 
              a sua nota 1000 na redação do ENEM. <strong>Conteúdo direto ao ponto!</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Estrutura Secreta</h3>
              <p className="text-gray-600">A fórmula exata que os avaliadores procuram em redações nota 1000.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Repertórios Certeiros</h3>
              <p className="text-gray-600">Os 20 repertórios mais poderosos que impressionam qualquer corretor.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conectivos Mágicos</h3>
              <p className="text-gray-600">Lista exclusiva dos conectivos que elevam sua nota instantaneamente.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conclusão Perfeita</h3>
              <p className="text-gray-600">O modelo de conclusão que garante os pontos máximos na competência 5.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resultados que <span className="text-green-600">Comprovam</span>
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos alunos estão dizendo sobre suas conquistas
            </p>
          </div>

          <div className="relative">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {testimonials.map((testimonial, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                          <span className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Nota {testimonial.score}
                          </span>
                        </div>
                        <blockquote className="text-gray-700 mb-4">
                          "{testimonial.text}"
                        </blockquote>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        <div className="ml-3">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600 text-sm">{testimonial.course}</div>
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
        </div>
      </section>

            {/* Serviço de Correção */}
      <section id="promocao" className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    <BookCheck className="h-4 w-4 mr-2" />
                    Promoção exclusiva
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Correção Personalizada
                    <span className="block text-green-600">da Sua Redação</span>
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Além das 15 dicas secretas, oferecemos correção detalhada da sua redação 
                    com feedback personalizado para você aplicar na prática!
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">📝 Correção detalhada por especialista</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">📊 Nota estimada por competência</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">💡 Sugestões específicas de melhoria</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">⚡ Retorno em até 15 dias</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">📖 Limitado a uma redação</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right side - Pricing */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 lg:p-12 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      🔥 Combo Completo
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-lg opacity-90">Método Elite Redação</div>
                      <div className="text-3xl font-bold">R$ 49,90</div>
                      <div className="text-lg opacity-90">+</div>
                      <div className="text-lg opacity-90">Correção Personalizada</div>
                      <div className="text-3xl font-bold">R$ 14,90</div>
                      <div className="border-t border-white/30 pt-4 mt-4">
                        <div className="text-sm opacity-75">Total:</div>
                        <span className="text-2xl text-lg opacity-90 line-through">De R$ 64,80</span>
                        <div className="text-5xl font-bold text-white-600">
                          R$ 34,90
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-white text-green-600 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors">
                      🚀 QUERO O COMBO COMPLETO
                    </button>
                    
                    <div className="text-center">
                      <div className="text-sm opacity-90 mb-2">Ou apenas o método:</div>
                      <a href="#oferta" className="block text-center w-full border-2 border-white/30 text-white py-3 rounded-xl text-base font-semibold hover:bg-white/10 transition-colors">
                        📚 MÉTODO COM DESCONTO 
                      </a>
                    </div>
                  </div>

                  <div className="text-center text-sm opacity-75">
                    <p>💳 Pagamento seguro via PIX ou cartão</p>
                    <p>🛡️ Garantia de 7 dias em ambos os serviços</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
    <section id="oferta" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Oferta <span className="text-blue-600">Especial</span>
          </h2>
          <p className="text-xl text-gray-600">
            Por tempo limitado - Garante já o seu 1000 na redação do enem
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* O padding (p-8) foi removido daqui e a posição é relativa */}
          <div className="border-2 border-blue-600 rounded-xl relative bg-gradient-to-br from-blue-50 to-blue-100 transform scale-105">
            
            {/* O Badge é posicionado de forma absoluta em relação ao contêiner acima */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
              <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                🔥 OFERTA LIMITADA
              </span>
            </div>

            {/* Este novo contêiner interno recebe o padding, com mais espaço no topo (pt-12) */}
            <div className="p-8 pt-12 text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Método Elite Redação Nota 1000</h3>
                <div className="mb-4">
                  <span className="text-2xl text-gray-500 line-through">De R$ 49,90</span>
                  <div className="text-5xl font-bold text-blue-600">
                    R$ 19,90
                  </div>
                  <span className="text-lg text-gray-600">Pagamento único</span>
                </div>
                <p className="text-gray-600 text-lg">🎯 Acesso imediato após o pagamento</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">📚 Conteudo com 15 dicas exclusivas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">🎯 Estrutura secreta da redação nota 1000</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">💎 20 repertórios certeiros</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">✨ Lista de conectivos mágicos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">🏆 Modelo de conclusão perfeita</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">⚡ Liberação imediata</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-lg">🛡️ Garantia de 7 dias</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-blue-700 transition-colors mb-4">
                🚀 QUERO APRENDER A TIRAR 1000 AGORA
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>💳 Pagamento 100% seguro via PIX, cartão ou boleto</p>
                <p className="mt-2">⏰ Oferta válida por tempo limitado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5 mr-2" />
            ✅ Garantia incondicional de 7 dias ou seu dinheiro de volta
          </div>
        </div>
      </div>
    </section>



      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-blue-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos suas principais dúvidas
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm">
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ⏰ Últimas horas da oferta especial!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Não perca a chance de ter acesso às 15 dicas secretas que podem 
            mudar completamente sua redação e garantir sua aprovação!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group">
              🚀 FAZER PARTE DA ELITE POR R$ 34,90
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 text-blue-200 text-sm">
            <p>🔒 Pagamento 100% seguro • ⚡ Liberação Imediata • 🛡️ Garantia de 7 dias</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Elite Redação</span>
              </div>
              <p className="text-gray-400">
                Transformando estudantes em redatores nota 1000 desde 2023.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">ELITE ENEM NOTA 1000</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Conteúdo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resultados</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato e Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Instagram: @menteapravada_
                </li>
                <li>contato@eliteredacao.com.br</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Elite Redação. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;