import { SidebarProps } from "../interfaces/Sidebar";

const Sidebar = (props: SidebarProps) => {
  return (
    <aside>
      <nav>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
          {}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
