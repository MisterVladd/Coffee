import { Outlet } from "react-router-dom";
import { ApiContext } from "../../ApiProvider";
import { useMemo } from "react";

export const HomeProvider = () => {
    const value = useMemo(() => ({}), []);

    return (
      <ApiContext.Provider value={value}>
        <div className="main">
          <Outlet />
        </div>
      </ApiContext.Provider>
    );
  };
