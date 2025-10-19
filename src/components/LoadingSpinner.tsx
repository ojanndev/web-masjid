import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingSpinner = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3000; // 3 detik
    const interval = 30; // update setiap 30ms
    const totalSteps = duration / interval;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next === 100) {
          clearInterval(timer);
          // Set timeout kecil agar animasi 100% sempurna sebelum redirect
          setTimeout(() => navigate('/'), 200);
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-emerald-500 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-lg font-mono">{Math.round(progress)}%</span>
    </div>
  );
};

export default LoadingSpinner;