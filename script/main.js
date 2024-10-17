document.addEventListener('click', function(event) {
    // Проверяем, кликнули ли мы по элементу с классом 'copyDiv'
    if (event.target.classList.contains('title__list-item-cord')) {
        const tempInput = document.createElement('input');
        tempInput.value = event.target.innerText; // Получаем текст из div
        document.body.appendChild(tempInput); // Добавляем элемент в body

        // Выделяем текст в элементе
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Для мобильных устройств

        // Копируем текст в буфер обмена
        document.execCommand('copy');

        // Удаляем временный элемент
        document.body.removeChild(tempInput);

        // Уведомление о том, что текст скопирован
        console.log('Содержимое скопировано: ' + tempInput.value);
    }
});


// Функция для сохранения состояния чекбоксов в localStorage
function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('.myCheckBox');
    checkboxes.forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

// Функция для восстановления состояния чекбоксов из localStorage
function loadCheckboxState() {
    const checkboxes = document.querySelectorAll('.myCheckBox');
    checkboxes.forEach(checkbox => {
        const checked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = checked;
    });
}

// Восстанавливаем состояние при загрузке страницы
document.addEventListener('DOMContentLoaded', loadCheckboxState);

// Добавляем обработчик событий для каждого чекбокса
const checkboxes = document.querySelectorAll('.myCheckBox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
});