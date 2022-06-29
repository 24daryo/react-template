import storage from "@/utils/storage";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { loginWithToken } from "./api";
import { userState } from "./state";

// URLからキーを吸い出す
function getUrlKey() {
  var url = new URL(window.location.href);
  var params = url.searchParams;
  var key = params.get("key");
  return key;
}

// function removeKey() {
//   var url = new URL(window.location.href);
//   var params = url.searchParams;
//   params.delete("key");
//   window.history.replaceState("", "", url.pathname);
// }

// URLを優先的に参照する
const getToken = () => {
  const tokenByURL = getUrlKey();
  if (tokenByURL !== null) {
    storage.setToken(tokenByURL);
    return tokenByURL;
  }
  const tokenByStorage = storage.getToken();
  if (tokenByStorage !== null) return tokenByStorage;

  return null;
};

export const useUrlTokenAuth = () => {
  const [user, setUser] = useRecoilState(userState);

  const login = useCallback(() => {
    const token = getToken();
    console.log(token);
    if (token === null) return;

    // keyが有効か確認
    loginWithToken(token).then((r) => {
      if (r.status === "OK") {
        setUser({
          isvalid: true,
          item: r.results,
        });
      } else {
        setUser({
          isvalid: false,
          item: null,
        });
      }
    });
  }, [setUser]);

  return { user, login } as const;
};
