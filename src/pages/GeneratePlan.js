import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";

const GeneratePlan = () => {
  const [goal, setGoal] = useState("");
  const [equipment, setEquipment] = useState("");
  const [time, setTime] = useState("");
  const [experience, setExperience] = useState("");
  const [extraInput, setExtrainput] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `You are a certified fitness and nutrition coach. Based on the following inputs, create a complete fitness plan:

Inputs:
- Goal: ${goal}
- Available Equipment: ${equipment}
- Workout Duration: ${time} minutes per session
- Experience Level: ${experience}
- Extra Info: ${extraInput}

Deliver:
1. 🗓️ Weekly workout schedule (Day-wise focus: eg. Push/Pull, Legs, etc.)
2. 🏋️ Daily workout details (exercises with sets & reps)
3. 🔥 Warm-up & cool-down for each session
4. 🥗 A simple daily meal plan (Breakfast, Lunch, Snack, Dinner) tailored to the goal
5. 💡 Optional: Supplement suggestions (if any)
6. 🧠 Motivation tip to wrap up

Tone: Friendly, practical, and structured like a coach would explain it.`;


    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a fitness coach AI assistant." },
            { role: "user", content: prompt },
          ],
          max_tokens: 1500,
          temperature: 0.7,
        }),
      });

      const data = await res.json();

      if (!data?.choices || !data.choices[0]?.message?.content) {
        throw new Error("No valid response from model");
      }

      setPlan(data.choices[0].message.content.trim());
    } catch (err) {
      console.error("❌ Request error:", err);
      setPlan("❌ Error generating plan. Check your API key or try again.");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 700,
        mx: "auto",
        mt: 6,
        backgroundColor: "#fff",
        borderRadius: 4,
        boxShadow: 6,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        color="#e53935"
      >
        AI Workout Generator 
      </Typography>

      <TextField
        label="Goal"
        fullWidth
        margin="normal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Available Equipment"
        fullWidth
        margin="normal"
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Time Per Session (minutes)"
        fullWidth
        margin="normal"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Experience Level (Beginner, Intermediate, etc.)"
        fullWidth
        margin="normal"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Extra Input"
        fullWidth
        margin="normal"
        value={extraInput}
        onChange={(e) => setExtrainput(e.target.value)}
        variant="outlined"
      />

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          py: 1.5,
          backgroundColor: "#e53935",
          "&:hover": {
            backgroundColor: "#d32f2f",
            boxShadow: "0 0 10px rgba(229, 57, 53, 0.5)",
          },
          fontWeight: "bold",
        }}
        onClick={handleGenerate}
      >
        Generate Plan
      </Button>

      {loading ? (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <CircularProgress sx={{ color: "#e53935" }} />
          <Typography variant="body2" mt={2}>
            Generating your custom plan...
          </Typography>
        </Box>
      ) : (
        plan && (
          <Paper
  elevation={3}
  sx={{
    mt: 4,
    p: 3,
    borderRadius: 3,
    backgroundColor: "#fbe9e7",
    color: "#4e342e",
    whiteSpace: "pre-wrap",
    fontFamily: "'Fira Code', monospace",
    fontWeight: "bold",
    fontSize: "0.95rem",
    maxHeight: "400px",
    overflowY: "auto",
  }}
>
  {plan}
</Paper>

        )
      )}
    </Box>
  );
};

export default GeneratePlan;
