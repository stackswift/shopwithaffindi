/**
 * Layout component that renders the header navigation and wraps
 * the page content in a main tag.
 * Accepts children props to render page content.
 */
import { Box } from "@chakra-ui/react";
import Header from "./Navbar";
import type { ChildernProps } from "@/types/types";

const Layout: React.FunctionComponent<ChildernProps> = ({ children }) => {
  return (
    <Box as="section">
      <Header />
      <Box as="main">{children}</Box>
    </Box>
  );
};

export default Layout;
