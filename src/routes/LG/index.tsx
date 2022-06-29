import { Home } from "@/components/Pages/LG/Home";
import { InputPage1 } from "@/components/Pages/LG/InputPage1";
import { InputPage2 } from "@/components/Pages/LG/InputPage2";
import { InputPage3 } from "@/components/Pages/LG/InputPage3";
import Layout from "@/components/Templates/LGLayout";
import { useUrlTokenAuth } from "@/hooks/userUrlTokenAuth";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const LGRoute: FC = () => {
  const { user, login } = useUrlTokenAuth();

  useEffect(() => {
    login();
  }, [login]);

  return user.isvalid ? (
    <Routes>
      <Route element={<Layout hideReturn />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout returnUrl="/" />}>
        <Route path=":property_type" element={<InputPage1 next="details" />} />
      </Route>
      <Route element={<Layout />}>
        <Route
          path=":property_type/details"
          element={<InputPage2 next="info" />}
        />
        <Route
          path=":property_type/info"
          element={<InputPage3 next="result" />}
        />
        <Route
          path=":property_type/result"
          element={<>まだ実装されていません</>}
        />
        <Route path="*" element={<>ユーザーが見つかりませんでした</>} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<>お探しのページが見つかりませんでした</>} />
      </Route>
    </Routes>
  );
};

export default LGRoute;
