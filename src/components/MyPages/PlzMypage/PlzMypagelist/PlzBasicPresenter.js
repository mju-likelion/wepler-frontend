import React, { useState } from "react";
import MypageNav from "../PlzMypagenav";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import {
  TextTitle,
  BigProfile,
  BigBox,
  Profile,
  Infor,
  InforContents,
  Infortalent,
  Wrapper,
  ButtonList,
  ActivityDisplay,
  ActivityList,
  TextWrapterm,
  ActivityBox,
} from "./PlzBasicStyle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C9AA79",
    },
    secondary: {
      main: "#F2D4CA",
    },
  },
});

const styles = {
  form: {
    width: "160%",
    marginTop: theme.spacing(3),
  },
};

const PlzBasicPresenter = ({
  classes,
  plz_name,
  plz_phonenumber,
  plz_email,
  plz_address_big,
  plz_address_small,
  plz_continu_month,
  plz_start_time,
  plz_end_time,
  plz_talentshare,
  file,
  handleActivity,
  handleChange,
  handleWhen,
  postBoard,
  handleChangeFile,
}) => {
  // const read = <></>;

  // const modify = <></>;
  const [ismodify, setIsmodify] = useState(false);
  const plz_fields = [];
  const plz_start_day = [];
  return (
    <>
      {console.log(postBoard)}
      <MypageNav />
      <Container component="main" maxWidth="xs">
        <div>
          <TextTitle>기본 정보 수정</TextTitle>
        </div>
      </Container>
      <BigBox>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <div>
              <form className={classes.form} onSubmit={postBoard} noValidate>
                <Wrapper>
                  <Profile>
                    <img
                      style={{
                        backgroundColor: "#efefef",
                        width: "200px",
                        height: "200px",
                      }}
                      src={file}
                      alt=""
                    />
                    <div>
                      <input
                        type="file"
                        name="imgFile"
                        id="imgFile"
                        onChange={handleChangeFile}
                      />
                    </div>
                  </Profile>

                  <BigProfile>
                    <Infor>
                      <div>이름:</div>

                      <InforContents>
                        <div>{plz_name}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <div>이메일:</div>

                      <InforContents>
                        <div>{plz_email}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <div>전화번호:</div>

                      <InforContents>
                        <div>{plz_phonenumber}</div>
                      </InforContents>
                    </Infor>
                    <Infor>
                      <div>주소:</div>
                      <InforContents>
                        <div>{plz_address_big}</div>
                        <div>{plz_address_small}</div>
                      </InforContents>
                    </Infor>
                  </BigProfile>
                </Wrapper>
                <Infor>활동 정보 수정)</Infor>
                <BigProfile>
                  {ismodify ? (
                    <>
                      <Infortalent>
                        <Infor>
                          <div>활동 참여 분야:</div>
                        </Infor>
                        <Infor>
                          <InforContents>
                            <ActivityDisplay>
                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="education"
                                      onChange={handleActivity}
                                      value={plz_fields.education}
                                      color="primary"
                                    />
                                  }
                                  label="교육"
                                />
                              </ActivityBox>
                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="council"
                                      onChange={handleActivity}
                                      value={plz_fields.council}
                                      color="primary"
                                    />
                                  }
                                  label="상담"
                                />
                              </ActivityBox>
                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="making"
                                      onChange={handleActivity}
                                      value={plz_fields.making}
                                      color="primary"
                                    />
                                  }
                                  label="메이킹"
                                />
                              </ActivityBox>
                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="activity"
                                      value={plz_fields.activity}
                                      onChange={handleActivity}
                                      color="primary"
                                    />
                                  }
                                  label="야외활동"
                                />
                              </ActivityBox>
                            </ActivityDisplay>
                            <ActivityDisplay>
                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="culture"
                                      onChange={handleActivity}
                                      value={plz_fields.culture}
                                      color="primary"
                                    />
                                  }
                                  label="문화"
                                />
                              </ActivityBox>

                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="trip"
                                      onChange={handleActivity}
                                      value={plz_fields.trip}
                                      color="primary"
                                    />
                                  }
                                  label="여행"
                                />
                              </ActivityBox>
                              <ActivityBox>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="etc"
                                      onChange={handleActivity}
                                      value={plz_fields.etc}
                                      color="primary"
                                    />
                                  }
                                  label="기타"
                                />
                              </ActivityBox>
                            </ActivityDisplay>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>시작 날짜:</div>

                          <InforContents>
                            <input
                              type="date"
                              name="plz_talentshare"
                              onChange={handleChange}
                              value={plz_talentshare}
                            />
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>요일:</div>

                          <InforContents>
                            <ActivityList>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="monday"
                                  onChange={handleWhen}
                                  value={plz_start_day.mon}
                                />
                                <div>월</div>
                              </TextWrapterm>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="tuesday"
                                  onChange={handleWhen}
                                  value={plz_start_day.tues}
                                />
                                <div>화</div>
                              </TextWrapterm>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="wednesday"
                                  onChange={handleWhen}
                                  value={plz_start_day.wednes}
                                />
                                <div>수</div>
                              </TextWrapterm>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="thursday"
                                  onChange={handleWhen}
                                  value={plz_start_day.thurs}
                                />
                                <div>목</div>
                              </TextWrapterm>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="friday"
                                  onChange={handleWhen}
                                  value={plz_start_day.fri}
                                />
                                <div>금</div>
                              </TextWrapterm>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="saturday"
                                  onChange={handleWhen}
                                  value={plz_start_day.satur}
                                />
                                <div>토</div>
                              </TextWrapterm>
                              <TextWrapterm>
                                <input
                                  type="checkbox"
                                  name="sunday"
                                  onChange={handleWhen}
                                  value={plz_start_day.sun}
                                />
                                <div>일</div>
                              </TextWrapterm>
                            </ActivityList>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>시작시간:</div>

                          <InforContents>
                            <TextWrapterm>
                              <input
                                type="time"
                                name="plz_start_time"
                                onChange={handleChange}
                                value={plz_start_time}
                              />
                            </TextWrapterm>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>종료시간:</div>

                          <InforContents>
                            <TextWrapterm>
                              <input
                                type="time"
                                name="plz_end_time"
                                onChange={handleChange}
                                value={plz_end_time}
                              />
                            </TextWrapterm>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>지속기간:</div>
                          <InforContents>
                            <TextWrapterm>
                              <input
                                type="number"
                                name="plz_continu_month"
                                placeholder="ex) 5"
                                onChange={handleChange}
                                value={plz_continu_month}
                              />
                              <div>개월</div>
                            </TextWrapterm>
                          </InforContents>
                        </Infor>
                      </Infortalent>
                    </>
                  ) : (
                    <>
                      <Infortalent>
                        <Infor>
                          <div>활동 참여 분야:</div>
                          <InforContents>
                            <div>{plz_fields}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>시작 날짜:</div>

                          <InforContents>
                            <div>{plz_talentshare}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>요일:</div>

                          <InforContents>
                            <div>{plz_start_day}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>시작시간:</div>

                          <InforContents>
                            <div>{plz_start_time}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>종료시간:</div>

                          <InforContents>
                            <div>{plz_end_time}</div>
                          </InforContents>
                        </Infor>
                        <Infor>
                          <div>지속기간:</div>
                          <InforContents>
                            <div>{plz_continu_month}</div>
                          </InforContents>
                        </Infor>
                      </Infortalent>
                    </>
                  )}
                </BigProfile>
              </form>
            </div>
            {ismodify ? (
              <ButtonList>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  margin="normal"
                  onClick={postBoard}
                >
                  완료하기
                </Button>
              </ButtonList>
            ) : (
              <ButtonList>
                <Button
                  variant="contained"
                  color="secondary"
                  margin="normal"
                  onClick={() => setIsmodify(true)}
                >
                  수정하기
                </Button>
              </ButtonList>
            )}

            <Box mt={5} />
          </Container>
        </ThemeProvider>
      </BigBox>
    </>
  );
};

export default withStyles(styles)(PlzBasicPresenter);
