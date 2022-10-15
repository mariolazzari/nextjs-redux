import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
} from "../redux/slices/counterSlice";
import { getLastPostsRequest, selectPosts } from "../redux/slices/postSlice";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";
import Posts from "../src/Posts";

export default function Home() {
  const value = useSelector(selectCount);
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  const styles = {
    box: {
      my: 4,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 50,
      margin: 1,
    },
  };

  const buttons: ButtonProps[] = [
    {
      children: "+",
      onClick: _e => dispatch(increment()),
      color: "primary",
    },
    {
      children: "-",
      onClick: _e => dispatch(decrement()),
      color: "secondary",
    },
  ];

  useEffect(() => {
    dispatch(getLastPostsRequest(value));
  }, [dispatch, value]);

  return (
    <Container maxWidth="lg">
      <Box sx={styles.box}>
        <Typography variant="h4" gutterBottom>
          Total posts: {value}
        </Typography>

        <Posts posts={posts} />

        <Box>
          {buttons.map((b, i) => (
            <Button
              key={i}
              sx={styles.button}
              variant="contained"
              onClick={b.onClick}
              color={b.color}
            >
              {b.children}
            </Button>
          ))}
        </Box>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
