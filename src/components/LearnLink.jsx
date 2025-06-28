import Link from "next/link";
const LearnLink = () => {
  const id_name = "Rohit"
  return (
    <div>
      <h4><Link href="/admin/dashboard">Go to Admin Dashboard</Link></h4>
      <h4><Link href={`/user/settings/profile/${id_name}`}>Go to User Profile</Link></h4>
    </div>
  );
};

export default LearnLink;

