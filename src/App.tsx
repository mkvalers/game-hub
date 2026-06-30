import { Button, HStack } from "@chakra-ui/react";
import { Tooltip } from "./components/ui/tooltip";
import { ColorModeButton } from "@/components/ui/color-mode";
import { toaster, Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <HStack>
      <Tooltip content="Delete item">
        <Button>Delete</Button>
      </Tooltip>
      <ColorModeButton>Button</ColorModeButton>
      <Button
        onClick={() => toaster.create({ title: "Saved!", type: "success" })}
      >
        Trigger Toast
      </Button>
      <Toaster />
    </HStack>
  );
}

export default App;
