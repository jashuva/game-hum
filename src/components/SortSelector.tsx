import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  ordering: string;
}
const SortSelector = ({ onSelectSortOrder, ordering }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release data' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' }
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {ordering ? ordering : 'Order by: Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem onClick={() => onSelectSortOrder(o.value)} key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
