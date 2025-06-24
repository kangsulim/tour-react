import { Box, Container, Typography } from "@mui/material";

export default function PlanPage() {
  

  return (
    <Box sx={{
      minHeight: "calc(100vh - 80px)",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      width: "100%",
      flex: 1,
    }}>
      <Container sx={{
        width: "70%",
        height: "15vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        backgroundImage: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        textAlign: "left",
        borderRadius: "10px",
        marginTop: 4,
        marginBottom: 4,
        padding: 2,
        color: "#fff",
      }}>
        <Container sx={{
          padding: 2,
          lineHeight:  1.5,
        }}>
          <Typography variant="h3" fontWeight={"normal"}>✈️ 나만의 여행 계획</Typography>
          <Typography variant="h6" fontWeight={"light"}>완벽한 여행을 위한 스마트한 계획을 세워보세요</Typography> 
        </Container>
      </Container>
      <Box>
        
      </Box>
    </Box>
  );
}