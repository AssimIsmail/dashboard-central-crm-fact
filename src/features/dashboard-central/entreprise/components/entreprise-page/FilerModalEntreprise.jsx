import { useSearchParams } from "react-router-dom";
import FilerModal from "../../../../core/components/UI/FilerModal";

export default function FilerModalEntreprise({ onClose, isOpen }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return <FilerModal onClose={onClose} isOpen={isOpen}></FilerModal>;
}
