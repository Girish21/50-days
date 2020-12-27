const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsTexts = document.querySelectorAll('.animated-bg-text');

function setData() {
  header.innerHTML = `
    <img
      src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="Background"
    />
  `;

  title.innerHTML = 'Lorem ipsum dolor sit amet.';

  excerpt.innerHTML =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, iusto?';

  profileImg.innerHTML = `
    <img
      src="https://randomuser.me/api/portraits/men/45.jpg"
      alt="avatar"
    />
  `;

  nameEl.innerHTML = 'John';

  date.innerHTML = 'Dec 27, 2020';

  animatedBgs.forEach((el) => el.classList.remove('animated-bg'));
  animatedBgsTexts.forEach((el) => el.classList.remove('animated-bg-text'));
}

setTimeout(setData, 2000);
