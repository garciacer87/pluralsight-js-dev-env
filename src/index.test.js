/**
 * Created by cgarcia on 9/28/18.
 */
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('Should pass', (done) => {
    expect(true).to.equal(true);
    done();
  });
});

describe('index.html', () => {
  it('it should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
  });
});
