import { Box, SimpleGrid } from '@chakra-ui/react';

import { RecipeListProps } from '~/utils/types';

import JuiciestCard from '../cards/JuiciestCard';

const JuiciestList: React.FC<RecipeListProps> = ({ recipes }) => (
    <Box width='100%'>
        <SimpleGrid columns={2} spacingX={{ xl: '26px', md: '16px' }} spacingY='14px'>
            {recipes.map((recipe) => (
                <JuiciestCard key={recipe.id} {...recipe} />
            ))}
        </SimpleGrid>
    </Box>
);

export default JuiciestList;
