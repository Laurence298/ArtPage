

export default function NavBar() {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Contact</a></li>
      <li><a>Support</a></li>
    </ul>
  </div>
</div>
  );
}
