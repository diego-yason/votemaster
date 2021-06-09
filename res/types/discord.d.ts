export interface ButtonInteraction {
    version:        number;
    type:           number;
    token:          string;
    message:        Message;
    member:         Member;
    id:             string;
    guild_id:       string;
    data:           ButtonData;
    channel_id:     string;
    application_id: string;
}

export interface Interaction {
    type:       number;
    token:      string;
    member:     Member;
    id:         string;
    guild_id:   string;
    data:       InteractionData;
    channel_id: string;
}

interface InteractionData {
    options: InteractionOptions[];
    name:    string;
    id:      string;
}

interface InteractionOptions {
    name:  string;
    value: string;
}

interface Message {
    type:             number;
    tts:              boolean;
    timestamp:        string;
    pinned:           boolean;
    mentions:         string[];
    mention_roles:    string[];
    id:               string;
    flags:            number;
    embeds:           Embed[];
    edited_timestamp: string;
    content:          string;
    components:       Components[];
    channel_id:       string;
    author:           User;
    attachments:      Attachment[];
}

interface Embed {
    title?:       string;
    type?:        string;
    description?: string;
    url?:         string;
    timestamp?:   string;
    color?:       number;
    footer?:      EmbedFooter;
    image?:       EmbedImage;
    thumbnail?:   EmbedThumbnail;
    video?:       EmbedVideo;
    provider?:    EmbedProvider;
    author?:      EmbedAuthor;
    fields?:      EmbedField[];
}

interface EmbedThumbnail {
    url?:       string;
    proxy_url?: string;
    height?:    number;
    width?:     number;
}

interface EmbedVideo {
    url?:       string;
    proxy_url?: string;
    height?:    number;
    width?:     number;
}

interface EmbedProvider {
    name?: string;
    url?:  string;   
}

interface EmbedAuthor {
    name?:           string;
    url?:            string;
    icon_url?:       string;
    proxy_icon_url?: string;
}

interface EmbedField {
    name:    string;
    value:   string;
    inline?: boolean;
}

interface EmbedFooter {
    text:            string;
    icon_url?:       string;
    proxy_icon_url?: string;
}

interface EmbedImage {
    url?:       string;
    proxy_url?: string;
    height?:    number;
    width?:     number;
}

interface Components {
    type:       number;
    components: component_data[];
}

interface component_data {
    type:      number;
    label:     string;
    style:     number;
    custom_id: string;
}

interface Member {
    user:          User;
    roles:         string[];
    premium_since: null | string;
    permissions:   string;
    pending:       boolean;
    nick:          null | string;
    mute:          boolean;
    joined_at:     string;
    is_pending:    boolean;
    deaf:          boolean;
    avatar:        null | string;
}

interface ButtonData {
    custom_id: string;
    component_type: number;
}

interface User {
    username:      string;
    public_flags:  number;
    id:            string;
    discriminator: string;
    avatar:        string;
}

interface Attachment {
    id:            string;
    filename:      string;
    context_type?: string;
    size:          number;
    url:           string;
    poxy_url:      string;
    height?:       number;
    width?:        number;
}