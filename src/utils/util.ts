/**
 * @description 使用递归，过滤出需要渲染在左侧菜单的列表（剔除 isHide == true 的菜单）
 * @param {Array} menuList 所有菜单列表
 * @return array
 * */
export function getShowMenuList(menuList: Menu.MenuOptions[]) {
    let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
    return newMenuList.filter(item => {
        item.children?.length && (item.children = getShowMenuList(item.children));
        return !item.meta?.isHide;
    });
}
