const btn = document.getElementById('btn');  
const animeContainer = document.querySelector('.anime-container');
const animeImg = document.querySelector('.anime-img');
const animeName = document.querySelector('.anime-name');


async function getAnime(){
    try {
        btn.disabled = true;
        btn.innerHTML='Loading...';
        animeName.innerHTML='Updating...';
        animeImg.src = 'spinner.svg';
       const response = await fetch('https://api.catboys.com/img');
       const data = await response.json();
       btn.disabled = false;
       btn.innerHTML = 'Get Anime';
       animeContainer.style.display = 'block';
       animeImg.src = data.url;
       animeName.innerHTML = data.artist;
       console.log(data);
    } catch (error) {
        console.log(error);
        btn.disabled = false;
        btn.innerHTML = 'Get anime';
        animeName.innerHTML = 'An error occurred, try again later'
    }
}

btn.addEventListener('click', getAnime);