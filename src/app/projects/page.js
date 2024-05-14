import Librairies from "@/components/UI/Librairies";
import Image from "next/image";

export default function Project() {
  return (
    <div>
      <Image
        src="/img/bookshelf.png"
        alt="Descriptive text for screen readers"
        width={1200}
        height={1200}
        layout="responsive"
      />
      <Librairies />
    </div>
  );
}
