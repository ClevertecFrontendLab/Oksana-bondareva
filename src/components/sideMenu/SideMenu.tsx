import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { menuItems } from '~/data/SideMenuItems';

import { ArrowIcon } from '../icons/ArrowIcon';
import { ExitIcon } from '../icons/ExitIcon';

interface MenuItem {
    icon?: string;
    alt?: string;
    label: string;
    children?: MenuItem[];
}

const MenuItem: React.FC<{
    item: MenuItem;
    isActive: boolean;
    onClick: () => void;
    activeSubItem: string | null;
    setActiveSubItem: (label: string) => void;
}> = ({ item, onClick, activeSubItem, setActiveSubItem }) => (
    <AccordionItem border='none'>
        {({ isExpanded }) => (
            <Link to='/vegan' style={{ textDecoration: 'none', width: '100%' }}>
                <AccordionButton
                    h='48px'
                    display='flex'
                    alignItems='center'
                    gap='16px'
                    px='8px'
                    py='12px'
                    cursor='pointer'
                    border='none'
                    bg={isExpanded ? '#EAFFC7' : 'white'}
                    onClick={onClick}
                >
                    <Image src={item.icon} alt={item.alt} />
                    <Box flex='1' textAlign='left' fontSize='16px'>
                        {item.label}
                    </Box>
                    <ArrowIcon
                        transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}
                        transition='0.2s'
                    />
                </AccordionButton>
                {item.children && (
                    <AccordionPanel
                        display='flex'
                        flexDirection='column'
                        pl='40px'
                        gap='8px'
                        pt='8px'
                    >
                        {item.children.map((sub) => (
                            <Flex
                                key={sub.label}
                                alignItems='center'
                                gap='12px'
                                py='4px'
                                pl='16px'
                                position='relative'
                                borderLeft='1px solid #C4FF61'
                                fontWeight={activeSubItem === sub.label ? 'bold' : 'normal'}
                                cursor='pointer'
                                onClick={() => setActiveSubItem(sub.label)}
                            >
                                {activeSubItem === sub.label && (
                                    <Box
                                        position='absolute'
                                        left='-8px'
                                        top='0'
                                        bottom='0'
                                        width='8px'
                                        bg='#C4FF61'
                                    />
                                )}
                                <Text fontSize='16px' color='black' textAlign='left'>
                                    {sub.label}
                                </Text>
                            </Flex>
                        ))}
                    </AccordionPanel>
                )}
            </Link>
        )}
    </AccordionItem>
);

const SideMenu: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

    return (
        <Flex
            flexDirection='column'
            justifyContent='space-between'
            w='256px'
            h='calc(130vh - 80px)'
            pt='34px'
            pb='32px'
            borderRight='1px solid #00000033'
            pl='10px'
        >
            <Accordion allowToggle overflowY='auto' border='none' pr='10px'>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={`${item.label}-${index}`}
                        item={item}
                        isActive={activeItem === item.label}
                        onClick={() => setActiveItem(activeItem === item.label ? null : item.label)}
                        activeSubItem={activeSubItem}
                        setActiveSubItem={setActiveSubItem}
                    />
                ))}
            </Accordion>
            <Flex flexDirection='column' textAlign='left' pl='24px' gap='16px' w='208px'>
                <Text color='#0000003D' fontSize='16px'>
                    Версия программы 03.25
                </Text>
                <Text color='#000000A3' fontSize='12px'>
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Text>
                <Flex fontSize='12px' fontWeight='600' gap='6px' alignItems='center'>
                    <ExitIcon />
                    Выйти
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SideMenu;
