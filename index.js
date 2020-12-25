const jokeContainer = document.getElementById('joke');

const setJoke = ({ joke }) => (jokeContainer.innerText = joke);

async function fetchData() {
  const json = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await json.json();
  setJoke(data);
}

fetchData();
