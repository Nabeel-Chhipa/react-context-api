import logo from './logo.svg';
import './App.css';
import RouterConfigComponent from './RouterConfig';
import AuthProvider from './Context';

function App() {
  return (
    <>
      <h2>App Component</h2>
      <AuthProvider>
        <RouterConfigComponent />
      </AuthProvider>
    </>
  );
}

export default App;
