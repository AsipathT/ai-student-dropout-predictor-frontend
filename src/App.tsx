import { RouterProvider } from 'react-router-dom';
import { PipelineProvider } from '@/hooks/usePipeline';
import { ToastProvider } from '@/components/shared/Toast';
import { router } from '@/app/router';

function App() {
  return (
    <PipelineProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </PipelineProvider>
  );
}

export default App;
