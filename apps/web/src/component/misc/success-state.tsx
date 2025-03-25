import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface SuccessStateProps {
  handleBack: () => void;
}

export default function SuccessState({ handleBack }: SuccessStateProps) {
  return (
    <div className="flex flex-col max-w-screen-sm min-h-64 mx-auto items-center justify-center space-y-8 p-4 rounded-lg bg-green-100 text-green-800 shadow-md">
      <div className="flex flex-col items-center space-y-2">
        <CheckCircle className="h-10 w-10 text-green-600" />
        <h3 className="text-xl font-semibold">Success!</h3>
        <p className="text-sm text-green-700">
          Your action was completed successfully.
        </p>
      </div>
      <Button onClick={handleBack}>Back To Form</Button>
    </div>
  );
}
