import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../slices/counterSlice";
import { RootState } from "../store";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Button from "@mui/material/Button";

export default function Home() {
  const value = useSelector(selectCount);
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

  const buttons = [
    { label: "+", onClick: () => dispatch(increment()), color: "primary" },
    { label: "-", onClick: () => dispatch(decrement()), color: "secondary" },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={styles.box}>
        <Typography variant="h4" component="h1" gutterBottom>
          Counte value: {value}
        </Typography>

        <Box>
          {buttons.map(b => (
            <Button
              key={b.label}
              sx={styles.button}
              variant="contained"
              onClick={b.onClick}
            >
              {b.label}
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
