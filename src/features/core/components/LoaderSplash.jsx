import logo from "../../../../public/logo_assim.png";

export default function LoaderSplash() {
  return (
    <div className="z-0 flex h-screen w-full items-center justify-center">
      <div className="flex flex-col justify-center gap-8 text-center">
        <img
          className="h-[256px] w-[256px] animate-pulse"
          src={logo}
          alt="Logo"
        />
      </div>
    </div>
  );
}