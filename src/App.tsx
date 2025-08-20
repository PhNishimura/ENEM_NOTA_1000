import { useState } from 'react';
import minhaFoto from './assets/icon.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  Target,
  TrendingUp,
  FileText,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      name: "João Vitor Madero",
      score: "1000",
      text: "Depois que li as dicas, entendi as competencias e consegui melhorar minha nota na redação!",
      course: "ENEM 2024"
    },
    {
      name: "Pedro Henrique",
      score: "980",
      text: "Incrível como dicas simples podem fazer tanta diferença. Nos simulados tirava 520-600 depois de aplicar o que aprendi consegui tirar 980!",
      course: "ENEM 2023"
    },
    {
      name: "Mariana Oliveira",
      score: "1000",
      text: "Melhor investimento que já fiz. Depois que melhorei minha redação tive o poder de escolher qual universidade queria.",
      course: "ENEM 2024"
    },
    {
      name: "Lucas Almeida",
      score: "960",
      text: "O material é direto ao ponto e muito eficaz. Consegui aumentar minha nota em mais de 300 pontos em pouco tempo!",
      course: "ENEM 2023"
    },
        {
      name: "Lucas Almeida",
      score: "960",
      text: "O material é direto ao ponto e muito eficaz. Consegui aumentar minha nota em mais de 300 pontos em pouco tempo!",
      course: "ENEM 2023"
    },
  ];

  const faqs = [
    {
      question: "Como recebo o conteudo após o pagamento?",
      answer: "Assim que o pagamento for confirmado, você receberá o PDF diretamente no seu e-mail. O processo é automático e leva no máximo 5 minutos."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos 30 dias de garantia incondicional. Se não ficar satisfeito com o conteúdo, devolvemos 100% do valor investido."
    },
    {
      question: "Prefiro ler no papel é possivel?",
      answer: "Claro! O conteudo é em formato PDF e é seu para sempre. Você pode imprimir, salvar no celular, tablet ou computador e acessar quantas vezes quiser."
    },
    {
      question: "As dicas realmente funcionam?",
      answer: "SIM!, após inumeros testes e simulados conseguimos juntar todas as dicas que realmente funcionam."
    }
  ];

  // 2. Define settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640, // for mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#conteudo" className="text-gray-600 hover:text-blue-600 transition-colors">Conteúdo</a>
              <a href="#resultados" className="text-gray-600 hover:text-blue-600 transition-colors">Resultados</a>
              <a href="#oferta" className="text-gray-600 hover:text-blue-600 transition-colors">Oferta</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#oferta" className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit">
                Fazer parte da elite
              </a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#conteudo" className="text-gray-600 hover:text-blue-600">Conteúdo</a>
                <a href="#resultados" className="text-gray-600 hover:text-blue-600">Resultados</a>
                <a href="#oferta" className="text-gray-600 hover:text-blue-600">Oferta</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
                <a href="#oferta" className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit">
                  Fazer parte da elite
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
                  O guia definitivo com as 15 dicas secretas, que foram estudadas e aplicadas por diversos estudandtes. <strong>Metodo testado e aprovado</strong> com aprovações reais.
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
                  <span className="text-sm font-medium">Garantia 30 dias</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#oferta" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center group">
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

      {/* Metodologia Section */}
      <section id="conteudo" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que você vai <span className="text-blue-600">Descobrir</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 dicas poderosas que os professores especialistas usam para garantir 
              a nota 1000 na redação do ENEM. Conteúdo direto ao ponto!
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

      {/* Resultados Section - NOW A CAROUSEL */}
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

          {/* 3. Replace the grid div with the Slider component */}
          <Slider {...carouselSettings}>
            {testimonials.map((testimonial, index) => (
              // Add a padding div wrapper for spacing between slides
              <div key={index} className="px-4"> 
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map((star) => (
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
          </Slider>
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
            <div className="border-2 border-blue-600 rounded-xl p-8 relative bg-gradient-to-br from-blue-50 to-blue-100 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                  🔥 OFERTA LIMITADA
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dicas Elite Redação Nota 1000</h3>
                <div className="mb-4">
                  <span className="text-2xl text-gray-500 line-through">De R$ 97</span>
                  <div className="text-5xl font-bold text-blue-600">
                    R$ 47
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
                  <span className="text-lg">🛡️ Garantia de 30 dias</span>
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

          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
              <CheckCircle className="h-5 w-5 mr-2" />
              ✅ Garantia incondicional de 30 dias ou seu dinheiro de volta
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
              🚀 FAZER PARTE DA ELITE POR R$ 47
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 text-blue-200 text-sm">
            <p>🔒 Pagamento 100% seguro • ⚡ Liberação Imediata • 🛡️ Garantia de 30 dias</p>
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
                Transformando estudantes em redatores nota 1000 desde 2020.
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
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reembolso</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: (11) 99999-9999
                </li>
                <li>contato@eliteredacao.com.br</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elite Redação. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;