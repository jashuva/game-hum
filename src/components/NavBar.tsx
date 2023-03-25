import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  OnSearch: (searchText: string) => void;
}
const NavBar = ({ OnSearch }: Props) => {
  return (
    <HStack padding='10'>
      <Image src={logo} boxSize={16} />
      <SearchInput OnSearch={OnSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
