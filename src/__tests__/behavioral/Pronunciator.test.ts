import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
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

    private static Pronunciator() {
        return PronunciatorImpl.Create()
    }
}
