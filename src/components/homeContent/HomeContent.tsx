import { Box, Flex, Heading } from '@chakra-ui/react';

import { AuthorCardProps } from '~/utils/types';

import { ButtonAllAuthors } from '../buttons/ButtonAllAuthors';
import { ButtonEntireSelection } from '../buttons/ButtonEntireSelection';
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
    {
        id: '5',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        imageUrl: '/images/pancake.png',
        tag: 'Десерты, выпечка',
        tagIcon: '/icons/bread.svg',
        likes: 1,
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

const HomeContent = () => (
    <Flex
        flexDirection='column'
        maxW={{ xl: '1375px', md: '768px' }}
        pl={{ xl: '16px', md: '40px' }}
    >
        <PageHeader title='Приятного аппетита!' />
        <Box width='100%' pt={{ xl: '48px', md: '32px' }}>
            <Heading
                as='h2'
                fontSize={{ xl: '48px', md: '24px' }}
                pb={{ xl: '22px', md: '16px' }}
                fontWeight={500}
                textAlign='left'
            >
                Новые рецепты
            </Heading>
            <NewRecipeList recipes={recipesNew} />
        </Box>
        <Box width='100%' py={{ xl: '35px', md: '32px' }}>
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading
                    as='h2'
                    fontSize={{ xl: '48px', md: '24px' }}
                    pb={{ xl: '21px', md: '14px' }}
                    fontWeight={500}
                    textAlign='left'
                    letterSpacing={{ xl: 1.8, md: 1 }}
                >
                    Самое сочное
                </Heading>
                <Box display={{ xl: 'block', md: 'none' }}>
                    <ButtonEntireSelection />
                </Box>
            </Flex>
            <JuiciestList recipes={recipesJuiciest} />
            <Flex justifyContent='center' display={{ xl: 'none', md: 'flex' }}>
                <ButtonEntireSelection />
            </Flex>
        </Box>
        <Box
            mt={{ xl: '10px', md: '0px' }}
            px={{ xl: '24px', md: '10px' }}
            pt={{ xl: '20px', md: '11px' }}
            pb={{ xl: '24px', md: '15px' }}
            background='#C4FF61'
            borderRadius='16px'
            mb={{ xl: '40px', md: '32px' }}
        >
            <Flex justifyContent='space-between' alignItems='center'>
                <Heading as='h2' fontSize={{ xl: '38px', md: '24px' }} textAlign='left'>
                    Кулинарные блоги
                </Heading>
                <Box display={{ xl: 'flex', md: 'none' }}>
                    <ButtonAllAuthors />
                </Box>
            </Flex>
            <AuthorsList authors={authorsData} />
            <Flex display={{ xl: 'none', md: 'flex' }} justifyContent='center'>
                <ButtonAllAuthors />
            </Flex>
        </Box>
        <VeganKitchen />
    </Flex>
);

export default HomeContent;
