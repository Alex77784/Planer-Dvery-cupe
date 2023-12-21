let blockFooterInfo = document.querySelector('.footer__info');
let blockFooterInner = document.querySelector('.footer__inner');
let navBox = document.querySelector('.footer__nav-box');
let blockFooterContact = document.querySelector('.footer__contacts');
let blockUserAgree = document.querySelector('.footer__user-agree-box');
let blockOwnerDitails = document.querySelector('.footer__owner-details-contain');
let mediaWidth992 = window.matchMedia('(max-width: 992px)');
let mediaWidth768 = window.matchMedia('(max-width: 768px)');


mediaWidth992.addEventListener('change', function () {
  if (mediaWidth992.matches) {
    blockOwnerDitails.append(blockFooterContact);
  } else {
    blockFooterInfo.after(blockFooterContact);
  }
})
if (mediaWidth992.matches) {
  blockOwnerDitails.append(blockFooterContact);
} else {
  blockFooterInfo.after(blockFooterContact);
}
//--------------------------------------

mediaWidth768.addEventListener('change', function () {
  if (mediaWidth768.matches) {
    navBox.append(blockUserAgree);
  } else {
    blockFooterInner.after(blockUserAgree);
  }
})
if (mediaWidth768.matches) {
  navBox.append(blockUserAgree);
} else {
  blockFooterInner.after(blockUserAgree);
}