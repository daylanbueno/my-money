export function selectTab(tabId) {
    console.log('tab id: ',tabId)
    return {
        type:'TAB_SELECTED',
        payload: tabId
    }
}