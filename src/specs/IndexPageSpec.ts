import Session from '../CodeSanook.Bumblebee.TS/src/Setup/Session';
import IndexPage from '../page-objects/IndexPage';

describe('index page', () => {
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

    it('should go to index page', async () => {
        const indexPage = await session.navigateTo(
            IndexPage,
            'http://localhost:3000'
        );

        await session.page.waitFor(3000);
    });
});