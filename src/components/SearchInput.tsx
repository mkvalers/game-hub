import { Input, InputGroup } from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash/debounce";

interface Props {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const debouncedSearch = useMemo(
    () => debounce((value: string) => onSearch(value), 500),
    [onSearch],
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        debouncedSearch.cancel();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
          fontSize={{ base: "15px" }}
          overflow="hidden"
          textOverflow="ellipsis"
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
