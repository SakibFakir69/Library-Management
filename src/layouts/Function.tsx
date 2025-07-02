import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Function() {
  return (
    <div className="p-10 border">
      <section className="flex justify-between">
        <div>Library Books</div>

        <div className="flex justify-between gap-x-10">

          <Input  placeholder="🔎 Search your books" />
         

        </div>
      </section>
    </div>
  );
}

export default Function;
