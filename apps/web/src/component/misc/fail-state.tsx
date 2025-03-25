import { XCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface FailStateProps {
  handleBack: () => void;
}

export default function FailState({ handleBack }: FailStateProps) {
  return (
    <div className="flex flex-col max-w-screen-sm min-h-64 mx-auto items-center justify-center space-y-8 p-4 rounded-lg bg-red-100 text-red-800 shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <XCircle className="h-10 w-10 text-red-600" />
        <h3 className="text-xl font-semibold">Oops! Something went wrong</h3>
        <p className="text-sm text-red-700">
          There was an issue processing your request. Please try again.
        </p>
      </div>
      <Button onClick={handleBack} variant="destructive">
        Try Again
      </Button>
    </div>
  );
}
