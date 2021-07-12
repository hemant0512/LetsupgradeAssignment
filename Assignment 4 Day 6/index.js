let cards = [
    {
        image: "https://static.wikia.nocookie.net/holy-world-war-fan-fiction-series/images/a/a1/Itachi_Uchiha.png/revision/latest/scale-to-width-down/250?	cb=20171115205823" , //Itachi Uchiha
        value: 1,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/holy-world-war-fan-fiction-series/images/a/a1/Itachi_Uchiha.png/revision/latest/scale-to-width-down/250?		cb=20171115205823",  //Itachi Uchiha
        value: 1,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170716092103", // Sasuke 	Uchiha 
        value: 2,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest/scale-to-width-down/300?cb=20170716092103", //Sasuke        Uchiha
        value: 2,
        status: "closed"
    },
    {
        image: "https://preview.redd.it/k6vvk45s5ml31.jpg?width=640&crop=smart&auto=webp&s=2656a19becd9388185bd8814eb1ae6269bd675e8", // Obito
        value: 3,
        status: "closed"
    },
    {
        image: "https://preview.redd.it/k6vvk45s5ml31.jpg?width=640&crop=smart&auto=webp&s=2656a19becd9388185bd8814eb1ae6269bd675e8", // Obito
        value: 3,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/naruto/images/4/4c/Shisui_Uchiha.png/revision/latest?cb=20140418091747", // Shishui
        value: 4,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/naruto/images/4/4c/Shisui_Uchiha.png/revision/latest?cb=20140418091747", // Shishui
        value: 4,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/naruto/images/b/b3/Madara%27s_Rinnegan.png/revision/latest?cb=20130725131804", // Madara
        value: 5,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/naruto/images/b/b3/Madara%27s_Rinnegan.png/revision/latest?cb=20130725131804", // Madara
        value: 5,
        status: "closed"
    }
]

// Shuffling algorithm.

for (let i=cards.length-1; i>=0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

// console.log(cards);

// Making the cards appear on the screen.

displayCards = (cards) => {
    let img_tag = "";

    for (let i=0; i<cards.length; i++) {
        img_tag += `<div class="card" style="background-image: url('${cards[i].image}')">
                    <div class="overlay ${cards[i].status}" onclick="open_cards(${i});"></div>
                    </div>\n`
    }
    document.getElementById("cards").innerHTML = img_tag;
}

displayCards(cards);

// Game Logic

let flag=0, val1=null, val2=null, score = 0;

open_cards = (index) => {
    cards[index].status = "opened";
    // card[index];
    displayCards(cards);
    if (flag === 0){
        val1 = cards[index].value;
        flag = 1;
    } else if (flag === 1){
        val2 = cards[index].value;
    
        if (val1 === val2){
            score++;
            document.getElementById("score").innerText = score;
            // alert("You WIN!!");
            val1 = val2 = null;
            flag = 0;
        } else {
            alert("Game Over!!");
            location.reload();
        }
    }
}
