import { Box, Button, Grid } from "@mui/material";
import List from "./List";
import { useState } from "react";

const Board = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "To Do", tasks: [] },
    { id: 2, title: "In Progress", tasks: [] },
    { id: 3, title: "Done", tasks: [] },
  ]);

  const addList = () => {
    const newList = { id: Date.now(), title: "New List", tasks: [] };
    setLists([...lists, newList]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" onClick={addList}>+ Add New List</Button>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {lists.map((list) => (
          <Grid item key={list.id}>
            <List list={list} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
