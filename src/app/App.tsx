import './App.css';

import { Box, Flex } from '@chakra-ui/react';

import Header from '~/components/header/Header';
import { Marks } from '~/components/marks/Marks';
import SideMenu from '~/components/sideMenu/SideMenu';
import HomePage from '~/pages/HomePage/HomePage';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Box>
            <Header />
            <Flex justifyContent='space-between'>
                <SideMenu />
                <HomePage />
                <Marks />
            </Flex>
        </Box>
    );
}

export default App;
