import Login from "@/components/pages/Login/Login";
import Counter from "@/components/pages/home/Counter";
import Registration from "@/components/pages/home/Registration/Registration";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  return (
    <section className="mx-24">
      <h2 className="text-pink-600 font-inter">My test</h2>
      <p className="font-roboto">my paragraph</p>
      <div>
        <p className="font-lora">my second para</p>
        <Button className="my-4">My Btn</Button>
        <Counter />
        <Login />
        <Registration />
      </div>
    </section>
  );
}
