import React from "react";
import { Header } from "./components/header/Header";
import { Splash } from "./components/splash/Splash";

export function MovieApp() {
    return (
        <div className="app">
            <Splash
                imageUrl="/images/soul.jpg"
                year="2020"
                rated="PG"
                title="Soul"
                genre="Animation, Adventure, Comedy, Family, Fantasy, Music"
            />
            <Header />
        </div>
    );
}
