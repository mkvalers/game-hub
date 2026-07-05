import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformList = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root
      onSelect={(details) => {
        if (details.value === "all") {
          onSelectPlatform(null);
          return;
        }
        const platform = data?.find((p) => p.slug === details.value);
        if (platform) onSelectPlatform(platform);
      }}
    >
      <Menu.Trigger asChild>
        <Button>
          {selectedPlatform?.name || "All Platforms"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="all">All Platforms</Menu.Item>
            {data?.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformList;
