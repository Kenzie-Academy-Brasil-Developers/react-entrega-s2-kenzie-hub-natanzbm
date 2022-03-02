import { Redirect } from "react-router-dom";

const Dashboard = ({ auth }) => {
  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
