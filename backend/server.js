const express = require('express')
const cors = require('cors')

const app = express();
const PORT = 3000;
app.use(cors());

const jokes = [
    {
        id: 1, text: "Why do programmers hate nature? It has too many bugs."
    },
    { id: 2, text: "Why did the developer go broke? Because he used up all his cache." },
    {
        id: 3, text: "What's a programmer's favorite hangout place? The Foo Bar."
    },{
        id:4, text: "Woa! You are awesom."
    },{
        id: 5, text: "Look like alive!"
    }
]

app.get('/api/joke' , (req, res) =>{
    const index = Math.floor(Math.random() * jokes.length);
    const randomJokes = jokes[index];

    res.json({
        success: true,
        joke: randomJokes.text,
        id: randomJokes.id
    });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`📝 Test it: http://localhost:${PORT}/api/joke`);
});