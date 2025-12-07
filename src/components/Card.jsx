import { Card as MuiCard, CardContent, Typography } from "@mui/material";

const Card = ({ task }) => {
  return (
    <MuiCard sx={{ mt: 1, backgroundColor: "#f5f5f5" }}>
      <CardContent>
        <Typography variant="subtitle1">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">{task.date.toLocaleDateString()}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
