let boxContacts = document.querySelector('.contacts__box');
let blockMassege = document.querySelector('.contacts__list');
let boxDiscr = document.querySelector('.contacts__discr');

if (mediaWidth1180.matches) {
  boxContacts.append(blockMassege);
} else {
  boxDiscr.prepend(blockMassege);
}

mediaWidth1180.addEventListener('change', function () {
  if (mediaWidth1180.matches) {
    boxContacts.append(blockMassege);
  } else {
    boxDiscr.prepend(blockMassege);
  }
})