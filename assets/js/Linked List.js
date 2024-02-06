class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getIntersectionNode(head1, head2) {
  let ptr1 = head1;
  let ptr2 = head2;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1 ? ptr1.next : head2;
    ptr2 = ptr2 ? ptr2.next : head1;
  }

  return ptr1;
}

function createLinkedListNodes(listId, nodes) {
  const list = document.getElementById(listId);

  nodes.forEach(value => {
    const node = document.createElement('div');
    node.className = 'node';
    node.textContent = value;
    list.appendChild(node);
  });
}

const list1 = new ListNode('12', new ListNode('67', new ListNode('9')));
const list2 = new ListNode('25', new ListNode('56', new ListNode('32', list1.next)));

const intersectionNode = getIntersectionNode(list1, list2);

createLinkedListNodes('list1', ['12', '67', '9']);
createLinkedListNodes('list2', ['25', '56', '32']);

if (intersectionNode) {
  const intersectionNodeIndex = list1.next ? 2 : 0;
  const nodes = document.querySelectorAll('.linked-list:nth-child(1) .node');
  nodes[intersectionNodeIndex].classList.add('intersection');
}