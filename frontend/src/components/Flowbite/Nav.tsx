import { Button, Navbar,DarkThemeToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/react.svg';
export function Nav() {
  return (
      <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Shortlink logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ShortLink</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/manage">
        <Button className="flex items-center" outline gradientDuoTone="purpleToPink">
    <span >My Links</span>
</Button>
     </Link>
        <Navbar.Toggle />
        <DarkThemeToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          ShortLink
        </Navbar.Link>
        <Navbar.Link as={Link} to="/About">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}