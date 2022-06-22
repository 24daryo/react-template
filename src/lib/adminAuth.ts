import axios from "axios";
import { initReactQueryAuth } from "react-query-auth";

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

export const { AuthProvider, useAuth } = initReactQueryAuth<User, Error>(authConfig);

interface User {
  id: string;
  name: string;
}

interface Error {
  message: string;
}

// アクセスした時に呼び出される
// 今回はURLからキーを吸い出すので、ここで実行する
async function loadUser() {
  console.log("Adminローディング中");

  // axiousでアクセスする
  // const mydata = { token: key };
  // const result = await axios.post("/auth/login", mydata);

  return new Promise<User>(function (resolve, reject) {
    const user: User = {
      id: "testid",
      name: "testname",
    };
    resolve(user); // resolveに返却したい値を与える
  });
}

// 今回は使用しない
async function loginFn(key: string) {
  console.log("ログインしてきました");
  // axiosと混ぜる場合
  const result = await axios.post("/auth/login", { token: key });
  console.log(result);
  //ゴニョゴニョする
  const user: User = {
    id: "testid",
    name: "testname",
  };
  return user;
}

// 今回は使用しない
async function registerFn(data: any) {
  const user: User = {
    id: "testid",
    name: "testname",
  };
  return user;
}

// 今回は使用しない
async function logoutFn() {
  return axios.post("/auth/login");
}
