"use client";
import { useRouter } from "next/navigation";

const LearnUseRouter = () => {
  const router = useRouter();
  console.log("Router info:", router);
  const userName = "rohit_alex";
  const userEmail = "rohit@nextjs.com";
  return (
    <div>
      <h1>Ye hai useRouter Page</h1>
      <button onClick={() => router.push(`/user/settings/profile/${userName}`)}>
        Go to User Profile of email {userEmail}
      </button>
    </div>
  );
};

export default LearnUseRouter;
