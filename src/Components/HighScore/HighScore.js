import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import LocationHeader from "../SignUp/LocationHeader";
import { useGetAllUsers } from "../../service/userService";
import { https } from "../../service/configURL";

// function createData(name, score, color_blast_score, menja_score, snake_score) {
//   return { name, score, color_blast_score, menja_score, snake_score };
// }
function createData(data) {
  console.log(data);
  return data;
}

function HighScore() {
  const [listUsersFirstHighestScore, setListUsersFirstHighestScore] = useState(
    []
  );
  const [listUsersSecondHighestScore, setListUsersSecondHighestScore] =
    useState([]);
  const [listUsersThirdHighestScore, setlistUsersThirdHighestScore] = useState(
    []
  );

  const onGetAllUser = useGetAllUsers();
  useEffect(() => {
    const getUserHighertScore = async () => {
      const response = await https.get(`/users/getuserhighestscore`);
      console.log("res", response.data);
      setListUsersFirstHighestScore((prev) => [
        ...prev,
        response.data[0],
        response.data[3],
        response.data[6],
        response.data[9],
      ]);
      setListUsersSecondHighestScore((prev) => [
        ...prev,
        response.data[1],
        response.data[4],
        response.data[7],
        response.data[10],
      ]);
      setlistUsersThirdHighestScore((prev) => [
        ...prev,
        response.data[2],
        response.data[5],
        response.data[8],
        response.data[11],
      ]);
    };
    getUserHighertScore();
  }, []);

  const user = useSelector((state) => {
    return state.userReducer.user.user;
  });

  return (
    <div>
      <LocationHeader title={"High Score"} location={"High Score"} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                User Name
              </TableCell> */}
              <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                Color Blast
              </TableCell>
              <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                Menja
              </TableCell>
              <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                Snake
              </TableCell>
              <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                2048
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {console.log("weeeeee", listUsersColorBlast)} */}
            {/* First row (Highest Score)  */}
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {listUsersFirstHighestScore &&
                listUsersFirstHighestScore.map((item, index) => {
                  if (index === 0) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxColorBlastScore})`}</TableCell>
                    );
                  } else if (index === 1) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxMenjaScore})`}</TableCell>
                    );
                  } else if (index === 2) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxSnakeScore})`}</TableCell>
                    );
                  } else if (index === 3) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxTwoScore})`}</TableCell>
                    );
                  }
                })}
            </TableRow>

            {/* Second row (Second Highest Score)  */}
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {listUsersSecondHighestScore &&
                listUsersSecondHighestScore.map((item, index) => {
                  if (index === 0) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxColorBlastScore})`}</TableCell>
                    );
                  } else if (index === 1) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxMenjaScore})`}</TableCell>
                    );
                  } else if (index === 2) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxSnakeScore})`}</TableCell>
                    );
                  } else if (index === 3) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxTwoScore})`}</TableCell>
                    );
                  }
                })}
            </TableRow>

            {/* Third row (Third Highest Score)  */}
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {listUsersThirdHighestScore &&
                listUsersThirdHighestScore.map((item, index) => {
                  if (index === 0) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item.maxColorBlastScore})`}</TableCell>
                    );
                  } else if (index === 1) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item?.maxMenjaScore})`}</TableCell>
                    );
                  } else if (index === 2) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item?.maxSnakeScore})`}</TableCell>
                    );
                  } else if (index === 3) {
                    return (
                      <TableCell
                        key={index}
                      >{`${item.name} (${item?.maxTwoScore})`}</TableCell>
                    );
                  }
                })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HighScore;
