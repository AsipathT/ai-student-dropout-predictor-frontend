import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '@/components/shared/Card';
import Badge from '@/components/shared/Badge';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { User, Brain, Heart, Activity, AlertCircle, History } from 'lucide-react';

const radarData = [
  { subject: 'Exam Anxiety', A: 85, B: 65, fullMark: 100 },
  { subject: 'Confusion', A: 60, B: 55, fullMark: 100 },
  { subject: 'Helplessness', A: 75, B: 30, fullMark: 100 },
  { subject: 'Motivation', A: 40, B: 60, fullMark: 100 },
  { subject: 'Engagement', A: 50, B: 70, fullMark: 100 },
  { subject: 'Confidence', A: 35, B: 65, fullMark: 100 },
];

const timelineData = [
  { week: 'W1', anxiety: 40, confusion: 30, helplessness: 20 },
  { week: 'W2', anxiety: 45, confusion: 35, helplessness: 25 },
  { week: 'W3', anxiety: 60, confusion: 45, helplessness: 40 },
  { week: 'W4', anxiety: 80, confusion: 55, helplessness: 65 },
  { week: 'W5', anxiety: 85, confusion: 60, helplessness: 75 },
];

export default function StudentAffectiveProfile() {
  const { studentId } = useParams();
  
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Profile Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center border-4 border-indigo-50">
            <User className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Kasun Perera</h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm font-mono text-slate-500">{studentId || 'IT23198234'}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="text-sm text-slate-500">Year 2, Semester 1</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <Badge variant="risk-critical">Critical Risk</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary">View C2 Profile</button>
          <button className="btn-primary">Initiate Intervention</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-1">
          <Card title="Current Affective State" icon={Heart}>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Exam Anxiety</span>
                  <span className="text-rose-600 font-bold">85%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-rose-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Academic Helplessness</span>
                  <span className="text-violet-600 font-bold">75%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-violet-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Conceptual Confusion</span>
                  <span className="text-amber-600 font-bold">60%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Motivation</span>
                  <span className="text-emerald-600 font-bold">40%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Affective Alerts" icon={AlertCircle}>
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-rose-800">Severe Anxiety Spike</h4>
                  <p className="text-xs text-rose-600 mt-1">Anxiety levels increased by 25% over the last two weeks, correlating with upcoming SE3040 assignment.</p>
                </div>
              </div>
              <div className="p-3 bg-violet-50 border border-violet-100 rounded-lg flex gap-3">
                <Brain className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-violet-800">Growing Helplessness</h4>
                  <p className="text-xs text-violet-600 mt-1">Sustained confusion has led to emerging indicators of academic helplessness.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Student vs Cohort Average" className="flex flex-col" icon={Activity}>
              <div className="h-[250px] w-full flex-1 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Radar name="Kasun Perera" dataKey="A" stroke="#E11D48" fill="#E11D48" fillOpacity={0.4} />
                    <Radar name="Cohort Average" dataKey="B" stroke="#94A3B8" fill="#94A3B8" fillOpacity={0.2} />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            
            <Card title="Historical State (Last 5 Weeks)" icon={History}>
               <div className="h-[250px] w-full flex-1 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timelineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Line type="monotone" dataKey="anxiety" name="Anxiety" stroke="#E11D48" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="helplessness" name="Helplessness" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="confusion" name="Confusion" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          
          <Card title="Recent Affective Observations">
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="table-header">Date</th>
                    <th className="table-header">Source</th>
                    <th className="table-header">Detected State</th>
                    <th className="table-header">Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="table-cell whitespace-nowrap text-slate-500 text-xs">Today, 10:23 AM</td>
                    <td className="table-cell font-medium">LMS Forum NLP</td>
                    <td className="table-cell"><Badge variant="emotion-anxiety">High Anxiety</Badge></td>
                    <td className="table-cell font-mono text-xs text-slate-500">89%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="table-cell whitespace-nowrap text-slate-500 text-xs">Yesterday, 14:15 PM</td>
                    <td className="table-cell font-medium">Video Emotion API</td>
                    <td className="table-cell"><Badge variant="emotion-helplessness">Helplessness</Badge></td>
                    <td className="table-cell font-mono text-xs text-slate-500">76%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="table-cell whitespace-nowrap text-slate-500 text-xs">Oct 12, 09:00 AM</td>
                    <td className="table-cell font-medium">Quiz Text Analysis</td>
                    <td className="table-cell"><Badge variant="emotion-confusion">Confusion</Badge></td>
                    <td className="table-cell font-mono text-xs text-slate-500">92%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
