import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center" role="alert">
      <div className="mx-auto max-w-xl px-1 text-danger">
        <h2 className="text-lg font-semibold">{error.message} </h2>
        <p className="h-96 overflow-auto">{error.stack}</p>
      </div>
    </div>
  );
};

export default ErrorFallback;
