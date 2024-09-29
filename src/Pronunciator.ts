import { assertOptions } from '@sprucelabs/schema'

export default class PronunciatorImpl implements Pronunciator {
    public static Class?: PronunciatorConstructor

    protected constructor() {}

    public static Create() {
        return new (this.Class ?? this)()
    }

    public async playPronunciation(phrase: string) {
        assertOptions({ phrase }, ['phrase'])
    }
}

export interface Pronunciator {
    playPronunciation(phrase: string): Promise<void>
}

export type PronunciatorConstructor = new () => Pronunciator
