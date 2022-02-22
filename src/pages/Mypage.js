import React from "react";

import { Grid, Text, Button, IconButton, Image } from "../elements";

const Mypage = (props) => {
  return (
    <React.Fragment>
      <Grid
        maxWidth="935px"
        margin="0 auto"
        padding="30px 20px 0px 20px"
        bg="#ddd"
      >
        <Grid margin="0 0 44px 0" is_flex bg="#ddd">
          <Grid width="40%">
            <Image imageType="mypage_profile" size="150" />
          </Grid>
          <Grid>
            <Grid display="flex" alignItems="center" margin="0 0 20px 0">
              <Text size="28px" margin="0 20px 0 0">
                아이디
              </Text>
              <Button
                bg="#fff"
                color="#000"
                border
                borderRadius="4px"
                fontSize="14px"
                width="93px"
              >
                프로필 편집
              </Button>
            </Grid>
            <Grid display="flex" margin="0 0 20px 0">
              <Text margin="0 30px 0 0">
                게시글 <span>1</span>
              </Text>
              <Text margin="0 30px 0 0">
                팔로워 <span>1</span>
              </Text>
              <Text margin="0 30px 0 0">
                팔로우 <span>1</span>
              </Text>
            </Grid>
            <Grid>
              <Text bold>닉네임 </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid borderTop="1px solid" bg="#ccc">
          <Grid is_flex margin="0 0 25px 0">
            <Button width="70px">
              <IconButton Table margin="0 8px 0 0" color="#FFFFFF"></IconButton>
              <span>게시물</span>
            </Button>
          </Grid>
        </Grid>
        <Grid
          Width="935px"
          height="100"
          wraper="wrap"
          bg="#bbb"
          display="flex"
          justifyContent="flex-start"
        >
          <Grid maxWidth="284px" maxHeight="284px" margin="5px 7px">
            <Image
              imageType="rectangle"
              src="https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj"
            />
          </Grid>

          <Grid maxWidth="284px" maxHeight="284px" margin="5px 7px">
            <Image
              imageType="rectangle"
              src="https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj"
            />
          </Grid>
          <Grid maxWidth="284px" maxHeight="284px" margin="5px 7px">
            <Image
              imageType="rectangle"
              src="https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj"
            />
          </Grid>
          <Grid maxWidth="284px" maxHeight="284px" margin="5px 7px">
            <Image
              imageType="rectangle"
              src="https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj"
            />
          </Grid>
          <Grid maxWidth="284px" maxHeight="284px" margin="5px 7px">
            <Image
              imageType="rectangle"
              src="https://yt3.ggpht.com/ytc/AKedOLSF4SZplqW7WRpiWvJ_AXMa9UBwLd-U6KBeWVS2yg=s900-c-k-c0x00ffffff-no-rj"
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Mypage;
