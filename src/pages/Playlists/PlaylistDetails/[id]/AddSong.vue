<template>
    <div class="add-song">
        <!-- <button v-if="!showForm" @click="showForm = true">Add Songs</button> -->
        <form @submit.prevent="handleSubmit">
            <label>添加歌曲</label>
            <!-- <input type="text" placeholder="Song title" required v-model="title">
            <input type="text" placeholder="Artist" required v-model="artist"> -->
            <input type="file" @change="handleSelected" required>
            <div class="error">{{ fileError }}</div>
            <div class="container text-center">
                <button v-if="!isPending">添加</button>
                <button v-else disabled>添加中....</button>
            </div>
        </form>


    </div>
</template>

<script setup>
const file = $ref(null)
const fileError = $ref(null)
const playlist = $(inject('playlist'))
const { isPending } = useIsPending()
const emits = defineEmits(['addedSong'])
const selected = $ref(null)
const title = $ref('')
const artist = $ref('')
// const showForm = $ref(false)
const { uploadMusic, filePath } = $(useStorage())
const { updateDoc } = useDocument()
const router = useRouter()

// 允许上传的数据类型
const types = ['audio/mpeg']

const handleSelected = (e) => {
    selected = e.target.files[0]
    console.log(selected)
    if (selected && types.includes(selected.type)) {
        file = selected
        fileError = null
    } else {
        file = null
        fileError = 'Please select an audio file (mp3)'
    }
}
const handleSubmit = async () => {
    const { url } = $(await uploadMusic(file))
    let matches = selected.name.match(/(.+)\-(.*)\.mp3/)
    const title = matches[2].trim()
    const artist = matches[1].trim()
    const newSong = {
        title: title,
        artist: artist,
        musicUrl: url,
        filePath: filePath,
        id: Math.floor(Math.random() * 100000000)
    }
    // 上传数据
    await updateDoc(playlist.playlistId.toString(), {
        songs: [...playlist.songs, newSong]
    })
    // 更新本地的数据
    playlist.songs.push(newSong)
    // console.log(playlist)
    // 这里不需要清空表格里的数据,因为若是上传成功,页面则跳转,数据则被重置,若失败则保留输入信息

    emits('addedSong')
    router.push({ name: 'Playlists-PlaylistDetails-id-SongList' })
}
</script>

<style scoped>
</style>