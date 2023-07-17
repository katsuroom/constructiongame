class Interactable {

    constructor()
    {
        this.label = "";
        this.labelColor = "white";
        this.infoType = "";
        this.interactBox = { 
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }
}

module.exports = Interactable;