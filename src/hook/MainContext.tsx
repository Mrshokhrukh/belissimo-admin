import { createContext, useState } from "react";

type Prop = {
  children: any;
};
export const MainContext = createContext<any>("");

const MainContextProvider = ({ children }: Prop) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  return (
    <MainContext.Provider value={{ isEditModalOpen, setEditModalOpen }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
