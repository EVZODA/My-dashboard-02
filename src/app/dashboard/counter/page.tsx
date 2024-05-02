
import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";



export const metadata:Metadata = {
  title:'Shopping-cart',
  description:'Un simple contador'
}

export default function CounterPage() {
  
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos de carrito</span>
     <CartCounter value={20}/>
    </div>
  );
}