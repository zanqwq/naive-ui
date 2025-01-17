import { c, cB, cE } from '../../../_utils/cssr'

// vars:
// --n-font-size
// --n-icon-size
// --n-bezier
// --n-icon-color
export default cB('popconfirm', [
  cE('body', `
    font-size: var(--n-font-size);
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
  `, [
    cE('icon', `
      display: flex;
      font-size: var(--n-icon-size);
      color: var(--n-icon-color);
      transition: color .3s var(--n-bezier);
      margin: 0 8px 0 0;
    `)
  ]),
  cE('action', `
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
  `, [
    cB('button', [
      c('&:not(:last-child)', {
        marginRight: '8px'
      })
    ])
  ])
])
