import Link from 'next/link';
import Navigation from '../../Header/Navigation';
import Media from '../../Footer/Media';

const Menu = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Link href=''></Link>
        <Link href=''></Link>
        <Link href=''></Link>
      </div>
      <div>
        <Media />
      </div>
    </div>
  );
};

export default Menu;
