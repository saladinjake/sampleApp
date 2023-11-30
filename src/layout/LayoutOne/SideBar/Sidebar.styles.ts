import styled from 'styled-components'
export const StyledFloatingSideBar = styled.div`
.app-bar {
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow: var(--app-bar);
  display: inline-flex;
  gap: 4px;
  left: 16px;
  padding: 4px;
  position: fixed;
  top: 310px;
  border:1px solid #fafafa;
    -moz-box-shadow: 0 0 3px  0px 2px 2px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
border: 2px solid #fafafa;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.app-bar-list-instance {
  flex: 0 0 auto !important;
}
  .app-bar-list {
    align-items: flex-start;
    border-radius: 100px;
    display: inline-flex;
    gap: 4px;
    padding: 8px;
    position: relative;
    &:hover{
      padding:7px;
      gap:3px;
    }

  }

  .app-bar-list .product-icons {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  .app-bar-list.active {
    background-color: var(--colors-gray-gray-50);
    box-shadow: var(--lightmode-300);
  }

  .app-bar-list.on-hover {
    background-color: var(--colors-gray-gray-50);
    border: 1px solid;
    border-color: var(--colors-gray-gray-50);
    box-shadow: var(--lightmode-300);
  }

  .app-bar-list.default {
    mix-blend-mode: luminosity;
  }

.icon-instance-node {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

`
