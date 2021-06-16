const goTopButton = () => {
  const goTopBtn = document.querySelector('.goTopBtn');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 860) {
      goTopBtn.style.display = 'block';
    } else {
      goTopBtn.style.display = 'none';
    }
  });

  goTopBtn.addEventListener('click', () => {
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    goTopBtn.style.display = 'none';
  });
};

export default goTopButton;
