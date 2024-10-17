import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react'

import {
    InfoOutlineIcon,
    HamburgerIcon
} from '@chakra-ui/icons'

export default function MenuComponent() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<InfoOutlineIcon />}>
                    New Tab
                </MenuItem>
            </MenuList>
        </Menu>
    )
}