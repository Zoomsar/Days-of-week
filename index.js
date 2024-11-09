import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

// Helper to get __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();
    const currentYear = today.getFullYear();
    // console.log(day);
    let type, adv, pic, musik;

    const musicMonday = [
        "audio/pink.mp3", 
        "audio/AIC.mp3",
        "audio/ComfoNumb.mp3"
    ];
    const musicTuesday = [
        "audio/IGOR.mp3",
        "audio/MakeItWitChu.mp3",
        "audio/Swimmin.mp3"
    ];
    const musicWednesday = [
        "audio/Fascination.mp3",
        "audio/WithYou.mp3",
        "audio/RH.mp3"
    ];
    const musicThursday = [
        "audio/NoMoreSorrow.mp3",
        "audio/TakeMeToHo.mp3",
        "audio/Rollin.mp3"
    ];
    const musicFriday = [
        "audio/FridayCure.mp3",
        "audio/Kaisarion.mp3",
        "audio/volbeat.mp3"
    ];
    const musicSaturday = [
        "audio/ADHD.mp3",
        "audio/Getlucky.mp3",
        "audio/Suit.mp3"
    ];
    const musicSunday = [
        "audio/Arctic.mp3",
        "audio/Doors.mp3",
        "audio/Sunday_Blur.mp3"
    ];

    if (day === 1) {
        type = "Rise and shine sailors, it be monday!";
        adv = "Good luck!";
        pic = "images/monda.png";
        musik = musicMonday[Math.floor(Math.random() * musicMonday.length)];
    } else if (day === 2) {
        type = "Its chewsday init";
        adv = "...";
        pic = "images/chewsday.png";
        musik = musicTuesday[Math.floor(Math.random() * musicTuesday.length)];
    } else if (day === 3) {
        type = "Wat do wensday be";
        adv = "ughhhhh";
        pic = "images/wensday.png";
        musik = musicWednesday[Math.floor(Math.random() * musicWednesday.length)];
    } else if (day === 4) {
        type = "Its chursday!";
        adv = "Ong almost there";
        pic = "images/chursday.jpg";
        musik = musicThursday[Math.floor(Math.random() * musicThursday.length)];
    } else if (day === 5) {
        type = "Iz friday";
        adv = "TIME TO PARTEYYY!!!!!!!";
        pic = "images/Spungobb_yeaah.jpg";
        musik = musicFriday[Math.floor(Math.random() * musicFriday.length)];
    } else if (day === 6) {
        type = "Happy Saturday!";
        adv = "Time to grind!";
        pic = "images/Spungobb_yeaah.jpg";
        musik = musicSaturday[Math.floor(Math.random() * musicSaturday.length)];
    } else if (day === 0) {
        type = "It be sunday sunday";
        adv = "Take it eze";
        pic = "images/sunday.png";
        musik = musicSunday[Math.floor(Math.random() * musicSunday.length)];
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
        pic,
        musik,
        year: currentYear});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}. XD`);
});

