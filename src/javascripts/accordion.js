const accordion = () => {
  const accordionBtn = document.querySelectorAll('.accordion');

  accordionBtn.forEach((buttonElement) => {
    buttonElement.addEventListener('click', () => {
      const panel = buttonElement.nextElementSibling;

      if (panel.classList.contains('panel--inverted')) {
        panel.classList.remove('panel--inverted');
      } else {
        panel.classList.add('panel--inverted');
      }
    });

    buttonElement.addEventListener('click', () => {
      buttonElement.classList.toggle('active');
    });
  });
};

export default accordion;
