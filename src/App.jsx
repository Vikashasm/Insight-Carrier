
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainRoutes from "./routes/MainRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";

function App() {
  return (
    <>
      
        <MainRoutes />
        <DashboardRoutes />
      
    </>
  );
}

export default App;
