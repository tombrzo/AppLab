// License
// Copyright (c) 2017 Ken Wheeler
// Licensed under the MIT license.

// https://github.com/kenwheeler/slick/

// const slider = function moveImagesInSlider() {
//   $(() => {
//     $('.lazy').slick({
//       lazyLoad: 'ondemand',
//     });
//   });
// };


import jQuery from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { $ } = window;
window.$ = window.jQuery;
window.jQuery = jQuery;

const slider = function moveImagesInSlider() {
  $(document).ready(() => {
    $('.lazy').slick();
  });
};

export default slider;
