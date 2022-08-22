import "./App.css";

/* eslint-disable import/no-webpack-loader-syntax */
import Content from "!@mdx-js/loader!./content.mdx";
import Blog from "!@mdx-js/loader!./blog.mdx";

export default function App() {
  return (
    <>
      <Content />
      <Blog />
    </>
  );
}
