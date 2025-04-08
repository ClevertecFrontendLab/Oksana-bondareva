import { Box, SimpleGrid } from '@chakra-ui/react';

import { RecipeListProps } from '~/utils/types';

import JuiciestCard from '../Cards/JuiciestCard';

const JuiciestList: React.FC<RecipeListProps> = ({ recipes }) => (
    <Box width='100%' px={4}>
        <SimpleGrid columns={2} spacing='24px' maxWidth='1360px'>
            {recipes.map((recipe) => (
                <JuiciestCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
    </Box>
);

export default JuiciestList;
