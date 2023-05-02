/* @odoo-module */

import { ChannelInvitation } from "@mail/discuss/channel_invitation";
import { ChatWindow } from "@mail/web/chat_window/chat_window";
import { patch } from "@web/core/utils/patch";

patch(ChatWindow, "discuss", {
    components: { ...ChatWindow.components, ChannelInvitation },
});

patch(ChatWindow.prototype, "discuss", {
    toggleAddUsers() {
        this.state.activeMode = this.state.activeMode === "add-users" ? "" : "add-users";
    },
});
