import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { AuthorCardProps } from '~/utils/types';

import { ArrowRight } from '../icons/ArrowRight';
import { PageHeader } from '../pageHeader/PageHeader';
import { VeganKitchen } from '../veganKitchen/VeganKitchen';
import { AuthorsList } from './AuthorsList';
import JuiciestList from './JuiciestList';
import NewRecipeList from './NewReceptList';

const recipesNew = [
    {
        id: '1',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/images/soup.png',
        tag: 'Первые блюда',
        tagIcon: '/icons/pot.svg',
        favorites: 1,
    },
    {
        id: '2',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        imageUrl: '/images/cutlet.png',
        tag: 'Веганские блюда',
        tagIcon: '/icons/bayLeaf.svg',
        favorites: 2,
        likes: 1,
    },
    {
        id: '3',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        imageUrl: '/images/pancake.png',
        tag: 'Десерты, выпечка',
        tagIcon: '/icons/bread.svg',
        likes: 1,
    },
    {
        id: '4',
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        imageUrl: '/images/salad.png',
        tag: 'Салаты',
        tagIcon: '/icons/eggplant.svg',
    },
];

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
];

const authorsData: AuthorCardProps[] = [
    {
        author: {
            avatarUrl: '/images/elena.png',
            name: 'Елена Высоцкая',
            username: 'elenapovar',
        },
        content: {
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        },
    },
    {
        author: {
            avatarUrl: '/images/alex.png',
            name: 'Alex Cook',
            username: 'funtasticooking',
        },
        content: {
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        },
    },
    {
        author: {
            avatarUrl: '/images/kate.png',
            name: 'Екатерина Константинопольская',
            username: 'bake_and_pie',
        },
        content: {
            description:
                'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        },
    },
];

const HomeContent = () => {
    const navigate = useNavigate();

    return (
        <Flex maxW='1360px' flexDirection='column' width='100%'>
            <PageHeader title='Приятного аппетита!' />
            <Box width='100%' px='20px'>
                <Heading as='h2' fontSize='48px' py='32px' fontWeight='500' textAlign='left'>
                    Новые рецепты
                </Heading>
                <NewRecipeList recipes={recipesNew} />
            </Box>
            <Box width='100%' px='20px' py='40px'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Heading as='h2' fontSize='48px' pb='32px' fontWeight='500' textAlign='left'>
                        Самое сочное
                    </Heading>
                    <Button
                        display='flex'
                        gap='8px'
                        h='48px'
                        background='#B1FF2E'
                        fontSize='18px'
                        fontWeight='600'
                        py='6px'
                        px='12px'
                        border='1px solid #B1FF2E'
                        borderRadius='6px'
                        cursor='pointer'
                        onClick={() => navigate('/best')}
                    >
                        Вся подборка
                        <ArrowRight />
                    </Button>
                </Flex>
                <JuiciestList recipes={recipesJuiciest} />
            </Box>
            <Box mx='24px' p='24px' background='#C4FF61' borderRadius='16px' mb='40px'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Heading as='h2' fontSize='48px' pb='32px' fontWeight='500' textAlign='left'>
                        Кулинарные блоги
                    </Heading>
                    <Button
                        display='flex'
                        gap='8px'
                        h='48px'
                        background='#C4FF61'
                        fontSize='18px'
                        fontWeight='600'
                        border='none'
                        cursor='pointer'
                    >
                        Все авторы
                        <ArrowRight />
                    </Button>
                </Flex>
                <AuthorsList authors={authorsData} />
            </Box>
            <VeganKitchen />
        </Flex>
    );
};

export default HomeContent;
