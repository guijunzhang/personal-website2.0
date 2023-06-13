import SideBar from "./SideBar";

export default function Layout({ children }) {
  return (
    <div>
        <SideBar />
        <main>{children}</main>
    </div>
  );
}
