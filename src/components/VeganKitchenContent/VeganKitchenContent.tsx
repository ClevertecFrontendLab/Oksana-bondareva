import { Box, Flex, Text } from '@chakra-ui/react';

import { menuItems } from '~/data/SideMenuItems';
import { MenuSideItem } from '~/utils/types';

import { ButtonUpload } from '../buttons/ButtonUpload';
import { Desserts } from '../desserts/Desserts';
import JuiciestList from '../homeContent/JuiciestList';
import { PageHeader } from '../pageHeader/PageHeader';

const recipesVegan = [
    {
        id: '1',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        imageUrl: '/images/potato.png',
        tag: 'Вторые блюда',
        tagIcon: '/icons/fryingPan.svg',
        favorites: 120,
        likes: 180,
    },
    {
        id: '2',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        imageUrl: '/images/rolls.png',
        tag: 'Детские блюда',
        tagIcon: '/icons/child.svg',
        favorites: 85,
        likes: 180,
    },
    {
        id: '3',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/images/tomyam.png',
        tag: 'Национальные',
        tagIcon: '/icons/international-food.svg',
        favorites: 124,
        likes: 324,
    },
    {
        id: '4',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        imageUrl: '/images/lasagna.png',
        tag: 'Блюда на гриле',
        tagIcon: '/icons/dishwasher.svg',
        favorites: 85,
        likes: 152,
    },
    {
        id: '5',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: '/images/meatballs.png',
        tag: 'Детские блюда',
        tagIcon: '/icons/child.svg',
        favorites: 85,
        likes: 150,
    },
    {
        id: '6',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: '/images/meatballs.png',
        tag: 'Детские блюда',
        tagIcon: '/icons/child.svg',
        favorites: 85,
        likes: 150,
    },
    {
        id: '7',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        imageUrl: '/images/popato1.png',
        tag: 'Национальные',
        tagIcon: '/icons/international-food.svg',
        favorites: 124,
        likes: 324,
    },
    {
        id: '8',
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        imageUrl: '/images/puri.png',
        tag: 'Национальные',
        tagIcon: '/icons/international-food.svg',
        favorites: 124,
        likes: 324,
    },
];

interface VeganKitchenPageProps {
    subcategory: string | null;
    setSubcategory: (sub: string) => void;
}

const VeganKitchenContent: React.FC<VeganKitchenPageProps> = () => {
    const subcategories =
        menuItems.find((item: { label: string }) => item.label === 'Веганская кухня')?.children ||
        [];

    return (
        <Flex maxW='1360px' flexDirection='column' width='100%'>
            <PageHeader
                title='Веганская кухня'
                subtitle='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <Flex justifyContent='center' gap='16px' pt='26px'>
                {subcategories.map((sub: MenuSideItem) => (
                    <Box key={sub.label} position='relative' display='inline-block'>
                        <Text
                            cursor='pointer'
                            fontSize='16px'
                            fontWeight='500'
                            color={sub.label === 'Вторые блюда' ? '#2DB100' : '#134B00'}
                        >
                            {sub.label}
                        </Text>
                        {sub.label === 'Вторые блюда' && (
                            <Box
                                position='absolute'
                                bottom='-8px'
                                left='0'
                                width='100%'
                                height='1px'
                                bg='#2DB100'
                            />
                        )}
                    </Box>
                ))}
            </Flex>
            <Box width='100%' pt='26px' pb='16px'>
                <JuiciestList recipes={recipesVegan} />
            </Box>
            <Box pb='40px'>
                <ButtonUpload />
            </Box>
            <Desserts />
        </Flex>
    );
};

export default VeganKitchenContent;
