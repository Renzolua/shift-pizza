import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { DesktopLayout } from "../shared/layouts/DesktopLayouts/DesktopLayout";
import { CartButton } from "../entities/Cart/ui/CartButton/CartButton";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <Link to="/">Index</Link> */}

      <DesktopLayout
        content={<Outlet />}
        header={
          <>
            Header
            <CartButton />
          </>
        }
      />
      <TanStackRouterDevtools />
    </>
  ),
});
