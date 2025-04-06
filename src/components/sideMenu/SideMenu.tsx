import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

import { ArrowIcon } from '../icons/ArrowIcon';
import { ExitIcon } from '../icons/ExitIcon';

interface MenuItem {
    icon: string;
    alt: string;
    label: string;
    children?: MenuItem[];
}

interface MenuItemProps {
    item: MenuItem;
}

const menuItems = [
    { icon: '/icons/eggplant.svg', alt: 'eggplant', label: 'Салаты' },
    { icon: '/icons/snacks.svg', alt: 'snacks', label: 'Закуски' },
    { icon: '/icons/pot.svg', alt: 'pot', label: 'Первые блюда' },
    { icon: '/icons/fryingPan.svg', alt: 'frying pan', label: 'Вторые блюда' },
    { icon: '/icons/bread.svg', alt: 'bread', label: 'Десерты, выпечка' },
    { icon: '/icons/dishwasher.svg', alt: 'dishwasher', label: 'Блюда на гриле' },
    { icon: '/icons/fryingPan.svg', alt: 'frying pan', label: 'Веганская кухня' },
    { icon: '/icons/child.svg', alt: 'child', label: 'Детские блюда' },
    { icon: '/icons/pot1.svg', alt: 'pot', label: 'Лечебное питание' },
    { icon: '/icons/international-food.svg', alt: 'international food', label: 'Национальные' },
    { icon: '/icons/mortar.svg', alt: 'mortar', label: 'Соусы' },
    { icon: '/icons/cup.svg', alt: 'cup', label: 'Напитки' },
    { icon: '/icons/jar.svg', alt: 'jar', label: 'Заготовки' },
];

const MenuItem: React.FC<MenuItemProps> = ({ item }) => (
    <VStack align='stretch' pl='10px' pr='16px'>
        <Accordion allowToggle border='none'>
            <AccordionItem border='none'>
                <AccordionButton
                    h='48px'
                    display='flex'
                    alignItems='center'
                    gap='16px'
                    px='8px'
                    py='12px'
                    border='none'
                    bg='white'
                >
                    <Image src={item.icon} alt={item.alt} />
                    <Box flex='1' textAlign='left' fontSize='16px'>
                        {item.label}
                    </Box>
                    <ArrowIcon />
                </AccordionButton>
                <AccordionPanel></AccordionPanel>
            </AccordionItem>
        </Accordion>
    </VStack>
);

const SideMenu: React.FC = () => (
    <Box w='256px' h='100%' pt='34px' pb='32px' borderRight='1px solid #00000033'>
        {menuItems.map((item, index) => (
            <MenuItem key={`${item.label}-${index}`} item={item} />
        ))}
        <Flex flexDirection='column' textAlign='left' pl='24px' gap='16px' mt='228px' w='208px'>
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
    </Box>
);

export default SideMenu;
