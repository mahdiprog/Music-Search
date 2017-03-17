describe('e2e', function () {


    it('typeahead should view list', function () {
        element(by.model('vm.searchQuery')).sendKeys('jacksparrow');
        browser.sleep(2000);
        expect(element.all(by.css('ul[id^=typeahead] li')).count()).toEqual(8);
    });

});