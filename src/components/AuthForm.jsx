import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const AuthForm = ({ onSubmit, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300, mx: "auto", mt: 10 }}
    >
      <Typography variant="h5" textAlign="center">{title}</Typography>
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <Button type="submit" variant="contained">{title}</Button>
    </Box>
  );
};

export default AuthForm;
