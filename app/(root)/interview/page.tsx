import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

export default async function InterviewPage() {
  const user = await getCurrentUser();
  
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent
        userName={String(user?.name)}
        userId={user?.id}
        type="generate"
      />
    </>
  );
}
