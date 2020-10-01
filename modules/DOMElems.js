import { select, selectAll } from './DOMFuncs.js';
const DOMElems = {
    pagesContainer: select('.main-pane'),
    langChoicesModal: select('.languages-modal'),
    availableLangsContainer: select('.avail-langs'),
    saveChoicesBtn: select('.langs-chosen-save'),
    langChoicesCheckBox: selectAll('.lang-choice'),
};

export default DOMElems;
