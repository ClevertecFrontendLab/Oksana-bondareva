import { Box, SimpleGrid } from '@chakra-ui/react';

import { RecipeListProps } from '~/utils/types';

import NewRecipeCard from '../Cards/NewRecipeCard';

const NewRecipeList: React.FC<RecipeListProps> = ({ recipes }) => (
    <Box width='100%' px={4}>
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing='24px'
            maxWidth='1360px'
            minChildWidth='300px'
        >
            {recipes.map((recipe) => (
                <NewRecipeCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
    </Box>
);

export default NewRecipeList;
