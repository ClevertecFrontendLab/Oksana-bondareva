import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

import { RecipeListProps } from '~/utils/types';

import NewRecipeCard from '../cards/NewRecipeCard';

const NewRecipeList: React.FC<RecipeListProps> = ({ recipes }) => (
    <Box width='100%' maxWidth='1360px'>
        <SimpleGrid
            display={{ base: 'none', xl: 'grid' }}
            columns={4}
            spacing={{ xl: '32px', md: '12px' }}
        >
            {recipes.slice(0, 4).map((recipe) => (
                <NewRecipeCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
        <Box
            display={{ base: 'none', md: 'block', xl: 'none' }}
            position='relative'
            overflow='hidden'
        >
            <Flex gap='12px'>
                {recipes.slice(0, 4).map((recipe) => (
                    <Box key={recipe.id} flex='0 0 calc(25% - 35px)'>
                        <NewRecipeCard {...recipe} />
                    </Box>
                ))}
                <Box flex='0 0 12.5%' position='relative' overflow='hidden'>
                    <Box position='absolute' left='0' width='calc(400% + 48px)'>
                        <NewRecipeCard {...recipes[4]} />
                    </Box>
                </Box>
            </Flex>
        </Box>
        <SimpleGrid display={{ base: 'grid', md: 'none' }} columns={2} spacing='12px'>
            {recipes.slice(0, 2).map((recipe) => (
                <NewRecipeCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
    </Box>
);

export default NewRecipeList;
