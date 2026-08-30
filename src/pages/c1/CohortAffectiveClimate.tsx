import React from 'react';
import Card from '@/components/shared/Card';
import Badge from '@/components/shared/Badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, TrendingUp, AlertCircle, Brain, Heart, Activity } from 'lucide-react';

const trendData = [
  { week: 'Week 1', anxiety: 30, confusion: 20, helplessness: 10, motivation: 90 },
  { week: 'Week 2', anxiety: 35, confusion: 25, helplessness: 12, motivation: 85 },
  { week: 'Week 3', anxiety: 45, confusion: 40, helplessness: 15, motivation: 80 },
  { week: 'Week 4', anxiety: 60, confusion: 50, helplessness: 25, motivation: 65 }, // Exam prep
  { week: 'Week 5', anxiety: 55, confusion: 45, helplessness: 20, motivation: 70 },
  { week: 'Week 6', anxiety: 65, confusion: 55, helplessness: 30, motivation: 60 }, // Midterms
];

const studentsAtRisk = [
  { id: 'IT23198234', name: 'Kasun Perera', primaryEmotion: 'High Anxiety', trajectory: 'Declining', riskLevel: 'Critical' },
  { id: 'IT23145870', name: 'Nipun Silva', primaryEmotion: 'Conceptual Confusion', trajectory: 'Volatile', riskLevel: 'High' },
  { id: 'IT23091244', name: 'Amali Fernando', primaryEmotion: 'Academic Helplessness', trajectory: 'Declining', riskLevel: 'High' },
];

export default function CohortAffectiveClimate() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Cohort Affective Climate</h2>
          <p className="text-sm text-slate-500 mt-1">Real-time analysis of student emotional states across the cohort.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand focus:border-transparent outline-none">
            <option>All Modules</option>
            <option>SE3040 - Application Frameworks</option>
            <option>SE3010 - Software Engineering</option>
          </select>
          <button className="btn-primary">
            Export Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
              <Activity className="w-5 h-5 text-rose-600" />
            </div>
            <Badge variant="risk-high">+15% vs last week</Badge>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Average Exam Anxiety</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">65%</h3>
          </div>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Brain className="w-5 h-5 text-amber-600" />
            </div>
            <Badge variant="risk-medium">+8% vs last week</Badge>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Conceptual Confusion</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">55%</h3>
          </div>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-violet-600" />
            </div>
            <Badge variant="trajectory-stable">-2% vs last week</Badge>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Academic Helplessness</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">30%</h3>
          </div>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <Badge variant="trajectory-declining">-10% vs last week</Badge>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Motivation Level</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">60%</h3>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Longitudinal Affective Trends" className="lg:col-span-2 hover:shadow-md transition-shadow" icon={TrendingUp}>
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAnxiety" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E11D48" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#E11D48" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorConfusion" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorMotivation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '13px', fontWeight: 500 }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '10px' }}/>
                <Area type="monotone" dataKey="anxiety" name="Exam Anxiety" stroke="#E11D48" strokeWidth={2} fillOpacity={1} fill="url(#colorAnxiety)" />
                <Area type="monotone" dataKey="confusion" name="Conceptual Confusion" stroke="#F59E0B" strokeWidth={2} fillOpacity={1} fill="url(#colorConfusion)" />
                <Area type="monotone" dataKey="motivation" name="Motivation" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorMotivation)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Critical Attention Required" className="hover:shadow-md transition-shadow" icon={AlertCircle}>
          <div className="mt-4 space-y-4">
            {studentsAtRisk.map((student, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col gap-2 transition-colors hover:bg-slate-100 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-semibold text-slate-800">{student.name}</span>
                    <span className="text-xs font-mono text-slate-500 block">{student.id}</span>
                  </div>
                  <Badge variant={student.riskLevel === 'Critical' ? 'risk-critical' : 'risk-high'}>
                    {student.riskLevel}
                  </Badge>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-slate-600 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500" /> {student.primaryEmotion}
                  </span>
                  <Badge variant={student.trajectory === 'Declining' ? 'trajectory-declining' : 'trajectory-volatile'}>
                    {student.trajectory}
                  </Badge>
                </div>
              </div>
            ))}
            <button className="w-full mt-2 py-2 text-sm font-medium text-brand hover:text-indigo-700 transition-colors bg-indigo-50 hover:bg-indigo-100 rounded-lg">
              View All Students
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
