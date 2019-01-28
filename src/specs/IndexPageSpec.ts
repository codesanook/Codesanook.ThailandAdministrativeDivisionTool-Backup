import Session from '../CodeSanook.Bumblebee.TS/src/Setup/Session';
import HomePage from '../page-objects/IndexPage';

describe('home page', () => {
    let session: Session;

    beforeAll((done) => {
        jest.setTimeout(60000);
        done();
    });

    beforeEach(async () => {
        session = await Session.new();
    });

    afterEach(async () => {
        await session.close();
    });

    it('should redirect to home page', async () => {
        await session.navigateTo(
            HomePage,
            'http://localhost:3000'
        );
        await session.page.waitFor(3000);
    });
});