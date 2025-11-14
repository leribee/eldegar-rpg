// LINHA DO TEMPO DE ELDEGAR
// Todos os eventos históricos organizados cronologicamente

const timelineEvents = [
    // ANO 49 QB - ERA ATUAL
    {
        year: 49,
        date: null,
        title: "Ano Atual de Eldegar",
        description: "Ava Sindalin se junta aos exploradores da Ilha de Babel para encontrar seu pai.",
        type: "political",
        era: "qb"
    },
    
    // ANO 48 QB
    {
        year: 48,
        date: "12/04",
        title: "Expedição à Ilha de Babel",
        description: "Um grupo de exploradores segue em direção à ilha de Babel para investigar.",
        type: "discovery",
        era: "qb"
    },
    {
        year: 48,
        date: "12/03",
        title: "Nascimento de Mariko",
        description: "Aurelian aos 18 anos tem sua primeira filha, e a nomeia Mariko em homenagem a sua ancestral.",
        type: "birth",
        era: "qb"
    },
    
    // ANO 46 QB
    {
        year: 46,
        date: null,
        title: "Guerra Civil em Qadim'Ra",
        description: "Qadim'Ra entrou em guerra civil.",
        type: "battle",
        era: "qb"
    },
    
    // ANO 45 QB
    {
        year: 45,
        date: "02/01",
        title: "Fundação de Espada Polar",
        description: "Surgimento de uma nova vila ao norte de Sel'Izee, a vila é nomeada de Espada Polar.",
        type: "founding",
        era: "qb"
    },
    
    // ANO 44 QB
    {
        year: 44,
        date: null,
        title: "Pigmeu torna-se Braço Direito",
        description: "Pigmeu se torna Braço Direito de Cealenna, e Shere'Khar manda seu filho para uma aventura, e o mesmo não retorna para casa ficando desaparecido.",
        type: "political",
        era: "qb"
    },
    
    // ANO 43 QB
    {
        year: 43,
        date: null,
        title: "Fenômenos Dimensionais",
        description: "Estranhos fenômenos são registrados em volta do mundo trazendo diversas anomalias e pessoas de outras dimensões. A filha de Hasgat retorna após uma longa década longe e se torna a imperatriz de Sel'Izee, a nova Imperatriz Cealenna aceita o cargo após a morte de seu pai.",
        type: "political",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Retorno da Torre de Babel - Rumores",
        description: "Surgem rumores sobre o retorno da torre de babel, além de diversos portais surgindo pelo mundo com hordas de demônios.",
        type: "discovery",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Descoberta do Templo dos Deuses",
        description: "Templo dos Deuses é encontrado novamente na floresta negra. É encontrado o cofre que mantinha o corpo e alma do deus da morte aprisionado. O deus é ressuscitado e o cofre é destruído. Um batalhão de Shaaz é encontrado morto na floresta.",
        type: "discovery",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Transformação de Lemuriel",
        description: "Em uma infelicidade do destino, Lemuriel é transformada em ouro após roubar a condição de um mago chamado Alduin.",
        type: "death",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Retorno de Algol",
        description: "A lenda de Mar'Jahan se concretiza, e a Algol, mulher da lenda das lágrimas de diamante retorna.",
        type: "discovery",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Ascensão de Fallond",
        description: "Fallond Ironchest se encontra com o arquiteto, se tornando um Deus da Guerra.",
        type: "political",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Aliança Contra Shaaz",
        description: "Três exércitos se juntam a Mar'Jahan para uma ofensiva contra Shaaz: os exércitos de Eldegar, Sel'Izee e Ironforge chegam até Mar'Jahan.",
        type: "battle",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Proibição de Mirna",
        description: "Mirna Robsval vende um presente dado pelo Sheik de Mar'Jahan 'Jahan', que a proibe de adentrar ao castelo após vender um presente, o que é um pecado em Mar'Jahan.",
        type: "political",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Guerra de Shaaz e Ascensão de Luckar",
        description: "A guerra inicia e os heróis conseguem desativar as defesas de Shaaz derrotando o Colosso. Seguem para a luta contra Boris, onde são teleportados para outra dimensão. Luckar Nailo, o último dos Nailo, deixa de existir, porém sua alma ascende à divindade da chuva e dos raios, ajudando o grupo a derrotar Boris que morre.",
        type: "battle",
        era: "qb"
    },
    {
        year: 43,
        date: null,
        title: "Morte de Mario e Shefaz",
        description: "Mario, irmão de Mirna, e Shefaz são 'mortos' devido a um acionamento incorreto das defesas de Shaaz.",
        type: "death",
        era: "qb"
    },
    
    // ANO 42 QB
    {
        year: 42,
        date: null,
        title: "Morte de Eldegar V",
        description: "Eldegar V falece, deixando o reinado com seu filho Eldegar VI.",
        type: "death",
        era: "qb"
    },
    
    // ANO 40 QB
    {
        year: 40,
        date: null,
        title: "Primeiro Dirigível Aprimorado",
        description: "Surge novamente o primeiro dirigível, agora aprimorado dando início em sua categoria, graças à colaboração técnica entre humanos, draconatos, e anões marcando um novo capítulo na história da aviação e exploração aérea.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 33 QB
    {
        year: 33,
        date: "07/09",
        title: "Nascimento de Silas",
        description: "Nasce Silas (Torre dos Deuses Passado).",
        type: "birth",
        era: "qb"
    },
    {
        year: 33,
        date: "28/04",
        title: "Desaparecimento de Mar",
        description: "Mar, imperatriz de Mar'Jahan, sai em uma incursão diplomática para Shaaz porém não retorna. Espiões de Mar'Jahan informam ter avistado estátua de ouro de Mar.",
        type: "death",
        era: "qb"
    },
    {
        year: 33,
        date: "28/04",
        title: "Nascimento de Algol",
        description: "Nasce Algol (Glitter) filha de Lemuriel (Contos de Vecna).",
        type: "birth",
        era: "qb"
    },
    
    // ANO 32 QB
    {
        year: 32,
        date: null,
        title: "Último Dragão Avistado",
        description: "O último dragão é avistado sobre a montanha mais alta do mundo, despertando fascínio e especulação sobre o significado de sua presença após tanto tempo.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 30 QB
    {
        year: 30,
        date: null,
        title: "Desaparecimento da Imperatriz",
        description: "A Imperatriz Sel'Izee desaparece junto de sua filha de 4 anos, Cealenna.",
        type: "death",
        era: "qb"
    },
    {
        year: 30,
        date: null,
        title: "Prosperidade Econômica",
        description: "A economia de todas as cidades floresce, trazendo estabilidade e prosperidade. É estabelecida uma organização das Alianças, proporcionando um fórum para discussões sobre o futuro da humanidade.",
        type: "political",
        era: "qb"
    },
    {
        year: 30,
        date: null,
        title: "Nascimento de Aurelian",
        description: "Eldegar VI (28 anos) tem seu primeiro filho e o nomeia Aurelian.",
        type: "birth",
        era: "qb"
    },
    
    // ANO 26 QB
    {
        year: 26,
        date: "16/04",
        title: "Nascimento de Cealenna",
        description: "Nascimento de Cealenna filha de Sel'Izee com Hasgat.",
        type: "birth",
        era: "qb"
    },
    {
        year: 26,
        date: "13/13",
        title: "Nascimento de Zórya",
        description: "Nasce Zórya no dia 13/13 sendo do Signo Zhar'Kael.",
        type: "birth",
        era: "qb"
    },
    
    // ANO 25 QB
    {
        year: 25,
        date: null,
        title: "Primeiro Dirigível a Vapor",
        description: "O primeiro dirigível a vapor é apresentado em Eldegar, marcando um avanço notável na tecnologia aérea. No entanto, um trágico acidente abala a confiança na nova invenção.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 24 QB
    {
        year: 24,
        date: "12/06",
        title: "Nascimento de Shefaz",
        description: "Nascimento de Shefaz filho de Sel'Izee com Hasgat.",
        type: "birth",
        era: "qb"
    },
    
    // ANO 18 QB
    {
        year: 18,
        date: null,
        title: "Descoberta do Motor a Vapor",
        description: "Novas tecnologias revolucionárias são descobertas, incluindo o motor a vapor, que promete aumentar significativamente a potência e eficiência das máquinas de navegação.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 17 QB
    {
        year: 17,
        date: null,
        title: "Mensagem da Deusa Absoluta",
        description: "Uma melodia celestial ressoa na mente da humanidade, transmitida pela Deusa Absoluta, alertando sobre a persistência do mal no mundo e instigando a busca contínua pela paz e harmonia.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 16 QB
    {
        year: 16,
        date: null,
        title: "Casamento Imperial",
        description: "Casamento da Imperatriz Sel'Izee com o General de Sel'Izee Hasgat.",
        type: "political",
        era: "qb"
    },
    {
        year: 16,
        date: null,
        title: "Volta ao Mundo Completa",
        description: "A humanidade finalmente completa sua volta ao mundo, fornecendo evidências irrefutáveis da natureza esférica da terra, um marco histórico que redefine a compreensão do universo.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 14 QB
    {
        year: 14,
        date: null,
        title: "Integração dos Tieflings",
        description: "A raça de meio-demônios Tieflings recebe uma nova perspectiva graças à influência humanizadora da Condessa Tiefling Makharat, que promove a integração e aceitação desses seres na sociedade.",
        type: "political",
        era: "qb"
    },
    
    // ANO 13 QB
    {
        year: 13,
        date: null,
        title: "Desaparecimento dos Nailo",
        description: "A ilustre família élfica Nailo desaparece misteriosamente, deixando a sociedade perplexa diante do enigma de seu desaparecimento sem rastros.",
        type: "death",
        era: "qb"
    },
    
    // ANO 12 QB
    {
        year: 12,
        date: null,
        title: "Desaparecimento de Pigmeu",
        description: "O renomado explorador naval Pigmeu é honrado por sua descoberta da terra esférica, porém após receber as homenagens desaparece misteriosamente, deixando para trás um legado de exploração e descoberta.",
        type: "death",
        era: "qb"
    },
    
    // ANO 10 QB
    {
        year: 10,
        date: null,
        title: "Era das Explorações Navais",
        description: "Inicia-se a era das explorações navais, que resulta na descoberta de novos continentes e terras desconhecidas ao redor do mundo. Durante essas explorações é revelada a raça dos Halflings, além da descoberta de novas cidades humanas, anãs e orcs.",
        type: "discovery",
        era: "qb"
    },
    
    // ANO 8 QB
    {
        year: 8,
        date: null,
        title: "Reestruturação da Guilda dos Corvos",
        description: "A guilda dos Corvos é reestruturada, agora liderada por dois dos heróis responsáveis pela queda de Babel: Fallond Ironchest e Lemuriel, consolidando-se como uma força de proteção e justiça no novo mundo pós-Babel.",
        type: "political",
        era: "qb"
    },
    
    // ANO 6 QB
    {
        year: 6,
        date: null,
        title: "Exílio da Deusa Absoluta",
        description: "A deusa Absoluta é reverenciada como a única divindade existente, partindo então para seu exílio na enigmática ilha Cristaluna, deixando para trás um mundo que agora busca sua própria redenção e equilíbrio.",
        type: "political",
        era: "qb"
    },
    
    // ANO 5 QB
    {
        year: 5,
        date: null,
        title: "Casamento Real",
        description: "O Rei Eldegar (V) casa-se com Evandra, e juntos têm três filhas: Maria, Rose e Sina, fortalecendo os laços entre reinos e assegurando o futuro da linhagem real. (Evandra era princesa no reino de Sina, filha de Bartholomeu de Prata.)",
        type: "political",
        era: "qb"
    },
    
    // ANO 2 QB
    {
        year: 2,
        date: null,
        title: "Morte da Rainha",
        description: "O Rei Eldegar (V) enfrenta a perda de sua esposa, que dá à luz a um filho (Eldegar VI) antes de partir.",
        type: "death",
        era: "qb"
    },
    
    // ANO 1 QB
    {
        year: 1,
        date: null,
        title: "Dia dos Heróis",
        description: "Os aventureiros retornam à Cidade de Eldegar como heróis aclamados, e é instituído o Dia dos Heróis em sua honra. O calendário é reiniciado, marcando o ano 1 Após a Queda de Babel, enquanto os anos anteriores são retroativamente denominados como anos AQB.",
        type: "political",
        era: "qb"
    },
    
    // ANO 0 QB - A QUEDA DE BABEL
    {
        year: 0,
        date: null,
        title: "A QUEDA DE BABEL",
        description: "Os generais de Babel são finalmente derrotados, e a aliança avança rumo à torre de Babel, acompanhada pelos bravos aventureiros. Uma terrível guerra se desencadeia, marcada pela trágica morte do rei Eldegar (IV) aos 66 anos, deixando o trono para seu filho Eldegar (V), com apenas 30 anos de idade. A batalha consome os exércitos da aliança e de Babel, deixando muitos mortos e liberando espaço para os aventureiros seguirem para a torre. O embate culmina na queda de Babel, com a vitória dos Heróis Remanescentes sobre o mal que assolava o mundo.",
        type: "battle",
        era: "qb"
    },
    
    // ERA DO TERROR DO SANGUE (AQB)
    
    // ANO -1 AQB
    {
        year: -1,
        date: null,
        title: "Preparação Final",
        description: "A Aliança ressurge com um novo exército, dirigindo-se à aldeia orc de Grum-Tar, onde planejam aguardar o momento certo para lançar um ataque direto contra Babel, num último esforço para derrotar a ameaça que assola o mundo.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -1,
        date: null,
        title: "Nascimento de Marin Fritz",
        description: "Nasce Marin Fritz filha de Huda e Ramiel.",
        type: "birth",
        era: "aqb"
    },
    {
        year: -1,
        date: null,
        title: "Aprisionamento de Ava Sindalin",
        description: "Ava Sindalin consegue fazer a magia que gostaria e é aprisionada por Bóris em uma estátua de ouro. Por não conseguir controlar o seu corpo e energia, Ava perde toda a vida em uma das mãos.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -2 AQB
    {
        year: -2,
        date: null,
        title: "Jornada ao Castelo dos Pecados",
        description: "Os aventureiros embarcam em uma jornada rumo ao encontro do sinistro castelo dos pecados, determinados a desafiar as forças do mal e desvendar seus segredos sombrios.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -3 AQB
    {
        year: -3,
        date: null,
        title: "Batalha de Glomir",
        description: "A cidade de Glomir torna-se o cenário de um conflito intenso contra Dedos de Mel, uma infiltrada de Babel, desencadeando uma batalha feroz. Diversas explosões ocorrem na cidade, destruindo parte dela e abrindo fendas no solo.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -4 AQB
    {
        year: -4,
        date: null,
        title: "Descoberta do Templo e Ataque da Ira",
        description: "Um grupo destemido de aventureiros descobre o templo da antiga deusa, mas são atacados pelo pecado da Ira, impulsionando-os a se lançarem em uma jornada para enfrentar diretamente Babel e suas forças malignas.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -5 AQB
    {
        year: -5,
        date: null,
        title: "Morte de Eldegar IV",
        description: "Eldegar IV parte, deixando o reinado com seu filho Eldegar V.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -10 AQB
    {
        year: -10,
        date: null,
        title: "Surgimento de Cristaluna",
        description: "A misteriosa ilha de Cristaluna surge, acompanhada pelo aparecimento de fadas no mundo. No entanto, a ilha permanece inacessível para todos, envolta de mistério e segredos.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -13 AQB
    {
        year: -13,
        date: null,
        title: "Operações de Espionagem",
        description: "A guilda dos corvos inicia suas operações de espionagem, visando identificar possíveis espiões e agentes de Babel infiltrados nas cidades, fortalecendo assim sua capacidade de defesa.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -15 AQB
    {
        year: -15,
        date: null,
        title: "Fundação da Guilda dos Corvos",
        description: "Surge a guilda dos corvos, fundada por três irmãos elfos com o objetivo de reunir forças para enfrentar a ameaça de Babel, tornando-se uma importante força de resistência.",
        type: "founding",
        era: "aqb"
    },
    {
        year: -15,
        date: null,
        title: "Nascimento de Dom Gobbino",
        description: "Nasce Dom Gobbino.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -16 AQB
    {
        year: -16,
        date: null,
        title: "Fundação de Mar'Jahan",
        description: "Cidade de Mar'Jahan é finalmente fundada tendo seu sheik chamado Jahan juntamente de sua esposa Mar.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -18 AQB
    {
        year: -18,
        date: null,
        title: "Queda de Pillai",
        description: "A outrora majestosa cidade flutuante de Pillai é brutalmente atacada por Babel, resultando na queda da ilha sob a terra. Todo o conhecimento e tecnologia da cidade são saqueados pelo inimigo. Todos os Sindalin são dados como mortos, bem como as outras pessoas da cidade.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -18,
        date: null,
        title: "Ava em Shaaz",
        description: "Ava Sindalin chega em Shaaz para aprender o controle de suas habilidades para amplificação dos seus poderes.",
        type: "political",
        era: "aqb"
    },
    {
        year: -18,
        date: null,
        title: "Lenda das Lágrimas de Diamante",
        description: "Surge a lenda da mulher que chora diamantes, trazendo vida a uma nova terra, que viria a ser chamada de Mar'Jahan.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -19 AQB
    {
        year: -19,
        date: null,
        title: "Ascensão de Babel",
        description: "Babel ascende ao título de senhor da morte, e seus domínios se expandem para terras até então desconhecidas, lançando um manto de sombras sobre vastas regiões.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -20 AQB
    {
        year: -20,
        date: null,
        title: "Expedição à Floresta Negra",
        description: "Uma expedição é organizada com o intuito de explorar a enigmática floresta negra, em busca do lendário templo da deusa perdida. No entanto, a missão acaba em fracasso, sem que o templo seja encontrado.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -21 AQB
    {
        year: -21,
        date: null,
        title: "Morte de Merlin",
        description: "Morre Merlin, a grande maga em Shaaz aos 289 anos. Seu aprendiz Boris assume o comando da cidade.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -24 AQB
    {
        year: -24,
        date: null,
        title: "Sucessão Real Tripla",
        description: "O Rei Eldegar I, aos 143 anos, parte desta vida, juntamente com seu filho Eldegar II aos 104 anos, e seu neto Eldegar III aos 79 anos. Assim o bisneto Eldegar IV assume o trono aos 42 anos de idade, retomando o reinado em tempos de desafio e incerteza.",
        type: "death",
        era: "aqb"
    },
    {
        year: -24,
        date: "13/13",
        title: "Nascimento de Lemuriel",
        description: "Nascimento de Lemuriel em Qadim'Ra.",
        type: "birth",
        era: "aqb"
    },
    {
        year: -24,
        date: null,
        title: "Nascimento de Thalion Sindalin",
        description: "Nasce Thalion Sindalin, o filho mais difícil para as pesquisas dos Sindalin.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -25 AQB
    {
        year: -25,
        date: null,
        title: "Modernização dos Goblins",
        description: "Os goblins, outrora vistos como criaturas selvagens e primitivas, surpreendem a humanidade ao adotarem uma abordagem mais moderna, integrando-se à sociedade de maneiras inesperadas e surpreendentes.",
        type: "political",
        era: "aqb"
    },
    {
        year: -25,
        date: null,
        title: "Elliot torna-se Escudeiro",
        description: "Elliot Mão Forte se torna escudeiro do Cavaleiro Bhonn de Valência.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -30 AQB
    {
        year: -30,
        date: null,
        title: "Rumores do Templo Antigo",
        description: "Rumores intrigantes surgem sobre a descoberta de um templo dedicado a uma deusa antiga, escondido nas profundezas da misteriosa floresta negra.",
        type: "discovery",
        era: "aqb"
    },
    {
        year: -30,
        date: null,
        title: "Nascimento de Eldegar V",
        description: "Nasce Eldegar (V) filho de Eldegar (IV).",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -33 AQB
    {
        year: -33,
        date: null,
        title: "Draconatos Unem-se à Aliança",
        description: "Os draconatos são convidados a se juntar à aliança, e prontamente aceitam, trazendo consigo sua força e habilidades únicas para a luta contra Babel.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -34 AQB
    {
        year: -34,
        date: null,
        title: "Revelação dos Draconatos",
        description: "É revelada a existência da antiga raça dos Draconatos, descendentes dos nobres dragões, e das cidades de Dragontalon e Wyrmhaven, habitadas por esses poderosos seres.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -35 AQB
    {
        year: -35,
        date: null,
        title: "Transformação de Saharabad",
        description: "A base de Saharabad é transformada em uma cidade do deserto, tornando-se um ponto estratégico crucial para monitorar os avanços das forças de Babel na região.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -36 AQB
    {
        year: -36,
        date: "14/06",
        title: "Nascimento de Amélia",
        description: "Nasce Amélia em Bluehelm na ilha de Pillai.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -40 AQB
    {
        year: -40,
        date: null,
        title: "Nascimento de Elliot Mão Forte",
        description: "Nasce Elliot Mão Forte (Futuramente Dom que Chute).",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -45 AQB
    {
        year: -45,
        date: null,
        title: "Revelação de Sel'Izee",
        description: "Após 10 anos na nova cidade Orc, Sel'Izee revela sua identidade como Elfa. Embora os Orcs não tenham gostado de início, aceitam e Sel'Izee continua como sua Imperatriz.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -47 AQB
    {
        year: -47,
        date: null,
        title: "Nascimento de Hasgat",
        description: "Nasce Hasgat.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -50 AQB
    {
        year: -50,
        date: null,
        title: "Batalha do Deserto",
        description: "Nas terras áridas do deserto, a Aliança enfrenta o exército de Babel em uma batalha épica. No entanto, as condições climáticas extremas provam ser um desafio formidável, levando à derrota da Aliança e sua posterior retirada para a base de Saharabad.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -55 AQB
    {
        year: -55,
        date: null,
        title: "Orcs Unem-se à Aliança",
        description: "Os orcs finalmente se unem à Aliança, retomando o árduo trabalho de reconstruir suas vilas devastadas. Enquanto isso, a Imperatriz Orc Sel'Izee lidera seu povo em uma jornada até uma nova ilha, buscando um recomeço em um novo território seguro.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -56 AQB
    {
        year: -56,
        date: null,
        title: "Desastre da Aliança",
        description: "A fúria dos demônios desaba sobre os soldados da Aliança, resultando na perda de mais da metade do exército em um confronto desastroso e sangrento.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -56,
        date: null,
        title: "Doença do Sangue",
        description: "Descobrimento da doença do sangue, que mata mais da metade dos exércitos da aliança.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -57 AQB
    {
        year: -57,
        date: null,
        title: "Nascimento de Kemvaros",
        description: "Nasce Kemvaros.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -58 AQB
    {
        year: -58,
        date: null,
        title: "Grandes Batalhas Contra Demônios",
        description: "Com bravura e determinação, o exército da Aliança consegue expulsar os demônios das costas do continente de Eldegar. Muitas batalhas foram travadas ao longo do ano, fundamentais para a vitória: A Batalha da Forja, A Batalha da Costa Congelada, a Batalha do Leão da Montanha e a Batalha Aérea de Dûrgol.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -58,
        date: null,
        title: "Batalha da Forja",
        description: "Foi uma das batalhas próxima à cidade Anã de Ironforge e também foi conhecida por ser a primeira batalha do protótipo do canhão da forja, um poderoso canhão que disparava uma esfera metálica cheia de furos onde havia muitos litros de ferro derretido. Foi muito útil para derrotar demônios alados e quebrar a defesa terrestre dos demônios que não tiveram nenhuma chance.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -58,
        date: null,
        title: "Batalha da Costa Congelada",
        description: "Foi o último combate contra o exército de demônios, e também a mais sangrenta, onde a luta inteira se passou sob as crostas de gelo que havia sob o mar. Muitos homens, anões e demônios morreram no local caindo para o mar. O General Mordheradin Dente de Ferro acabou morrendo na batalha após usar seus próprios dentes para separar uma crosta de gelo de outra, fazendo centenas de demônios caírem dentro do mar gelado.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -58,
        date: null,
        title: "Batalha do Leão da Montanha",
        description: "Ocorreu ao norte de Grúm-gar, onde o Rei de Ironforge Bohoromir coração de leão guiou seu exército sob a montanha mais gelada do Continente para combater os demônios. Foi levantada a maior cavalaria de Javalis de todo o continente. Dizem que a batalha durou semanas e aos que estavam sob o pé da montanha só puderam ver centenas de relâmpagos sob o alto da montanha. Naquele dia Bohoromir desceu a montanha com todo seu exército intacto.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -58,
        date: null,
        title: "Batalha Aérea de Dûrgol",
        description: "Ocorreu em volta da cidade Orc de Dûrgol, onde o exército de Eldegar combateu centenas de demônios alados. Muitos homens foram mortos sendo capturados e arremessados do alto, mas o combate favoreceu os altos e treinados Arqueiros que abateram mais de 60.000 demônios alados em apenas uma semana. Graças a este combate em Eldegar uma semana é separada para comemorar a resistência e persistência dos humanos sob o pior das dificuldades.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -59 AQB
    {
        year: -59,
        date: null,
        title: "Convocação Militar",
        description: "Milhares de soldados são convocados para enfrentar as áreas dominadas pelos demônios, preparando-se para um confronto épico em defesa de suas terras e povos.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -60 AQB
    {
        year: -60,
        date: null,
        title: "Devastação das Aldeias Orcs",
        description: "Terríveis ataques demoníacos assolam as aldeias de Orcs, resultando na devastação de grande parte da população orc do continente. Os sobreviventes, desesperados, clamam por auxílio da recém-formada Aliança dos Humanos e Anões.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -62 AQB
    {
        year: -62,
        date: null,
        title: "Formação da Aliança",
        description: "Em Eldegar é formada a Aliança dos Humanos e Anões, um pacto não só econômico quanto militar para proteção do continente e de suas terras.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -66 AQB
    {
        year: -66,
        date: null,
        title: "Nascimento de Eldegar IV",
        description: "Nasce Eldegar (IV), filho de Eldegar (III).",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -68 AQB
    {
        year: -68,
        date: null,
        title: "Recusa dos Orcs",
        description: "As aldeias de Orcs de Eldegar são também convidadas a participar do Pacto de Paz, mas optam por recusar, mantendo-se isoladas em sua própria soberania.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -69 AQB
    {
        year: -69,
        date: null,
        title: "Anões Unem-se ao Acordo",
        description: "Os anões são convidados a se juntarem ao acordo de paz e prontamente aceitam, unindo forças com os humanos na luta contra o mal iminente.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -70 AQB
    {
        year: -70,
        date: null,
        title: "Assembleia de Paz",
        description: "Uma importante assembleia é convocada no majestoso palácio de Eldegar, reunindo representantes das principais cidades humanas do continente. O objetivo é negociar tratados de paz e formar uma aliança para enfrentar a ameaça de Babel.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -75 AQB
    {
        year: -75,
        date: null,
        title: "Expansão de Babel",
        description: "Os territórios de Babel se estendem ainda mais alcançando até as terras geladas mais remotas. No entanto, a corrupção maligna ainda não consegue perfurar as fronteiras do continente de Eldegar.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -80 AQB
    {
        year: -80,
        date: null,
        title: "Construção dos Castelos",
        description: "Inicia-se a construção de sete imponentes castelos ao redor da base do vulcão, solidificando o poder e a presença de Babel na região.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -85 AQB
    {
        year: -85,
        date: null,
        title: "Surgimento do Vulcão",
        description: "Um gigantesco vulcão emerge na ilha sob o controle de Babel, levando ainda mais seu domínio sobre a terra.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -88 AQB
    {
        year: -88,
        date: null,
        title: "Construção de Shaaz",
        description: "Cidade de Shaaz é construída em um dia pela grande maga Merlin.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -89 AQB
    {
        year: -89,
        date: null,
        title: "Destruição da Frota de Eldegar",
        description: "Babel intercepta e aniquila uma frota de navios de Eldegar, resultando na perda de mais de 100 navios de guerra e inúmeras vidas. Seus domínios se estendem para uma ilha vizinha, porém o vasto deserto que a separa atua como uma barreira natural, impedindo a propagação da doença.",
        type: "battle",
        era: "aqb"
    },
    {
        year: -89,
        date: null,
        title: "Morte de Thalion Sindalin",
        description: "Morre Thalion Sindalin em um dos navios de Eldegar. O corpo nunca foi encontrado.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -90 AQB
    {
        year: -90,
        date: null,
        title: "Finalização do Zigurate",
        description: "O Zigurate é finalizado, erguendo-se a mais de 100 metros de altura, com sua entrada protegida por imensas portas de aço vulcânico, selando o acesso a todos.",
        type: "founding",
        era: "aqb"
    },
    {
        year: -90,
        date: null,
        title: "Frota de Guerra Enviada",
        description: "Uma enorme frota com 100 navios de guerra são enviados para as terras de Babel a fim de entender o que se passa na região.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -94 AQB
    {
        year: -94,
        date: null,
        title: "Metade do Zigurate Concluído",
        description: "Metade do Zigurate está concluído, olhos do exterior se apontam para a construção.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -98 AQB
    {
        year: -98,
        date: null,
        title: "Início da Construção do Zigurate",
        description: "Inicia-se a construção de um imponente zigurate na recém-nomeada Ilha de Babel. Os construtores são zumbis enfeitiçados pelo poder de Babel, trabalhando incansavelmente para erguer a colossal estrutura.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -99 AQB
    {
        year: -99,
        date: null,
        title: "Nomeação da Ilha de Babel",
        description: "A ilha ao noroeste de Ironforge é nomeada de Ilha de Babel.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -100 AQB
    {
        year: -100,
        date: null,
        title: "Despertar de Babel",
        description: "Babel desperta pela primeira vez, lançando o caos sobre o mundo. Uma vasta área é consumida pela terrível doença do sangue, ceifando a vida de centenas de pessoas e deixando vilas inteiras em ruínas. O mar, por enquanto, age como uma barreira protetora, impedindo a propagação da enfermidade, mas a região afetada fica completamente devastada.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -103 AQB
    {
        year: -103,
        date: null,
        title: "Nascimento de Eldegar III",
        description: "Nasce Eldegar (III), filho de Eldegar (II).",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -126 AQB
    {
        year: -126,
        date: null,
        title: "Nascimento de Huda",
        description: "Nasce Huda.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -127 AQB
    {
        year: -127,
        date: null,
        title: "Morte da Rainha Mariko e Rei Edgar",
        description: "Morre a Rainha Mariko e o Rei Edgar de causas naturais.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -128 AQB
    {
        year: -128,
        date: null,
        title: "Nascimento de Eldegar II",
        description: "Nasce Eldegar (II), filho de Eldegar (I).",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -151 AQB
    {
        year: -151,
        date: null,
        title: "Aventura do Ribeirão das Folhas",
        description: "Um grupo de aventureiros é chamado no Ribeirão das Folhas para ajudar o filho do lorde que teve sua filha petrificada. A missão era encontrar um ovo de dragão que poderia ajudar, mas os aventureiros descobriram que era ovo de cocatriz. Aventureiros: Lindinho, Florzinha, Docinho, Vector e Sssalazar.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -156 AQB
    {
        year: -156,
        date: null,
        title: "Nascimento de Tári Sindalin",
        description: "Nasce Tári Sindalin. Fruto da benção de um dito sacerdote da Deusa da Vida para que os Sindalin continuem a pesquisa.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -158 AQB
    {
        year: -158,
        date: null,
        title: "Nascimento dos Gêmeos Sindalin",
        description: "Nasce Galad Sindalin e Anna Sindalin, gêmeas de Melian Sindalin e o Lorde da Doença de Sangue disfarçado.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -167 AQB
    {
        year: -167,
        date: null,
        title: "Nascimento do Primeiro Rei Eldegar",
        description: "Nasce o Primeiro Rei Eldegar, filho de Mariko & Edgar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -168 AQB
    {
        year: -168,
        date: null,
        title: "Fim da Guerra Civil",
        description: "Fim da Guerra Civil no Continente de Eldegar.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -169 AQB
    {
        year: -169,
        date: null,
        title: "Assassinato de Meruem",
        description: "Morre Meruem assassinado por seu General Babel.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -170 AQB
    {
        year: -170,
        date: null,
        title: "Nascimento de Isidora Fritz",
        description: "Nasce Isidora Fritz.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -171 AQB
    {
        year: -171,
        date: null,
        title: "Casamento de Nectar e Isidora",
        description: "Casamento de Nectar Fritz e Isidora Moonstar.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -172 AQB
    {
        year: -172,
        date: null,
        title: "Libertação de Isidora",
        description: "Isidora Moonstar é libertada por Nectar Fritz.",
        type: "political",
        era: "aqb"
    },
    
    // ANO -173 AQB
    {
        year: -173,
        date: null,
        title: "Captura de Isidora",
        description: "Isidora Moonstar é capturada por Meruem e se mantém refém na cidade de Praven.",
        type: "political",
        era: "aqb"
    },
    {
        year: -173,
        date: null,
        title: "Nascimento de Calemorn Sindalin",
        description: "Calemorn Sindalin nasce já com um preço em cima das pesquisas dos Sindalin em seus filhos. Um homem dragão começa a pagar para a família continuar experimentando, desde que eles vendam Calemorn quando completar 125 anos.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -175 AQB
    {
        year: -175,
        date: null,
        title: "Nascimento de Orophin Sindalin",
        description: "Nasce Orophin Sindalin com a habilidade de aparentar a idade que deseja, fruto das manipulações de alma dos elfos Sindalin.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -176 AQB
    {
        year: -176,
        date: null,
        title: "Nascimento de Melian Sindalin",
        description: "Nasce Melian Sindalin, como segunda tentativa de manipulação da energia da alma por parte de Gilthoniel e Olwe Sindalin, mesmo sem sucesso com Lirael.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -178 AQB
    {
        year: -178,
        date: null,
        title: "Sindalin em Pillai",
        description: "Os renomados elfos Sindalin se deslocam de Cristaluna para Pillai realizar testes divino, arcanos e tecnológicos em Lirael Sindalin, seu primogênito. Alguns meses depois, ainda não haviam tido sucesso.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -189 AQB
    {
        year: -189,
        date: null,
        title: "Primeira Arma de Obsidiana Branca",
        description: "Primeira arma de obsidiana branca é forjada.",
        type: "discovery",
        era: "aqb"
    },
    
    // ANO -191 AQB
    {
        year: -191,
        date: null,
        title: "Início da Guerra Civil",
        description: "Início da guerra civil no continente de Eldegar.",
        type: "battle",
        era: "aqb"
    },
    
    // ANO -192 AQB
    {
        year: -192,
        date: null,
        title: "O Massacre de Stein",
        description: "Morte de Lorak Moonstar por Babel. O Massacre de Stein marca o primeiro sopro da Guerra dos Quatro. Na vila de Venshkar, Lorak Moonstar e seus soldados são atacados pelo Capitão Stein. Lorak derrota Stein em duelo, mas é assassinado dias depois pelo Capitão Babel na estrada para Eldegar. Essa foi a primeira gota de sangue da Guerra dos Quatro Tronos.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -193 AQB
    {
        year: -193,
        date: null,
        title: "Morte do Rei Ragnar",
        description: "Morre o Rei Ragnar aos 50 Anos de Idade.",
        type: "death",
        era: "aqb"
    },
    
    // ANO -207 AQB
    {
        year: -207,
        date: null,
        title: "Nascimento de Mariko",
        description: "Nasce Mariko filha do Rei Ragnar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -216 AQB
    {
        year: -216,
        date: null,
        title: "Nascimento de Isabeli",
        description: "Nasce Isabeli Filha de Ragnar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -218 AQB
    {
        year: -218,
        date: null,
        title: "Nascimento de Hyrian",
        description: "Nasce Hyrian Filho de Ragnar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -220 AQB
    {
        year: -220,
        date: null,
        title: "Nascimento de Mikhail",
        description: "Nasce Mikhail (O Maior herói de todos os tempos).",
        type: "birth",
        era: "aqb"
    },
    {
        year: -220,
        date: null,
        title: "Nascimento de Meruem",
        description: "Nasce Meruem Filho de Ragnar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -221 AQB
    {
        year: -221,
        date: null,
        title: "Nascimento de Isidora Moonstar",
        description: "Nasce Isidora Moonstar.",
        type: "birth",
        era: "aqb"
    },
    {
        year: -221,
        date: null,
        title: "Fundação da Primeira Grande Nação",
        description: "Surge a primeira grande nação de Eldegar.",
        type: "founding",
        era: "aqb"
    },
    
    // ANO -222 AQB
    {
        year: -222,
        date: null,
        title: "Nascimento de Nectar Fritz",
        description: "Nasce Nectar Fritz.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -233 AQB
    {
        year: -233,
        date: null,
        title: "Nascimento de Lorak Moonstar",
        description: "Nasce Lorak Moonstar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -241 AQB
    {
        year: -241,
        date: null,
        title: "Nascimento de Sel'Izee Fritz",
        description: "Nasce Sel'Izee Fritz.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -243 AQB
    {
        year: -243,
        date: null,
        title: "Nascimento de Ragnar",
        description: "Nasce Ragnar.",
        type: "birth",
        era: "aqb"
    },
    
    // ANO -310 AQB
    {
        year: -310,
        date: null,
        title: "Nascimento de Merlin",
        description: "Nasce quem viria se tornar Merlin.",
        type: "birth",
        era: "aqb"
    }
];

// Organizar eventos por era
function organizeEventsByEra() {
    // QB: Do mais recente (49) para o mais antigo (1) - ordem decrescente
    const qbEvents = timelineEvents.filter(e => e.era === 'qb').sort((a, b) => b.year - a.year);
    
    // AQB: Do mais próximo de zero (1AQB=-1QB) para o mais antigo (310AQB=-310QB)
    // Como os anos estão negativos no código, ordenamos de forma crescente (mais negativo = mais antigo)
    const aqbEvents = timelineEvents.filter(e => e.era === 'aqb').sort((a, b) => b.year - a.year);
    
    return { qbEvents, aqbEvents };
}

// Renderizar timeline
function renderTimeline(filter = 'all', searchTerm = '') {
    const { qbEvents, aqbEvents } = organizeEventsByEra();
    const container = document.getElementById('timeline-container');
    
    let html = '';
    
    // Era Pós-Queda de Babel
    html += renderEra('Era Pós-Queda de Babel (QB)', 
                      'Reconstrução e esperança após a queda de Babel', 
                      qbEvents, filter, searchTerm);
    
    // Ano Zero
    const ano0 = timelineEvents.find(e => e.year === 0);
    if (ano0 && shouldShowEvent(ano0, filter, searchTerm)) {
        html += `
            <div class="era-section">
                <div class="era-header" style="background: linear-gradient(135deg, #d32f2f, #c62828);">
                    <h2>⚔️ ANO ZERO - A QUEDA DE BABEL</h2>
                    <p class="era-description">O evento mais importante da história de Eldegar</p>
                </div>
                <div class="timeline">
                    ${renderEvent(ano0)}
                </div>
            </div>
        `;
    }
    
    // Era do Terror do Sangue
    html += renderEra('Era do Terror do Sangue', 
                      'Época sombria que antecedeu a Queda de Babel (-1QB a -310QB)', 
                      aqbEvents, filter, searchTerm, true);
    
    container.innerHTML = html;
    
    // Atualizar estatística
    const visibleEvents = timelineEvents.filter(e => shouldShowEvent(e, filter, searchTerm));
    document.getElementById('total-events').textContent = visibleEvents.length;
}

// Renderizar uma era
function renderEra(title, description, events, filter, searchTerm, isAQB = false) {
    const filteredEvents = events.filter(e => shouldShowEvent(e, filter, searchTerm));
    
    if (filteredEvents.length === 0) return '';
    
    let html = `
        <div class="era-section">
            <div class="era-header">
                <h2>${title}</h2>
                <p class="era-description">${description}</p>
                ${title.includes('Pós-Queda') ? '<span class="current-era-badge">ERA ATUAL</span>' : ''}
            </div>
            <div class="timeline">
    `;
    
    filteredEvents.forEach(event => {
        html += renderEvent(event, isAQB);
    });
    
    html += '</div></div>';
    return html;
}

// Renderizar um evento
function renderEvent(event, isAQB = false) {
    // Anos negativos mostram com o sinal: -58QB
    // Anos positivos mostram normal: 49QB
    const yearLabel = `${event.year}QB`;
    
    return `
        <div class="timeline-event" data-type="${event.type}">
            <span class="event-year">${yearLabel}</span>
            ${event.date ? `<div class="event-date">${event.date}</div>` : ''}
            <div class="event-title">${event.title}</div>
            <div class="event-description">${event.description}</div>
            <span class="event-type type-${event.type}">${getTypeLabel(event.type)}</span>
        </div>
    `;
}

// Verificar se deve mostrar evento
function shouldShowEvent(event, filter, searchTerm) {
    // Filtro por tipo
    if (filter !== 'all' && event.type !== filter) return false;
    
    // Filtro por busca
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const searchText = `${event.title} ${event.description}`.toLowerCase();
        if (!searchText.includes(term)) return false;
    }
    
    return true;
}

// Obter label do tipo
function getTypeLabel(type) {
    const labels = {
        'birth': 'Nascimento',
        'death': 'Morte',
        'battle': 'Batalha',
        'founding': 'Fundação',
        'discovery': 'Descoberta',
        'political': 'Político'
    };
    return labels[type] || type;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderTimeline();
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            const searchTerm = document.getElementById('search-input').value;
            renderTimeline(filter, searchTerm);
        });
    });
    
    // Busca
    document.getElementById('search-input').addEventListener('input', function() {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderTimeline(activeFilter, this.value);
    });
});
