import React, { useState } from "react";
// Question no 39232
import { Link } from "react-router-dom";
import { create, all } from "mathjs";
import { styled, makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
const config = {};
const math = create(all, config);
const CustomButton = styled("span")(({ theme }) => ({
  background: "#FCC9C9",
  borderRadius: "8px",
  color: "#F23A5E",
  padding: theme.spacing(2, 4),
  fontWeight: "bolder",
}));

const AngleInput = styled("input")(({ theme }) => ({
  color: "#F23A5E",
  background: "#fff",
  padding: "5px 10px",
  borderRadius: "6px",
  border: "1px solid gray",
  width: "20px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#F23A5E",
  fontWeight: 600,
  fontSize: "18px",
  color: "#fff",
  padding: theme.spacing(2, 4),
  transition: ".2s ease-in-out",

  "&:hover": {
    background: "#FCC9C9",
    color: "#F23A5E",
  },
}));

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#FBFBFB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    background: "#EFF5F8",
    borderRadius: "14px",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingBottom: "110px",
    position: "relative",
    marginTop: 67,
  },
  styleButton: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "-25px",
    width: "100%",
  },
  explination: {
    background: "#EAEAEA",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: 30,
    borderRadius: "14px",
    width: "80%",
  },
  triangle: {
    // width: 200,
    // height: 200,
    // borderLeft: '150px solid transparent',
    // borderRight: '150px solid transparent',

    // borderBottom: '200px solid #FCC9C9',
    // position: 'relative',
    fill: "transparent",
    stroke: "#FCC9C9",
    strokeWidth: 8,
    transition: "all 0.8s ease-in-out",
  },
  topAngle: {
    position: "absolute",
    top: "-20px",
    fontWeight: "bolder",
    color: "#F23A5E",
  },
  bottomLeftAngle: {
    position: "absolute",
    top: 200,
    left: 150,
    fontWeight: "bolder",
    color: "#F23A5E",
  },
  bottomRightAngle: {
    position: "absolute",
    top: 200,
    right: 150,
    fontWeight: "bolder",
    color: "#F23A5E",
  },
  footer: {
    background: "#F23A5E",
    color: "#fff",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    marginTop: "2rem",
    padding: theme.spacing(2, 0),
  },
}));
/* 
const pointsDistance = (x1, x2, y1, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); */

/* const getCoordinates = (a, b, c, x1, y1, x2, y2) => {
  const l1 = pointsDistance(x1, x2, y1, y2);

  const l2 = (Math.sin(b) * l1) / Math.sin(c);
  const l3 = (Math.sin(a) * l1) / Math.sin(c);

  console.log(a, b, c);
  console.log(l1, l2, l3);

  const x3 = x1 + l2 * Math.cos(a);
  const y3 = y1 + l2 * Math.sin(a);

  console.log(x3, y3);

  return { x1, x2, y1, y2, x3, y3 };
}; */

export const Ratio = () => {
  const classes = useStyles();

  const [value1, setvalue1] = useState(0);
  const [prenum, setprenum] = useState(0);
  const [preden, setpreden] = useState(0);
  const [num, setnum] = useState(0);
  const [den, setden] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function getvalue1(e) {
    var x = e.target.value;

    setvalue1(x);
    setShowResult(false);
  }

  function calculate() {
    let ans = 0;
    var p = parseFloat(value1);
    var m = 10;
    if (p === 2) {
      m = 100;
    }
    if (p === 3) {
      m = 1000;
    }

    var pk = (p * m) / m;
    setprenum(p * m);
    setpreden(m);
    ans = 1 / pk;
    var frac = math.fraction(ans);
    console.log(frac.n, frac.d);
    setnum(frac.n);
    setden(frac.d);
    console.log(ans);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className={classes.header}>
        <Typography variant="h2">BobPrep</Typography>
      </div>
      <Container>
        <Box display="flex" justifyContent="center" sx={{ marginTop: 45 }}>
          <Box sx={{ width: "50%" }}>
            <Stack direction="row" justifyContent="space-between">
              <CustomButton>Subject - Algebra</CustomButton>
              <CustomButton>Topic - Integers</CustomButton>
            </Stack>
          </Box>
        </Box>
        <Box className={classes.questionContainer}>
          <Typography variant="h5" component="h1">
            Question 2
          </Typography>
          <Typography variant="body1" style={{ fontSize: "20px" }}>
            If x/y=
            <AngleInput value={value1} onChange={getvalue1} />, then y/x = ?
          </Typography>
          <Box className={classes.styleButton}>
            <StyledButton
              style={{ width: "15%" }}
              onClick={() => {
                calculate();
                setShowResult(true);
              }}
            >
              Calculate
            </StyledButton>
          </Box>
        </Box>
        {showResult && (
          <Box display="flex" sx={{ marginTop: 80 }}>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ gap: 30, width: "50%" }}
            >
              <Box>
                <Typography variant="h4">
                  Answer:{num}/{den}
                  {/* <AngleInput>
                  90 <sup>o</sup>
                </AngleInput> */}
                </Typography>
              </Box>
              <Box className={classes.explination}>
                <Typography variant="body2">Explanation</Typography>
                We are told that x/y={value1}, or {prenum}/{preden}. Therefore,
                {preden}/{prenum} will be{num}/{den}
                <Typography
                  variant="body2"
                  style={{ color: "#F23A5E", fontWeight: "bolder" }}
                ></Typography>
                {/* <AngleInput>
                90<sup>o</sup>
              </AngleInput> */}
              </Box>
            </Box>
            <Box sx={{ width: "50%" }} display="flex" justifyContent="flex-end">
              <svg height={500} width={500}>
                <polygon
                  /*   style={{
                    transform: `translate(${padding}px, ${padding / 2}px)`,
                  }} */
                  // ${coordinates.x1},${coordinates.y1}

                  className={classes.triangle}
                />
                Sorry, your browser does not support inline SVG.
              </svg>
            </Box>
          </Box>
        )}
        <Box>
          <StyledButton>
            <Link to="/3">Next</Link>
          </StyledButton>
        </Box>
        <Box>
          <StyledButton>
            <Link to="/1">Previous</Link>
          </StyledButton>
        </Box>
      </Container>
      <div style={{ marginTop: "auto" }}>
        <div className={classes.footer}>
          <Typography variant="h4">DENTAL WORLD</Typography>
        </div>
      </div>
    </div>
  );
};
