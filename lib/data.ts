import { Technology, Project, ArchitectureProject } from '@/types'

export const technologies: Technology[] = [
  {
    name: 'Node.js',
    description: 'Runtime JavaScript para desenvolvimento de APIs e serviços backend escaláveis.',
    icon: 'SiNodedotjs',
    level: 95,
    category: 'backend',
  },
  {
    name: 'NestJS',
    description: 'Framework Node.js progressivo para construção de aplicações server-side eficientes.',
    icon: 'SiNestjs',
    level: 90,
    category: 'backend',
  },
  {
    name: 'TypeScript',
    description: 'Superset tipado do JavaScript que aumenta produtividade e segurança no desenvolvimento.',
    icon: 'SiTypescript',
    level: 95,
    category: 'backend',
  },
  {
    name: 'JavaScript',
    description: 'Linguagem de programação versátil para desenvolvimento web full-stack.',
    icon: 'SiJavascript',
    level: 90,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    description: 'Banco de dados relacional robusto e confiável para sistemas de alta disponibilidade.',
    icon: 'SiPostgresql',
    level: 85,
    category: 'database',
  },
  {
    name: 'Docker',
    description: 'Containerização de aplicações para deploy consistente em qualquer ambiente.',
    icon: 'SiDocker',
    level: 80,
    category: 'devops',
  },
  {
    name: 'Redis',
    description: 'Cache em memória de alta performance para otimização de consultas e sessões.',
    icon: 'SiRedis',
    level: 75,
    category: 'database',
  },
  {
    name: 'RabbitMQ',
    description: 'Message broker para comunicação assíncrona entre microsserviços.',
    icon: 'SiRabbitmq',
    level: 70,
    category: 'devops',
  },
  {
    name: 'Drizzle ORM',
    description: 'ORM TypeScript moderno e type-safe para interação com bancos relacionais.',
    icon: 'SiDrizzle',
    level: 80,
    category: 'database',
  },
  {
    name: 'Prisma',
    description: 'ORM de próxima geração com auto-completion e type safety integrados.',
    icon: 'SiPrisma',
    level: 80,
    category: 'database',
  },
  {
    name: 'Git',
    description: 'Controle de versão distribuído para gerenciamento de código em equipe.',
    icon: 'SiGit',
    level: 90,
    category: 'tools',
  },
  {
    name: 'GitHub',
    description: 'Plataforma de hospedagem de código com CI/CD e colaboração em equipe.',
    icon: 'SiGithub',
    level: 90,
    category: 'tools',
  },
  {
    name: 'Linux',
    description: 'Sistema operacional preferido para servidores de produção e desenvolvimento.',
    icon: 'SiLinux',
    level: 75,
    category: 'devops',
  },
  {
    name: 'Swagger',
    description: 'Documentação automática de APIs REST com interface interativa.',
    icon: 'SiSwagger',
    level: 85,
    category: 'tools',
  },
  {
    name: 'JWT',
    description: 'Tokens de autenticação stateless para sistemas seguros e escaláveis.',
    icon: 'SiJsonwebtokens',
    level: 85,
    category: 'tools',
  },
  {
    name: 'REST API',
    description: 'Design e implementação de APIs RESTful seguindo boas práticas e padrões.',
    icon: 'SiOpenapi',
    level: 95,
    category: 'backend',
  },
]

