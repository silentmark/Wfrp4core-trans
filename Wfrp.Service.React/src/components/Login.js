import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { createStyles, Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon, DiscordIcon } from '@mantine/ds';
import { AuthContext } from "../App";

const BREAKPOINT = '@media (max-width: 1200px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
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
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
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
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export default function Login() {

  const { classes } = useStyles();
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  useEffect(() => {
    const match = document.cookie.match(new RegExp('(^| )IsAuthenticated=([^;]+)'));
    if (match && match[2] === "true") {
      fetch("/api/profile", {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true }
          });
        })
        .catch(error => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={classes.wrapper}>
      <Container size={1200} className={classes.inner}>
        <h1 className={classes.title}>
          Polska Wersja{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            dla Foundry VTT
          </Text>{' '}
          Systemu Warhammer Fantasy Roleplay 4ed.
        </h1>

        <Text className={classes.description} color="dimmed">
          Aby uzyskać dostęp do tłumaczenia, musisz posiadać konto na github oraz dołączyć do prywatnego <a href='https://github.com/silentmark/wfrp4core-pl'>repozytorium</a>. 
        </Text>

        <Group className={classes.controls}>
        <Button
            component="a"
            href="/api/signin"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
                    Zaloguj
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://discordapp.com/users/579575046775767040"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            leftIcon={<DiscordIcon size={20} />}
          >
            Znajdź mnie na Discord
          </Button>
        </Group>
      </Container>
    </div>
  );
}