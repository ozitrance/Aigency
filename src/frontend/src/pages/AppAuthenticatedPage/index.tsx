import { Outlet } from "react-router";
import { useCustomPostAuth } from "@/customization/hooks/use-custom-post-auth";

export function AppAuthenticatedPage() {
  useCustomPostAuth();

  return <Outlet />;
}
