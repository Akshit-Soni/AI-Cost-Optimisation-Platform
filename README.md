# AI Cost Optimisation Platform

A streamlined web application that helps organizations optimize their AI investments through intelligent analysis and personalized recommendations using the CostOptimisorAdvisor LLM via Lyzr Studio API.

## 🎯 Overview

This platform provides a focused assessment tool that analyzes current AI usage patterns, identifies cost-saving opportunities, and generates actionable strategies to reduce AI spending while improving operational efficiency. The system uses a single specialized LLM Agent (CostOptimisorAdvisor) to deliver personalized optimization reports.

## ✨ Features

- **4-Step Assessment Process**: Comprehensive evaluation covering company profile, AI usage, pain points, and objectives
- **Multiple Pain Points Support**: Add and manage multiple operational challenges for detailed analysis
- **Intelligent Analysis**: Powered by CostOptimisorAdvisor LLM via Lyzr Studio API
- **Personalized Reports**: Custom recommendations with optimization scores, savings projections, and implementation timelines
- **Robust Fallback System**: Intelligent mock analysis when API services are unavailable
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Data Export**: Download comprehensive reports in JSON format

## 🛠️ Technology Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **AI Integration**: Lyzr Studio API with CostOptimisorAdvisor LLM
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-cost-optimization-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your Lyzr API key:
   ```env
   VITE_LYZR_API_KEY=your_lyzr_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📖 Usage

### Assessment Flow

1. **Company Profile**: Enter company details (name, industry, size, revenue, technical team size)
2. **AI Usage**: Specify current AI tools, monthly spending, and maturity level
3. **Pain Points**: Add multiple operational challenges with department, process, and description details
4. **Objectives**: Define primary goals, timeline, and success metrics
5. **Results**: View personalized optimization report with actionable recommendations

### API Integration

The application integrates with Lyzr Studio API using the CostOptimisorAdvisor LLM:

```typescript
// API Configuration
const apiEndpoint = 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/'
const agentId = '685a3aa4198302ed0da7ef5f' // CostOptimisorAdvisor
```

### Data Structure

```typescript
interface AssessmentData {
  companyName: string;
  industry: string;
  companySize: string;
  annualRevenue: string;
  technicalTeamSize: string;
  monthlyAiSpend: number;
  currentAiTools: string[];
  aiMaturityLevel: string;
  biggestAiCostConcern: string;
  departmentWithHighestWorkload: string;
  painPoints: PainPoint[];
  primaryGoal: string;
  targetTimeline: string;
  successMetricPriority: string;
}

interface PainPoint {
  id: string;
  department: string;
  process: string;
  description: string;
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Assessment/          # Assessment flow components
│   │   ├── CompanyProfileStep.tsx
│   │   ├── AIUsageStep.tsx
│   │   ├── ProcessPainPointsStep.tsx
│   │   ├── ObjectivesStep.tsx
│   │   └── ResultsDashboard.tsx
│   └── UI/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── LoadingSpinner.tsx
│       └── ProgressBar.tsx
├── data/
│   └── constants.ts         # Form options and constants
├── hooks/
│   └── useAssessment.ts     # Assessment state management
├── services/
│   └── analysisService.ts   # API integration and analysis logic
├── types/
│   └── index.ts            # TypeScript type definitions
├── utils/
│   └── dataValidation.ts   # Data validation and sanitization
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌍 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_LYZR_API_KEY` | Lyzr Studio API key for CostOptimisorAdvisor | Optional* |

*The application includes robust fallback mechanisms and will work without the API key by using intelligent mock analysis.

## 🚀 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload the contents to your web server
```

## 🔌 API Integration Details

The application uses the CostOptimisorAdvisor LLM through Lyzr Studio API:

- **Endpoint**: `https://agent-prod.studio.lyzr.ai/v3/inference/chat/`
- **Agent ID**: `685a3aa4198302ed0da7ef5f`
- **Method**: POST with JSON payload
- **Authentication**: x-api-key header

### Fallback System

If the API is unavailable, the application automatically generates intelligent mock analysis based on:
- Company size and industry
- Current AI spending patterns
- Number and complexity of pain points
- Stated objectives and timelines

## 📊 Data Processing

1. **Input Validation**: All user inputs are sanitized and validated
2. **Analysis Generation**: Data is sent to CostOptimisorAdvisor LLM for analysis
3. **Response Processing**: API responses are validated and formatted
4. **Report Generation**: Results are presented in an interactive dashboard
5. **Data Export**: Users can download complete reports in JSON format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact: support@aicostoptimizer.com

## 📝 Technical Notes

- The application is designed as a single-page application focused on assessment completion
- All business logic for cost optimization calculations is preserved in the analysis service
- The pain points system supports unlimited entries with individual validation
- Report generation maintains consistent output format regardless of data source (API or fallback)
- Local storage is used to cache analysis results for user convenience

## 🎯 Key Features Highlighted in Overview

### Multi-Pain Points Support
- Users can add multiple pain points with detailed information
- Each pain point includes department, process name, and description
- Individual validation for each pain point entry
- Enhanced analysis based on comprehensive pain point data

### Streamlined User Experience
- Single-page application design
- Progressive form with clear steps
- Real-time validation and feedback
- Mobile-responsive interface

### Intelligent Analysis Engine
- Powered by CostOptimisorAdvisor LLM
- Contextual recommendations based on industry and company size
- ROI calculations and implementation timelines
- Actionable insights with priority levels

### Robust Architecture
- TypeScript for type safety
- Modular component structure
- Comprehensive error handling
- Fallback mechanisms for reliability
