console.log("Welcome To Spotify")

//Intialize the Variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songiteams = Array.from(document.getElementsByClassName('songIteam'));


let songs = [ 
   {songName: "Shape of You - Ed Shreen", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"}, 
   {songName: "Suzume No Tojimari - Anime Movie", filepath: "songs/1.mp3", coverPath: "covers/2.jpg"}, 
   {songName: "Dandalions", filepath: "songs/1.mp3", coverPath: "covers/3.jpg"}, 
   {songName: "Middle of The Night", filepath: "songs/1.mp3", coverPath: "covers/4.jpg"}, 
   {songName: "Beggin", filepath: "songs/1.mp3", coverPath: "covers/5.jpg"}, 
   {songName: "Attention- Charlie Puth", filepath: "songs/1.mp3", coverPath: "covers/6.jpg"}, 
   {songName: "On MY Way- Alan Walker", filepath: "songs/1.mp3", coverPath: "covers/7.jpg"}, 
   {songName: "Blank Space- Tylor Swift", filepath: "songs/1.mp3", coverPath: "covers/8.jpg"}, 
   {songName: "Stereo Hearts- Glee Club", filepath: "songs/1.mp3", coverPath: "covers/9.jpg"}, 
   {songName: "Unholy", filepath: "songs/1.mp3", coverPath: "covers/10.jpg"}, 

]

console.log(songs);
songiteams.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
  });

//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //upadate Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})