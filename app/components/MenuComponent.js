import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function MenuComponent() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
            />
            <MenuList>
                <MenuItem>New Tab</MenuItem>
                <MenuItem>New Window</MenuItem>
            </MenuList>
        </Menu>
    );
}
