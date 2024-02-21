import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import DebouncedInput from "./components/DebouncedInput";
import { useState } from "react";
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';

export default function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }


  return <MantineProvider theme={theme}>
    <Notifications />
    <DebouncedInput value={""} onChange={increment} />

    <p>{counter}</p>
  </MantineProvider>;
}
