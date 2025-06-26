# AI Cost Optimization Platform

An intelligent web application that helps enterprises optimize their AI implementation costs and maximize ROI through structured analysis and personalized recommendations.

## 🚀 Overview

The AI Cost Optimization Platform guides companies through a comprehensive 4-step assessment to analyze their current AI usage, identify cost-saving opportunities, and provide actionable optimization strategies. Built with React, TypeScript, and Tailwind CSS, integrated with Lyzr Studio's AI agent for intelligent analysis.

## ✨ Features

- **Multi-step Assessment**: Structured evaluation covering company profile, AI usage, pain points, and objectives
- **Intelligent Analysis**: Powered by Lyzr Studio's GPT-4o-mini agent with specialized knowledge base
- **Personalized Recommendations**: Three-tier action plan (Quick Wins, Strategic Improvements, Long-term Optimization)
- **ROI Projections**: Detailed savings calculations and implementation timelines
- **Responsive Design**: Mobile-first design with modern UI/UX

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **AI Integration**: Lyzr Studio API
- **State Management**: React Hooks (useState, useReducer)
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── assessment/
│   │   ├── CompanyProfileStep.tsx
│   │   ├── AIUsageStep.tsx
│   │   ├── ProcessPainPointsStep.tsx
│   │   ├── ObjectivesStep.tsx
│   │   └── ResultsDashboard.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── LoadingSpinner.tsx
│       └── ProgressBar.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AssessmentPage.tsx
│   ├── AboutPage.tsx
│   ├── PricingPage.tsx
│   └── ContactPage.tsx
├── services/
│   └── analysisService.ts
├── utils/
│   ├── validation.ts
│   └── sanitization.ts
├── types/
│   └── index.ts
└── hooks/
    └── useAssessment.ts
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akshit-Soni/AI-Cost-Optimisation-Platform.git
   cd AI-Cost-Optimisation-Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   ```bash
   # Create .env file
   VITE_LYZR_API_KEY=your_lyzr_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🧠 Lyzr Studio Integration

### Agent Configuration
- **Agent ID**: `685a3aa4198302ed0da7ef5f`
- **Model**: OpenAI GPT-4o-mini
- **Knowledge Base**: 15 documents with cost optimization strategies
- **Retrieval**: MMR (Maximal Marginal Relevance)
- **Temperature**: 0.3 for consistent outputs

### API Endpoints
```typescript
// Base URL
const LYZR_API_BASE = 'https://agent-prod.studio.lyzr.ai/'

// Chat completion endpoint
POST /v3/chat/completions
Headers: {
  'Content-Type': 'application/json',
  'x-api-key': VITE_LYZR_API_KEY
}
```

### Request Format
```json
{
  "user_id": "user_timestamp",
  "agent_id": "685a3aa4198302ed0da7ef5f",
  "session_id": "session_timestamp",
  "message": "structured_assessment_data"
}
```

### Response Schema
```json
{
  "optimization_score": 1-10,
  "monthly_savings_min": number,
  "monthly_savings_max": number,
  "implementation_timeline": "1 month|3 months|6 months|12 months",
  "roi_percentage": number,
  "quick_wins": ["recommendation1", "recommendation2", "recommendation3"],
  "strategic_improvements": ["improvement1", "improvement2", "improvement3"],
  "long_term_optimization": ["optimization1", "optimization2", "optimization3"]
}
```

## 📊 Assessment Flow (Current)

### Step 1: Company Profile
- Company name and industry
- Size (employees) and revenue
- Technical team size

### Step 2: AI Usage
- Monthly AI spend ($0-$10,000+)
- Current tools (ChatGPT, Claude, Copilot, etc.)
- Maturity level and cost concerns

### Step 3: Process Pain Points
- Department with highest manual workload
- Most time-consuming processes
- Operational bottlenecks

### Step 4: Objectives
- Primary goals and timeline
- Success metrics priority

## 🎯 Development Status

### ✅ Completed
- React application structure
- Multi-step assessment form
- Lyzr Studio API integration
- Results dashboard with recommendations
- Responsive UI design
- TypeScript type definitions
- Error handling and loading states

### 🔄 Current Phase
- Multi-agent system expansion

### 🎯 Next Steps
- API endpoint optimization
- User experience refinements
- Performance monitoring
- Advanced analytics dashboard
- Production deployment preparation
- Enterprise features (custom branding, exports)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
```
VITE_LYZR_API_KEY=your_production_api_key
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Akshit Soni**
- GitHub: [@Akshit-Soni](https://github.com/Akshit-Soni)
- Project: [AI Cost Optimization Platform](https://github.com/Akshit-Soni/AI-Cost-Optimisation-Platform)

## 🙏 Acknowledgments

- **Lyzr Studio** for AI agent infrastructure
- **React Team** for the robust framework
- **Tailwind CSS** for utility-first styling
- **Vite** for lightning-fast development experience

---

*Built with ❤️ to help enterprises optimize their AI investments*
