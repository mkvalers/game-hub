import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/services/game-service";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    apple: FaApple,
    iphone: MdPhoneIphone,
    nintendo: SiNintendoswitch,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(({ platform }) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;

        return <Icon color={"gray.500"} key={platform.id} as={IconComponent} />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
