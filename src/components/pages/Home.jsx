import React from 'react';
import ButtonWrap from '../button/ButtonWrap';
import { Box, Typography } from '@mui/material';

const Home = () => {
  const introText =
    "프로그램의 시각적 표현에 개입하여 즉시 처리하는 점이 저의 적극적인 성향과 잘 어우러집니다.\n사용자 중심의 웹 경험을 만들기를 좋아하며, 최신 기술과 디자인 트렌드에 공부하며 도전하고 있습니다.\n적극적이고 협력적인 성향으로, 팀 내에서의 원활한 커뮤니케이션과 협업을 중요하게 생각합니다.\n다양한 배경과 전문성을 가진 동료들과 소통하며, 함께 목표를 달성하는 것을 선호합니다.\n코드를 통해 이야기를 풀고, 사용자와 소통하는 것을 즐깁니다.";
  
  return (
    <Box sx={{ width: "100%", padding:"5rem 0"}}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          sx={{
            color: "#274D5A",
            fontSize: "40px",
            fontWeight: "bold",
          }}>
          Frontend Developer
        </Typography>
        <Box
          sx={{
            width: "70px",
            height: "4px",
            background: "#274D5A",
            textAlign: "center",
          }}
        />
      </Box>

      <Typography
        sx={{
          whiteSpace: "pre-line",
          textAlign: "center",
          fontSize: "14px",
          margin: "5rem 0",
        }}>
        {introText}
      </Typography>

      <Box sx={{ textAlign: "center" }}>
        <ButtonWrap />
      </Box>
    </Box>
  );
};

export default Home;