import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
// import { Router } from "next/router";




const Page = async() =>{
// const router = Router();
    const {getUser} = getKindeServerSession();
const user = await getUser();
console.log("User Data is : " , user);

     

return(
    <div  className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-600">

        <h1 className="bg-sky-500">This Is DashBord Page</h1>

         <h1>Hello , {user?.given_name} {user?.family_name} - {user?.email}</h1>
        <LogoutLink>Log out</LogoutLink>


    </div>
)

}

export default Page;
