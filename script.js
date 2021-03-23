const nasaPUrl='https://api.nasa.gov/planetary/apod?api_key=zoFCvvLGj3VZwQNMnXplAjxXwPJc8r7ApprYSxKK';

document.addEventListener('DOMContentLoaded', function() {
    displayPotd(), fetchmarsUrl()
})

function displayPotd(){
    fetchpotddesc();
    fetchpotddate();
    fetchpotdtitle();
    fetchpotd();

    function fetchpotddesc(){
        fetch(nasaPUrl)
            .then (response => response.json())
            .then (data => document.getElementById("potd-desc").innerText=data.explanation)
        };    

    function fetchpotdtitle(){
        fetch(nasaPUrl)
            .then (response => response.json())
            .then (data => document.getElementById("potd-title").innerText=data.title)
        };

    function fetchpotddate(){
        fetch(nasaPUrl)
            .then (response => response.json())
            .then (data => document.getElementById("potd-date").innerText=data.date)      
        };

    function fetchpotd(){
        fetch(nasaPUrl)
         .then (response => response.json())
         .then (data => document.getElementById("potdimage").src = data.url)       
        };
}

const marsUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zoFCvvLGj3VZwQNMnXplAjxXwPJc8r7ApprYSxKK'

function fetchmarsUrl(){
    fetch(marsUrl)
        .then (response => response.json())
        .then (data => console.log(data))
    }; 

function displayMars(){
    
}