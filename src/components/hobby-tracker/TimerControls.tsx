

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  isLoading?: boolean;
}

export function TimerControls({ isRunning, onStart, onStop, isLoading = false }: TimerControlsProps) {
  return (
    <div className="flex justify-center">
      {!isRunning ? (
        <button
          onClick={onStart}
          disabled={isLoading}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation"
        >
          {isLoading ? 'Starting...' : 'Start'}
        </button>
      ) : (
        <button
          onClick={onStop}
          disabled={isLoading}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation"
        >
          Stop
        </button>
      )}
    </div>
  );
} 