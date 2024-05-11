import AdvertisementPanel from "@/components/UI/PanelBoard";
import Image from "next/image";
import experiences from "@/data/experiences.json";
export default function Experiences() {
  return (
    <div>
      <AdvertisementPanel experiences={experiences} />
    </div>
  );
}
