import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Text, Box, Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box>
      <Menu.Root
        onSelect={(details) => {
          if (details.value === "all") {
            onSelectPlatform(null);
            return;
          }
          const platform = data?.results.find((p) => p.slug === details.value);
          if (platform) onSelectPlatform(platform);
        }}
      >
        <Menu.Trigger asChild>
          <Button variant="subtle" width="100%">
            <Text overflow="hidden" textOverflow="ellipsis">
              {selectedPlatform?.name || "Platforms"}
            </Text>
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="all">Reset</Menu.Item>
              {data?.results.map((platform) => (
                <Menu.Item key={platform.id} value={platform.slug}>
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;
