export const changeLang = (toggledLang) => {
    return {
        type: 'CHANGE_LANG',
        payload: toggledLang,
    }
}
export const changePage = (selectedPage) => {
    return{
        type: 'CHANGE_PAGE',
        payload: selectedPage,
    }
}
export const changeView = (mobile) => {
    return{
        type: 'CHANGE_VIEW',
        payload: mobile,
    }
}
