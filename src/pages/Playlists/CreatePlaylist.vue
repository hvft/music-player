<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col w-1/3 justify-center items-center self-center">
        <h4 class="text-black-600 text-2xl font-bold ">创建播放表</h4>
        <input class="w-full" type="text" required placeholder="Playlist title" v-model="title">
        <!-- <textarea required placeholder="Playlist description..." v-model="description"></textarea> -->
        <!-- upload playlist image -->
        <label>上传播放表图片</label>
        <input type="file" @change="handleChange" required>
        <div class="error">{{ fileError }}</div>
        <button class="btn relative left-0 top-2" v-if="!isPending">创建</button>
        <button class="btn relative left-0 top-2" v-else disabled>保存中...</button>
    </form>
</template>



<script setup>
import { Timestamp } from "firebase/firestore"


const { isPending } = useIsPending()
const { uploadImage, filePath, } = $(useStorage())
const { error, addDoc } = $(useCollection('playlists'))
const { user } = $(getUser())
const router = useRouter()
// const uid = user.uid;
const title = $ref('')
// const playlistsName = $ref('')
// const description = $ref('')
const file = $ref(null)
const fileError = $ref(null)
const playlist = $ref('')



const handleSubmit = async () => {
    if (file) {
        const { url } = $(await uploadImage(file))
        console.log(url)
        await addDoc({
            title: title,
            // description: description,
            userId: user.uid,
            userName: user.displayName,
            coverUrl: url,
            filePath: filePath,
            songs: [],
            createdAt: Timestamp.fromDate(new Date())
        });
        if (!error) {
            router.push({ name: 'Playlists-UserPlaylists' })
        }
    }
}
// 允许上传的数据类型
const types = ['image/png', 'image/jpeg']

const handleChange = (e) => {
    const selected = e.target.files[0]
    console.log(selected)

    if (selected && types.includes(selected.type)) {
        file = selected
        fileError = null
    } else {
        file = null
        fileError = 'Please select an image file (png or jpg)'
    }
}

</script>

<style scoped>
/* input[type="file"] {
    border: 0;
    padding: 0;
}

label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
}

button {
    margin-top: 20px;
} */
@media screen and (max-width: 600px) {
    form {
        width: 90%;
    }
}
</style>