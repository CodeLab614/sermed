import { ReactNode } from "react";

import { Menu } from "@/components/ui/menu";
import { Cursor } from "@/components/ui/cursor";
import { Footer } from "@/components/ui/footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
      <Cursor />
    </div>
  );
};

export default MainLayout;
