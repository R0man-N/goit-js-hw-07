const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  // Очищення значення від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Перевірка на порожній рядок або рядок із пробілами
  const displayName = trimmedValue === '' ? 'Anonymous' : trimmedValue;

  // Підстановка імені в span
  nameOutput.textContent = displayName;
});