export const projects: Project[] = [
  {
    id: 'saas-pedidos',
    title: 'Sistema SaaS de Pedidos',
    description:
      'Plataforma SaaS completa para gerenciamento de pedidos com multi-tenancy, processamento assíncrono via RabbitMQ, cache com Redis e autenticação JWT robusta.',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'Redis', 'JWT', 'RabbitMQ'],
    githubUrl: 'https://github.com/Lucier',
    image: '/placeholder-project.jpg',
    badges: ['SaaS', 'Multi-tenancy', 'Microserviços'],
    caseStudy: {
      duration: '3 meses',
      role: 'Desenvolvedor Backend',
      problem:
        'Empresas de médio porte precisavam de uma solução centralizada para gerenciar pedidos de múltiplos clientes em um único sistema, mantendo total isolamento de dados entre tenants. O modelo existente era um sistema por cliente, gerando custo operacional insustentável e retrabalho constante de manutenção.',
      solution:
        'Plataforma SaaS multi-tenant com Row Level Security (RLS) no PostgreSQL para isolamento de dados no nível do banco, processamento assíncrono via RabbitMQ para operações pesadas e Redis com namespace por tenant para cache seguro e de alta performance.',
      challenges: [
        {
          title: 'Isolamento de Dados',
          description:
            'Garantir que cada tenant acesse apenas seus próprios dados sem qualquer vazamento, mesmo em cenários de bugs na camada de aplicação.',
        },
        {
          title: 'Performance Sob Carga',
          description:
            'Manter latência baixa com dezenas de tenants ativos simultaneamente, cada um gerando picos de requisições independentes.',
        },
        {
          title: 'Processamento Assíncrono Confiável',
          description:
            'Coordenar filas de mensagens para emails, relatórios e notificações sem perda de jobs em caso de falhas do worker.',
        },
      ],
      technicalDecisions: [
        {
          title: 'NestJS com Módulos por Domínio',
          description: 'Framework progressivo com DI nativa e módulos bem definidos.',
          reason:
            'A estrutura opinada do NestJS força uma organização consistente, reduzindo atrito em times e facilitando onboarding em sistemas complexos como SaaS.',
        },
        {
          title: 'Row Level Security no PostgreSQL',
          description: 'Isolamento de tenant diretamente na camada do banco de dados.',
          reason:
            'Mesmo que haja um bug na aplicação que esqueça de filtrar por tenant_id, o RLS garante que a query retorne apenas dados do tenant correto — defesa em profundidade.',
        },
        {
          title: 'Dead Letter Exchange no RabbitMQ',
          description: 'Fila de reprocessamento para mensagens que falharam após N tentativas.',
          reason:
            'Em sistemas SaaS, perder um job de email ou relatório é inaceitável. A DLX garante que falhas transitórias sejam reprocessadas automaticamente e falhas persistentes sejam auditadas.',
        },
        {
          title: 'Redis com Namespace por Tenant',
          description: 'Prefixo tenant_id em todas as chaves de cache.',
          reason:
            'Evita colisões de cache entre tenants com dados coincidentes, garantindo que o cache seja sempre tenant-safe sem overhead de serialização complexa.',
        },
      ],
      results: [
        { metric: '60%', description: 'de redução na latência de consultas frequentes com cache Redis' },
        { metric: '0', description: 'incidentes de vazamento de dados entre tenants desde o lançamento' },
        { metric: '100+', description: 'pedidos por minuto processados sem degradação de performance' },
        { description: 'Deploy de novos tenants reduzido de horas para minutos via automação' },
      ],
    },
  },
  {
    id: 'campeonatos',
    title: 'Plataforma de Campeonatos',
    description:
      'Sistema para criação e gerenciamento de campeonatos com comunicação em tempo real via WebSocket, rankings dinâmicos e notificações instantâneas.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    githubUrl: 'https://github.com/Lucier',
    image: '/placeholder-project.jpg',
    badges: ['Real-time', 'WebSocket', 'Rankings'],
    caseStudy: {
      duration: '2 meses',
      role: 'Desenvolvedor Backend',
      problem:
        'Organizadores de campeonatos dependiam de atualizações manuais e planilhas compartilhadas para divulgar resultados. Participantes precisavam recarregar páginas constantemente para ver o placar atualizado, gerando frustração e volume desnecessário de requisições.',
      solution:
        'API com WebSocket para broadcast de eventos em tempo real, separando conexões por sala de campeonato. Rankings são recalculados de forma incremental a cada resultado registrado, e eventos disparados notificam instantaneamente todos os participantes conectados.',
      challenges: [
        {
          title: 'Estado Compartilhado em Tempo Real',
          description:
            'Sincronizar o estado do campeonato entre centenas de conexões WebSocket simultâneas sem inconsistências ou condições de corrida.',
        },
        {
          title: 'Rankings com Alta Frequência de Atualização',
          description:
            'Recalcular classificações de forma eficiente em torneios com dezenas de partidas ocorrendo simultaneamente sem bloquear a API.',
        },
        {
          title: 'Reconexão de Clientes',
          description:
            'Recuperar o estado correto e completo do campeonato quando um cliente perde a conexão e reconecta após minutos ou horas.',
        },
      ],
      technicalDecisions: [
        {
          title: 'Socket.io com Rooms',
          description: 'Organização de conexões WebSocket por sala de campeonato.',
          reason:
            'Evita broadcast global desnecessário — um resultado em Campeonato A não é enviado para os participantes do Campeonato B, reduzindo tráfego e latência.',
        },
        {
          title: 'Cálculo Incremental de Rankings',
          description: 'Atualização pontual do ranking afetado em vez de recálculo total.',
          reason:
            'Com N partidas simultâneas, recalcular o ranking completo a cada resultado geraria N² operações. O cálculo incremental mantém complexidade O(log N) via sorted sets.',
        },
        {
          title: 'Arquitetura Orientada a Eventos',
          description: 'Resultado registrado dispara eventos que propagam todas as consequências.',
          reason:
            'Desacopla a lógica de registro de resultado da atualização de rankings e do broadcast WebSocket, permitindo adicionar novos efeitos colaterais sem modificar o código de negócio.',
        },
      ],
      results: [
        { metric: '<100ms', description: 'de latência para propagação de resultados em tempo real' },
        { metric: '500+', description: 'conexões simultâneas por campeonato sem degradação' },
        { description: 'Eliminação completa de refreshes manuais pelos participantes' },
        { description: 'Notificações push integradas para alertas de início e fim de partidas' },
      ],
    },
  },
  {
    id: 'diarias',
    title: 'Sistema de Controle de Diárias',
    description:
      'API para controle de diárias e hospedagens com relatórios detalhados, gestão de hóspedes e integração com meios de pagamento.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Lucier',
    image: '/placeholder-project.jpg',
    badges: ['API REST', 'Relatórios', 'Pagamentos'],
    caseStudy: {
      duration: '2 meses',
      role: 'Desenvolvedor Backend',
      problem:
        'Estabelecimentos de hospedagem controlavam diárias e reservas em planilhas manuais, o que gerava erros frequentes em cobranças, dificuldade na geração de relatórios gerenciais e falta de visibilidade do fluxo financeiro em tempo real.',
      solution:
        'API REST para automação completa do ciclo de hospedagem com máquina de estados para reservas, cálculo automático de diárias (incluindo frações), relatórios gerenciais parametrizáveis e integração com gateway de pagamento.',
      challenges: [
        {
          title: 'Cálculo de Diárias Parciais',
          description:
            'Implementar a lógica de cobrança proporcional para check-in e check-out em horários fora do padrão (late check-out, early check-in) com regras configuráveis por estabelecimento.',
        },
        {
          title: 'Máquina de Estados de Reservas',
          description:
            'Gerenciar transições válidas entre estados (pendente → confirmada → ativa → finalizada → cancelada) e bloquear transições inválidas que causariam inconsistências financeiras.',
        },
        {
          title: 'Relatórios com Agregações Complexas',
          description:
            'Gerar relatórios financeiros com múltiplos filtros, agrupamentos e períodos sem impactar a performance do banco de dados operacional.',
        },
      ],
      technicalDecisions: [
        {
          title: 'State Machine Pattern',
          description: 'Validação explícita de transições de estado antes de qualquer persistência.',
          reason:
            'Erros de estado em sistemas de hospedagem geram impacto financeiro direto. A state machine centraliza a lógica de transição e lança exceções claras para transições inválidas, eliminando estados inconsistentes.',
        },
        {
          title: 'Decimal para Valores Monetários',
          description: 'Tipo Decimal em vez de Float para todos os valores financeiros.',
          reason:
            'Float tem imprecisão binária que causa erros de arredondamento em operações monetárias. Com Decimal, R$ 1.10 + R$ 2.20 sempre resulta em R$ 3.30, não R$ 3.2999999.',
        },
        {
          title: 'Docker para Ambiente Reproduzível',
          description: 'Docker Compose com PostgreSQL, API e dependências versionados.',
          reason:
            'A paridade entre desenvolvimento e produção elimina a categoria inteira de bugs "funciona na minha máquina", especialmente crítico em cálculos financeiros que dependem de precisão.',
        },
      ],
      results: [
        { metric: '100%', description: 'de eliminação de erros manuais de cobrança reportados' },
        { metric: '80%', description: 'de redução no tempo de geração de relatórios mensais' },
        { description: 'Automação completa do ciclo: reserva, check-in, consumos, checkout e cobrança' },
        { description: 'Histórico auditável de todas as transações financeiras por hóspede' },
      ],
    },
  },
  {
    id: 'auth-api',
    title: 'API de Autenticação',
    description:
      'Serviço de autenticação completo com OAuth2, refresh tokens, blacklist de tokens inválidos via Redis e controle de acesso baseado em roles.',
    technologies: ['NestJS', 'JWT', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/Lucier',
    image: '/placeholder-project.jpg',
    badges: ['OAuth2', 'RBAC', 'Segurança'],
    caseStudy: {
      duration: '6 semanas',
      role: 'Desenvolvedor Backend',
      problem:
        'Múltiplos projetos da stack precisavam reimplementar autenticação do zero a cada novo sistema, gerando inconsistências de segurança entre implementações, falta de padronização e dívida técnica crescente que tornava auditorias de segurança imprevisíveis.',
      solution:
        'Microsserviço dedicado de autenticação reutilizável com OAuth2, refresh token rotation, revogação imediata de tokens via blacklist no Redis e controle de acesso baseado em roles (RBAC) com guards declarativos para NestJS.',
      challenges: [
        {
          title: 'Refresh Token Rotation Seguro',
          description:
            'Implementar rotação de refresh tokens onde o token anterior é invalidado imediatamente após renovação, sem afetar sessões legítimas em múltiplos dispositivos.',
        },
        {
          title: 'Blacklist Escalável sem Crescimento Infinito',
          description:
            'Armazenar tokens revogados para validação imediata em tempo real, sem que o armazenamento cresça indefinidamente ao longo do tempo.',
        },
        {
          title: 'RBAC Sem Acoplamento ao Domínio',
          description:
            'Controle granular de permissões por recurso e ação que funcione como biblioteca reutilizável sem que o serviço de auth precise conhecer a lógica de negócio de cada sistema.',
        },
      ],
      technicalDecisions: [
        {
          title: 'Redis com TTL para Blacklist',
          description: 'Tokens revogados armazenados com TTL igual ao tempo de expiração original.',
          reason:
            'O TTL automático do Redis garante que a blacklist nunca cresça além dos tokens ainda válidos — quando um token expiraria naturalmente, ele é removido da blacklist automaticamente, sem job de limpeza.',
        },
        {
          title: 'Hash do Refresh Token no Banco',
          description: 'Armazenar bcrypt hash do refresh token, nunca o valor raw.',
          reason:
            'Se o banco for comprometido (SQL injection, backup exposto), o atacante não pode usar os refresh tokens. O hash é verificado em memória, não no banco.',
        },
        {
          title: 'Guards Declarativos com Decorators',
          description: 'RBAC aplicado via @Roles() decorator nos controllers.',
          reason:
            'Mantém a lógica de autorização separada do código de negócio. Um desenvolvedor que esquece de chamar o guard explicitamente no body do método ainda está protegido pelo decorator no controller.',
        },
      ],
      results: [
        { metric: '0', description: 'vulnerabilidades encontradas em auditoria de segurança externa' },
        { metric: '3+', description: 'projetos reutilizando o serviço sem modificações' },
        { description: 'Tempo de implementação de auth em novos projetos reduzido de dias para horas' },
        { description: 'Padronização de segurança em toda a stack com uma única fonte de verdade' },
      ],
    },
  },
  {
    id: 'estoque',
    title: 'Sistema de Gestão de Estoque',
    description:
      'Sistema de inventário com controle de entrada e saída de produtos, alertas de estoque mínimo, relatórios e integração com fornecedores.',
    technologies: ['NestJS', 'PostgreSQL', 'Drizzle ORM'],
    githubUrl: 'https://github.com/Lucier',
    image: '/placeholder-project.jpg',
    badges: ['Inventário', 'Drizzle ORM', 'Relatórios'],
    caseStudy: {
      duration: '6 semanas',
      role: 'Desenvolvedor Backend',
      problem:
        'Empresas perdiam vendas por rupturas de estoque e acumulavam capital em produtos parados por falta de visibilidade do inventário. O controle manual via planilhas atrasava a detecção de problemas e impossibilitava análises preditivas de reposição.',
      solution:
        'Sistema de inventário com rastreamento em tempo real de todas as movimentações, alertas automáticos configuráveis de estoque mínimo, rastreabilidade completa via audit trail e relatórios de giro e cobertura de produtos.',
      challenges: [
        {
          title: 'Concorrência em Movimentações de Estoque',
          description:
            'Evitar estoque negativo quando múltiplas vendas simultâneas consomem o mesmo produto, sem que locks exclusivos prejudiquem a performance em horários de pico.',
        },
        {
          title: 'Alertas Inteligentes e Contextualizados',
          description:
            'Calcular o ponto de pedido de cada produto com base no histórico de consumo e no lead time do fornecedor, evitando alertas falsos ou tardios.',
        },
        {
          title: 'Rastreabilidade Total de Movimentações',
          description:
            'Manter audit trail completo e imutável de todas as entradas, saídas, ajustes e transferências sem impactar a performance das consultas operacionais.',
        },
      ],
      technicalDecisions: [
        {
          title: 'Optimistic Locking para Concorrência',
          description: 'Versioning field na entidade de estoque, rollback em conflito de versão.',
          reason:
            'Em vez de locks exclusivos que serializam todo o acesso, o optimistic locking permite alta concorrência e só conflita quando duas transações realmente colidem — que é raro em prática, mantendo throughput alto.',
        },
        {
          title: 'Drizzle ORM com Type-Safety Total',
          description: 'Queries tipadas até o nível de coluna com inferência automática do schema.',
          reason:
            'Erros de nome de coluna e tipo de dado em sistemas de inventário são silenciosos e perigosos. O Drizzle torna esses erros em erros de compilação, capturados antes do deploy.',
        },
        {
          title: 'Transações ACID para Movimentações',
          description: 'Toda movimentação de estoque é atômica: débito + registro de movimento em uma única transação.',
          reason:
            'Uma movimentação que debita o estoque mas não registra o histórico (ou vice-versa) é pior do que uma falha total, pois cria inconsistência silenciosa. A transação garante que as duas coisas acontecem ou nenhuma acontece.',
        },
      ],
      results: [
        { metric: '40%', description: 'de redução em rupturas de estoque após alertas automáticos' },
        { metric: '100%', description: 'de rastreabilidade em todas as movimentações de produtos' },
        { description: 'Detecção proativa de desvios de estoque antes de afetarem vendas' },
        { description: 'Relatórios de giro e cobertura disponíveis em segundos, antes levavam horas' },
      ],
    },
  },
]

