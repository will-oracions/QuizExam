const Sidebar = () => {
  return (
    <div>
      <div>
        <button>+ Add New Task</button>
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

export default Sidebar;
