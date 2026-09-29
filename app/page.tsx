'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Lock,
  Sparkles,
  AlertTriangle,
  ChevronDown,
  Activity,
  PhoneCall,
  Gauge,
  Smartphone,
  Code2,
  Clock,
  MapPin,
  ExternalLink,
  ShieldAlert,
  Award,
  Layers,
  Cpu,
  MessageSquare
} from 'lucide-react';

export default function ParvusSpaceMasterPage() {
  // State for Interactive ROI / Leakage Calculator
  const [ticketValue, setTicketValue] = useState<number>(20000);
  const [lostPatientsPerMonth, setLostPatientsPerMonth] = useState<number>(2);

  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculations for financial leakage
  const monthlyLeakage = ticketValue * lostPatientsPerMonth;
  const annualLeakage = monthlyLeakage * 12;

  // WhatsApp Link Handler
  const defaultWhatsAppUrl =
    'https://wa.me/5519994656845?text=Ol%C3%A1%2C%20Pablo.%20Analisei%20o%20dossi%C3%AA%20da%20Parvus%20Space%20e%20gostaria%20de%20avaliar%20a%20arquitetura%20digital%20da%20minha%20cl%C3%ADnica.';

  const createWhatsAppUrl = (customMessage: string) => {
    return `https://wa.me/5519994656845?text=${encodeURIComponent(customMessage)}`;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Minha clínica já tem um site no ar. Preciso tirar tudo do ar para implantar?',
      answer:
        'Absolutamente não. A Parvus Space atua com cirurgia de precisão: implementamos a nova página de conversão como uma camada ultra-rápida dedicada ao tráfego nobre de procedimentos de alto valor (como Lipo HD, Mama de Aumento ou Lentes em Porcelana), sem qualquer interrupção ou necessidade de substituir seu portal institucional existente antes da hora.'
    },
    {
      question: 'Como garantem a conformidade com as regras do CFM e CROSP?',
      answer:
        'Toda a nossa engenharia de copy e arquitetura visual é orientada pela estrita conformidade com a Resolução CFM nº 2.336/2023 e diretrizes do CFO/CROSP. Eliminamos apelos apelativos de "antes e depois", autopromoções exageradas e promessas de resultado. Construímos autoridade científica sólida, evidenciando corpo clínico, tecnologia empregada e jornada de segurança, blindando a reputação jurídica e moral da sua clínica.'
    },
    {
      question: 'Qual é o tempo de entrega e implantação?',
      answer:
        'Por trabalharmos com código proprietário compilado e uma esteira restrita a poucas clínicas simultâneas, todo o dossiê digital é desenhado, programado e validado em até 7 a 10 dias úteis. Sem meses de reuniões improdutivas com agências convencionais, sem retrabalho e com comunicação direta entre o cirurgião/gestor e o Engenheiro de Software.'
    },
    {
      question: 'Por que não contratar uma agência de marketing tradicional?',
      answer:
        'Agências convencionais vendem pacotes genéricos de "posts para redes sociais" e sites lentos montados em WordPress/Elementor com templates reciclados e dezenas de plugins instáveis. A Parvus Space é um estúdio de engenharia de software e psicologia de conversão. Construímos ativos digitais proprietários de altíssima velocidade (Next.js), com propriedade 100% sua, projetados exclusivamente para pacientes particulares de R$ 15.000 a R$ 40.000.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#09090B] text-[#F4F4F5] selection:bg-[#D4AF37]/20 selection:text-[#E5C378] overflow-x-hidden pb-24 md:pb-0">
      
      {/* 1. TOPBAR INSTITUCIONAL MINIMALISTA */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#09090B]/85 border-b border-[#27272A]/70 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo & Exclusive Seal */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#hero" className="group flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-gradient-to-br from-[#18181B] to-[#121214] border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C378] font-serif-luxury font-bold text-lg sm:text-xl shadow-inner group-hover:border-[#D4AF37] transition-colors">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-base sm:text-lg tracking-wider text-[#F4F4F5] font-semibold flex items-center gap-1.5">
                  PARVUS SPACE
                  <span className="inline-block w-1 h-1 rounded-full bg-[#D4AF37]"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#71717A] font-medium hidden sm:block">
                  Private Digital Architecture for Medical & Dental Practices
                </span>
              </div>
            </a>
          </div>

          {/* Operational Status (Real-time live pulse) */}
          <div className="hidden lg:flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#121214] border border-[#27272A]/80 text-[11px] text-[#A1A1AA]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-[#E4E4E7]">Engenharia Operacional Ativa</span>
            <span className="text-[#52525B]">|</span>
            <span className="text-[#D4AF37] font-semibold tracking-wide">RMC & SP</span>
          </div>

          {/* Action CTA */}
          <div className="flex items-center space-x-3">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#E5C378] bg-[#18181B] hover:bg-[#202024] border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 rounded-sm transition-all duration-200 active:scale-95 min-h-[44px]"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
              <span className="whitespace-nowrap">Falar com o Engenheiro</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION CINEMATOGRÁFICA (O Choque de Realidade do Luxo) */}
      <section id="hero" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-graphite-mesh border-b border-[#27272A]/60">
        {/* Subtle geometric luxury glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[340px] sm:h-[680px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge Superior */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 mb-6 sm:mb-8 rounded-full bg-[#121214] border border-[#D4AF37]/35 text-xs text-[#E5C378] font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Dossiê Estratégico de Conversão Médica</span>
          </div>

          {/* Headline Imponente */}
          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.12] tracking-tight text-[#F4F4F5] mb-6 sm:mb-8 max-w-4xl mx-auto">
            O Paradoxo da Clínica de Luxo:{' '}
            <span className="italic text-[#E5C378] font-normal">
              Sua estrutura física é de primeiro mundo.
            </span>{' '}
            Por que sua presença digital afasta pacientes particulares?
          </h1>

          {/* Subheadline de Alto Calibre */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 font-normal">
            Quem está disposto a investir entre <strong className="text-[#F4F4F5] font-semibold">R$ 15.000 e R$ 40.000</strong> em cirurgias de contorno corporal ou reabilitações estéticas busca segurança no primeiro toque. Quando sua página mobile demora para abrir ou parece um template amador de agência comum, o paciente desiste antes mesmo de conhecer seu corpo clínico.
          </p>

          {/* CTA Primário de Conversão */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 sm:mb-16">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-semibold text-[#09090B] bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37] hover:brightness-105 active:scale-98 rounded-sm shadow-lg transition-all duration-200 min-h-[52px] group tracking-wide"
            >
              <span>Solicitar Diagnóstico Privado de Conversão</span>
              <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#diagnostico"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#121214] hover:bg-[#18181B] border border-[#27272A] rounded-sm transition-all min-h-[52px]"
            >
              <span>Ler Análise Técnica do Dossiê</span>
            </a>
          </div>

          {/* Tríade de Métricas de Engenharia */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto text-left">
            
            {/* Metric 1 */}
            <div className="p-4 sm:p-5 rounded-sm bg-[#121214]/90 border border-[#27272A]/90 hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#E5C378]">0.4s</span>
                <Gauge className="w-4 h-4 text-[#D4AF37]/80" />
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold mb-1">
                Resposta Mobile em 4G
              </p>
              <p className="text-[12px] text-[#71717A] leading-normal">
                Tempo instantâneo que neutraliza a taxa de rejeição no primeiro impacto.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-4 sm:p-5 rounded-sm bg-[#121214]/90 border border-[#27272A]/90 hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F4F4F5]">0% Templates</span>
                <Code2 className="w-4 h-4 text-[#A1A1AA]" />
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold mb-1">
                Arquitetura Exclusiva
              </p>
              <p className="text-[12px] text-[#71717A] leading-normal">
                Código proprietário compilado em Next.js. Sem WordPress, Elementor ou scripts lentos.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-4 sm:p-5 rounded-sm bg-[#121214]/90 border border-[#27272A]/90 hover:border-[#D4AF37]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#D4AF37]">100% Ética</span>
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold mb-1">
                CFM & CROSP Blindados
              </p>
              <p className="text-[12px] text-[#71717A] leading-normal">
                Rigor normativo absoluto. Zero sensacionalismo, 100% autoridade científica.
              </p>
            </div>

          </div>

          {/* Regional exclusivity label */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-[#71717A]">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Atendimento Restrito: Cambuí (Campinas), Indaiatuba, Valinhos, Jardins e Faria Lima (SP)</span>
          </div>

        </div>
      </section>

      {/* 3. O DIAGNÓSTICO CIRÚRGICO (A Anatomia do Vazamento Invisível de Caixa) */}
      <section id="diagnostico" className="py-16 sm:py-24 bg-[#09090B] border-b border-[#27272A]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Diagnóstico Estrutural
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-medium text-[#F4F4F5] mt-2 mb-4">
              A Anatomia do Vazamento Invisível de Pacientes
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              O paciente de alto padrão toma sua decisão nos primeiros 3 segundos. Compare o atrito gerado pelas soluções genéricas de marketing contra a precisão cirúrgica da engenharia privada Parvus Space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: A Fragilidade das Agências Convencionais */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121214] border border-red-950/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-900/60" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-red-400 font-semibold flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    Padrão de Mercado Frágil
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-red-950/40 text-red-300 font-mono">
                    Perda de Conversão
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F4F4F5] font-semibold mb-6">
                  A Fragilidade das Agências Convencionais
                </h3>

                <ul className="space-y-4 text-sm text-[#A1A1AA]">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-400/90 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">WordPress e Elementor:</strong> Dezenas de plugins de terceiros que quebram com atualizações e deixam a página vulnerável e pesada.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-400/90 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Carregamento de 4 a 7 segundos:</strong> Em redes 4G móveis, mais de 65% dos usuários abandonam a tela antes mesmo de ela renderizar.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-400/90 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Árvores Confusas (Linktree):</strong> Menus genéricos que jogam o paciente para 8 links irrelevantes em vez de guiá-lo ao agendamento.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-400/90 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Mistura de Convênios com Luxo:</strong> Falta de filtragem estética; o paciente particular sente que está sendo atendido em um ambulatório popular.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-400/90 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Zero Rastreamento de Intenção:</strong> A secretária recebe mensagens vagas no WhatsApp (&ldquo;quanto custa?&rdquo;) de leads desqualificados.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#27272A]/70 text-xs text-[#71717A] italic">
                Resultado: Desperdício de verba de tráfego e desvalorização da imagem do médico.
              </div>
            </div>

            {/* Card 2: A Arquitetura de Conversão Parvus Space */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121214] border border-[#D4AF37]/50 relative overflow-hidden flex flex-col justify-between champagne-glow-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#D4AF37]" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    Padrão Parvus Space
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#E5C378] font-mono border border-[#D4AF37]/30">
                    Alta Performance
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F4F4F5] font-semibold mb-6">
                  A Arquitetura de Conversão Parvus Space
                </h3>

                <ul className="space-y-4 text-sm text-[#A1A1AA]">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Código Puro em Next.js & Tailwind:</strong> Zero bibliotecas descartáveis. Arquitetura serverless de nível empresarial com estabilidade militar.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Abertura Instantânea (&lt; 0.5s):</strong> Carregamento ultra-rápido no smartphone que retém o paciente na fração de segundo em que o desejo é despertado.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Experiência Fluida de Concierge:</strong> Navegação intuitiva como em um aplicativo de iPhone, conduzindo a paciente ao procedimento específico.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Validação de Alto Ticket:</strong> Tipografia editorial e contrastes finos que justificam consultas de R$ 800 e cirurgias de R$ 35.000 sem objeção de preço.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-[#F4F4F5]">Conexão Contextual no WhatsApp:</strong> O lead chega à recepção educado, sabendo exatamente o procedimento de interesse e pré-qualificado para fechar.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#27272A]/70 text-xs text-[#E5C378] font-medium flex items-center justify-between">
                <span>Resultado: Pacientes qualificados prontos para consulta de avaliação.</span>
                <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. A MATEMÁTICA FRIA DA CONVERSÃO (O Impacto no Faturamento) */}
      <section id="matematica" className="py-16 sm:py-24 bg-[#09090B] border-b border-[#27272A]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Análise Financeira
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-medium text-[#F4F4F5] mt-2 mb-4">
              A Matemática Fria da Conversão
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA]">
              A lentidão digital não é um detalhe estético — é um dreno silencioso de caixa. Veja quanto sua clínica perde a cada mês com o atrito mobile.
            </p>
          </div>

          {/* Destaque Central: O Custo Oculto da Lentidão Digital */}
          <div className="p-6 sm:p-10 rounded-sm bg-[#121214] border border-[#27272A] relative overflow-hidden mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
                  Dossiê Financeiro
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F4F4F5] font-semibold mb-4">
                  O Custo Oculto da Lentidão Digital
                </h3>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-4">
                  Um paciente de <strong className="text-[#F4F4F5]">Lipo HD, Lentes em Porcelana ou Protocolo Cirúrgico</strong> representa um valor médio de <strong className="text-[#D4AF37]">R$ 20.000</strong>.
                </p>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                  Se o atrito técnico de um site lento fizer <span className="underline decoration-[#D4AF37] underline-offset-4 text-[#F4F4F5]">apenas 2 pacientes desistirem por mês</span>, sua clínica perde silenciosamente <strong className="text-red-400 font-semibold font-mono">R$ 480.000</strong> em faturamento todos os anos.
                </p>
                
                {/* Tese Parvus */}
                <div className="p-4 rounded bg-[#09090B] border-l-2 border-[#D4AF37] text-xs sm:text-sm text-[#E4E4E7]">
                  <strong className="text-[#E5C378] block mb-1">A Tese da Parvus Space:</strong>
                  A implantação de uma infraestrutura ultra-rápida e exclusiva se paga integralmente com o <span className="text-[#F4F4F5] font-semibold">primeiro agendamento recuperado</span>. O restante é lucro e consolidação de marca.
                </div>
              </div>

              {/* Box de Impacto Numérico */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-6 sm:p-8 rounded-sm bg-[#09090B] border border-red-950/60">
                <span className="text-xs uppercase tracking-widest text-[#71717A] mb-2 font-mono">
                  Perda Anual Invisível
                </span>
                <div className="font-serif-luxury text-3xl sm:text-5xl font-bold text-red-400 mb-2">
                  - R$ 480.000
                </div>
                <span className="text-xs text-[#A1A1AA] mb-6">
                  Calculado sobre 2 perdas mensais a R$ 20.000
                </span>

                <div className="w-full pt-4 border-t border-[#27272A] flex justify-between text-xs text-[#A1A1AA]">
                  <span>1 Paciente Salvo:</span>
                  <span className="text-emerald-400 font-semibold">+ R$ 20.000</span>
                </div>
                <div className="w-full pt-2 flex justify-between text-xs text-[#A1A1AA]">
                  <span>Ponto de Equilíbrio:</span>
                  <span className="text-[#E5C378] font-semibold">Instantâneo</span>
                </div>
              </div>

            </div>
          </div>

          {/* Simulador Interativo do Vazamento de Pacientes */}
          <div className="p-6 sm:p-8 rounded-sm bg-[#121214]/60 border border-[#27272A]/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="font-serif-luxury text-lg sm:text-xl text-[#F4F4F5] font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                  Simule o Cenário Específico da Sua Clínica
                </h4>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Ajuste os valores para visualizar a perda real com base no seu ticket e volume de consultas.
                </p>
              </div>
              <span className="text-[11px] font-mono uppercase px-2.5 py-1 bg-[#18181B] text-[#D4AF37] border border-[#27272A] rounded">
                Simulador Dinâmico
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              
              {/* Slider 1: Ticket Médio do Procedimento */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
                  <span className="text-[#A1A1AA]">Ticket Médio do Procedimento Principal:</span>
                  <span className="font-mono font-semibold text-[#E5C378]">
                    {ticketValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={60000}
                  step={2500}
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[10px] text-[#71717A] mt-1 font-mono">
                  <span>R$ 10.000</span>
                  <span>R$ 35.000</span>
                  <span>R$ 60.000</span>
                </div>
              </div>

              {/* Slider 2: Pacientes que desistem por mês */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
                  <span className="text-[#A1A1AA]">Pacientes que Desistem/Mês devido ao Atrito:</span>
                  <span className="font-mono font-semibold text-red-400">
                    {lostPatientsPerMonth} paciente{lostPatientsPerMonth > 1 ? 's' : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={lostPatientsPerMonth}
                  onChange={(e) => setLostPatientsPerMonth(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#27272A] rounded-lg appearance-none cursor-pointer accent-red-400"
                />
                <div className="flex justify-between text-[10px] text-[#71717A] mt-1 font-mono">
                  <span>1 paciente</span>
                  <span>5 pacientes</span>
                  <span>10 pacientes</span>
                </div>
              </div>

            </div>

            {/* Resultado do Simulador */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded bg-[#09090B] border border-[#27272A]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#71717A] block">
                  Vazamento Mensal Estimado
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#F4F4F5]">
                  {monthlyLeakage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-red-400 font-semibold block">
                  Impacto Anual no Faturamento
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-red-400">
                  {annualLeakage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href={createWhatsAppUrl(
                  `Olá, Pablo. Fiz a simulação na Parvus Space e identifiquei um potencial vazamento anual de ${annualLeakage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Gostaria de agendar o diagnóstico da minha clínica.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm text-[#E5C378] hover:text-[#F4F4F5] font-medium underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#D4AF37] transition-all"
              >
                <span>Recuperar esses pacientes com a engenharia da Parvus Space</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. QUEM CONSTRÓI A SUA SOLUÇÃO (Autoridade do Founder & Engenheiro) */}
      <section id="autoridade" className="py-16 sm:py-24 bg-[#09090B] border-b border-[#27272A]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Box / Badge */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-sm bg-[#121214] border border-[#D4AF37]/35 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code2 className="w-32 h-32 text-[#D4AF37]" />
                </div>
                
                <div className="w-14 h-14 rounded-sm bg-[#18181B] border border-[#D4AF37]/50 flex items-center justify-center text-[#E5C378] mb-6">
                  <Cpu className="w-7 h-7 text-[#D4AF37]" />
                </div>

                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  Founder & Principal Software Engineer
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F4F4F5] font-semibold mb-2">
                  Pablo
                </h3>
                <p className="text-xs text-[#A1A1AA] mb-6">
                  Parvus Space | Engenharia Privada & Arquitetura Digital
                </p>

                <div className="space-y-3 pt-4 border-t border-[#27272A] text-xs text-[#A1A1AA]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">Canal Direto:</span>
                    <span className="font-mono text-[#F4F4F5]">+55 19 99465-6845</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">Atendimento:</span>
                    <span className="text-[#E5C378]">Sem intermediários</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">Stack Principal:</span>
                    <span className="font-mono text-[#F4F4F5]">Next.js, Tailwind, Cloudflare</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#27272A]">
                  <a
                    href="https://wa.me/5519994656845?text=Ol%C3%A1%2C%20Pablo.%20Gostaria%20de%20conversar%20diretamente%20com%20voc%C3%AA%20sobre%20o%20projeto%20da%20minha%20cl%C3%ADnica."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-[#09090B] bg-[#E5C378] hover:bg-[#D4AF37] rounded-sm transition-all min-h-[44px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-2" />
                    <span>Iniciar Contato Direto com Pablo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Narrativa de Posicionamento */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Engenharia Sem Intermediários
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-medium text-[#F4F4F5] mt-2 mb-6">
                Quem Constrói a Sua Solução
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                <p>
                  A <strong className="text-[#F4F4F5]">Parvus Space</strong> nasceu da recusa expressa ao modelo falido das agências de publicidade tradicionais, que vendem layouts reciclados, prometem soluções mágicas e terceirizam o desenvolvimento de sites para estagiários que sequer compreendem a rotina de um centro cirúrgico.
                </p>
                <p>
                  Aqui, <strong className="text-[#F4F4F5]">você lida diretamente com o fundador e engenheiro</strong> que projeta a arquitetura, programa o código-fonte em Next.js e calibra meticulosamente a psicologia de conversão de cada tela.
                </p>
                <p>
                  Empregamos a mesma infraestrutura tecnológica de ponta usada pelas gigantes globais de tecnologia (<span className="text-[#E5C378] font-medium">Next.js, Tailwind CSS, Supabase, Cloudflare Edge</span>) aplicadas com exclusividade para criar ativos digitais proprietários que a sua clínica possui de verdade — com posse definitiva do código, segurança máxima e velocidade inacessível para agências comuns.
                </p>
              </div>

              {/* Badges de Princípios */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-[#27272A]">
                <div className="flex items-center space-x-2 text-xs text-[#E4E4E7]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Código 100% Seu</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#E4E4E7]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sem Mensalidades Presas</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#E4E4E7]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Acesso Direto ao Engenheiro</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. O PACOTE CIRÚRGICO DE IMPLANTAÇÃO (O Que Está Incluso) */}
      <section id="pacote" className="py-16 sm:py-24 bg-[#09090B] border-b border-[#27272A]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Escopo Executivo
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-medium text-[#F4F4F5] mt-2 mb-4">
              O Pacote Cirúrgico de Implantação
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA]">
              Uma entrega completa e turnkey de ponta a ponta, desenvolvida para médicos e cirurgiões que valorizam tempo, exclusividade e retorno comprovado.
            </p>
          </div>

          {/* Grid de 3 Pilares Fundamentais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            
            {/* Pilar 1 */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121214] border border-[#27272A] hover:border-[#D4AF37]/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#18181B] border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C378] mb-6">
                  <Layers className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                  Pilar 01
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F4F4F5] font-semibold mb-4">
                  Design Editorial Exclusivo
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Identidade visual desenhada exclusivamente para transmitir sofisticação médica monástica, perfeitamente alinhada com a arquitetura física do seu consultório ou clínica hospitalar.
                </p>
                <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Tipografia serifada de prestígio clássico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Paleta escura de alto contraste e luxo discreto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Narrativa de autoridade alinhada ao CFM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121214] border border-[#27272A] hover:border-[#D4AF37]/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#18181B] border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C378] mb-6">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                  Pilar 02
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F4F4F5] font-semibold mb-4">
                  Motor Mobile de Alta Velocidade
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Infraestrutura de engenharia otimizada para renderizar imagens de alta resolução sem consumir a banda de dados e sem travar o smartphone da paciente em redes móveis.
                </p>
                <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Lighthouse Score 95-100 em dispositivos móveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Distribuição global via CDN de borda Cloudflare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Carregamento instantâneo em 4G/5G</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121214] border border-[#27272A] hover:border-[#D4AF37]/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-sm bg-[#18181B] border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C378] mb-6">
                  <Smartphone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] block mb-2">
                  Pilar 03
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F4F4F5] font-semibold mb-4">
                  Integração Inteligente com WhatsApp
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Roteamento de mensagens pré-configuradas e individualizadas por procedimento, entregando o lead educado, consciente do ticket e pronto para a secretária agendar.
                </p>
                <ul className="space-y-2.5 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Triagem automática da intenção do paciente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Eliminação de curiosos sem orçamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                    <span>Gargalo zero na recepção da clínica</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Banner de Garantia & Rigor */}
          <div className="p-6 sm:p-8 rounded-sm bg-[#121214] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-lg text-[#F4F4F5] font-semibold">
                  Compromisso de Excelência e Entrega Chave na Mão
                </h4>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  Validação completa em ambiente de homologação privado antes de qualquer publicação definitiva.
                </p>
              </div>
            </div>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#09090B] bg-[#E5C378] hover:bg-[#D4AF37] rounded-sm transition-all whitespace-nowrap min-h-[48px]"
            >
              <span>Consultar Disponibilidade de Agenda</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

        </div>
      </section>

      {/* 7. FAQ ESTRATÉGICO PARA GESTORES E MÉDICOS DE ELITE */}
      <section id="faq" className="py-16 sm:py-24 bg-[#09090B] border-b border-[#27272A]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Esclarecimentos Executivos
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-medium text-[#F4F4F5] mt-2 mb-4">
              FAQ Estratégico para Gestores e Médicos
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA]">
              Respostas diretas sobre segurança jurídica, integração técnica e metodologia de implantação.
            </p>
          </div>

          {/* Accordion Interativo */}
          <div className="space-y-3.5">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-sm bg-[#121214] border border-[#27272A] overflow-hidden transition-colors hover:border-[#3F3F46]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 transition-all focus:outline-none min-h-[52px]"
                  >
                    <span className="font-serif-luxury text-base sm:text-lg text-[#F4F4F5] font-medium leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-[#1C1C1F]">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Call to Action inside FAQ */}
          <div className="mt-12 text-center">
            <p className="text-xs text-[#71717A] mb-4">
              Possui uma dúvida específica sobre a arquitetura da sua clínica?
            </p>
            <a
              href="https://wa.me/5519994656845?text=Ol%C3%A1%2C%20Pablo.%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20implanta%C3%A7%C3%A3o%20da%20Parvus%20Space."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs sm:text-sm text-[#E5C378] hover:text-[#F4F4F5] font-semibold underline underline-offset-4 decoration-[#D4AF37]/60"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              <span>Esclarecer diretamente com o Engenheiro via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 8. RODAPÉ CORPORATIVO E TERMO DE EXCLUSIVIDADE */}
      <footer className="pt-16 pb-12 bg-[#09090B] border-t border-[#27272A]/80 text-[#71717A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top of Footer: Brand & Exclusivity Notice */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1C1C1F]">
            
            <div className="md:col-span-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-7 h-7 rounded-sm bg-[#121214] border border-[#D4AF37]/50 flex items-center justify-center text-[#E5C378] font-serif-luxury font-bold text-base">
                  P
                </div>
                <span className="font-serif-luxury text-lg tracking-wider text-[#F4F4F5] font-semibold">
                  PARVUS SPACE
                </span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed max-w-sm mb-4">
                Digital Architecture & Private Systems for High-End Medical & Aesthetic Practices.
              </p>
              <p className="text-[11px] text-[#71717A] font-mono">
                Domínio Corporativo Oficial:{' '}
                <a href="https://parvuspace.com.br" className="text-[#E5C378] hover:underline">
                  parvuspace.com.br
                </a>
              </p>
            </div>

            {/* Política de Exclusividade Regional */}
            <div className="md:col-span-7 p-5 rounded-sm bg-[#121214] border border-[#27272A]/90">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#E5C378] font-semibold mb-2">
                <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Termo de Exclusividade Regional de Atendimento</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">
                Para preservar o valor competitivo dos nossos clientes e evitar conflitos de interesse éticos, a Parvus Space mantém um <strong className="text-[#F4F4F5]">limite rigoroso de clínicas atendidas por micro-região</strong>.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] text-[#71717A] font-mono">
                <span className="px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Cambuí (Campinas)</span>
                <span className="px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Indaiatuba</span>
                <span className="px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Valinhos & Vinhedo</span>
                <span className="px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Jardins (SP)</span>
                <span className="px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A]">Faria Lima & Itaim Bibi</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Direct Line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>
                © 2026 Parvus Space. Todos os direitos reservados.
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp Direto: +55 (19) 99465-6845</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* MOBILE FLOATING CONCIERGE BAR (Ergonomia Mobile-First de Alta Precisão) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-[#09090B]/95 backdrop-blur-lg border-t border-[#27272A]/80 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center gap-2.5">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-1.5 text-[10px] text-[#A1A1AA]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-[#E4E4E7]">Pablo</span>
              <span className="text-[#52525B]">|</span>
              <span className="text-[#D4AF37]">Engenheiro Online</span>
            </div>
            <span className="text-[11px] text-[#71717A] truncate">
              Diagnóstico Privado de Conversão
            </span>
          </div>

          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 text-xs font-semibold text-[#09090B] bg-gradient-to-r from-[#D4AF37] to-[#E5C378] active:scale-95 rounded-sm shadow-md transition-all whitespace-nowrap min-h-[48px]"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>

    </main>
  );
}
