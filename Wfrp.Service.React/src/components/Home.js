import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IconAt, IconDownload, IconLogout } from '@tabler/icons';
import { createStyles, Avatar, Text, Group, Title, Container, SimpleGrid, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { AuthContext } from "../App";
import useWebSocket from "react-use-websocket";
import { wssUrl } from "../helpers/utilities";


const BREAKPOINT = '@media (max-width: 1200px)';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38
  },

  console: {
    marginTop: theme.spacing.xl * 2,
    backgroundColor: 'black',
    backgroundImage: 'radial-gradient(rgba(0, 150, 0, 0.75), black 120%)',
    overflow: 'hidden',
    padding: '20px',
    color: 'white',
    font: '12px Inconsolata, monospace',
    textShadow: '0 0 5px #C8C8C8',
    '&::after': {
      content: "",
      position: 'absolute',
      top: 0,
      left: 0,
      background: `repeating-linear-gradient(
        0deg,
        rgba(black, 0.15),
        rgba(black, 0.15) 1px,
        transparent 1px,
        transparent 2px
      )`,
      pointerEvents: 'none',
    }
  },
  '::selection': {
    background: '#0080FF',
    textShadow: 'none'
  },
  pre: {    
    whiteSpace: 'pre-wrap', 
    margin: 0
  }
}));

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [logs, setLogs] = useState([]);
  const [downloadDisabled, setDowmnloadDisabled] = useState(false);

  if (!state.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const { AvatarUrl, Name, Email, Login } = state.user

  const handleLogout = () => {
    fetch("/api/signout", {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(_ => {
        dispatch({
          type: "LOGOUT"
        });
      })
      .catch(error => {
        dispatch({
          type: "LOGOUT"
        });
      });
  } 

  const connect = () => {
    const ws = new WebSocket(wssUrl());
    let timeout = 250; // cache the this
    let connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
        console.log("connected websocket main component");
        clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = e => {
        console.log("Socket is closed: " + e.reason);
        setDowmnloadDisabled(false);
    };

    // websocket onerror event listener
    ws.onerror = err => {
        console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket"
        );

        ws.close();
    };

    ws.onmessage = evt => {
      const message = evt.data;
      console.log(message);
      setLogs((_messages) => [..._messages, message]);
    }
  };
  
  const handleDownload = () => {
    setDowmnloadDisabled(true);
    connect();
  }

  return (
    <div className={classes.wrapper}>
      <Container size={1200} className={classes.inner}>
        <Group>
          <Group noWrap>
            <Avatar src={AvatarUrl} size={94} radius="md" />
            <div>
              <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
                {Name}
              </Text>
              <Text size="lg" weight={500} className={classes.name}>
                {Login}
              </Text>
              <Group noWrap spacing={10} mt={3}>
                <IconAt stroke={1.5} size={16} className={classes.icon} />
                <Text size="xs" color="dimmed">
                  {Email}
                </Text>
              </Group>
            </div>
          </Group>
        </Group>
        <Group>
          <Title className={classes.title} order={2}>
            Wygeneruj i pobierz paczkę z plikami do podmiany
          </Title>
          <Text color="dimmed">
            Oprócz poniższych plików, będziesz potrzebować publicznego tłumaczenia systemu, tłumaczenia dla foundry, oraz dedykowanego builda systemu. Szczegóły znajdziesz na wiki repozytorium <a href='https://github.com/silentmark/wfrp4core-pl'>tłumaczenia</a>. 
          </Text>
          
          <Group className={classes.controls}>
            <Button
                  component="a"
                  onClick={() => handleDownload()}
                  size="xl"
                  variant="default"
                  disabled={downloadDisabled}
                  className={classes.control}
                  leftIcon={<IconDownload size={20}/>}>
                Pobierz
            </Button>
            <Button
              size="xl"
              component="a"
              onClick={() => handleLogout()}
              className={classes.control}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan' }}
              leftIcon={<IconLogout size={20} />}>
                Wyloguj
            </Button>
          </Group>
        </Group>
        <Group className={classes.console}>
          <pre>
            <output>
            {logs.join("\n")}
            </output>
          </pre>
        </Group>
      </Container>
    </div>
  );
}
