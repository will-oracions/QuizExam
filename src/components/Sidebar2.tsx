import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  handleCreate: () => void;
}

const Sidebar2 = ({ handleCreate }: Props) => {
  return (
    <div>
      <div>
        <Box marginBottom={5}>
          <Button
            onClick={handleCreate}
            variant="outlined"
            color="primary"
            style={{ marginTop: "10px" }}
            startIcon={<AddIcon />}>
            Create new Assignee
          </Button>
        </Box>
      </div>

      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-item">
          <span>All</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Priority</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Today</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Completed</span>
        </div>
      </div>

      {/* Lables Filter */}
      <div className="sidebar-tasks-list">
        <div className="sidebar-tasks-list-item">
          <span>Html</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Css</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>jQuery</span>
        </div>

        <div className="sidebar-tasks-list-item">
          <span>Node.js</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
