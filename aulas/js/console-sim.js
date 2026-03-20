(function() {
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;

    function createConsoleUI() {
        if (document.getElementById('console-output')) return;

        const container = document.createElement('div');
        container.id = 'console-output';
        
        const header = document.createElement('h2');
        header.textContent = 'Simulador de Console';
        header.style.color = '#fff';
        header.style.marginTop = '0';
        header.style.fontSize = '18px';
        header.style.borderBottom = '1px solid #444';
        header.style.paddingBottom = '10px';
        container.appendChild(header);

        document.body.appendChild(container);
    }

    function formatMessage(args) {
        return args.map(arg => {
            if (typeof arg === 'object') {
                try {
                    return JSON.stringify(arg, null, 2);
                } catch (e) {
                    return '[Object]';
                }
            }
            return String(arg);
        }).join(' ');
    }

    function appendToConsole(type, args) {
        createConsoleUI();
        const container = document.getElementById('console-output');
        
        const entry = document.createElement('div');
        entry.className = `log-entry`;

        const time = new Date().toLocaleTimeString();
        const timeSpan = document.createElement('span');
        timeSpan.className = 'log-time';
        timeSpan.textContent = `[${time}]`;

        const typeSpan = document.createElement('span');
        typeSpan.className = `log-type type-${type}`;
        typeSpan.textContent = type;

        const msgSpan = document.createElement('span');
        msgSpan.className = 'log-msg';
        msgSpan.textContent = formatMessage(args);

        entry.appendChild(timeSpan);
        entry.appendChild(typeSpan);
        entry.appendChild(msgSpan);
        
        container.appendChild(entry);
        container.scrollTop = container.scrollHeight;
    }

    console.log = function(...args) {
        originalLog.apply(console, args);
        appendToConsole('log', args);
    };

    console.warn = function(...args) {
        originalWarn.apply(console, args);
        appendToConsole('warn', args);
    };

    console.error = function(...args) {
        originalError.apply(console, args);
        appendToConsole('error', args);
    };

    // Auto-create on load
    window.addEventListener('DOMContentLoaded', createConsoleUI);
})();
