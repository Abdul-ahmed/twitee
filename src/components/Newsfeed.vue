<template>
<body>
    <!-- SIDEBAR - Start -->
    <div class="sidebar">
        <fa :icon="['fab', 'twitter']" class="fab-twitter" size="2x" :style="{ color: '#1D9BF1' }" />
        <div class="sidebarOption active">
            <fa :icon="['fas', 'home']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>Home</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['fas', 'hashtag']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>Explore</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['far', 'bell']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>Notifications</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['far', 'envelope']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>Messages</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['far', 'bookmark']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>Bookmarks</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['far', 'list-alt']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>List</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['far', 'user']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>Profile</h2>
        </div>
        <div class="sidebarOption">
            <fa :icon="['fas', 'ellipsis-h']" class="sidebarIcon" size="lg" :style="{ color: '#4A4E52' }" />
            <h2>More</h2>
        </div>
        <br>
        <router-link to="#!" class="button">Twit</router-link>
    </div>
    <!-- SIDEBAR - End -->

    <div class="feed">
        <div class="feedHeader">
            <h2>Home</h2>
            <fa :icon="['fas', 'magic']" class="magicIcon" size="lg" :style="{ color: '#4A4E52' }" pull="right" />
        </div>

        <div class="tweetbox">
            <form action="" enctype="multipart/form-data">
                <div class="tweetboxInput">
                    <img src="../assets/avatar.png" alt="avatar">
                    <textarea name="" id="" cols="50" placeholder="What's happening?"></textarea>
                </div>
                <div class="tweetboxFile">
                    <label for="fileInput">
                        <img src="../assets/photo.png" />
                    </label>
                    <!-- https://icons-for-free.com/ -->
                    <img src="../assets/gif.png" />
                    <img src="../assets/chart.png" />
                    <img src="../assets/smile.png" />
                    <img src="../assets/schedule.png" />
                    <img src="../assets/gps.png" />
                    <input type="file" class="fileInput" id="fileInput">
                    <button class="tweetbutton" type="submit">Twit</button>
                </div>
            </form>
        </div>

        <div class="post">

        </div>
    </div>
</body>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'roboto';
}

body {
    display: flex;
    height: 100vh;
    max-width: 1325px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;

    .sidebar {
        border-right: 1px solid #EFF3F4;
        flex: 0.2;
        min-width: 285px;
        padding-left: 20px;

        .fab-twitter {
            margin-left: 20px;
            margin-bottom: 10px;
            margin-top: 10px;

        }

        .sidebarOption {
            padding: 15px;
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-bottom: 10px;

            h2 {
                font-weight: lighter;
                color: #4A4E52;
                font-size: 20px;
                margin-left: 20px;
                font-family: 'Trebuchet MS', sans-serif;

            }
        }

        .sidebarOption:hover {
            background-color: #E6E7E7;
            border-radius: 30px;
            color: dark;
            transition: color 100ms ease-out;
        }

        .sidebarOption.active {
            font-weight: 900;
        }

        .button {
            border-radius: 40px;
            border: none;
            background-color: #1D9BF0;
            color: #fff;
            font-size: 1.2rem;
            font-weight: bold;
            padding: 15px 90px;
            letter-spacing: 1px;
            text-decoration: none;
            font-family: 'Trebuchet MS', sans-serif;
        }
    }

    .feed {
        flex: 0.5;
        border-right: 1px solid #EFF3F4;
        min-width: fit-content;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;

        .feedHeader {
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 15px 20px;

            h2 {
                font-family: 'Trebuchet MS', sans-serif;
                font-weight: 900;
            }

            .magicIcon {
                margin-top: -25px;
            }
        }

        .tweetbox {
            padding-bottom: 10px;
            border-bottom: 1px solid #EFF3F4;

            form {
                flex-direction: columns;

                .tweetboxInput {
                    display: flex;
                    margin-left: 20px;
                    margin-top: 10px;

                    img {
                        border-radius: 50%;
                        height: 40px;
                    }

                    textarea {
                        flex: 1;
                        margin-left: 20px;
                        font-size: 20px;
                        border: none;
                        outline: none;
                        font-family: 'Trebuchet MS', sans-serif;
                        width: 100%;
                        overflow: hidden;
                        resize: none;
                    }
                }

                .tweetboxFile {
                    margin-left: 20px;

                    img {
                        margin-right: 10px;
                    }
                    .tweetbutton {
                        background-color: #1D9BF0;
                        border: none;
                        color: white;
                        font-weight: 900;
                        border-radius: 30px;
                        height: 40px;
                        width: 100px;
                        font-family: 'Trebuchet MS', sans-serif;
                        float: right;
                    }
                }

            }
        }
    }

    .tweetboxFile>input {
        display: none;
    }

    .tweetboxFile img {
        margin-top: 10px;
        cursor: pointer;
    }

    .feed::-webkit-scrollbar {
        display: none;
    }
}
</style>
