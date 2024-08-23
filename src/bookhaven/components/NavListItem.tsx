import { NavLink } from 'react-router-dom';

interface NavListItem {
  nameSection: string;
  path: `/${string}`;
  nameIcon: string;
  mx?: number;
  my?: number;
}

export const NavListItem = ({
  path,
  nameSection,
  nameIcon,
  mx = 0,
  my = 0,
}: NavListItem) => {
  return (
    <li
      style={{
        margin: `${my}px ${mx}px`,
      }}
      className="cursor-pointer rounded-xl p-1 opacity-80 duration-300 hover:bg-blue-light hover:opacity-60">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'p-2 font-bold text-blue'
            : 'p-2 font-medium text-blue-grey'
        }>
        <i className={nameIcon}></i>
        <p className="ml-4 inline">{nameSection}</p>
      </NavLink>
    </li>
  );
};
