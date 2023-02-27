import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../HomePages/Button";
import ItemDetail from "../PlayerDetail/ItemDetail";
import LocationHeader from "../SignUp/LocationHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../../assets/css/PersonalInfo.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUpdateUserInfo } from "../../service/userService";
import { setUserUpdateActionService } from "../../redux/action/userAction";
import { UPDATE_USER_INFOR } from "../../redux/constant/userConstant";
import swal from "sweetalert";
import { userLocalService } from "../../service/localService";
import { https } from "../../service/configURL";

function createData(name, scores) {
  return { name, scores };
}

function PersonalInfo() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.userReducer.user.user;
  });

  useEffect(() => {
    const updateUserInfo = async () => {
      const response = await https.get(
        `/users/${JSON.parse(localStorage.getItem("USER_LOCAL")).user.id}`
      );
      // console.log("ewsss", response.data);
      if (
        user &&
        (user.score !== response.data.score ||
          user.snake_score !== response.data.snake_score ||
          user.menja_score !== response.data.menja_score ||
          user.color_blast_score !== response.data.color_blast_score)
      ) {
        let userJson = JSON.parse(localStorage.getItem("USER_LOCAL"));
        localStorage.setItem(
          "USER_LOCAL",
          JSON.stringify({
            ...userJson,
            user: response.data,
          })
        );
        window.location.reload();
      }
    };
    updateUserInfo();
  }, []);

  const handleLogout = async () => {
    // delete data from localStorage
    navigate("/signin");
    userLocalService.remove();
    window.location.reload();
  };

  const rows = [
    createData("Color Blast", user.color_blast_score),
    createData("Menja", user.menja_score),
    createData("Snake", user.snake_score),
    createData("2048", user.score),
  ];

  // let regexPassword =
  //   /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
  let [loading, setLoading] = useState(false);
  // Formik form
  const onUpdate = useUpdateUserInfo();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name must not be blank"),

      password: Yup.string().required("Password must not be empty"),
      // .matches(
      //   // regexPassword,
      //   "Password is shorter, it more than the minimum allowed length 8 characters"
      // ),
    }),
    onSubmit: (values, formik) => {
      onUpdate(values).then((rs) => {
        if (rs) {
          user.name = values.name;
          user.password = values.password;
          console.log(user);
          swal({
            title: "Update successful",
            icon: "success",
            timer: 2000,
            button: false,
          });
          setShow(false);
          handleLogout();
        }
      });
      //   dispatch(setUserUpdateActionService(values, formik));
    },
  });

  return (
    <div>
      <LocationHeader
        title={"Personal Information"}
        location={"Personal Info"}
      />

      <div className="player__detail">
        <div className="container">
          <div className="playerDetail__content">
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
                  <h4 className="profileDetail__title">{user?.name}</h4>
                  <h5 className="profileDetail__level">{user?.email}</h5>
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
                <span className="title-tag">PERSONAL PROFILE</span>
                <h4>Space Game expert</h4>
                {/* <p>
                  It is a long established fact that a reader will be distracted
                  readable content page when looking at it layout the point
                  using lorem Ipsum that it has more-or-less normal distribution
                  lette desktop packages and web page now editors.
                </p>
                <p>
                  It is a long established fact that and reader will been
                  distracted readable content page when looking at it layout the
                  point using desktop packages and web page now editors.
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

                <div
                  className="btnTem"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <a
                    href="#"
                    className="btn btn-link no-underline"
                    id="btnDetail"
                  >
                    Update Now
                  </a>
                </div>

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
          </div>
        </div>
      </div>

      {/* Modal  */}
      {show ? (
        <div className="modalForm" style={{ paddingLeft: "0" }}>
          <div className="modalForm__wrapper">
            <div className="modal-content">
              <div className=" modal-header modalUpdateHeader">
                <h5 className="modal-title">Update Personal Information</h5>

                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  ×
                </button>
              </div>
              <div className="modal-body modalUpdate">
                <form onSubmit={formik.handleSubmit}>
                  <h6>Full Name</h6>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="errorMessage">{formik.errors.name}</div>
                  ) : (
                    <div className="message"></div>
                  )}

                  <h6>Password</h6>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="errorMessage">{formik.errors.password}</div>
                  ) : (
                    <div className="message"></div>
                  )}

                  {/* Button Form  */}
                  <div className="form-footer modal-footer">
                    <button type="submit" className="btnSubmit">
                      Complete
                    </button>
                    <button
                      type="button"
                      className="btnSubmit btnClose"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PersonalInfo;
