<template>
    <div class="heading">
        <div class="heading__background">
            <img
                src="../../assets/imgs/background/background-heading-home.webp"
                alt="background heading"
                class="heading__background--img"
            />
        </div>
        <div class="heading__wrap">
            <div class="heading__content">
                <div class="heading__left">
                    <div class="left__content">
                        <div class="content__wrap">
                            <span class="left__title">Power up your game</span>
                            <h1 class="left__name">CYBER KID INFINITE</h1>
                            <div class="left__title">Now Available on PC & Console</div>
                            <div class="btn__buy">
                                <button class="btn">
                                    <span class="btn-link">Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="heading__right">
                    <div class="right__content">
                        <img class="right__content--img" src="../../assets/imgs/background/background-cyber-ko.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.heading {
    position: relative;
    height: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .heading__background {
        width: 100%;
        height: 100%;
    }

    .heading__background--img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

    .heading__wrap {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .heading__content {
        // background-color: yellow;
        width: 80%;
        height: 100%;
        display: flex;
    }

    .heading__left {
        flex: 1;
    }

    .left__content {
        background-color: rgb(136, 88, 237);
        height: 385px;
        width: 610px;
        margin-top: 82px;
        box-shadow: 4.23px 9.06px 14px 6px rgba(6, 5, 6, 0.41), 0 1px 4px rgba(0, 0, 0, 0.6);
        border-radius: 4rem;
    }

    .content__wrap {
        height: 100%;
        width: 100%;
        padding: 40px 70px;
        color: var(--white-color);
    }

    .left__title {
        font-size: 2.2rem;
    }

    .left__name {
        font-size: 7rem;
        margin: 1.5rem 0;
    }

    .btn__buy {
        margin-top: 1.5rem;
    }

    .btn {
        outline: none;
        border: none;
        border: 1px solid transparent;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        min-width: 132px;
        cursor: pointer;
        transition: border-color 0.4s ease 0s, background-color 0.4s ease 0s;
    }

    .btn:hover {
        background-color: rgb(136, 88, 237);
        border: 1px solid var(--white-color);
    }

    .btn-link {
        font-size: 1.5rem;
        color: rgb(136, 88, 237);
        font-weight: 600;
    }

    .btn:hover .btn-link {
        color: var(--white-color);
    }

    .heading__right {
        position: relative;
        flex: 1;
    }

    .right__content {
        position: absolute;
        height: 690px;
        width: 540px;
        right: 0;
        bottom: -50px;
        box-shadow: 4.23px 9.06px 14px 6px rgba(6, 5, 6, 0.41), 0 1px 4px rgba(0, 0, 0, 0.6);
        border-radius: 4rem;
        overflow: hidden;
    }

    .right__content--img {
        width: 100%;
        height: 100%;
        bottom: -50px;
    }
}
</style>
