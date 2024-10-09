import { Suspense, useEffect } from "react";
import { DesktopLayout } from "../shared/layouts/DesktopLayouts/DesktopLayout";
import { USER_LOCALSTORAGE_KEY } from "../shared/consts/localstorage";
import { useUserStore } from "../entities/User/model/store/useUserStore";
import { useInitAuthDataQuery } from "../entities/User/api/useInitAuthData";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";
import { useCartStore } from "../entities/Cart/model/store/useCartStore";
import { Button } from "../shared/ui/Button";

export const App = () => {
  const initUser = useUserStore((state) => state.initUser);
  const initAuthDataQuery = useInitAuthDataQuery();

  const userToken = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  const userData = initAuthDataQuery.data?.user;

  useEffect(() => {
    if (userToken && userData) {
      initUser(userData);
    }
  }, [initUser, userData, userToken]);

  const router = createRouter({ routeTree });

  // sergeevNA: временно
  const { pizzas } = useCartStore();
  return (
    <div id="app" className="app">
      <Suspense fallback="">
        {/* <DesktopLayout content={<AppRouter />} header={<Navbar />} /> */}
        <DesktopLayout
          content={<RouterProvider router={router} />}
          header={
            <>
              Header
              <Button
                onClick={() => {
                  console.log(pizzas);
                }}
              >
                Корзина
              </Button>
            </>
          }
        />
      </Suspense>
    </div>
  );
};
