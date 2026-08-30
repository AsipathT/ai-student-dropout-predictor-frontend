import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PipelineContextType {
  currentRole: string;
  setCurrentRole: (role: string) => void;
}

const PipelineContext = createContext<PipelineContextType | undefined>(undefined);

export function PipelineProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState('Dr. Sarah Perera');

  return (
    <PipelineContext.Provider value={{ currentRole, setCurrentRole }}>
      {children}
    </PipelineContext.Provider>
  );
}

export function usePipeline() {
  const context = useContext(PipelineContext);
  if (!context) {
    throw new Error('usePipeline must be used within a PipelineProvider');
  }
  return context;
}
