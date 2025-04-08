import { Box, SimpleGrid } from '@chakra-ui/react';

import { AuthorsListProps } from '~/utils/types';

import { AuthorCard } from '../Cards/AuthorCard';

export const AuthorsList = ({ authors }: AuthorsListProps) => (
    <Box mx='auto' py={8}>
        <SimpleGrid columns={3} spacing='16px' px={4}>
            {authors.map((author, index) => (
                <AuthorCard key={`${author.author.username}-${index}`} {...author} />
            ))}
        </SimpleGrid>
    </Box>
);
