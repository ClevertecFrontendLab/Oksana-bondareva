import { Box, Flex } from '@chakra-ui/react';

import { ButtonUpload } from '../buttons/ButtonUpload';
import JuiciestList from '../homeContent/JuiciestList';
import { PageHeader } from '../pageHeader/PageHeader';
import { VeganKitchen } from '../veganKitchen/VeganKitchen';

const recipesJuiciest = [
    {
        id: '1',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/images/quenelle.png',
        tag: 'Вторые блюда',
        tagIcon: '/icons/fryingPan.svg',
        favorites: 85,
        likes: 152,
    },
    {
        id: '2',
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/images/meet.png',
        tag: 'Вторые блюда',
        tagIcon: '/icons/fryingPan.svg',
        favorites: 159,
        likes: 257,
        isRecommended: true,
        recommendedBy: {
            avatar: '/images/elena.png',
            name: 'Елена Высоцкаят',
        },
    },
    {
        id: '3',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/images/noodles.png',
        tag: 'Вторые блюда',
        tagIcon: '/icons/fryingPan.svg',
        favorites: 258,
        likes: 342,
        isRecommended: true,
        recommendedBy: {
            avatar: '/images/alex.png',
            name: 'Alex Cook',
        },
    },
    {
        id: '4',
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
        id: '5',
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
        id: '6',
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
        id: '7',
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
        id: '8',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: '/images/meatballs.png',
        tag: 'Детские блюда',
        tagIcon: '/icons/child.svg',
        favorites: 85,
        likes: 150,
    },
];

const JuiciestContent = () => (
    <Flex maxW='1360px' flexDirection='column' width='100%'>
        <PageHeader title='Самое сочное' />
        <Box width='100%' pt='40px' pb='16px'>
            <JuiciestList recipes={recipesJuiciest} />
        </Box>
        <Box pb='40px'>
            <ButtonUpload />
        </Box>
        <VeganKitchen />
    </Flex>
);

export default JuiciestContent;
