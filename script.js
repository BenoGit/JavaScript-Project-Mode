const nasaPUrl='https://api.nasa.gov/planetary/apod?api_key=zoFCvvLGj3VZwQNMnXplAjxXwPJc8r7ApprYSxKK';

document.addEventListener('DOMContentLoaded', function() {
    displayPotd()

});

function displayPotd(){
    fetch(nasaPUrl)
        .then (response => response.json())
        .then (data => {
            document.getElementById("potd-desc").innerText=data.explanation;
            document.getElementById("potd-title").innerText=data.title;
            document.getElementById("potd-date").innerText=data.date;
            document.getElementById("potdimage").src=data.url;
        
        })
};  

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

const marsUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zoFCvvLGj3VZwQNMnXplAjxXwPJc8r7ApprYSxKK'

let index= 0
 
function displaymarsData(){
    fetch(marsUrl)
    .then (response => response.json())
    .then (data => {
        console.log(data);
        document.getElementById("potd-date").style.backgroundColor="red";document.getElementById("potd-title").style.backgroundColor="red";document.querySelector("#potdh").style.backgroundColor="red";document.getElementById("APOTD").style.backgroundColor="red";document.querySelector("div.potd-title").style.backgroundColor="red";document.querySelector("div.potd-date").style.backgroundColor="red";document.querySelector("h2").style.backgroundColor="red";document.getElementById("POTD").style.color="red";document.getElementById("MRP").style.color="red";document.getElementById("dateform").style.visibility="hidden";document.getElementById("prev").style.visibility="visible";document.getElementById("next").style.visibility="visible";
        document.getElementById("potd-date").innerText="Date of Photo: "+data.photos[index].earth_date;
        document.getElementById("APOTD").innerText=("Mars Rover Photos");
        document.getElementById("potd-desc").innerHTML=data.photos[index].camera.name+":"+" "+data.photos[index].camera.full_name+"<br>"+"Launch Date:"+" "+data.photos[index].rover.launch_date+"<br>"+"Landing Date:"+" "+data.photos[index].rover.landing_date;
        document.getElementById("potd-title").innerText=data.photos[index].rover.name+(" Rover");
        document.getElementById("potdimage").src=data.photos[index].img_src;
        
    })
} 

function next(){
    index++;
    displaymarsData();
    console.log(index);
}

function prev(){
    index--;
    displaymarsData();
    console.log(index);
}