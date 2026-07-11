import { Input, InputGroup } from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash/debounce";
import useGameQueryStore from "@/hooks/stores/useGameQueryStore";

const SearchInput = () => {
  const searchInput = useGameQueryStore((s) => s.setSearchInput);

  const ref = useRef<HTMLInputElement>(null);

  const debouncedSearch = useMemo(
    () => debounce((value: string) => searchInput(value), 500),
    [searchInput],
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        debouncedSearch.cancel();
        if (ref.current) searchInput(ref.current.value);
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
