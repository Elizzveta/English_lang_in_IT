


const buttons = document.querySelectorAll('button');
  let activeBlock = null;

  // Обработчик для всех кнопок
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = btn.getAttribute('data-index');
      const block = document.getElementById(`block-${index}`);
      const container = btn.closest('.cell-container');

      // закрываем, если блок уже открыт
      if (activeBlock && activeBlock !== block) {
        activeBlock.classList.remove('show');
      }

      // Текущий блок
      if (activeBlock === block) {
        block.classList.toggle('show');
        if (!block.classList.contains('show')) {
          activeBlock = null;
        }
      } else {
        block.classList.add('show');
        activeBlock = block;
      }
    });
  });

  // Клик вне таблицы закрывает активный блок
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.container') && activeBlock) {
      activeBlock.classList.remove('show');
      activeBlock = null;
    }
  });


