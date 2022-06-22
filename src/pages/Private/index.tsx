// export default function PrivatePages() {
//   return <>hello</>;
// }

// import { AuthProvider as UserAuthProvider } from "@/lib/userAuth";
import InputPage1 from "@/components/Pages/InputPage1";
import Layout from "@/components/Templates/Layout";
import { useUrlTokenAuth } from "@/hooks/userUrlTokenAuth";
// import {AuthUser} from "@/hooks/types"
import { FC, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

const PrivateRoute: FC = () => {
  const { user, login } = useUrlTokenAuth();

  useEffect(() => {
    // if (!user.isvalid) {
    // }
    console.log("ログイン");
    login();
  }, []);

  return user.isvalid ? (
    // <h1>正しいユーザーです</h1>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <h1>物件種別選択ページ</h1>
              <Link to="/">Home</Link>
              <Link to="/apartment">入力開始</Link>
            </>
          }
        />
        <Route path=":property_type" element={<InputPage1 />} />
        <Route path=":property_type/details" element={<h1>入力２</h1>} />
        <Route path=":property_type/info" element={<h1>入力３</h1>} />
        <Route path="*" element={<h1>userが見つかりませんでした</h1>} />
      </Route>
    </Routes>
  ) : (
    // <Route path="/page2" element={<Navigate to="/page1" />} />
    // <Navigate to={{ pathname: "/login" }} />
    // <Route path="/page2" element={<h1>ユーザーが正しくありません</h1>} />
    <h1>ユーザーが正しくありません</h1>
  );
};

export default PrivateRoute;
