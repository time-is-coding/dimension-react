export const getContainerInfo = () => {
    const container = document.querySelector('#TEXT_ANNOTATE_CONTAINER')
    const width = container?.clientWidth
    console.log(width, '===========')
    return {
        width
    }
}
