import { RouterProvider } from "react-router-dom"

import { router } from "@/router"

import { useEffect } from "react";
import { supabase } from "./lib/supabase";

function App() {

 useEffect(() => {
    async function test() {
      const { data, error } = await supabase
        .from("tareas")
        .select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);
    }

    test();
  }, []);
console.log("SUPABASE TEST");
  return <RouterProvider router={router} />
}

export default App
