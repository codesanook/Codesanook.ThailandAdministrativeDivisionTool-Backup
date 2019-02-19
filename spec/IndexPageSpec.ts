import IndexPage from './page-objects/IndexPage';
import { Session } from 'codesanook-bumblebee-ts';

describe('index page', () => {
    let session: Session

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

        await indexPage.province.includeCreateTable.check();
        await indexPage.province.createTableStatement.enterText('create table province');
        await indexPage.province.includeInsertStatement.check();
        await indexPage.province.createTableStatement.enterText('insert into province');

        await indexPage.district.includeCreateTable.uncheck();
        await indexPage.district.includeInsertStatement.check();
        await indexPage.district.insertStatement.enterText('insert into district');

        // not include subdistrict at all
        await indexPage.subdistrict.includeCreateTable.uncheck();
        await indexPage.subdistrict.includeInsertStatement.uncheck();
        await indexPage.export.click();

        await indexPage.waiForExportModalShowed();
        const exportModal = await indexPage.exportModal;
        expect(exportModal).not.toBeNull();

        const isExportModalShow = await session.page.evaluate(() => {
            const style = (document.querySelector('.export-modal') as any).style;
            return style.display === 'block'
        });

        expect(isExportModalShow).toBe(true);
        await session.page.waitFor(3 * 1000);
    });
});
