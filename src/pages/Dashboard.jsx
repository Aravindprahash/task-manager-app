import Board from "../components/Board";
import { Button, Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Dashboard = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleLogout} sx={{ m: 2 }}>Logout</Button>
      <Board />
    </Box>
  );
};

export default Dashboard;
