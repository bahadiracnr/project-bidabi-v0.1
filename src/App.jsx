import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
