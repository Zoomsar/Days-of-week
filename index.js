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
    console.log("Today is: ", today.toString());;
    let type = "a weekday";
    let adv = "its time to wrok blyat";
    let a1 = "images/nuu_spungbob.jpg";
    let musik = "audio/pink.mp3";

    if (day === 0 || day === 5 || day === 6) {
        type = "the weeknd";
        adv = "TIME TO PARTEYYY!!!!!!!";
        a1 = "images/Spungobb_yeaah.jpg";
        musik = "audio/volbeat.mp3";
    }

    res.render("index.ejs", {dayType: type, advice: adv, a1, musik});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}. XD`);
});

