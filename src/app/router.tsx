import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppShell from './AppShell';

// C1 Pages
import CohortAffectiveClimate from '@/pages/c1/CohortAffectiveClimate';
import StudentAffectiveProfile from '@/pages/c1/StudentAffectiveProfile';
import ModelExplainability from '@/pages/c1/ModelExplainability';

// C2 Pages
import CohortEngagementDashboard from '@/pages/c2/CohortEngagementDashboard';
import StudentTemporalAnalysis from '@/pages/c2/StudentTemporalAnalysis';

// C3 Pages
import CohortRiskDashboard from '@/pages/c3/CohortRiskDashboard';
import StudentRiskFusionProfile from '@/pages/c3/StudentRiskFusionProfile';
import LSTMModelExplainability from '@/pages/c3/LSTMModelExplainability';
import PipelineIntegration from '@/pages/c3/PipelineIntegration';

// C4 Pages
import StudentInterventionDashboard from '@/pages/c4/StudentInterventionDashboard';
import InterventionRecommendation from '@/pages/c4/InterventionRecommendation';
import InterventionOutcomeMonitoring from '@/pages/c4/InterventionOutcomeMonitoring';
import AdaptiveRecommendationHistory from '@/pages/c4/AdaptiveRecommendationHistory';
import StudentList from '@/pages/c4/StudentList';
import InterventionLibrary from '@/pages/c4/InterventionLibrary';
import ResourceAvailability from '@/pages/c4/ResourceAvailability';
import ReportsAnalytics from '@/pages/c4/ReportsAnalytics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      // Default redirect to C1 cohort
      { index: true, element: <Navigate to="/c1/cohort" replace /> },

      // C1 — Affective State Detection
      { path: 'c1/cohort', element: <CohortAffectiveClimate /> },
      { path: 'c1/student/:studentId', element: <StudentAffectiveProfile /> },
      { path: 'c1/explainability', element: <ModelExplainability /> },

      // C2 — Behavioural Engagement
      { path: 'c2/cohort', element: <CohortEngagementDashboard /> },
      { path: 'c2/student/:studentId', element: <StudentTemporalAnalysis /> },

      // C3 — Multimodal Risk Prediction
      { path: 'c3/cohort', element: <CohortRiskDashboard /> },
      { path: 'c3/student/:studentId', element: <StudentRiskFusionProfile /> },
      { path: 'c3/explainability', element: <LSTMModelExplainability /> },
      { path: 'c3/pipeline', element: <PipelineIntegration /> },

      // C4 — Adaptive Intervention
      { path: 'c4/student/:studentId', element: <StudentInterventionDashboard /> },
      { path: 'c4/recommendation/:studentId', element: <InterventionRecommendation /> },
      { path: 'c4/outcome/:studentId', element: <InterventionOutcomeMonitoring /> },
      { path: 'c4/adaptive-history/:studentId', element: <AdaptiveRecommendationHistory /> },
      { path: 'c4/students', element: <StudentList /> },
      { path: 'c4/library', element: <InterventionLibrary /> },
      { path: 'c4/resources', element: <ResourceAvailability /> },
      { path: 'c4/reports', element: <ReportsAnalytics /> },
    ],
  },
]);
