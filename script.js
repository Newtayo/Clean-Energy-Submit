const keySpeaker = document.querySelector('.speakercontainer')
const button = document.querySelector('.menubtn')
const popup = document.querySelector('.popup')
const image = document.getElementById('menu')

button.addEventListener('click', () => {
    popup.classList.toggle('active');
    button.classList.toggle('active');
    image.classList.toggle('active');
  });

// implementation of popup 

// Dynamically generated content for keyspeaker section
const mobileSpeaker =  [
    {
      title: 'Prof Rice Smith',
      Post: ' Head of Department Mechanical Engineering University of Rice',
      text: `He is a professor of Mechanical Engineering from Rice University Texas.
      He has over 30years of experience in Reneweable Energy`,
      image: 'image/Prof.jpg',
    },
    {
        title: 'Dr Stella Amaadi',
        Post: ' Head of Department Electrical Engineering University of Sunderland',
        text: `She is a professor of Electrical Engineering from  University of Sunderland.
        Shee has over 20years of experience in Reneweable Energy`,
        image: 'image/Dr.jpg',
    }]

mobileSpeaker.forEach((mobile) =>{
    const speakerCard = document.createElement('div');
speakerCard.className = 'speaker-card';
speakerCard.innerHTML = `<img class="speakerimg" src="${mobile.image}" />
<div class="speaker-detail">
        <h3> ${mobile.title}</h2>
        <h4 >${mobile.Post}</h4>
        <hr>
        <p>${mobile.text}</P>
     
      </div>`
keySpeaker.append(speakerCard);

});





