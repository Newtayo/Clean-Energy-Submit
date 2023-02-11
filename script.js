const keySpeaker = document.querySelector('.speakercontainer');
const button = document.querySelector('.menubtn');
const popup = document.querySelector('.popup');
const image = document.getElementById('menu');
const desktopspeaker = document.querySelector('.desktopspeaker');
const more = document.querySelector('.more');

button.addEventListener('click', () => {
  popup.classList.toggle('active');
  button.classList.toggle('active');
  image.classList.toggle('active');
});

// implementation of popup

// Dynamically generated content for keyspeaker section
const mobileSpeaker = [
  {
    title: 'Innocent Idibia',
    Post: ' Nigerian Musician and Advocate for clean energy',
    text: 'Award wining musician who is passionate about the global warming. He runs a foundation that trains children between the ages of 10-12years renewable energy technologies',
    image: 'image/Tuface.webp',
  },
  {
    title: 'Ms. Inger Andersen',
    Post: ' Executive Director of the United Nations Environment Programme',
    text: 'Before becoming Executive Director in 2019, Ms. Andersen was engaged in international development economics, environmental sustainability and policy-making for over 30 years.  She served as Director General of the International Union for Conservation of Nature from 2015 to 2019. ',
    image: 'image/Inger_Andersen.jpg',
  }];
const desktopSpeaker = [
  {
    title: 'Innocent Idibia',
    Post: ' Nigerian Musician and Advocate for clean energy',
    text: 'Award wining musician who is passionate about the global warming. He runs a foundation that trains children between the ages of 10-12years renewable energy technologies',
    image: 'image/Tuface.webp',
  },
  {
    title: 'Ms. Inger Andersen',
    Post: ' Executive Director of the United Nations Environment Programme',
    text: 'Before becoming Executive Director in 2019, Ms. Andersen was engaged in international development economics, environmental sustainability and policy-making for over 30 years.   ',
    image: 'image/Inger_Andersen.jpg',
  },
  {
    title: 'Engr. Abubakar D. Aliyu, FNSE',
    Post: ' Honorable Minister of Power Federal Republic of Nigeria',
    text: 'Experienced Minister with a demonstrated history of working in the government administration industry. Skilled in Engineering, Team Development, Human Resources, Infrastructure, and Teaching.',
    image: 'image/Minister of Power.jpg',
  },
  {
    title: 'Dr. Ibrahim Mayaki',
    Post: ' Chief Executive Officer of the African Union Development Agency (AUDA-NEPAD)',
    text: 'He was appointed to the position in January 2009. A former Prime Minister of Niger, from 1997 to 2000, ',
    image: 'image/Ibrahim-assane.jpg',
  },
  {
    title: 'Wael Sawan',
    Post: ' Chief Executive Officer Shell',
    text: ' he has served in critical roles including Vice President for Commercial, New Business and LNG in Qatar, Managing Director and Chairman of the Qatar Shell companies and Executive Vice President of Shell’s Deep Water business.',
    image: 'image/Shell CEO.jpg',
  },
  {
    title: 'kadri simson',
    Post: ' European commissioner for energy, European Union',
    text: 'Kadri Simson is the European commissioner for energy, She previously held the position of minister of economics affairs and infrastructure of the Republic of Estonia from 2016 to 2019.',
    image: 'image/kadri-simson.jpg',
  },
];
// Mobile Keyspeaker dynamic page
mobileSpeaker.forEach((mobile) => {
  const speakerCard = document.createElement('article');
  speakerCard.className = 'speaker-card';
  speakerCard.innerHTML = `<img class="speakerimg" src="${mobile.image}" alt ="${mobile.title}" />
<div class="speaker-detail">
        <h3> ${mobile.title}</h3>
        <h4 >${mobile.Post}</h4>
        <hr>
        <p>${mobile.text}</P>
     
      </div>`;
  keySpeaker.append(speakerCard);
});

desktopSpeaker.forEach((item) => {
  const desktopcarddetails = document.createElement('article');
  desktopcarddetails.className = 'desktopcarddetails';
  desktopcarddetails.innerHTML = `<img class="deskimg" src="${item.image}" alt="${item.title}" />
<div class="speakerdetail">
        <h3> ${item.title}</h3>
        <h4 >${item.Post}</h4>
        <hr>
        <p>${item.text}</P>
     
      </div>`;
  desktopspeaker.append(desktopcarddetails);
});

// handing popup
more.addEventListener('click', () => {
  const popWindow = document.createElement('div');

  popWindow.className = 'popclass';

  popWindow.innerHTML = ` 
    <button id= "remove"> <img src="image/Icon - Cancel.png"/ alt="cancel button"> </button>`;

  desktopSpeaker.forEach((mobile) => {
    const speakerCard = document.createElement('div');
    speakerCard.className = 'speaker-card';
    speakerCard.innerHTML = `<img class="speakerimg" src="${mobile.image}" alt="${mobile.title}"/>
    <div class="speaker-detail">
            <h3> ${mobile.title}</h3>
            <h4 >${mobile.Post}</h4>
            <hr>
            <p>${mobile.text}</P>
         
          </div>`;
    popWindow.append(speakerCard);
  });

  keySpeaker.append(popWindow);
  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', () => {
    keySpeaker.removeChild(popWindow);
  });
});