export const architectureProjects: ArchitectureProject[] = [
  {
    id: 'saas-pedidos',
    title: 'Sistema SaaS de Pedidos',
    mermaidDiagram: `graph TB
    Client[🌐 Cliente] --> LB[⚡ Load Balancer]
    LB --> API[🔧 NestJS API]
    API --> Cache[🔴 Redis Cache]
    API --> DB[(🗄️ PostgreSQL)]
    API --> Queue[📨 RabbitMQ]
    Queue --> Worker[⚙️ Worker Service]
    Worker --> DB
    API --> Email[📧 Email Service]`,
    authFlow: `sequenceDiagram
    participant C as Cliente
    participant A as API NestJS
    participant G as JWT Guard
    participant DB as PostgreSQL
    C->>A: POST /auth/login
    A->>DB: Busca usuário
    DB-->>A: Retorna usuário
    A->>A: Valida senha (bcrypt)
    A-->>C: { access_token, refresh_token }
    C->>A: GET /api/resource (Bearer token)
    A->>G: Valida JWT
    G-->>A: Payload do token
    A-->>C: Dados da resposta`,
    layeredArch: `graph TB
    HTTP[HTTP Request] --> Controller[Controller Layer]
    Controller --> Service[Service Layer]
    Service --> Repository[Repository Layer]
    Repository --> DB[(Database)]
    Controller --> DTO[DTOs & Validation]
    Service --> Business[Business Rules]
    Repository --> ORM[Drizzle ORM]`,
    erDiagram: `erDiagram
    USERS ||--o{ ORDERS : places
    USERS {
        uuid id PK
        string email
        string name
        string password_hash
        timestamp created_at
    }
    ORDERS ||--|{ ORDER_ITEMS : contains
    ORDERS {
        uuid id PK
        uuid user_id FK
        decimal total
        string status
        timestamp created_at
    }
    PRODUCTS ||--o{ ORDER_ITEMS : included_in
    PRODUCTS {
        uuid id PK
        string name
        decimal price
        int stock
        uuid category_id FK
    }
    CATEGORIES {
        uuid id PK
        string name
    }
    CATEGORIES ||--o{ PRODUCTS : has`,
    requestFlow: `graph LR
    C[Client] --> LB[Load Balancer]
    LB --> NS[NestJS]
    NS --> RD{Redis Cache}
    RD -->|cache hit| NS
    RD -->|cache miss| PG[(PostgreSQL)]
    PG --> NS
    NS --> C`,
    technicalDecisions: {
      'Escolha do NestJS':
        'Framework opinado que promove boas práticas como injeção de dependências, módulos e decorators, resultando em código mais organizado e testável.',
      'PostgreSQL vs MongoDB':
        'PostgreSQL escolhido pela consistência ACID, suporte a transações complexas e relacionamentos entre entidades do domínio de pedidos.',
      'Redis para Cache':
        'Cache em memória para reduzir latência em consultas frequentes como listagem de produtos e sessões de usuário.',
      'RabbitMQ para Filas':
        'Processamento assíncrono de emails, notificações e relatórios sem bloquear a resposta da API principal.',
      'JWT Stateless':
        'Tokens JWT para autenticação stateless, facilitando o escalonamento horizontal sem necessidade de sessões compartilhadas.',
      'Docker Compose':
        'Orquestração local de todos os serviços (API, banco, cache, filas) com configuração reproduzível em qualquer ambiente.',
    },
    scalability: {
      'Fase 1 - MVP': 'Single instance, PostgreSQL, Redis básico, monolito modular',
      'Fase 2 - Crescimento': 'Load balancer, read replicas, Redis Cluster, CDN',
      'Fase 3 - Escala': 'Microsserviços, Kubernetes, sharding de banco, multi-região',
      'Fase 4 - Enterprise': 'Service mesh, observabilidade completa, disaster recovery',
    },
    bestPractices: [
      'SOLID Principles',
      'Clean Architecture',
      'Domain-Driven Design',
      'Repository Pattern',
      'DTO Validation',
      'Error Handling',
      'Logging Estruturado',
      'Health Checks',
      'Rate Limiting',
      'Documentação Swagger',
      'Testes Unitários',
      'Testes de Integração',
    ],
  },
]
