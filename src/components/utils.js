function organizeImgToObj(imgs_files, contentDescription) {
    const folder_content = {};
    contentDescription.sort();
    const name_src = imgs_files.keys();
    name_src.forEach(
        (key) =>
            (folder_content[key] = {
                src: imgs_files(key),
                name: contentDescription[name_src.indexOf(key)],
                id: "card" + (name_src.indexOf(key) + 1),
            })
    );
    return folder_content;
}
export const allImg = () => {
    const imgNames = [
        "Peter Griffin",
        "Stewie Griffin",
        "Lois Griffin",
        "Brian Griffin",
        "Chris Griffin",
        "Megatron Griffin",
        "Glenn Quagmire",
        "Billy Finn ",
        "Cleveland Brown",
        "Joe Swanson",
        "Seamus Levine",
        "Adam West",
    ];
    const path_search = require.context("../imgs/", false, /\.jp/);
    const imgSrc = organizeImgToObj(path_search, imgNames);
    return imgSrc;
};

export const initialStateObj = (obj) => {
    let newObj = {};
    const key = Object.keys(obj);
    key.forEach((i) => (newObj[obj[i].id] = false));
    return newObj;
};
