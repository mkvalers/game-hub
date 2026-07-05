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
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "@/hooks/usePlatforms";
import { Tooltip } from "./ui/tooltip";

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

        return (
          <Tooltip key={platform.id} content={platform.name}>
            <Icon color={"gray.500"} as={IconComponent} />
          </Tooltip>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
