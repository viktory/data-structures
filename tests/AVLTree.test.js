import { AVLTree } from '../src/AVLTree/AVLTree';

describe('AVLTreeBasics', () => {

  let newTree = new AVLTree();
  let matcherTC1 = {_data: 49, _left: undefined, _right: undefined, _height: 1};
  let matcherTC2 = {
    _data: 25,
    _height: 4,
    _left:  {
      _data: 21,
      _height: 3,
      _left: {
        _data: 13,
        _height: 2,
        _left: {
          _data: 11,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
        _right: undefined,
      },
      _right:  {
        _data: 21,
        _height: 1,
        _left: undefined,
        _right: undefined,
      },
    },
    _right: {
      _data: 49,
      _height: 3,
      _left: {
        _data: 28,
        _height: 2,
        _left: undefined,
        _right:  {
          _data: 43,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
      },
      _right: {
        _data: 87,
        _height: 2,
        _left: {
          _data: 51,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
        _right: {
          _data: 96,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
      },
    },
  };

  let matcherTC3 = {
    _data: 25,
    _height: 4,
    _left:  {
      _data: 21,
      _height: 3,
      _left: {
        _data: 13,
        _height: 2,
        _left: {
          _data: 11,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
        _right: undefined,
      },
      _right:  {
        _data: 21,
        _height: 1,
        _left: undefined,
        _right: undefined,
      },
    },
    _right: {
      _data: 49,
      _height: 3,
      _left: {
        _data: 28,
        _height: 2,
        _left: undefined,
        _right:  {
          _data: 43,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
      },
      _right: {
        _data: 96,
        _height: 2,
        _left: {
          _data: 51,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
        _right: undefined,
      },
    },
  };

  let matcherTC4 = {
    _data: 25,
    _height: 4,
    _left:  {
      _data: 21,
      _height: 2,
      _left: {
        _data: 13,
        _height: 1,
        _left: undefined,
        _right: undefined,
      },
      _right:  {
        _data: 21,
        _height: 1,
        _left: undefined,
        _right: undefined,
      },
    },
    _right: {
      _data: 49,
      _height: 3,
      _left: {
        _data: 28,
        _height: 2,
        _left: undefined,
        _right:  {
          _data: 43,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
      },
      _right: {
        _data: 96,
        _height: 2,
        _left: {
          _data: 51,
          _height: 1,
          _left: undefined,
          _right: undefined,
        },
        _right: undefined,
      },
    },
  };

  test('create root', () => {
    expect(newTree.head).toEqual(undefined);
    newTree.insert(49);
    expect(newTree.head).toEqual(matcherTC1);
  });

  test('insert elements', () => {
    newTree.insert(25);
    newTree.insert(13);
    newTree.insert(28);
    newTree.insert(87);
    newTree.insert(96);
    newTree.insert(21);
    newTree.insert(43);
    newTree.insert(21);
    newTree.insert(51);
    newTree.insert(11);

    expect(newTree.head).toEqual(matcherTC2);
  });

  describe('delete elements', () => {
    test('delete right node', () => {
      newTree.delete(87);
      expect(newTree.head).toEqual(matcherTC3);
    });

    test('delete child node', () => {
      newTree.delete(11);
      expect(newTree.head).toEqual(matcherTC4);
    })

  })
});
