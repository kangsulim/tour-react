import { Box, Container, Typography, Button, Card, CardHeader, CardContent } from "@mui/material";


export default function MainPage() {


  return (

    
    <Container className="main-page">
      <Container >
        <Typography variant="h2"> 스마트한 여행 계획의 시작</Typography>
        <Typography> 지도, 날씨, 교통 정보를 한 번에 확인하고 완벽한 여행을 계획하세요</Typography>
        <Button>여행 계획 시작하기</Button>
      </Container>
      <Box className="feature">
        <Typography variant="h3">어디로든 문의 주요 기능</Typography>
        <Box display={"flex"}>
          <Card>
            <CardHeader title="🗺️" />
            <CardContent>
              <Typography variant="h5">지도 통합</Typography>
              <Typography>카카오 지도 API를 활용하여 여행지 정보를 한눈에 확인하고 경로를 계획할 수 있습니다.</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="🗺️" />
            <CardContent>
              <Typography variant="h5">지도 통합</Typography>
              <Typography>카카오 지도 API를 활용하여 여행지 정보를 한눈에 확인하고 경로를 계획할 수 있습니다.</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="🗺️" />
            <CardContent>
              <Typography variant="h5">지도 통합</Typography>
              <Typography>카카오 지도 API를 활용하여 여행지 정보를 한눈에 확인하고 경로를 계획할 수 있습니다.</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>  
    </Container>
  );
}
