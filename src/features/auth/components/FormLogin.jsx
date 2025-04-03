import { useRef, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import useLogin from "../hooks/useLogin";
import { toastSuccess } from "../../../helper";
import ButtonLoginForm from "./ButtonLoginForm";

export default function FormLogin() {
  const { handleOnLogin, isLoading } = useLogin();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  async function handleOnSubmitFormLogin(event) {
    event.preventDefault();
    if (isLoading) return;

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const message = await handleOnLogin(payload);
    if (message) {
      toastSuccess(message);
    }
  }

  function handleOnTogglePasswordInputType() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  return (
    <form
      onSubmit={handleOnSubmitFormLogin}
      className="mt-8 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-1.5">
          <label className="font-base" htmlFor="ID_EMAIL">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            ref={emailRef}
            type="email"
            id="ID_EMAIL"
            name="email"
            className="w-full rounded-md border-2 text-black px-6 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            disabled={isLoading}
          />
        </div>

        <div className="flex w-full flex-col gap-1.5">
          <label className="font-base" htmlFor="ID_PASSWORD">
            Mot de passe <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-2">
            <input
              ref={passwordRef}
              type={isPasswordHidden ? "password" : "text"}
              id="ID_PASSWORD"
              name="password"
              className="w-full rounded-md border-2 text-black px-6 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              disabled={isLoading}
            />
            <button
              className="rounded-md border-2 border-black bg-blue-100 p-1 px-4 hover:border-black hover:bg-gray-600"
              type="button"
              onClick={handleOnTogglePasswordInputType}
            >
              {isPasswordHidden ? (
                <VscEye strokeWidth={0.5} size={20} />
              ) : (
                <VscEyeClosed strokeWidth={0.5} size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      <ButtonLoginForm inProgress={isLoading} />
    </form>
  );
}