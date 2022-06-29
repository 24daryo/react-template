import HomeLayout from "@/components/Templates/HomeLayout";
import Iframe from "react-iframe";
import { Route, Routes } from "react-router-dom";

const HomeRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route
          path="/"
          element={
            <div>
              Iframeのテストです
              <Iframe
                id="page1"
                url="https://pricehubblejapan.web.app/?key=sales_85YCbnqb8KDe"
                position="absolute"
                width="80%"
                height="90%"
              />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
