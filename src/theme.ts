import { createTheme } from "@mantine/core";
import classes from './cssmodules/Notification.module.css';
import { Notification } from '@mantine/core';


export const theme = createTheme({
  /* Put your mantine theme override here */
  components: {
    Notification: Notification.extend({
      classNames: {
        root: classes.root,
        description: classes.description
      },
    }),
  },
});
