import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
// import { AuthProvider } from './store/auth.jsx'
=======
import { AuthProvider } from './store/auth.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
>>>>>>> f90257e3983b9d2e1d69f0d116c4e455f76d2aa7

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
<<<<<<< HEAD
);
=======
  </AuthProvider>
);

>>>>>>> f90257e3983b9d2e1d69f0d116c4e455f76d2aa7
