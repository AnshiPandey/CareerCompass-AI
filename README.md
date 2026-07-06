# 🚀 CareerCompass AI

An AI-powered career guidance platform that helps students and job seekers evaluate their resumes, identify skill gaps, and receive personalized career recommendations using **Google Gemini AI**.

Built with **Next.js**, **React**, **Firebase**, and **Google Gemini**, CareerCompass AI transforms a resume into actionable career insights, including ATS evaluation, learning roadmaps, and downloadable AI-generated reports.

🌐 **Live Demo:** https://career-compass-ai-delta.vercel.app/

---

## ✨ Features

- 📄 Resume Upload & PDF Parsing
- 🤖 AI-Powered Resume Analysis
- 📊 ATS Compatibility Score
- 🎯 Personalized Career Recommendations
- 🧩 Skill Gap Analysis
- 🛣️ AI-Generated Learning Roadmap
- 📑 Downloadable Career Report (PDF)
- 📚 Resume History Tracking
- 👤 User Profile Dashboard
- 🔐 Google Authentication
- 👨‍💼 Admin Analytics Dashboard

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | Firebase Authentication, Cloud Firestore |
| AI | Google Gemini API |
| Resume Processing | PDF Parse |
| Charts | Recharts |
| Deployment | Vercel |

---

## ⚙️ How It Works

```text
Login with Google
        ↓
Upload Resume (PDF)
        ↓
Extract Resume Content
        ↓
Google Gemini AI Analysis
        ↓
Generate ATS Score
        ↓
Identify Skill Gaps
        ↓
Recommend Career Path
        ↓
Create Learning Roadmap
        ↓
Generate AI Career Report
        ↓
Save Analysis to Firestore
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/careercompass-ai.git
cd careercompass-ai
```

### Install dependencies

```bash
npm install
```

### Create `.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

GEMINI_API_KEY=
```

### Run the application

```bash
npm run dev
```

Visit **http://localhost:3000**

---

## 📂 Project Structure

```
src/
├── app/
├── components/
├── context/
├── lib/
├── types/
├── hooks/
└── utils/
```

---

## 🎯 Future Improvements

- AI Mock Interviews
- Resume Builder
- Job Matching
- LinkedIn Profile Analysis
- Company-Specific ATS Optimization
- Learning Platform Integrations

---

## 👨‍💻 Developed By

**Anshi Pandey**

---

## 📄 License

This project was developed for educational and hackathon purposes.
