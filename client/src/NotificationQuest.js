import { Notification } from "./Notification.js";
import { drawVillager } from "../global.js";

export class NotificationQuest extends Notification {

    // Event obj
    constructor(villager)
    {
        let text = "quest complete!";
        super(text, 3000);

        this.villager = villager;
    }

    draw(ctx, scale)
    {
        ctx.font = '16px Kenney Mini Square';
        ctx.fillStyle = "white";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(this.text, 16*21*scale, 16*9*scale);

        drawVillager(this.villager, 16*20, 16*9, 2);

        ctx.font = '16px Kenney Mini Square';
        ctx.fillText(this.villager.name, 16*21*scale, 16*12.25*scale);

        ctx.fillStyle = "goldenrod";
        ctx.fillText(this.villager.quest.description, 16*21*scale, 16*13*scale);
    }
};