import React from "react";
import Button from "../HomePages/Button";
import "../../assets/css/itemDetail.css";
import { useGetAllUsers } from "../../service/userService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function createData(name, scores) {
  return { name, scores };
}

export default function ItemDetail({ data }) {
  const rows = [
    createData("Color Blast", data?.color_blast_score),
    createData("Menja", data?.menja_score),
    createData("Snake", data?.snake_score),
    createData("2048", data?.score),
  ];
  return (
    <div className="item__detail">
      {/* The Left  */}
      <div className="item__left">
        {/* avatar  */}
        <div className="detailLeft__avatar">
          <img
            src={`/img/player${Math.floor(Math.random() * 5 + 1)}.png`}
            alt=""
          />
        </div>

        {/* profile  */}
        <div className="detailLeft__profile">
          <h4 className="profileDetail__title">{data?.name}</h4>
          <h5 className="profileDetail__level">{data?.email}</h5>
          <div className="profileDetail__bgBtn">
            <img
              width={351}
              height={126}
              src="https://htmldemo.net/bonx/bonx/assets/img/others/tam-text-shape2.webp"
              alt
            />
          </div>
        </div>
      </div>
      {/* The Left  */}

      {/* The Right  */}
      <div className="item__right">
        <span className="title-tag">PLAYER PROFILE</span>
        <h4>Space Game expert</h4>
        {/* <p>
          It is a long established fact that a reader will be distracted
          readable content page when looking at it layout the point using lorem
          Ipsum that it has more-or-less normal distribution lette desktop
          packages and web page now editors.
        </p>
        <p>
          It is a long established fact that and reader will been distracted
          readable content page when looking at it layout the point using
          desktop packages and web page now editors.
        </p> */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                  Games
                </TableCell>
                <TableCell style={{ fontSize: 18, fontWeight: 700 }}>
                  Scores
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.scores}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button value={"Contact Now"} id={"btnDetail"} />

        {/* social link  */}
        <div className="social-link">
          <a
            href="https://www.twitch.tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      {/* The Right  */}
    </div>
  );
}
