import app from "./app";
import TaskRoutes from "./routes/TaskRouter";

app.use("/api/tasks", TaskRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
})