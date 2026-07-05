import { Text, Box, Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortOrder {
  value: string;
  label: string;
}

interface Props {
  selectedSort: SortOrder | null;
  onSelectSort: (sortBy: SortOrder | null) => void;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Box>
      <Menu.Root
        onSelect={(details) => {
          const sort = sortOrder.find((s) => s.value === details.value);
          if (sort) onSelectSort(sort);
        }}
      >
        <Menu.Trigger asChild>
          <Button variant="subtle" width="100%">
            <Text
              overflow="hidden"
              textOverflow="ellipsis"
            >{`Sort By: ${selectedSort?.label ?? "Relevance"}`}</Text>
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrder.map((sortOrderOption, index) => (
                <Menu.Item
                  key={index}
                  onClick={() => onSelectSort(sortOrderOption)}
                  value={sortOrderOption.value}
                >
                  {sortOrderOption.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
