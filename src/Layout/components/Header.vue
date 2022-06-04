<template>
    <div class="header">
        <div class="header__content">
            <router-link to="/" class="header__logo">
                <div class="header__logo-img">
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        data-bbox="17 17.002 166.002 165.999"
                        viewBox="17 17.002 166.002 165.999"
                        height="48"
                        width="48"
                        data-type="color"
                        role="img"
                        aria-labelledby="svgcid--jv63jg-vz08ag"
                    >
                        <title id="svgcid--jv63jg-vz08ag">Homepage</title>
                        <g>
                            <path
                                d="M54.331 87.495c4.406-16.714 17.655-29.828 34.401-34.112 29.968-7.668 57.117 12.228 61.475 39.711.552 3.483 2.105 6.729 4.599 9.223l19.149 19.149c2.211 2.211 5.988 1.144 6.723-1.894 3.668-15.163 3.177-31.948-2.79-49.095-8.087-23.242-26.742-41.364-50.144-48.976C60.747-.296-.254 60.667 21.471 127.658c7.58 23.373 25.64 42.024 48.826 50.158 17.08 5.991 33.797 6.533 48.916 2.945 3.048-.723 4.124-4.511 1.909-6.726l-20.582-20.582c-2.285-2.285-5.217-3.788-8.388-4.413-26.668-5.25-45.59-32.077-37.821-61.545z"
                                fill="#FFFFFF"
                                data-color="1"
                            ></path>
                            <path
                                d="M150.451 126.185a44.142 44.142 0 0 1-24.881 24.3c-3.495 1.347-4.473 5.821-1.824 8.469l21.968 21.968a7.092 7.092 0 0 0 5.014 2.077h26.29a5.56 5.56 0 0 0 5.559-5.559v-26.29a7.09 7.09 0 0 0-2.077-5.014L158.864 124.5c-2.603-2.601-7.009-1.717-8.413 1.685z"
                                fill="#FFFFFF"
                                data-color="1"
                            ></path>
                            <path
                                fill="#FFFFFF"
                                d="M126.255 100.847c0 13.565-10.996 24.561-24.561 24.561s-24.561-10.996-24.561-24.561 10.996-24.561 24.561-24.561 24.561 10.996 24.561 24.561z"
                                data-color="1"
                            ></path>
                        </g>
                    </svg>
                </div>
                <div class="header__logo-text">ARCADE</div>
            </router-link>
            <div class="header__navbar">
                <ul class="nav__list">
                    <router-link
                        class="nav__item"
                        v-for="(item, index) in navItems"
                        :class="{ active: item.path === $route.path }"
                        :to="item.path"
                        :key="index"
                    >
                        {{ item.name }}
                    </router-link>
                </ul>
                <div class="account">
                    <!-- Khi nguoi dung login -->
                    <!-- <Avatar
                        image="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/267956065_1007373376511795_7085981611939545895_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Od4EQe-r2twAX8UrkFa&_nc_ht=scontent.fhan3-1.fna&oh=00_AT_hohif0tS7KwMRThK0g3VM4r4WCcJnlZeliPgZfaQa9Q&oe=62A0CAEE"
                        class="avatar"
                        size="large"
                        shape="circle"
                    />
                    <div class="avatar__text">Nguyen Huu Nghia</div> -->

                    <!-- Khi nguoi dung chua login -->
                    <span class="login">Login</span>
                    <span class="line"></span>
                    <span class="register">Register</span>
                </div>
                <div class="cart">
                    <!-- <i class="pi pi-bell mr-4 p-text-secondary" v-badge="2"></i> -->
                    <i class="pi pi-shopping-cart mr-4 p-text-secondary" v-badge="2"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from 'primevue/avatar';
export default {
    setup() {
        const navItems = [
            {
                path: '/',
                name: 'Products',
            },
            {
                path: '/s',
                name: 'On Sale',
            },
            {
                path: '/c',
                name: 'Contact Us',
            },
        ];

        return {
            navItems,
        };
    },
    components: {
        Avatar,
    },
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../../assets/imgs/background/background-header.webp);
    height: 120px;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;

    .header__content {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header__logo {
        display: flex;
        text-decoration: none;
    }

    .header__logo-text {
        font-size: 2rem;
        color: var(--white-color);
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
    }

    .header__navbar {
        display: flex;
        align-items: center;
    }

    .nav__list {
        list-style: none;
        display: flex;
        align-items: center;
    }

    .nav__list a:hover {
        background-color: var(--white-color);
        color: var(--primary-color);
    }

    .nav__item {
        padding: 10px 20px;
        text-decoration: none;
        color: var(--white-color);
        font-size: 1.6rem;
        margin: 0 5px;
        border-radius: 1rem;
        font-weight: 600;
    }

    .nav__item.active {
        background-color: var(--white-color);
        color: var(--primary-color);
    }

    .account {
        display: flex;
        padding: 25px;
        align-items: center;
        color: var(--white-color);

        .login:hover,.register:hover {
            color: yellow;
            cursor: pointer;
        }

        .line {
            display: block;
            border-left: 1px solid var(--white-color);
            height: 2rem;
            margin: 0 10px;
        }
    }

    .avatar {
        width: 36px;
        height: 36px;
        margin-right: 10px;
    }

    .avatar__text {
        font-size: 1.6rem;
        color: var(--white-color);
    }

    .cart {
        font-size: 2.5rem;
        color: var(--white-color);
    }
}
</style>
