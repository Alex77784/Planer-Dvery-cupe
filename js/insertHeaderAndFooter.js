let header = `
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a href="./index.html" class="header__logo">
          <img src="./images/header/logo.svg" alt="logo">
        </a>
        <a href="./index.html#map" class="header__address">
          г. Санкт-Петербург, пр. Елизарова, <br>
          дом 34/2 (лит.Л), 3 этаж, офис 346
        </a>
        <ul class="contacts-list">
          <li><a href="https://telegram.org/" target="_blank" class="contacts-list__link">
              <img src="./images/header/telegram.svg" alt="icon">
              <span class="contacts-list__mobile-hide">Telegram</span></a></li>
          <li><a href="https://wa.me/79006346886" target="_blank" class="contacts-list__link">
              <img src="./images/header/watsap.svg" alt="icon">
              <span class="contacts-list__mobile-hide">Whatsapp</span></a></li>
          <li><a href="tel:+78123469043" class="contacts-list__link">
              <img src="./images/header/phone.svg" alt="icon">
              <span class="contacts-list__mobile-hide phone-blue">+7 (812) 346 90 43</span>
            </a></li>
        </ul>
        <button data-modal class="header__btn">Обратный звонок</button>
      </div>
    </div>
    <!-- --------------------mobile block------------------ -->
    <div class="header-mobile box-nav-fixed">
      <div class="container">
        <nav class="box-nav-fixed__nav">
          <a href="./index.html">
            <img src="./images/header/mobil/home.svg" alt="home">
            Главная
          </a>
          <a href="./index.html#calculation">
            <img src="./images/header/mobil/calc.svg" alt="calc">
            Калькулятор
          </a>
          <a href="./index.html#door">
            <img src="./images/header/mobil/baggage.svg" alt="projects">
            Проекты
          </a>
          <a href="./index.html#map">
            <img src="./images/header/mobil/location.svg" alt="contacts">
            Контакты
          </a>
        </nav>
      </div>
    </div>
  </header>
`;
let footer = `
<footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__info">
            <div class="footer__nav-box">
              <div class="footer__box-title">
                <h5 class="footer__title-h5">Навигация по сайту</h5>
                <button class="spoller__btn-arrow footer__btn-spr"></button>
              </div>
              <ul class="footer__nav-list spoller__box-text">
                <li class="footer__nav-item">
                  <a href="./index.html#advan">Преимущества</a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#calculation">Калькулятор дверей-купе </a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#door">Наши работы</a>
                </li> 
                <li class="footer__nav-item">
                  <a href="./index.html#advantages">Почему мы</a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#reviews">Отзывы</a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#stages-of-work">Этапы работ</a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#door">Популярные модели</a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#questions">Частые вопросы</a>
                </li>
                <li class="footer__nav-item">
                  <a href="./index.html#map">Контакты</a>
                </li>
              </ul>
            </div>
            <div class="footer__owner-details-contain">
              <div class="footer__address-title">
                <img src="./images/footer/location-ftr.svg" alt="icon">
                <span>Адрес</span>
              </div>
              <p class="footer__address">г. Санкт-Петербург, пр. Елизарова, <br> дом 34/2 (лит.Л), 3 этаж, офис 346</p>

              <div class="footer__working-hours">
                <img src="./images/footer/o'cloc-ftr.svg" alt="icon">
                <span>Ежедневно 09:00 - 21:00</span>
              </div>
              <p class="footer__owner">ИП Беляев Михаил Владиславович <br> ОГРНИП/ИНН<br>
                308784725300048/781011963598
              </p>
            </div>
          </div>
          <div class="footer__contacts">
            <ul class="footer__list">
              <li><a href="tel:+78123469043">
                  <span">+7 (812) 346 90 43</span>
                </a>
              </li>
              <li>
                <button data-modal class="header__btn">Обратный звонок</button>
              </li>
              <li><a href="https://telegram.org/" target="_blank">
                  <img src="./images/header/telegram.svg" alt="icon">
                  <span>Telegram</span></a>
              </li>
              <li><a href="https://wa.me/79006346886" target="_blank">
                  <img src="./images/header/watsap.svg" alt="icon">
                  <span>Whatsapp</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__user-agree-box">
          <a href="./confidentially.htm">Политика конфиденциальности</a>
          <a href="./user-agree.htm">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
`;
let wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentHTML('afterbegin', header);
wrapper.insertAdjacentHTML('beforeend', footer);