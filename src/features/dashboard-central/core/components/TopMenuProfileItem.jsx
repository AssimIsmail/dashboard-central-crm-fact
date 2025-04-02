import { Link } from "react-router-dom";
import { useAuthContext } from "../../../auth/context/AuthProvider";

export default function TopMenuProfileItem() {
  const { authState } = useAuthContext();
  if (authState.isLoading) {
    return (
      <div className="flex px-4 py-2 border-2 rounded-md border-muted bg-light">
        --
      </div>
    );
  }

  return (
    <Link
      to={`/profile`}
      className="flex px-4 py-2 border-2 rounded-md border-muted bg-light"
    >
      <p className="font-bold">
        {authState.currentUser.first_name} {authState.currentUser.last_name}
      </p>
    </Link>
  );
}