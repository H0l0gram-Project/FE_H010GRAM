import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Router from './shared/Router';
import './tailwind.css';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
