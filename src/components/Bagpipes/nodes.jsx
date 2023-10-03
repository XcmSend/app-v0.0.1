// @ts-nocheck
import { Position } from 'reactflow';
// import { openAINode } from './components/CustomNodes/OpenAINode';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  // style: {
  //   borderRadius: '100%',
  //   backgroundColor: '#fff',
   
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
};

const initialNodes = [
  {
    id: 'chain_00000',
    position: { x: 0, y: 0 },
    type: 'chain',
    ...nodeDefaults,
  },
  {
    id: 'action_00000',
    position: { x: -100, y: 0 },
    type: 'action',

    ...nodeDefaults,
  },
  {
    id: 'chain_00001',
    position: { x: 250, y: -100 },
    type: 'chain',
    ...nodeDefaults,
  },
];

const initialEdges = [

  {
    id: 'chain_00000-action-00000',
    source: 'chain_00000',
    target: 'action_00000',
  },
  {
    id: 'action_00000-chain-00001',
    source: 'action_00000',
    target: 'chain_00001',
  },

];

const nodes = [
    
    {
      id: 'B',
      type: 'output',
      position: { x: -100, y: 200 },
      data: { label: 'Open AI' },
      style: {
        width: 170,
        height: 140,
        backgroundColor: 'rgba(240,240,240,0.25)',
      },
    },
    {
      id: 'B-1',
      data: { label: 'Child 1' },
      position: { x: 0, y: 10 },
      type: 'textUpdater',
      parentNode: 'B',
      extent: 'parent',
      draggable: false,
      style: {
        width: 60,
      },
    },
    {
      id: 'B-2',
      data: { label: 'Child 2' },
      position: { x: 10, y: 90 },
      parentNode: 'B',
      extent: 'parent',
      draggable: false,
      style: {
        width: 60,
      },
    },
    {
      id: 'B-3',
      data: { label: 'Child 3' },
      position: { x: 100, y: 90 },
      parentNode: 'B',
      extent: 'parent',
      draggable: false,
      style: {
        width: 60,
      },
    },
   
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: '1', position: { x: 0, y: 50 }, data: { 
        label: 'Gary (gpt4)' 
      } 
    },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'OpenAI', type: 'openAi' } }

  ];
  
  export { nodes, initialEdges, initialNodes };



  