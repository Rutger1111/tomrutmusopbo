const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")


const directionButtons = {
    "noord" : document.getElementById("knopNoord"),
    "oost" : document.getElementById("knopOost"),
    "zuid" : document.getElementById("knopZuid"),
    "west" : document.getElementById("knopWest"),
}

let current_index = 0; 

let lokaties =[
    {
        "titel":"plaats 0",
        "image":"img/0.jpg",
        "directions":{
            "zuid":1
        }

    },
    {
        "titel":"plaats 1",
        "image":"img/1.jpg",
        "directions":{
            "noord": 0,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "titel":"plaats 2",
        "image":"img/2.jpg",
        "directions":{
            "zuid": 3,
            "oost": 1,
        }
    },
    {
        "titel":"plaats 3",
        "image":"img/3.jpg",
        "directions":{
            "noord": 2,
        }
    },
    {
        "titel":"plaats 4",
        "image":"img/4.jpg",
        "directions":{
            "noord": 1,
        }
    },
    {
        "titel":"plaats 5",
        "image":"img/5.jpg",
        "directions":{
            "noord": 10,
            "west": 1,
            "oost": 6,
        }
    },
    {
        "titel":"plaats 6",
        "image":"img/6.jpg",
        "directions":{
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },
    {
        "titel":"plaats 7",
        "image":"img/7.jpg",
        "directions":{
            "noord": 9,
            "west": 6,
            "zuid": 8
        }
    },
    {
        "titel":"plaats 8",
        "image":"img/8.jpg",
        "directions":{
            "noord": 7
        } 
    },
    {
        "titel":"plaats 9",
        "image":"img/9.jpg",
        "directions":{
            "west": 10,
            "zuid": 7
        }
    },
    {
        "titel":"plaats 10",
        "image":"img/10.jpg",
        "directions":{
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "titel":"plaats 11",
        "image":"img/11.jpg",
        "directions":{
            "noord": 6
        }
    },
]


function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;
    updateDirections();
}

function updateDirections(){
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }


function getInput(){
    show(myInput.value);
        myInput.value= "";
        myInput.focus();
    
    
    }}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    console.log(punt_index);
    show(punt_index)

}
show(0);