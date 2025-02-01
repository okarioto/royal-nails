import Landing from "@/components/Landing";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hours from "@/components/Hours";

export const metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <>  
   <Landing />
   <Hours />
   <Services />
   {/* <Contact /> */}
    </>

  );
}
