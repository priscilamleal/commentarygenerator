# ⚽ Football Commentary Generator

A randomized sports commentary generator built with JavaScript. Every time you run the program, you get a unique, dramatic football commentary line — just like a real match broadcast!

## 📺 Example Output

```
Player #23 curls it into the top corner — VAR cannot take this one away! — The away fans are stunned into silence!
Player #7 pulls off a stunning bicycle kick — GOLAZOOO! — The ultras are going absolutely mental!
Player #81 saves a last-minute penalty — Absolutely sensational! — Tears in the stands — this means everything!
```

## 🛠️ How It Works

The program randomly combines **4 pieces of data** to generate a unique commentary line each time:

1. **Player number** — a random number between 1 and 99
2. **Play** — a random action from a list of football plays
3. **Announcer phrase** — a random dramatic commentary line
4. **Crowd reaction** — a random crowd response

## 📁 Project Structure

```
commentary-generator/
│
└── index.js       # Main program file
```

## 🚀 How to Run

Make sure you have [Node.js](https://nodejs.org) installed, then run:

```bash
node index.js
```

Run it multiple times to get different commentary lines each time!

## 💡 Concepts Used

- Arrays
- Functions with generic parameters
- `Math.random()` and `Math.floor()` for randomization
- Template literals for string formatting

## 🔧 Customization

You can easily add more variety by expanding any of the arrays in `index.js`:
- Add more plays to the `plays` array
- Add more phrases to the `announcer` array
- Add more reactions to the `crowd` array
