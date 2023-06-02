var audio = new Audio("./Sounds/Winstrol.mp3");

window.addEventListener("load", function playMusic (){
    audio.play();
});
 
document.querySelectorAll(".menu-button")[0].addEventListener("click", function (){
    document.querySelector(".start").style.display = "none";
    document.querySelector(".single-player").style.visibility = "visible";

    function Player (health) {
        this.health = health;
    }

    function NPC (health) {
        this.health = health;
    }

    function display_npc(dmg) {
        document.getElementById("computer_Health").textContent = npc1.health + " -" + dmg;
        announce_winner();
    }

    function display_player(dmg) {
        document.getElementById("player1_Health").textContent = player1.health + " -" + dmg;
        announce_winner();
    }

    function critical_attack() {
        var crit_chance = Math.floor(Math.random() * 100) + 1;
        if(crit_chance <= 11) return basic_attack() * (Math.floor(Math.random() * 4) + 1);
        else return 20;
    }

    function basic_attack() {
        return Math.floor(Math.random() * 30) + 50;
    }

    function npc_attack(){
        var npc_choice = Math.floor(Math.random() * 2) + 1;
        var dmg;
        if(npc_choice == 1) {
            dmg = basic_attack();
            player1.health -= dmg;
        } else {
            dmg = critical_attack();
            player1.health -= dmg;
        }
        display_player(dmg);
        disable_npc();
        enable_player();
    }

    function player_1attack() {
        var dmg = basic_attack();
        npc1.health -= dmg;
        display_npc(dmg);
        disable_player();
        enable_npc();
    }

    function player_2attack() {
        var dmg = critical_attack();
        npc1.health -= dmg;
        display_npc(dmg);
        disable_player();
        enable_npc();
    }

    function disable_player() {
        document.getElementById("player_1attack").style.visibility = "hidden";
        document.getElementById("player_2attack").style.visibility = "hidden";
    }

    function enable_player() {
        document.getElementById("player_1attack").style.visibility = "visible";
        document.getElementById("player_2attack").style.visibility = "visible";
    }

    function disable_npc() {
        document.getElementById("npc_attack").style.visibility = "hidden";
    }

    function enable_npc() {
        document.getElementById("npc_attack").style.visibility = "visible";
    }
    
    var player1 = new Player(1000);
    var npc1 = new NPC(1000);

    disable_npc();
    document.getElementById("player_1attack").addEventListener("click", player_1attack);
    document.getElementById("player_2attack").addEventListener("click", player_2attack);
    document.getElementById("npc_attack").addEventListener("click", npc_attack);
    
    function announce_winner() {
        if(player1.health <= 0) {
            alert("You lose!");
            location.reload();
        } else if(npc1.health <= 0) {
            alert("You win!");
            location.reload();
        }
    }     
});


// document.querySelectorAll(".menu-button")[1].addEventListener("click", function (){
//     document.querySelector(".start").style.display = "none";
//     document.querySelector(".single-player").style.visibility = "visible";
// });


