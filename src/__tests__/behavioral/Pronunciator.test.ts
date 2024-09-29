import AbstractSpruceTest, {
    test,
    assert,
    errorAssert,
} from '@sprucelabs/test-utils'
import PronunciatorImpl, { Pronunciator } from '../../Pronunciator'

export default class PronunciatorTest extends AbstractSpruceTest {
    private static instance: Pronunciator

    protected static async beforeEach() {
        await super.beforeEach()
        this.instance = this.Pronunciator()
    }

    @test()
    protected static async canCreatePronunciator() {
        assert.isTruthy(this.instance)
    }

    @test()
    protected static async playPronunciationThrowsWithMissingRequiredOptions() {
        const err = await assert.doesThrowAsync(
            // @ts-ignore
            async () => await this.instance.playPronunciation()
        )
        errorAssert.assertError(err, 'MISSING_PARAMETERS', {
            parameters: ['phrase'],
        })
    }

    private static Pronunciator() {
        return PronunciatorImpl.Create()
    }
}
