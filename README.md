## 🔥 Codeforces Visualizer

---

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://cfinsights.vercel.app/)  
*Explore your Codeforces journey in vivid detail—compare, analyze, and celebrate your progress!*

---

### ✨ What Is This?

**Codeforces Visualizer** is an elegant, responsive web app built for competitive programmers who want to:
- **Track** their contest and problem‑solving history
- **Analyze** strengths, weaknesses, and trends
- **Compare** head‑to‑head against friends or rivals  
All powered by the official Codeforces API (public endpoints only).

> **⚠️ Disclaimer:**  
> This is an *unofficial* tool. Not affiliated with or endorsed by Codeforces.

---

### 🚀 Key Advantages

- **⚡ Blazing Fast**  
  Uses `localStorage` caching and batched requests to minimize API calls and maximize responsiveness.

- **📊 Interactive Visuals**  
  Leverages Recharts for dynamic charts, heatmaps, and graphs that respond to user input in real time.

- **📱 Fully Responsive**  
  Crafted with Tailwind CSS to look great on desktops, tablets, and phones.

- **🔄 Real‑Time Updates**  
  Instant fetching of the latest submissions, ratings, and contest data on each load.

- **🚀 Instant Load Times**  
  Bundled with Vite for super-quick Cold Starts and hot module replacement during development.

---

### 🌟 Core Features

#### 🧑‍💻 Individual Profile Dashboard
- **Rating Trajectory**  
  - Current & peak ratings with global rank badges  
  - Interactive timeline graph of rating changes per contest
- **Activity Heatmap**  
  - Daily submission overview  
  - Drill down by verdict (Accepted, Wrong Answer, TLE, etc.)
- **Problem‑Solving Breakdown**  
  - Solved counts by problem difficulty  
  - Tag distribution and language usage pie charts

#### 🤝 Head‑to‑Head Comparison
- **Side‑by‑Side Stats**  
  - Quick‑glance cards for total solved, rating, max rank  
  - Overlaid rating progression charts for two handles
- **Deep Dive Analytics**  
  - Difficulty‑bucket comparison bars  
  - Tag‑wise solved counts rendered in dual histograms  
  - Contest Duel Table showing joint participation and standings

---
## 💡 Performance Optimizations

- **📦 Smart Caching**  
  API responses are stored in `localStorage` for 30 minutes—dramatically cutting duplicate requests and speeding up page loads.

- **🧠 Batched Data Fetching**  
  Consolidates multiple user queries into single API calls whenever possible, reducing network overhead.

- **⚡ Lazy‑Loaded Components**  
  Each chart and widget is dynamically imported to keep initial bundle sizes small and minimize UI blocking.

- **🧪 Submission Throttling**  
  Caps history to the most recent 2,000 submissions per user—striking a balance between rich analytics and optimal performance while respecting API quotas.

---

## 🛠️ Tech Stack & Tooling

### Frontend

- **React** ([react.dev](https://react.dev/)) — Component‑driven UI with hooks and context for state management.  
- **Vite** ([vitejs.dev](https://vitejs.dev/)) — Blazing‑fast dev server and build tool with hot module replacement.  
- **Tailwind CSS** ([tailwindcss.com](https://tailwindcss.com/)) — Utility‑first styling for rapid, consistent design.  
- **Recharts** ([recharts.org](https://recharts.org/)) — Composable charting library for interactive data visualizations.

### Dev & Deployment

- **pnpm** ([pnpm.io](https://pnpm.io/)) — Fast, efficient package manager to keep your node_modules lean.  
- **Vercel** ([vercel.com](https://vercel.com/)) — One‑click CI/CD, global CDN, and effortless scaling.  
- **Codeforces API** ([codeforces.com/api/help](https://codeforces.com/api/help)) — Authoritative source for user profiles, contests, and submissions.

---

## 📦 Installation & Local Development

### Prerequisites

Ensure you have the following installed on your system:

* **[Node.js](https://nodejs.org/)** (v16.x or higher recommended)
* **[pnpm](https://pnpm.io/installation)** (Preferred package manager)

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm
```

### 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/divyanshu-me/cfinsights.git
   cd cf-visualizer
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

   🎉 Your app will be running at `http://localhost:3000/`

### 📝 Available Scripts

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build locally
pnpm run lint         # Run ESLint for code quality
```

---

## 🤝 Contributing

Thank you for considering contributing! Whether you’re fixing a typo, adding a feature, or improving docs, your efforts make this project stronger and more welcoming to everyone.


### 🔄 How to Contribute

1. **🍴 Fork the Project**
2. **🌿 Create your Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **💾 Commit your Changes**

   ```bash
   git commit -m 'feat: Add some AmazingFeature'
   ```
4. **🚀 Push to the Branch**

   ```bash
   git push origin feature/AmazingFeature
   ```
5. **📬 Open a Pull Request**

### 📋 Contribution Guidelines

We welcome all contributions—big or small! To keep the project consistent and maintainable, please:

- **Adhere to Code Style**  
  Follow existing formatting, naming conventions, and ESLint rules.  

- **Write Descriptive Commits**  
  Use conventional commit prefixes (`feat:`, `fix:`, `docs:`, etc.) and clearly summarize your changes.  

- **Document Complex Logic**  
  Add inline comments or update documentation for non‑obvious algorithms and workflows.  

- **Include Tests**  
  - Write unit tests for new functionality or bug fixes  
  - Run `pnpm test` and ensure all tests pass before submitting  

- **Update Docs**  
  If you introduce or modify features, update the README, examples, and any in‑repo documentation.

---

### 🐛 Reporting Issues

Help us squash bugs and plan improvements by opening a detailed issue:

1. **Choose the Right Category**  
   - **Bug:** Unexpected behavior or errors  
   - **Feature Request:** New functionality or enhancements  

2. **Provide Context**  
   - **Description:** What happened, and why it’s a problem or improvement  
   - **Steps to Reproduce:** Exact steps or code snippets to trigger the issue  

3. **Outline Expected vs. Actual**  
   - **Expected:** What you thought should happen  
   - **Actual:** What actually occurred, including error messages or stack traces  

4. **Attach Supporting Materials**  
   - Screenshots or GIFs illustrating the issue  
   - Logs or console output, if applicable  

Please submit issues here:  
🔗 https://github.com/divyanshu-me/cfinsights/issues  


---

## 🙏 Acknowledgments

* **[Codeforces](https://codeforces.com/)** — for the powerful, public API that drives our data 
* **[Vercel](https://vercel.com/)** — for effortless deployments and global edge hosting 
* The entire **competitive programming community** — for your inspiration, feedback, and feature requests

---

## 👨‍💻 Author

**Divyanshu Kumar**

---

<div align="center">

**⭐️ If this tool helped you on your Codeforces journey, please give it a star on GitHub! ⭐️  **

Made with ❤️ for the global CP community.  

</div>

