const accordion = function showAccordionPanelOnPanelClick() {
  const acc = document.getElementsByClassName('accordion');
  const buttonsAccordionArray = [...acc];

  buttonsAccordionArray.forEach((buttonAccordionElement) => {
    buttonAccordionElement.addEventListener('click', () => {
      const panel = buttonAccordionElement.nextElementSibling;

      if (panel.classList.contains('panel--inverted')) {
        panel.classList.remove('panel--inverted');
      } else {
        panel.classList.add('panel--inverted');
      }
    });
  });
};

export default accordion;
