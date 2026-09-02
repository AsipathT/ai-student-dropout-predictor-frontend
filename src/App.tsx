import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Brain, Activity, Layers, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

const riskData = [
  { week: 'W1', risk: 15 },
  { week: 'W2', risk: 22 },
  { week: 'W3', risk: 35 },
  { week: 'W4', risk: 58 },
  { week: 'W5', risk: 75 },
  { week: 'W6', risk: 88 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'System Overview', icon: LayoutDashboard },
    { id: 'c1', label: 'C1: Emotion', icon: Brain },
    { id: 'c2', label: 'C2: Engagement', icon: Activity },
    { id: 'c3', label: 'C3: Fusion Engine', icon: Layers },
    { id: 'c4', label: 'C4: Interventions', icon: ShieldAlert },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 flex flex-col font-sans text-slate-900">
      
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-8 py-5 bg-white/70 backdrop-blur-xl border-b border-white shadow-sm z-20 sticky top-0">
        <h1 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
          Multimodal Risk Predictor
        </h1>
        <select className="px-5 py-2.5 bg-white/80 border border-slate-200 rounded-xl text-sm font-bold focus:ring-4 focus:ring-slate-200 outline-none cursor-pointer text-slate-700 shadow-sm transition-all hover:bg-slate-50">
          <option>Student: Kasun P. (ID: 8234)</option>
          <option>Student: Nipun S. (ID: 5870)</option>
        </select>
      </header>

      {/* Tabbed Navigation */}
      <div className="px-8 pt-6 z-10">
        <div className="flex space-x-2 bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/60 shadow-sm max-w-fit mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                  isActive ? 'text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] border border-white/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-500' : ''}`} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-8 relative flex flex-col items-center">
        <div className="w-full max-w-[1400px]">
          <AnimatePresence mode="wait">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Col 1: C1 & C2 Summaries */}
                <div className="flex flex-col gap-6">
                  <button onClick={() => setActiveTab('c1')} className="text-left group focus:outline-none">
                    <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50 hover:shadow-purple-500/20 transition-all duration-300 transform group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">C1: Emotion</h2>
                        <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold"><span className="text-slate-700">Stress</span><span className="text-purple-600">80%</span></div>
                        <div className="w-full bg-slate-200/50 rounded-full h-2"><div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-[80%]"></div></div>
                      </div>
                    </div>
                  </button>
                  
                  <button onClick={() => setActiveTab('c2')} className="text-left group focus:outline-none">
                    <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50 hover:shadow-teal-500/20 transition-all duration-300 transform group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">C2: Engagement</h2>
                        <ArrowRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <ul className="space-y-3 text-sm font-bold text-slate-600">
                        <li className="flex justify-between border-b border-slate-200/50 pb-2"><span>Attendance</span><span className="text-teal-600">95%</span></li>
                        <li className="flex justify-between border-b border-slate-200/50 pb-2"><span>Participation</span><span className="text-rose-500">Low</span></li>
                        <li className="flex justify-between"><span>LMS Time</span><span className="text-teal-600">Avg</span></li>
                      </ul>
                    </div>
                  </button>
                </div>

                {/* Col 2: Fusion Engine (Center Gauge) */}
                <div className="flex flex-col h-full">
                  <button onClick={() => setActiveTab('c3')} className="h-full text-left group focus:outline-none flex flex-col">
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl shadow-slate-200/50 hover:shadow-rose-500/20 transition-all duration-300 transform group-hover:-translate-y-1 flex-1 flex flex-col items-center justify-center">
                      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 absolute top-8">C3: Risk Fusion</h2>
                      <div className="relative w-64 h-64 flex items-center justify-center mt-6">
                        <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl" viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ef4444" />
                              <stop offset="100%" stopColor="#f97316" />
                            </linearGradient>
                          </defs>
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#riskGradient)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="34" strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                        </svg>
                        <div className="absolute flex flex-col items-center justify-center text-center">
                          <span className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">88%</span>
                          <span className="text-sm font-bold uppercase tracking-widest mt-1 text-red-500">Critical</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Col 3: Actions Summary */}
                <div className="flex flex-col h-full">
                  <button onClick={() => setActiveTab('c4')} className="h-full text-left group focus:outline-none flex flex-col">
                    <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl shadow-slate-200/50 hover:shadow-green-500/20 transition-all duration-300 transform group-hover:-translate-y-1 flex-1 flex flex-col">
                      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Causal Vectors</h2>
                      <ul className="space-y-4 text-sm font-bold text-slate-600 mb-8 flex-1">
                        <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 mt-1 shadow-sm"></span>High stress W5</li>
                        <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 mt-1 shadow-sm"></span>Low forum activity</li>
                        <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 mt-1 shadow-sm"></span>Missed lab</li>
                      </ul>
                      <div className="w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-2xl text-center text-lg border border-slate-200">
                        View Actions
                      </div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* C1 TAB */}
            {activeTab === 'c1' && (
              <motion.div
                key="c1"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-white shadow-xl shadow-purple-500/10 w-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl text-white shadow-lg shadow-purple-500/30">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Affective State Analysis</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Extracted NLP Signals</h3>
                    <div className="p-5 bg-white/60 rounded-2xl border border-purple-100 shadow-sm text-sm font-medium text-slate-700 italic">
                      "I'm completely lost with this recursion problem. Falling behind everyone."
                    </div>
                    <div className="p-5 bg-white/60 rounded-2xl border border-purple-100 shadow-sm text-sm font-medium text-slate-700 italic">
                      "Not sure if I did the base case right..."
                    </div>
                  </div>
                  <div className="space-y-8">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Sentiment Distribution</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold"><span className="text-slate-700">Stress Level</span><span className="text-purple-600">80%</span></div>
                      <div className="w-full bg-slate-200/50 rounded-full h-3"><div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full w-[80%] shadow-sm"></div></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold"><span className="text-slate-700">Anxiety</span><span className="text-purple-600">65%</span></div>
                      <div className="w-full bg-slate-200/50 rounded-full h-3"><div className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-full w-[65%] shadow-sm"></div></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* C2 TAB */}
            {activeTab === 'c2' && (
              <motion.div
                key="c2"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-white shadow-xl shadow-teal-500/10 w-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl text-white shadow-lg shadow-teal-500/30">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Behavioral Engagement</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/60 p-8 rounded-2xl border border-teal-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Video Views</span>
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">12</span>
                    <span className="text-sm font-bold text-slate-500 mt-2">Past 7 days</span>
                  </div>
                  <div className="bg-white/60 p-8 rounded-2xl border border-teal-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Missed Assgn.</span>
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600">2</span>
                    <span className="text-sm font-bold text-rose-500 mt-2">Critical Flag</span>
                  </div>
                  <div className="bg-white/60 p-8 rounded-2xl border border-teal-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">LMS Time</span>
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">4h</span>
                    <span className="text-sm font-bold text-slate-500 mt-2">Weekly Total</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* C3 TAB */}
            {activeTab === 'c3' && (
              <motion.div
                key="c3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-white shadow-xl shadow-red-500/10 w-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl text-white shadow-lg shadow-red-500/30">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Risk Probability Index</h2>
                </div>
                <div className="w-full h-80 bg-white/50 rounded-2xl p-6 border border-red-50">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={riskData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cbd5e1" strokeOpacity={0.5} />
                      <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 700 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 700 }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: '1px solid #ffffff', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '10px 16px', backgroundColor: 'rgba(255,255,255,0.95)' }}
                        itemStyle={{ color: '#0f172a', fontWeight: 800, fontSize: '16px' }}
                        labelStyle={{ color: '#64748b', fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}
                      />
                      <Line type="monotone" dataKey="risk" name="Risk %" stroke="url(#lineGrad)" strokeWidth={4} dot={{ r: 6, fill: '#ef4444', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8, strokeWidth: 0 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {/* C4 TAB */}
            {activeTab === 'c4' && (
              <motion.div
                key="c4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-white shadow-xl shadow-green-500/10 w-full flex flex-col md:flex-row gap-10"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl text-white shadow-lg shadow-green-500/30">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">Recommended Actions</h2>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 p-5 bg-white/60 rounded-2xl border border-green-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer w-6 h-6 appearance-none rounded-md border-2 border-slate-300 checked:bg-green-500 checked:border-green-500 transition-colors" defaultChecked />
                        <CheckCircle2 className="w-4 h-4 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="font-bold text-slate-700">Schedule Counselor Meeting</span>
                    </label>
                    <label className="flex items-center gap-4 p-5 bg-white/60 rounded-2xl border border-green-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer w-6 h-6 appearance-none rounded-md border-2 border-slate-300 checked:bg-green-500 checked:border-green-500 transition-colors" defaultChecked />
                        <CheckCircle2 className="w-4 h-4 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="font-bold text-slate-700">Email Module Coordinator</span>
                    </label>
                    <label className="flex items-center gap-4 p-5 bg-white/60 rounded-2xl border border-green-100 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer w-6 h-6 appearance-none rounded-md border-2 border-slate-300 checked:bg-green-500 checked:border-green-500 transition-colors" />
                        <CheckCircle2 className="w-4 h-4 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="font-bold text-slate-700">Assign Peer Mentor</span>
                    </label>
                  </div>
                </div>
                <div className="md:w-1/3 flex flex-col justify-end">
                  <button className="w-full py-6 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-black rounded-2xl shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)] hover:shadow-[0_10px_40px_-5px_rgba(34,197,94,0.8)] transition-all duration-300 text-xl tracking-tight focus:ring-4 focus:ring-green-200 outline-none active:scale-[0.98]">
                    Execute Actions
                  </button>
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
