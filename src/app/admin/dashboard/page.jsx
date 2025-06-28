import LearnGlobalCss from "@/components/LearnGlobalCss";
import LearnModuleCss from "@/components/LearnModuleCSS";
import LearnUseRouter from "@/components/LearnUseRouter";

const Dashboard = () => {
  return (
    <div>
      <h1>Ye hai Admin Dashboard</h1>
      <LearnUseRouter />
      <LearnGlobalCss />
      <LearnModuleCss/>
    </div>
  );
};

export default Dashboard;
