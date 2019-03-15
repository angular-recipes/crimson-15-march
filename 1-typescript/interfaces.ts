
export interface Human {
    id?: number;
    name: string;
    age: number;
    introduce: Function;
}

export interface hasSpeak {
    speak: Function;
}

export let f = (c) => c*c;
export const NUM_OF_USERS = 22;