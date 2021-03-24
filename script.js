const nasaPUrl='https://api.nasa.gov/planetary/apod?api_key=zoFCvvLGj3VZwQNMnXplAjxXwPJc8r7ApprYSxKK';

document.addEventListener('DOMContentLoaded', function() {
    displayPotd()

})

function displayPotd(){
    fetch(nasaPUrl)
        .then (response => response.json())
        .then (data => {
            document.getElementById("potd-desc").innerText=data.explanation;
            document.getElementById("potd-title").innerText=data.title;
            document.getElementById("potd-date").innerText=data.date;
            document.getElementById("potdimage").src=data.url;
        })
}   

formsubmit.addEventListener('click', function(event){
    event.preventDefault()
    changeDate()
});   

function changeDate(input){
    fetch(nasaPUrl+'&date='+input.value)
        .then (response => response.json())
        .then (data => {
            document.getElementById("potd-desc").innerText=data.explanation;
            document.getElementById("potd-title").innerText=data.title;
            document.getElementById("potd-date").innerText=data.date;
            document.getElementById("potdimage").src=data.url;
        })
}  

// const marsUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zoFCvvLGj3VZwQNMnXplAjxXwPJc8r7ApprYSxKK'

// function fetchmarsUrl(){
//     fetch(marsUrl)
//         .then (response => response.json())
//         .then (data => console.log(data))
//     }; 

// function displaymarsData(){
//     displaymarsHeading();

//     function displaymarsHeading(){
//         document.getElementById("APOTD").innerText=("Mars Rover Photos")
        
//     }
// }