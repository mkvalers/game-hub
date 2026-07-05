import { Box, Menu, Button, Portal } from "@chakra-ui/react";
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
    <Box mb={5}>
      <Menu.Root
        onSelect={(details) => {
          const sort = sortOrder.find((s) => s.value === details.value);
          if (sort) onSelectSort(sort);
        }}
      >
        <Menu.Trigger asChild>
          <Button variant="subtle">
            {`Sort By: ${selectedSort?.label ?? "Relevance"}`}
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
