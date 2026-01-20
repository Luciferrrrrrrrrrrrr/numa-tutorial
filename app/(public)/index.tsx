import SignIn from "@/components/clerk/SignIn";
import { Gradient } from "@/components/gradient";


export default function Index() {
  return (
  <>
  
  <SignIn signUpUrl="/sign-up" scheme="numatutorial" homeUrl="(protected)"/>
  
  </>
  );
}
