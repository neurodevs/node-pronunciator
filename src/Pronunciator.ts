export default class PronunciatorImpl implements Pronunciator {
    public static Class?: PronunciatorConstructor

    protected constructor() {}

    public static Create() {
        return new (this.Class ?? this)()
    }
}

export interface Pronunciator {}

export type PronunciatorConstructor = new () => Pronunciator
