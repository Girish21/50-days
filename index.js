const [twitter, youtube, facebook] = document.querySelectorAll('.counter');

async function updateTwitter() {
  for (let i = 0; i <= 1200; i++) {
    twitter.textContent = i;
    await new Promise((res) => setTimeout(res, 1));
  }
}

async function updateYoutube() {
  for (let i = 0; i <= 2200; i++) {
    youtube.textContent = i;
    await new Promise((res) => setTimeout(res, 1));
  }
}

async function updateFacebook() {
  for (let i = 0; i <= 700; i++) {
    facebook.textContent = i;
    await new Promise((res) => setTimeout(res, 1));
  }
}

(async function () {
  await Promise.all([updateTwitter(), updateYoutube(), updateFacebook()]);
})();
