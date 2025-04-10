import './App.css';

import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import Header from '~/components/header/Header';
import { Marks } from '~/components/marks/Marks';
import SideMenu from '~/components/sideMenu/SideMenu';
import HomePage from '~/pages/HomePage/HomePage';
import JuiciestPage from '~/pages/JuiciestPage/JuiciestPage';
import VeganKitchenPage from '~/pages/VeganKitchenPage/VeganKitchenPage';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <Router>
            <Header />
            <Flex justifyContent='space-between'>
                <SideMenu />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/best' element={<JuiciestPage />} />
                    <Route path='/vegan' element={<VeganKitchenPage />} />
                </Routes>
                <Marks />
            </Flex>
        </Router>
    );
}

export default App;
