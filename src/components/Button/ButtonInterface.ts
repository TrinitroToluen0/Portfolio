export enum ButtonStyle {
    Primary,
    Secondary,
    Link,
}

export interface Button {
    label: string;
    style: ButtonStyle;
    url?: string;
}