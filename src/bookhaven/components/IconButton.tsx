export const IconButton = () => {
  return (
    <button
      className="h-8 w-8 rounded-full duration-300 hover:bg-blue-light md:hidden"
      onClick={onToggleShowSidebar}>
      <i
        className={`${isShowSidebarMobile ? 'bx bx-x' : 'bx bx-menu'} text-xl`}></i>
    </button>
  );
};
