export const isActivePath = (pathname: string, href: string): boolean => {
  if (pathname === href) {
    return true;
  }

  if (href === "/" && pathname === "/") {
    return true;
  }
  if (href !== "/" && pathname.startsWith(href)) {
    return true;
  }

  return false;
};
