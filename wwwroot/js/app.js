function displayResult(elementId, value, useHtml = false) {
    const resultElement = document.getElementById(elementId);
    const valueElement = resultElement.querySelector('.result-value');
    
    if (useHtml) {
        valueElement.innerHTML = value;
    } else {
        valueElement.textContent = value;
    }
}

function handleError(elementId, error) {
    console.error('API Error:', error);
    const statusCode = error.message.includes('HTTP') ? error.message : 'Network error';
    displayResult(elementId, `Request failed: ${statusCode}`);
}

async function getRandomNumber() {
    try {
        const response = await fetch('/api/random');
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        
        const number = await response.text();
        displayResult('random-result', number);
    } catch (error) {
        handleError('random-result', error);
    }
}

async function getGreeting() {
    const name = document.getElementById('name-input').value.trim();
    
    if (!name) {
        displayResult('greet-result', 'Name is required');
        return;
    }
    
    try {
        const response = await fetch(`/api/greet/${encodeURIComponent(name)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        
        const greeting = await response.text();
        displayResult('greet-result', greeting);
    } catch (error) {
        handleError('greet-result', error);
    }
}

async function calculateSum() {
    const a = document.getElementById('num-a').value;
    const b = document.getElementById('num-b').value;
    
    if (!a || !b) {
        displayResult('add-result', 'Both numbers are required');
        return;
    }
    
    if (isNaN(a) || isNaN(b)) {
        displayResult('add-result', 'Invalid number format');
        return;
    }
    
    try {
        const response = await fetch(`/api/add/${encodeURIComponent(a)}/${encodeURIComponent(b)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        
        const result = await response.text();
        displayResult('add-result', result);
    } catch (error) {
        handleError('add-result', error);
    }
}

async function getApiInfo() {
    try {
        const response = await fetch('/api/info');
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        
        const info = await response.text();
        displayResult('info-result', info);
    } catch (error) {
        handleError('info-result', error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    getRandomNumber();
});
