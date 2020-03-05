import { getRandomInt } from "../utils";

type ElementType = number;

type NodeType = INode | undefined;

interface INode {
  data: ElementType;
  height: number;
  left: NodeType;
  right: NodeType;
  hasLeft: boolean;
  hasRight: boolean;
}

class Node implements INode {
  protected _data: ElementType;
  protected _left: NodeType;
  protected _right: NodeType;
  protected _height: number;

  public constructor(data: ElementType) {
    this._data = data;
    this._height = 1;
  }

  public get data() {
    return this._data;
  }

  public set data(data: ElementType) {
    this._data = data;
  }

  public get height() {
    return this._height;
  }

  public set height(height: number) {
    this._height = height;
  }
  public get left() {
    return this._left;
  }

  public set left(left: NodeType) {
    this._left = left;
  }

  public get right() {
    return this._right;
  }

  public set right(right: NodeType) {
    this._right = right;
  }


  public get hasLeft() {
    return this.left !== undefined;
  }

  public get hasRight() {
    return this.right !== undefined;
  }
}

interface IAVLTree {
  head: NodeType;
  insert: (element: ElementType) => void;
  delete: (element: ElementType) => void;
  print: () => void;
  find: (element: ElementType) => void;
}


export class AVLTree implements IAVLTree {
  private _head: NodeType;

  public constructor() {
    this._head = undefined;
  }

  public get head() {
    return this._head;
  }

  public generate() {
    for (let i = 0; i <= getRandomInt(); i++) {
      this.insert(getRandomInt());
    }
  }

  public insert(element: ElementType) {
    this._head = this._insert(new Node(element), this.head);
  }

  public delete(element: ElementType) {
    this._head = this._delete(new Node(element), this.head);
  }

  private _delete(node: INode, root: NodeType)
  {
    if (!root) {
      return root;
    } else {
      if (node.data === root.data) {
        root = this._deleteFoundNode(root);
        if (!root) {
          return root;
        }
      } if (this.toLeft(node, root)) {
        root.left = this._delete(node, root.left);
      } else if (this.toRight(node, root)) {
        root.right = this._delete(node, root.right);
      }
    }

    const leftHeight = AVLTree.getHeight(root.left);
    const rightHeight = AVLTree.getHeight(root.right);

    root.height = 1 + Math.max(leftHeight, rightHeight);

    let balance = this.getBalance(root);

    if ((balance > 1) && root.left) {
      if (this.getBalance(root.left) < 0) {
        root.left = AVLTree.leftRotate(root.left);
      }
      return AVLTree.rightRotate(root);
    } else if ((balance < -1) && root.right) {
      if (this.getBalance(root.right) > 0) {
        root.right = AVLTree.rightRotate(root.right);
      }
      return AVLTree.leftRotate(root);
    }

    return root;
  }

  private _deleteFoundNode(node: INode): INode | undefined {
    let tmpElement: NodeType;

    if (!node.hasRight || !node.hasLeft) {
      tmpElement = node.left || node.right;

      return tmpElement;
    } else {
      tmpElement = this.findMinimal(node.right);
      if (!tmpElement) {
        throw 'tmpElement is not found';
      }
      node.data = tmpElement.data;
      node.right = this._delete(tmpElement, node.right);
    }

    return node;
  }

  private findMinimal(root: NodeType): NodeType {
    if (!root?.hasLeft) {
      return root;
    }

    return this.findMinimal(root.left);
  }

  private getBalance(root: NodeType): number {
    return root ? AVLTree.getHeight(root.left) - AVLTree.getHeight(root.right) : 0;
  }
  private _insert(node: INode, root: NodeType)
  {
    if (!root) {
      return node;
    } else if (this.toLeft(node, root)) {
      root.left = this._insert(node, root.left);
    } else if (this.toRight(node, root)) {
      root.right = this._insert(node, root.right);
    } else {
      throw 'subroot was not found';
    }

    const leftHeight = AVLTree.getHeight(root.left);
    const rightHeight = AVLTree.getHeight(root.right);

    root.height = 1 + Math.max(leftHeight, rightHeight);

    let balance = this.getBalance(root);

    if ((balance > 1) && root.left) { //left subtree is longer
      if (node.data < root.left.data) {  // node goes to left

      } else {  // node goes to right
        root.left = AVLTree.leftRotate(root.left);
      }

      return AVLTree.rightRotate(root)

    } else if ((balance < -1) && root.right) { // right subtree is longer
      if (node.data >= root.right.data) {  // node goes to right

      } else {  // node goes to left
        root.right = AVLTree.rightRotate(root.right);
      }

      return AVLTree.leftRotate(root);
    }

    return root;
  }

  private static leftRotate(root: NodeType): INode {
    if (!root) {
      throw 'root is empty';
    }
    if (!root.right) {
      throw 'right subtree is empty';
    }

    let pointer = root.right;
    let leftTmpSubtree = pointer.left;

    pointer.left = root;
    root.right = leftTmpSubtree;
    root.height = 1 + Math.max(AVLTree.getHeight(root.left), AVLTree.getHeight(root.right));
    pointer.height = 1 + Math.max(AVLTree.getHeight(pointer.left), AVLTree.getHeight(pointer.right));

    return pointer;
  }

  private static rightRotate(root: NodeType) {
    if (!root) {
      throw 'root is empty';
    }
    if (!root.left) {
      throw 'left subtree is empty';
    }

    let pointer = root.left;
    let rightTmpSubtree = pointer.right;
    pointer.right = root;
    root.left = rightTmpSubtree;

    root.height = 1 + Math.max(AVLTree.getHeight(root.left), AVLTree.getHeight(root.right));
    pointer.height = 1 + Math.max(AVLTree.getHeight(pointer.left), AVLTree.getHeight(pointer.right));

    return pointer;
  }

  private static getHeight(root: NodeType) {
    return root?.height || 0;
  }

  public find(element: ElementType) {

  }

  public print() {
    this.breadthFirstPrint();
    this.depthFirstPrint();
    // console.log(JSON.stringify(pointer));
  }

  public depthFirstPrint() {
    let output: ElementType[] = [];

    const _print = (pointer: NodeType) => {
      if (!pointer) {
        return;
      }

      _print(pointer.left);
      output.push(pointer.data);
      _print(pointer.right);
    };
    _print(this.head);
    console.log(output);
  }

  public breadthFirstPrint() {
    let output: ElementType[] = [];
    let fifo: NodeType[] = [this.head];

    while (fifo.length > 0) {
      let element = fifo.shift();
      if (!element) {
        continue;
      }
      fifo.push(element.left, element.right);
      output.push(element.data);
    }

    console.log(output);
  }

  private toLeft(node: INode, root: NodeType = this.head) {
    return root && (root.data > node.data);
  }

  private toRight(node: INode, root: NodeType = this.head) {
    return root && (root.data <= node.data);
  }
}
