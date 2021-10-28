import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signin({ providers }) {
    return (
        <> 
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center border rounded-lg bg-white">
               <div className="border rounded-lg bg-white p-10 mt-14">
               <img className="w-80 mb-5" src="/logo.webp" alt=""/>
               <p className="font-bold font-xs leading-3 italic text-gray-700 mb-20">This is my gram, not the real one.</p>
               <div className="">
                  {Object.values(providers).map((provider) => (
                      <div key={provider.name}>
                          <button className="py-2 px-4 text-white bg-gray-600 rounded-lg" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/"})}>
                               Sign in with {provider.name} 
                          </button>
                      </div>      
                  ))}
               </div>
               </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signin
