import React from "react";
import Card from "@mui/material/Card";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Posts = () => {
  const [open, openChange] = useState(false);

  const functionopenmodal = () => {
    openChange(true);
  };

  const functionclosemodal = () => {
    openChange(false);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            display: "flex",
            width: "138px",
            height: "33px",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: "0",
            color: "#EAFAFA",
            fontFamily: "Montserrat",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            paddingLeft: "36px",
            marginTop: "20px",
          }}
        >
          POSTS
        </Typography>
        <div
          style={{
            display: "flex",
            width: "218px",
            height: "58px",
            paddingTop: "16px",
            paddingBottom: "16px",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div>
            <Link to="/postsmodal">
              <Button
                onClick={functionopenmodal}
                style={{
                  color: "#000814",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  letterSpacing: "0.7px",
                  textTransform: "uppercase",
                  borderRadius: "20px",
                  background: "#68ECED",
                }}
                variant="contained"
              >
                + Create Post
              </Button>
              {/* <PostsModal /> */}
            </Link>
          </div>

          <div>
            <div>
              <Dialog
                open={open}
                onClose={functionclosemodal}
                fullWidth
                maxWidth="md"
              >
                <div style={{ backgroundColor: "#1E222E" }}>
                  <DialogTitle
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#FFF",
                      fontFamily: "Montserrat",
                      fontSize: "32px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    Create Post
                  </DialogTitle>
                  <DialogContent>
                    <Stack
                      spacing={2}
                      margin={2}
                      style={{
                        color: "#FFF",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <div>
                            <Typography>Username</Typography>
                            <input
                              placeholder="Name"
                              label="Name"
                              style={{
                                borderRadius: "44px",
                                width: "332px",
                                height: "46px",
                                background: "#2E3549",
                              }}
                            />
                          </div>
                          <div>
                            <Typography>User Id</Typography>
                            <input
                              label="Name"
                              style={{
                                borderRadius: "44px",
                                width: "332px",
                                height: "46px",
                                background: "#2E3549",
                              }}
                            />
                          </div>
                          <div>
                            <Typography>Title</Typography>
                            <input
                              label="Name"
                              style={{
                                borderRadius: "44px",
                                width: "332px",
                                height: "46px",
                                background: "#2E3549",
                              }}
                            />
                          </div>

                          <div>
                            <Typography>Body</Typography>{" "}
                            <input
                              label="Name"
                              style={{
                                borderRadius: "44px",
                                width: "332px",
                                height: "46px",
                                background: "#2E3549",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "40px",
                            marginTop: "50px",
                          }}
                        >
                          <Button
                            onClick={functionclosemodal}
                            variant="contained"
                            style={{
                              display: "flex",
                              width: "218px",
                              height: "58px",
                              color: "#11182A",
                              background: "#FFF",
                              borderRadius: "20px",
                              gap: "10px",
                              paddingTop: "16px",
                              paddingBottom: "16px",
                              paddingRight: "56px",
                              paddingLeft: "56px",
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            style={{
                              display: "flex",
                              width: "218px",
                              height: "58px",
                              color: "#11182A",
                              background: "#68ECED",
                              borderRadius: "20px",
                              gap: "10px",
                              paddingTop: "16px",
                              paddingBottom: "16px",
                              paddingRight: "56px",
                              paddingLeft: "56px",
                            }}
                            variant="contained"
                          >
                            Create Post
                          </Button>
                        </div>
                      </div>
                    </Stack>
                  </DialogContent>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          style={{
            width: "1351px",
            height: "526px",
            flexShrink: "0",
            backgroundColor: "#000814",
            fill: "rgba(30, 34, 46, 0.35)",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                color: "#D6D6D6",
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "0.7px",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              <h4>USER ID</h4>
              <h4>TITLE</h4>
              <h4>ACTIONS</h4>
            </div>

            <div style={{ padding: "10px", gap: "100px" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "#D6D6D6",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                    padding: "20px",
                    gap: "20px",
                  }}
                >
                  <div>#1</div>
                  <div>History of Human World</div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 20H21"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.1882C20.0665 4.44557 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55442 19.9598 5.81179C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                      >
                        <path
                          d="M1 4.99991H3H19"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "#D6D6D6",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                    padding: "20px",
                    gap: "20px",
                  }}
                >
                  <div>#1</div>
                  <div>History of Human World</div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 20H21"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.1882C20.0665 4.44557 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55442 19.9598 5.81179C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                      >
                        <path
                          d="M1 4.99991H3H19"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "#D6D6D6",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                    padding: "20px",
                    gap: "20px",
                  }}
                >
                  <div>#1</div>
                  <div>History of Human World</div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 20H21"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.1882C20.0665 4.44557 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55442 19.9598 5.81179C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                      >
                        <path
                          d="M1 4.99991H3H19"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "#D6D6D6",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.7px",
                    textTransform: "uppercase",
                    padding: "20px",
                    gap: "20px",
                  }}
                >
                  <div>#1</div>
                  <div>History of Human World</div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 20H21"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.1882C20.0665 4.44557 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55442 19.9598 5.81179C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                      >
                        <path
                          d="M1 4.99991H3H19"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 9.99991V15.9999"
                          stroke="#D6D6D6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Posts;
