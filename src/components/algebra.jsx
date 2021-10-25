import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled, makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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

export const Algebra = () => {
  const classes = useStyles();

  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);
  const [result, setresult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function getvalue1(e) {
    var x = e.target.value;

    setvalue1(x);
    setShowResult(false);
  }
  function getvalue2(e) {
    setvalue2(e.target.value);
    setShowResult(false);
    console.log(e.target.value);
  }

  function calculate() {
    let ans = 0;
    for (var i = 1; i < value1; i += 2) {
      ans += i;
      console.log(i);
    }
    ans = ans + parseInt(value2);
    console.log(value2);
    console.log(ans);
    setresult(ans);
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
            Question 1
          </Typography>
          <Typography variant="body1" style={{ fontSize: "20px" }}>
            Function h(m) equals the sum of all non - negative odd integers from
            0 to h. For instance: h(10)=1+3+5+7+9. What is the value of h(
            <AngleInput value={value1} onChange={getvalue1} />){""} +{" "}
            <AngleInput value={value2} onChange={getvalue2} />?
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
                  Answer:{result}
                  {/* <AngleInput>
                  90 <sup>o</sup>
                </AngleInput> */}
                </Typography>
              </Box>
              <Box className={classes.explination}>
                <Typography variant="body2">Explanation</Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#F23A5E", fontWeight: "bolder" }}
                >
                  This is Just a example for m=30. <br /> h(30) = 1 + 3 + 5 + 7
                  + 9 + 11 + 13 + 15 + 17 + 19 + 21 + 23 + 25 + 27 + 29 = 225.
                  h(30) + 10 = 225 + 10 = 235.
                </Typography>
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
            <Link to="/2">Next</Link>
          </StyledButton>
        </Box>
        <Box>
          <StyledButton>
            <Link to="/">Previous</Link>
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
