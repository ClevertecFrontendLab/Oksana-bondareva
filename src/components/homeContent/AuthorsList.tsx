import { Box, SimpleGrid } from '@chakra-ui/react';

import { AuthorsListProps } from '~/utils/types';

import { AuthorCard } from '../cards/AuthorCard';

export const AuthorsList = ({ authors }: AuthorsListProps) => (
    <Box pt={{ xl: 8, md: 4 }}>
        <SimpleGrid columns={3} spacing='16px'>
            {authors.map((author, index) => (
                <AuthorCard key={`${author.author.username}-${index}`} {...author} />
            ))}
        </SimpleGrid>
    </Box>
);
