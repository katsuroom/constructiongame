export class Button {
    constructor(x, y, width, height, color = "pink", text = "")
    {
        this.interactBox = { x, y, width, height };
        this.text = text;

        this.enabled = true;

        switch(color)
        {
            case "pink":
                this.colorA = "#ff66bd";
                this.colorB = "#ff7fc7";
                break;
            case "red":
                this.colorA = "#ff6666";
                this.colorB = "#ff8080";
                break;
            case "orange":
                this.colorA = "#ffa666";
                this.colorB = "#ffb580";
                break;
            case "green":
                this.colorA = "#5ce55c";    // #66ff66
                this.colorB = "#66ff66";    // #80ff80
                break;
            case "blue":
                this.colorA = "#66ccff";
                this.colorB = "#80d4ff";
                break;
            default:
                this.colorA = "white";
                this.colorB = "black";
                break;
        }
    }
}