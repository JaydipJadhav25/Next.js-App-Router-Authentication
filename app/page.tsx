import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default  async function Home() {
   
  const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();
console.log(" user  : ",  isUserAuthenticated);

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-600">
     <h1 className="bg-yellow-400">This Is My Kinde App</h1>
     <hr />

     <LoginLink>Sign in</LoginLink>
<RegisterLink>Sign up</RegisterLink>
    </main>
  );
}
