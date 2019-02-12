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

        await indexPage.province.includeCreateTable.check(IndexPage);
        await indexPage.province.createTableStatement.enterText(IndexPage, 'create table province');
        await indexPage.province.includeInsertStatement.check(IndexPage);
        await indexPage.province.createTableStatement.enterText(IndexPage, 'insert into province');

        await indexPage.district.includeCreateTable.uncheck(IndexPage);
        await indexPage.district.includeInsertStatement.check(IndexPage);
        await indexPage.district.insertStatement.enterText(IndexPage, 'insert into district');

        // not include subdistrict at all
        await indexPage.subdistrict.includeCreateTable.uncheck(IndexPage);
        await indexPage.subdistrict.includeInsertStatement.uncheck(IndexPage);
        await indexPage.export.click(IndexPage);

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