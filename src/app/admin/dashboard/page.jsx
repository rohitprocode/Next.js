import LearnDataFetching from "@/components/LearnDataFetching";
import LearnGlobalCss from "@/components/LearnGlobalCss";
import LearnImageUse from "@/components/LearnImageUse";
import LearnModuleCss from "@/components/LearnModuleCSS";
import LearnUseRouter from "@/components/LearnUseRouter";

const Dashboard = () => {
  return (
    <div>
      <h1>Ye hai Admin Dashboard</h1>
      <LearnUseRouter />
      <LearnGlobalCss />
      <LearnModuleCss />
      <LearnImageUse />
      <LearnDataFetching />
    </div>
  );
};

export default Dashboard;
