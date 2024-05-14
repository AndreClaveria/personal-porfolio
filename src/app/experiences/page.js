import AdvertisementPanel from "@/components/UI/PanelBoard";
import Image from "next/image";
import experiences from "@/data/experiences.json";
export default function Experiences() {
  return (
    <div>
      <Image
        src="/img/street.png"
        alt="Descriptive text for screen readers"
        width={1200}
        height={600}
        layout="responsive"
      />
      <AdvertisementPanel experiences={experiences} />
    </div>
  );
}
