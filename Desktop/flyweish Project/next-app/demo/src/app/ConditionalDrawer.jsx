"use client";

import { usePathname } from "next/navigation";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function ConditionalDrawer({ children }) {
  const pathname = usePathname();
  
  // Check if current route is an auth route
  const isAuthRoute = pathname?.startsWith("/login") || 
                      pathname?.startsWith("/forgot-password");
  
  // If it's an auth route, don't show the drawer
  if (isAuthRoute) {
    return <>{children}</>;
  }
  
  // Otherwise, show the drawer
  return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
}

