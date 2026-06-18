export const SITE = {
  name: 'Advocacia Neves',
  contactLabel: 'Falar conosco',
  tagline: 'Advocacia com escuta ativa e estratégia precisa.',
  url: 'https://advocacianeves.com.br/',
  phone: '(43) 3323-3109',
  phoneTel: '+554333233109',
  email: 'atendimentoadvocacianeves@gmail.com',
  instagram: 'https://www.instagram.com/advocaciawneves/',
  address: {
    street: 'Rua Sergipe, nº 829, sala 11',
    neighborhood: 'Centro',
    city: 'Londrina',
    state: 'PR',
    zip: '86010-380',
    full: 'Rua Sergipe, nº 829, sala 11 — Centro, Londrina/PR',
  },
  geo: {
    lat: -23.3099529,
    lng: -51.1609742,
  },
  openingHours: {
    label: 'Segunda a sexta, 9h às 18h',
    saturday: 'Fechado',
    sunday: 'Fechado',
  },
  mapsUrl:
    'https://www.google.com/maps/dir//Advocacia+Neves+-+R.+Sergipe,+829+-+sala+11+-+Centro,+Londrina+-+PR,+86010-380/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94eb45c13d9d5727:0x4467cdd4a14b962a',
  googleMapsUrl: 'https://www.google.com/maps?cid=4929134630303143466',
} as const

export const WHATSAPP_NUMBER = '554333233109'

export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, gostaria de agendar uma consulta.',
)

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export const PRACTICE_AREAS = [
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    description:
      'Problemas com bancos, produtos ou serviços? Você tem direitos — e cuidamos da sua defesa com clareza e firmeza.',
    variant: 'wide' as const,
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description:
      'Divórcio, guarda, pensão e inventário com sensibilidade humana e estratégia jurídica precisa.',
    variant: 'dark' as const,
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    description:
      'Aposentadoria, benefícios negados e revisões de INSS. Orientação clara para você entender cada passo.',
    variant: 'bordered' as const,
  },
] as const

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Primeira conversa',
    description:
      'Entre em contato pelo WhatsApp ou telefone. Escutamos com atenção e explicamos os caminhos possíveis.',
  },
  {
    step: '02',
    title: 'Análise do caso',
    description:
      'Avaliamos documentos, prazos e estratégias jurídicas para construir a melhor condução do seu processo.',
  },
  {
    step: '03',
    title: 'Atuação dedicada',
    description:
      'Cuidamos de tudo com transparência para que você foque no que importa, com acompanhamento próximo.',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'Você entra em contato pelo WhatsApp ou telefone com um resumo do caso. Avaliamos as informações iniciais e orientamos sobre os próximos passos, prazos e documentos necessários.',
  },
  {
    question: 'Quanto custa contratar um advogado?',
    answer:
      'Os honorários variam conforme a complexidade do caso. Após a análise inicial, apresentamos as opções de forma transparente, sem surpresas.',
  },
  {
    question: 'Quanto tempo dura um processo?',
    answer:
      'Depende da área e da instância judicial. Na primeira análise, explicamos uma estimativa realista e mantemos você informado em cada etapa.',
  },
  {
    question: 'Onde fica o escritório?',
    answer:
      'Estamos na Rua Sergipe, nº 829, sala 11, no Centro de Londrina/PR. Você pode ver a localização e traçar a rota pelo Google Maps.',
  },
  {
    question: 'Que documentos preciso trazer?',
    answer:
      'Varia por caso: contratos, comprovantes, laudos, decisões anteriores ou documentos do INSS. Na primeira conversa, enviamos uma lista objetiva do que será útil.',
  },
] as const
