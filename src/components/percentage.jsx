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
  width: "50px",
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

export const Percentage = () => {
  const classes = useStyles();
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [value3, setvalue3] = useState("");
  //const [result, setresult] = useState("");

  const [showResult, setShowResult] = useState(false);

  /*   function setdata(x, y, z) {
    x = value1;
    y = value2;
    z = value3;
    const res = value2;
    setresult(res);
    setShowResult(false);
  } */

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
              <CustomButton>Subject - Rates-Ratio-Percentage</CustomButton>
              <CustomButton>Topic - Percentages</CustomButton>
            </Stack>
          </Box>
        </Box>
        <Box className={classes.questionContainer}>
          <Typography variant="h5" component="h1">
            Question 2
          </Typography>
          <Typography variant="body1" style={{ fontSize: "20px" }}>
            <AngleInput
              value={value1}
              onChange={(e) => setvalue1(e.target.value)}
            />{" "}
            % of{" "}
            <AngleInput
              value={value2}
              onChange={(e) => setvalue2(e.target.value)}
            />{" "}
            is what percent of
            {""}
            <AngleInput
              value={value3}
              onChange={(e) => setvalue3(e.target.value)}
            />{" "}
            ?
          </Typography>
          <Box className={classes.styleButton}>
            <StyledButton
              style={{ width: "15%" }}
              onClick={function (event) {
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
                  Answer:{value2}
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
                  Remember a golden principle of GMAT percentage problems: x
                  percent of y equals y percent of x. In our case we could
                  rephrase the problem as {value1} percent of {value2} is{" "}
                  {value2} percent of {value1}, and our answer is choice B.
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
            <Link to="/1">Next</Link>
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
