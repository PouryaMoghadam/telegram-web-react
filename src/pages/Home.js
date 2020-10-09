import React from 'react';
import {useParams} from "react-router-dom";
import MainLayout from "../components/_layout/mainLayout";

function Home(props) {
    console.log(useParams())
    return (
        <MainLayout>
            Home
        </MainLayout>
    );
}

export default Home;