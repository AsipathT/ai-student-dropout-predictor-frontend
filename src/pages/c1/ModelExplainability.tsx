import React from 'react';
import Card from '@/components/shared/Card';
import Badge from '@/components/shared/Badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Brain, Network, Zap, Activity } from 'lucide-react';

const featureImportance = [
  { feature: 'LMS Forum Sentiment', value: 0.85, category: 'NLP' },
  { feature: 'Facial Micro-expressions', value: 0.72, category: 'Computer Vision' },
  { feature: 'Speech Pitch Variation', value: 0.65, category: 'Audio Analysis' },
  { feature: 'Keyboard Dynamics (Speed)', value: 0.45, category: 'Behavioral' },
  { feature: 'Submission Timing', value: 0.38, category: 'Behavioral' },
  { feature: 'Peer Interaction Frequency', value: 0.25, category: 'NLP' },
];

const getCategoryColor = (category: string) => {
  switch(category) {
    case 'NLP': return '#8B5CF6'; // Violet
    case 'Computer Vision': return '#3B82F6'; // Blue
    case 'Audio Analysis': return '#10B981'; // Emerald
    default: return '#94A3B8'; // Slate
  }
};

export default function ModelExplainability() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Brain className="w-7 h-7 text-indigo-600" />
            Affective Model Explainability
          </h2>
          <p className="text-sm text-slate-500 mt-1">SHAP value analysis of the multimodal emotion detection model.</p>
        </div>
        <div className="flex gap-3">
          <Badge variant="trajectory-stable" className="px-3 py-1.5 text-sm">Model Accuracy: 94.2%</Badge>
          <button className="btn-secondary">Retrain Model</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Feature Importance */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Global Feature Importance (SHAP Values)" icon={Network}>
            <div className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={featureImportance} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E2E8F0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                  <YAxis dataKey="feature" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 500}} width={150} />
                  <Tooltip 
                    cursor={{fill: '#F1F5F9'}} 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                    {featureImportance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getCategoryColor(entry.category)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-violet-500"></span> NLP
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span> Computer Vision
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Audio Analysis
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-3 h-3 rounded-full bg-slate-400"></span> Behavioral
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Modality Status */}
        <div className="space-y-6">
          <Card title="Modality Health Status" icon={Activity}>
            <div className="mt-4 space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Text Sentiment API</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-slate-500">Online • 12ms latency</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Processing 450 forum posts/hr</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Facial Emotion Model</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-slate-500">Online • 45ms latency</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">GPU Utilization: 64%</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Audio Pitch Analysis</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="text-xs text-amber-700">Degraded • 120ms latency</span>
                  </div>
                  <p className="text-xs text-amber-700 mt-2">High noise ratio detected in recent inputs.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
