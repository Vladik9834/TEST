// Ініціалізуємо кількість голосів для кожного варіанту
let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    Cplusplus: 0
};

// Функція для обробки голосування
function submitSurvey() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        // Збільшуємо кількість голосів для обраного варіанту
        votes[selectedOption.value]++;
        
        // Оновлюємо результати
        updateResults();
        
        // Показуємо результати та приховуємо опитування
        document.getElementById('survey').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else {
        alert("Будь ласка, оберіть варіант.");
    }
}

// Функція для оновлення результатів на сторінці
function updateResults() {
    document.getElementById('jsVotes').textContent = votes.JavaScript;
    document.getElementById('pythonVotes').textContent = votes.Python;
    document.getElementById('javaVotes').textContent = votes.Java;
    document.getElementById('cppVotes').textContent = votes.Cplusplus;
}

// Функція для скидання опитування
function resetSurvey() {
    document.getElementById('survey').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.querySelector('input[name="option"]:checked').checked = false;
}
