import htmlNodes from '../htmlNodes';
import deletes from '../deletes';

describe('delete a to-do', () => {
  it('changes the display of a to-do to none', () => {
    document.body.innerHTML = htmlNodes;
    const check = document.querySelector('.confirmDelete');
    deletes();
    expect(check.style.display).toEqual('none');
  });
});