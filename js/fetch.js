

export const songContainer = document.querySelector(".cardContainer");
export const songList = document.querySelector("#ul");
export const playSong = new Audio();

async function fetchData(folder) {
    fetch(`songs/${folder}/info.json`)
    .then(response => response.json())
    .then(data => {
        displaySongs(data, folder)
    })
}


function displaySongs(mydata, myfolder) {
    const card = document.createElement('div')
    card.classList.add("card");
    
    card.innerHTML = `
              <img src="songs/${myfolder}/${mydata.img}" alt="Playlist Cover Image">
            <h3>${mydata.title}</h3>
            <p>${mydata.description}</p>`


    songContainer.appendChild(card)
 
    card.addEventListener('click', e => {
        songList.innerHTML = ''
        for (let index = 0; index < mydata.songs.length; index++) {
            let li = document.createElement('li')
            li.classList.add("li")
            let songName = document.createElement('h3');
            songName.innerHTML = mydata.songs[index].title;
            let authorName = document.createElement('p');
            authorName.innerHTML = mydata.songs[index].author;
            li.innerHTML = `
            <div class='li-song-info'>
              ${songName.outerHTML}
              ${authorName.outerHTML}
            </div>
            `
            // li.appendChild(songName).appendChild(authorName)
            songList.appendChild(li)

            li.addEventListener('click', e => {
                let songPath = `songs/${myfolder}/${mydata.songs[index].song}`
                playSong.src = songPath;
                playSong.play();
            })


        }
    })
}


export {fetchData, displaySongs}