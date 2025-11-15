import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background animate-fade-out" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 animate-scale-in">
        {/* Logo */}
        <div className="relative group">
          <div className="absolute -inset-8 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow"></div>
          <div className="relative w-32 h-32 rounded-full bg-gradient-premium flex items-center justify-center shadow-premium ring-1 ring-border/20 p-4">
            <img 
              src="/logo-for-portfolio.png" 
              alt="Ryssel Calaor Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-shine opacity-50 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-light text-foreground tracking-wide">
            Loading Portfolio
          </h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-secondary/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-premium rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-shine animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
