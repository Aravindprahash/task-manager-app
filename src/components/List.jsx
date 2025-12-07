import { Card as MuiCard, CardContent, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import Card from "./Card";

const List = ({ list }) => {
  const [tasks, setTasks] = useState(list.tasks);

  const addTask = () => {
    const newTask = { id: Date.now(), title: "New Task", description: "", date: new Date() };
    setTasks([...tasks, newTask]);
  };

  return (
    <MuiCard sx={{ width: 250 }}>
      <CardContent>
        <Typography variant="h6">{list.title}</Typography>
        <Box sx={{ mt: 1 }}>
          {tasks.map((task) => (
            <Card key={task.id} task={task} />
          ))}
        </Box>
        <Button variant="outlined" onClick={addTask} sx={{ mt: 1 }}>+ Add Task</Button>
      </CardContent>
    </MuiCard>
  );
};

export default List;
