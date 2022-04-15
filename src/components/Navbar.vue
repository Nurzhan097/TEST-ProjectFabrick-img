<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" >
        <b-navbar-brand href="/" > Atar.inc</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>


        <b-collapse id="nav-collapse" is-nav>
            
            <b-navbar-nav class="ml-auto" >
                <b-nav-item href="/" right>
                    <b-icon icon="search" />
                    Поиск
                </b-nav-item>

                <b-nav-item href="/favorits/" right>
                    <b-icon icon="heart" />
                    Избранное 
                    <b-badge variant="light">({{$store.state.favorits.length}})</b-badge> 
                </b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>