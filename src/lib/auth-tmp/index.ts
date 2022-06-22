import { initReactQueryAuth } from "react-query-auth";
import { loadUser } from "./features/load";
import { LoginCredentialsDTO, loginFn } from "./features/login";
import { logoutFn } from "./features/logout";
import { RegisterCredentialsDTO, registerFn } from "./features/register";
import { AuthUser, Error } from "./types";

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  // LoaderComponent() {
  //   return (
  //     <div className="w-screen h-screen flex justify-center items-center">
  //       <Spinner size="xl" />
  //     </div>
  //   );
  // },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  Error,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);
