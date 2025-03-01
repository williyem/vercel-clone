import Products from "./products";
import Resources from "./resources";
import Solutions from "./solutions";

export const TABS = [
  { id: 1, title: "Products", Component: Products },
  { id: 2, title: "Solutions", Component: Solutions },
  { id: 3, title: "Resources", Component: Resources },
  { id: 4, title: "Enterprise", link: "/enterprise" }, // Routes to a different page
  { id: 5, title: "Docs", link: "/docs" }, // Routes to a different page
  { id: 6, title: "Pricing", link: "/pricing" }, // Routes to a different page
];
