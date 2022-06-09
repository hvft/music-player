// Generated by 'unplugin-auto-import'
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const [alias]: typeof import('[package-name]')['[from]']
  const [import-names]: typeof import('[package-name]')['[import-names]']
  const addDoc: typeof import('./src/composables/addDoc.js')['default']
  const auth: typeof import('./src/firebase/config.js')['auth']
  const axios: typeof import('axios')['default']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const db: typeof import('./src/firebase/config.js')['db']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const getCollection: typeof import('./src/composables/getCollection.js')['default']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getDoc: typeof import('./src/composables/getDoc.js')['default']
  const getDocData: typeof import('./src/composables/getDocData.js')['default']
  const getDocId: typeof import('./src/composables/getDocId.js')['default']
  const getDocRef: typeof import('./src/composables/getDocRef.js')['default']
  const getPlaylistsIds: typeof import('./src/composables/getPlaylistsIds.js')['default']
  const getUser: typeof import('./src/composables/getUser.js')['default']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const playlists: typeof import('./src/store/store.js')['playlists']
  const preLoad: typeof import('./src/composables/preLoad.js')['preLoad']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const storage: typeof import('./src/firebase/config.js')['storage']
  const timestamp: typeof import('./src/firebase/config.js')['timestamp']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCollection: typeof import('./src/composables/useCollection.js')['default']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useDocument: typeof import('./src/composables/useDocument.js')['default']
  const useEventListener: typeof import('./src/composables/useEvent.js')['useEventListener']
  const useFetch: typeof import('./src/composables/useFetch.js')['useFetch']
  const useLogin: typeof import('./src/composables/useLogin.js')['default']
  const useLogout: typeof import('./src/composables/useLogout.js')['default']
  const useMouse: typeof import('./src/composables/useMouse.js')['useMouse']
  const useMyFetch: typeof import('@vueuse/core')['useFetch']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSignup: typeof import('./src/composables/useSignup.js')['default']
  const useSlots: typeof import('vue')['useSlots']
  const useStorage: typeof import('./src/composables/useStorage.js')['default']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for vue template auto import
declare module 'vue' {
  interface ComponentCustomProperties {
    EffectScope: typeof import('vue')['EffectScope']
    [alias]: typeof import('[package-name]')['[from]']
    [import-names]: typeof import('[package-name]')['[import-names]']
    addDoc: typeof import('./src/composables/addDoc.js')['default']
    auth: typeof import('./src/firebase/config.js')['auth']
    axios: typeof import('axios')['default']
    computed: typeof import('vue')['computed']
    createApp: typeof import('vue')['createApp']
    customRef: typeof import('vue')['customRef']
    db: typeof import('./src/firebase/config.js')['db']
    defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
    defineComponent: typeof import('vue')['defineComponent']
    effectScope: typeof import('vue')['effectScope']
    getCollection: typeof import('./src/composables/getCollection.js')['default']
    getCurrentInstance: typeof import('vue')['getCurrentInstance']
    getCurrentScope: typeof import('vue')['getCurrentScope']
    getDoc: typeof import('./src/composables/getDoc.js')['default']
    getDocData: typeof import('./src/composables/getDocData.js')['default']
    getDocId: typeof import('./src/composables/getDocId.js')['default']
    getDocRef: typeof import('./src/composables/getDocRef.js')['default']
    getPlaylistsIds: typeof import('./src/composables/getPlaylistsIds.js')['default']
    getUser: typeof import('./src/composables/getUser.js')['default']
    h: typeof import('vue')['h']
    inject: typeof import('vue')['inject']
    isProxy: typeof import('vue')['isProxy']
    isReactive: typeof import('vue')['isReactive']
    isReadonly: typeof import('vue')['isReadonly']
    isRef: typeof import('vue')['isRef']
    markRaw: typeof import('vue')['markRaw']
    nextTick: typeof import('vue')['nextTick']
    onActivated: typeof import('vue')['onActivated']
    onBeforeMount: typeof import('vue')['onBeforeMount']
    onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
    onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
    onDeactivated: typeof import('vue')['onDeactivated']
    onErrorCaptured: typeof import('vue')['onErrorCaptured']
    onMounted: typeof import('vue')['onMounted']
    onRenderTracked: typeof import('vue')['onRenderTracked']
    onRenderTriggered: typeof import('vue')['onRenderTriggered']
    onScopeDispose: typeof import('vue')['onScopeDispose']
    onServerPrefetch: typeof import('vue')['onServerPrefetch']
    onUnmounted: typeof import('vue')['onUnmounted']
    onUpdated: typeof import('vue')['onUpdated']
    playlists: typeof import('./src/store/store.js')['playlists']
    preLoad: typeof import('./src/composables/preLoad.js')['preLoad']
    provide: typeof import('vue')['provide']
    reactive: typeof import('vue')['reactive']
    readonly: typeof import('vue')['readonly']
    ref: typeof import('vue')['ref']
    resolveComponent: typeof import('vue')['resolveComponent']
    shallowReactive: typeof import('vue')['shallowReactive']
    shallowReadonly: typeof import('vue')['shallowReadonly']
    shallowRef: typeof import('vue')['shallowRef']
    storage: typeof import('./src/firebase/config.js')['storage']
    timestamp: typeof import('./src/firebase/config.js')['timestamp']
    toRaw: typeof import('vue')['toRaw']
    toRef: typeof import('vue')['toRef']
    toRefs: typeof import('vue')['toRefs']
    triggerRef: typeof import('vue')['triggerRef']
    unref: typeof import('vue')['unref']
    useAttrs: typeof import('vue')['useAttrs']
    useCollection: typeof import('./src/composables/useCollection.js')['default']
    useCssModule: typeof import('vue')['useCssModule']
    useCssVars: typeof import('vue')['useCssVars']
    useDocument: typeof import('./src/composables/useDocument.js')['default']
    useEventListener: typeof import('./src/composables/useEvent.js')['useEventListener']
    useFetch: typeof import('./src/composables/useFetch.js')['useFetch']
    useLogin: typeof import('./src/composables/useLogin.js')['default']
    useLogout: typeof import('./src/composables/useLogout.js')['default']
    useMouse: typeof import('./src/composables/useMouse.js')['useMouse']
    useMyFetch: typeof import('@vueuse/core')['useFetch']
    useRoute: typeof import('vue-router')['useRoute']
    useRouter: typeof import('vue-router')['useRouter']
    useSignup: typeof import('./src/composables/useSignup.js')['default']
    useSlots: typeof import('vue')['useSlots']
    useStorage: typeof import('./src/composables/useStorage.js')['default']
    watch: typeof import('vue')['watch']
    watchEffect: typeof import('vue')['watchEffect']
    watchPostEffect: typeof import('vue')['watchPostEffect']
    watchSyncEffect: typeof import('vue')['watchSyncEffect']
  }
}
