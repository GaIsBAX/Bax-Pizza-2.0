import { Button } from "@/components/ui/button";
import Image from "next/image";
import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <RootLayout>
        <h1>
          Home
          <Button variant="outline">Корзина</Button>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, iste
          inventore magni velit dolorum iusto rerum doloremque culpa nostrum
          quos vitae aliquid eaque corrupti ipsa, sed officia sint iure ex.
        </p>
      </RootLayout>
    </>
  );
}
