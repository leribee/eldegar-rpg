// Configuração do Calendário de Eldegar
const MONTHS = [
    "Primeiro Mês",
    "Segundo Mês",
    "Terceiro Mês",
    "Quarto Mês",
    "Quinto Mês",
    "Sexto Mês",
    "Sétimo Mês",
    "Oitavo Mês",
    "Nono Mês",
    "Décimo Mês",
    "Décimo Primeiro Mês",
    "Décimo Segundo Mês",
    "Décimo Terceiro Mês"
];

const DAYS_PER_MONTH = 30;
const MONTHS_PER_YEAR = 13;

// Estado atual
let currentMonth = 0;
let currentYear = 1;

// EVENTOS - EDITE AQUI PARA ADICIONAR NOVOS EVENTOS
// Formato: { month: 0-12, day: 1-30, type: 'festival'|'historical'|'birthday', title: '', description: '', city: '', table: '' }
const events = [
    // Exemplos de eventos
    {
        month: 0,
        day: 1,
        type: 'historical',
        title: 'Ano Novo de Eldegar',
        description: 'Início do novo ciclo anual. Celebrado em todas as cidades.',
        city: 'Todas',
        table: 'Geral'
    },
    {
        month: 0,
        day: 15,
        type: 'festival',
        title: 'Festival da Primavera',
        description: 'Grande celebração do renascimento da natureza.',
        city: 'Capital de Eldegar',
        table: 'Mesa 1'
    },
    {
        month: 1,
        day: 20,
        type: 'birthday',
        title: 'Aniversário de [Personagem]',
        description: 'Nascimento do herói [Nome].',
        city: 'Vila do Norte',
        table: 'Mesa 1'
    },
    {
        month: 3,
        day: 10,
        type: 'historical',
        title: 'Grande Batalha',
        description: 'A batalha que definiu o destino do reino.',
        city: 'Planícies de Guerra',
        table: 'Mesa 2'
    }
    // ADICIONE MAIS EVENTOS AQUI
];

// ESTAÇÕES - Define quando cada estação começa
const seasons = [
    { name: 'Primavera', icon: '🌸', startMonth: 0 },
    { name: 'Verão', icon: '☀️', startMonth: 3 },
    { name: 'Outono', icon: '🍂', startMonth: 6 },
    { name: 'Inverno', icon: '❄️', startMonth: 9 }
];

// FASES DA LUA - Ciclo de 30 dias
function getMoonPhase(day) {
    const phase = day % 30;
    if (phase >= 0 && phase < 7) return '🌑';
    if (phase >= 7 && phase < 15) return '🌓';
    if (phase >= 15 && phase < 22) return '🌕';
    return '🌗';
}

// Função para obter a estação atual
function getCurrentSeason(month) {
    for (let i = seasons.length - 1; i >= 0; i--) {
        if (month >= seasons[i].startMonth) {
            return seasons[i];
        }
    }
    return seasons[0];
}

// Função para obter eventos de um dia específico
function getEventsForDay(month, day) {
    return events.filter(e => e.month === month && e.day === day);
}

// Função para renderizar o calendário
function renderCalendar() {
    const daysGrid = document.querySelector('.days-grid');
    const monthName = document.getElementById('month-name');
    const currentMonthYear = document.getElementById('current-month-year');
    
    // Atualizar título
    monthName.textContent = MONTHS[currentMonth];
    currentMonthYear.textContent = `${MONTHS[currentMonth]} - Ano ${currentYear}`;
    
    // Limpar grade
    daysGrid.innerHTML = '';
    
    // Obter estação atual
    const season = getCurrentSeason(currentMonth);
    
    // Criar células para cada dia
    for (let day = 1; day <= DAYS_PER_MONTH; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        
        const dayEvents = getEventsForDay(currentMonth, day);
        if (dayEvents.length > 0) {
            dayCell.classList.add('has-event');
        }
        
        // Número do dia
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        dayCell.appendChild(dayNumber);
        
        // Fase da lua
        const moonPhase = document.createElement('div');
        moonPhase.className = 'moon-phase';
        moonPhase.textContent = getMoonPhase(day);
        dayCell.appendChild(moonPhase);
        
        // Indicador de eventos
        if (dayEvents.length > 0) {
            const eventIndicator = document.createElement('div');
            eventIndicator.className = 'day-events';
            const icons = dayEvents.map(e => {
                if (e.type === 'festival') return '🎭';
                if (e.type === 'historical') return '⚔️';
                if (e.type === 'birthday') return '🎂';
                return '📌';
            }).join('');
            eventIndicator.textContent = icons;
            dayCell.appendChild(eventIndicator);
        }
        
        // Adicionar evento de clique
        dayCell.onclick = () => showDayDetails(currentMonth, day);
        
        daysGrid.appendChild(dayCell);
    }
    
    // Renderizar eventos do mês
    renderMonthEvents();
}

// Função para mostrar detalhes de um dia
function showDayDetails(month, day) {
    const dayEvents = getEventsForDay(month, day);
    
    if (dayEvents.length === 0) {
        alert(`${MONTHS[month]} - Dia ${day}\nNenhum evento registrado.`);
        return;
    }
    
    let message = `${MONTHS[month]} - Dia ${day}\n\n`;
    dayEvents.forEach(event => {
        message += `${getEventIcon(event.type)} ${event.title}\n`;
        message += `${event.description}\n`;
        if (event.city) message += `Local: ${event.city}\n`;
        if (event.table) message += `Mesa: ${event.table}\n`;
        message += '\n';
    });
    
    alert(message);
}

// Função auxiliar para obter ícone do evento
function getEventIcon(type) {
    const icons = {
        'festival': '🎭',
        'historical': '⚔️',
        'birthday': '🎂'
    };
    return icons[type] || '📌';
}

// Função para renderizar lista de eventos do mês
function renderMonthEvents() {
    const monthEventsDiv = document.getElementById('month-events');
    const monthEvents = events.filter(e => e.month === currentMonth);
    
    if (monthEvents.length === 0) {
        monthEventsDiv.innerHTML = '<p>Nenhum evento especial este mês.</p>';
        return;
    }
    
    // Ordenar por dia
    monthEvents.sort((a, b) => a.day - b.day);
    
    let html = '<div style="display: grid; gap: 1rem;">';
    monthEvents.forEach(event => {
        html += `
            <div style="padding: 1rem; background: var(--light-bg); border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <strong style="color: var(--primary-color);">
                            ${getEventIcon(event.type)} Dia ${event.day} - ${event.title}
                        </strong>
                        <p style="margin: 0.5rem 0;">${event.description}</p>
                        <div style="font-size: 0.9rem; color: #666;">
                            ${event.city ? `📍 ${event.city}` : ''} 
                            ${event.table ? `| 🎲 ${event.table}` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    monthEventsDiv.innerHTML = html;
}

// Funções de navegação
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = MONTHS_PER_YEAR - 1;
        currentYear--;
        if (currentYear < 1) currentYear = 1; // Não permite ano menor que 1
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth >= MONTHS_PER_YEAR) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

// Inicializar calendário quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    renderCalendar();
});
