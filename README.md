
# 🏋️ WeGoJim – AI-Powered Gym & Fitness Planner

**WeGoJim** is a React-based fitness app that combines exercise discovery with an **AI Workout Plan Generator**. Users can search workouts by body part, equipment, or name, and also generate full weekly plans using OpenAI via OpenRouter API.

---

## 🔥 Key Features

- 🔎 **Exercise Search** — by name, muscle group, or equipment  
- 🎥 **YouTube Integration** — watch tutorial videos for every exercise  
- 💡 **AI Workout Plan Generator** — get a full training + meal plan based on your goal  
- 📱 **Responsive UI** — optimized for both mobile and desktop  

---

## 🧠 AI Integration

The AI feature uses [OpenRouter](https://openrouter.ai) to connect with GPT models.

Inputs:
- Goal (e.g., fat loss, muscle gain)
- Equipment available
- Experience level
- Time per session
- Extra info (injuries, preferences, etc.)

Outputs:
- 🗓️ Weekly workout split  
- 🏋️ Daily exercises with sets/reps  
- 🔥 Warm-up & cool-down  
- 🥗 Meal suggestions  
- 💊 Supplement advice (optional)  
- 💬 Motivation tips  

---

## 🛠️ Tech Stack

- ⚛️ React + React Hooks  
- 🎨 Material UI  
- 📡 ExerciseDB API  
- 📺 YouTube API (via RapidAPI)  
- 🤖 OpenRouter API (GPT-3.5-turbo)  
- 🌐 Axios for HTTP requests  

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/Swayamcodes/wegojim.git

# Navigate to project directory
cd wegojim

# Install dependencies
npm install

# Create a .env file
touch .env
````

Inside `.env`, add:

```env
REACT_APP_OPENROUTER_KEY=your_openrouter_api_key
```

Then run:

```bash
npm start
```

Open: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Live Site

👉 [https://we-go-jim.netlify.app](https://we-go-jim.netlify.app)

---

## 📁 Folder Structure (Simplified)

```
src/
│
├── components/       # Reusable components like Navbar, HeroBanner, etc.
├── pages/            # Main pages (Home, ExerciseDetail)
├── ai/               # AI generator component (GeneratePlan.jsx)
├── assets/           # Static assets
└── App.js
```

---

## 🙌 Credits

* [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
* [YouTube API](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)
* [OpenRouter AI](https://openrouter.ai)

---

## 📄 License

MIT — for learning and open use. Build something great with it 🚀

```


