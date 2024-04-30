export const getContainerInfo = () => {
    const container = document.querySelector('#TEXT_ANNOTATE_CONTAINER')
    const width = container?.clientWidth
    const height = container?.clientHeight
    return {
        width,
        height
    }
}
