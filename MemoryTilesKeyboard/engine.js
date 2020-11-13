const build_tiles = function () {
    const caractersList = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@\._-', 'backspace', 'reset', 'submit'];

    const tempBuildingList = [];

    for (var i = 0; i < caractersList.length * 2; i++) {
        tempBuildingList.push(caractersList[i % caractersList.length]);
    }

    const tilesObjectList = [];
    while (tempBuildingList.length !== 0) {
        const object = {
            value: tempBuildingList.splice(getRandomIndex(tempBuildingList), 1)[0],
            state: false, // false = hidden
            onClickHandler: () => {
                object.state = true;
                object.redraw()
            },
            resetTileState: () => {
                object.state = false;
                object.redraw()
            },
            attachDomObject: (domObject) => {
                object.domObject = domObject
            },
            domObject: undefined,
            redraw: () => {
                setDomTile(object, object.domObject)
            }
        }

        tilesObjectList.push(object);
    }

    return tilesObjectList;
}

const getRandomIndex = function (tab) {
    return Math.floor(Math.random() * Math.floor(tab.length));
}

const setDomTile = function (tileObject, tileDom) {
    if(tileObject.state) {
        tileDom.innerText = tileObject.value;
    }else{
        setTimeout(() => {
            tileDom.innerText = "";
        }, 1000);
    }
}
