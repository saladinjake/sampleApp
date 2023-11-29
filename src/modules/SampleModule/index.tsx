import React from "react";

import { Avatars2 } from "assets/svgs/Avatars2";
import { CallMade1 } from "assets/svgs/CallMade1";
import { CallMade2 } from "assets/svgs/CallMade2";
import { CallReceived2 } from "assets/svgs/CallReceived2";
import { CallReceived3 } from "assets/svgs/CallReceived3";
import { CallReceived4 } from "assets/svgs/CallReceived4";
import { CallReceived5 } from "assets/svgs/CallReceived5";
import { CallReceived6 } from "assets/svgs/CallReceived6";
import { Chat4 } from "assets/svgs/Chat4";
import { Download1 } from "assets/svgs/Download1";
import { ExpandMore4 } from "assets/svgs/ExpandMore4";
import { Group4 } from "assets/svgs/Group4";
import { Home8 } from "assets/svgs/Home8";
import { Info1 } from "assets/svgs/Info1";
import { Info2 } from "assets/svgs/Info2";
import { Info3 } from "assets/svgs/Info3";
import { Info4 } from "assets/svgs/Info4";
import { InsertChart4 } from "assets/svgs/InsertChart4";
import { MainstackLogo } from "assets/svgs/MainstackLogo";
import { Menu4 } from "assets/svgs/Menu4";
import { Notifications4 } from "assets/svgs/Notifications4";
import { Payments5 } from "assets/svgs/Payments5";
import { ProductIcons27 } from "assets/svgs/ProductIcons27";
import { ProductIcons28 } from "assets/svgs/ProductIcons28";
import { ProductIcons45 } from "assets/svgs/ProductIcons45";
import { ProductIcons46 } from "assets/svgs/ProductIcons46";
import { Widgets6 } from "assets/svgs/Widgets6";
import styled from "styled-components"
import Box from "components/shared/Box-v1"
import NavBar from "layout/LayoutOne/NavBar"
import SideBar from "layout/LayoutOne/SideBar"

export const Index = () => {
  return (
  	  <StyledWrapper>
    <Box className="index">
      <Box className="frame">
        <Box className="div">
          <Box className="text-wrapper">24 Transactions</Box>
          <p className="p">Your transactions for the last 7 days</p>
        </Box>
      <Box className="frame-2" >
          <button className="button-wrapper">
            <button className="button">
              <Box className="frame-3">
                <Box className="text-wrapper-2">Filter</Box>
                <ExpandMore4 className="icon-instance-node" />
              </Box>
            </button>
          </button>
          <Box className="div-wrapper">
            <button className="button">
              <Box className="frame-3">
                <Box className="text-wrapper-2">Export list</Box>
                  <Download1 className="icon-instance-node" />
              </Box>
            </button>
          </Box>
        </Box>
      </Box>



      <Box className="frame-4">
        <Box className="transaction-list">
          <Box className="call-received-wrapper">
            <CallReceived2 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <Box className="psychology-of-money">Psychology of Money</Box>
            <Box className="frame-6">
              <Box className="dominic-dan">Roy Cash</Box>
            </Box>
          </Box>
          <Box className="frame-7">
            <Box className="text-wrapper-3">USD 600</Box>
            <Box className="text-wrapper-4">Apr 03,2022</Box>
          </Box>
        </Box>
        <Box className="transaction-list">
          <Box className="call-received-wrapper">
              <CallReceived3 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <Box className="psychology-of-money">Buy me a coffee</Box>
            <Box className="frame-6">
              <Box className="dominic-dan">Jonathan Smart</Box>
            </Box>
          </Box>
          <Box className="frame-7">
            <Box className="text-wrapper-3">USD 100</Box>
            <Box className="text-wrapper-4">Apr 02,2022</Box>
          </Box>
        </Box>
        <Box className="transaction-list">
          <Box className="call-received-wrapper">
              <CallReceived4 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <p className="psychology-of-money">How to build an online brand</p>
            <Box className="frame-6">
              <Box className="dominic-dan">Delvan Ludacris</Box>
            </Box>
          </Box>
          <Box className="frame-7">
            <Box className="text-wrapper-3">USD 100</Box>
            <Box className="text-wrapper-4">Apr 02,2022</Box>
          </Box>
        </Box>
        <Box className="transaction-list">
          <Box className="call-made-wrapper">
              <CallMade1 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <Box className="psychology-of-money">Cash withdrawal</Box>
            <Box className="frame-6">
              <Box className="text-wrapper-5">Successful</Box>
            </Box>
          </Box>
          <Box className="frame-8">
            <Box className="text-wrapper-3">USD 3000.33</Box>
            <Box className="text-wrapper-4">Apr 01,2022</Box>
          </Box>
        </Box>
        <Box className="transaction-list">
          <Box className="call-received-wrapper">
              <CallReceived5 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <Box className="psychology-of-money">Support my outreach</Box>
            <Box className="frame-6">
              <Box className="dominic-dan">Shawn Kane</Box>
            </Box>
          </Box>
          <Box className="frame-7">
            <Box className="text-wrapper-3">USD 400</Box>
            <Box className="text-wrapper-4">Apr 02,2022</Box>
          </Box>
        </Box>
        <Box className="transaction-list">
          <Box className="call-made-wrapper">
              <CallMade2 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <Box className="psychology-of-money">Cash withdrawal</Box>
            <Box className="frame-6">
              <Box className="successful">Pending</Box>
            </Box>
          </Box>
          <Box className="frame-8">
            <Box className="text-wrapper-3">USD 1004.44</Box>
            <Box className="text-wrapper-4">Apr 01,2022</Box>
          </Box>
        </Box>
        <Box className="transaction-list">
          <Box className="call-received-wrapper">
              <CallReceived6 className="icon-instance-node-2" />
          </Box>
          <Box className="frame-5">
            <p className="psychology-of-money">Learn how to pitch your idea</p>
            <Box className="frame-6">
              <Box className="dominic-dan">Dujon Jericho</Box>
            </Box>
          </Box>
          <Box className="frame-7">
            <Box className="text-wrapper-3">USD 500</Box>
            <Box className="text-wrapper-4">Apr 02,2022</Box>
          </Box>
        </Box>
      </Box>
      <Box className="overlap">
        <Box className="frame-9">
          <Box className="frame-10">
            <Box className="text-wrapper-6">Available Balance</Box>
            <Box className="text-wrapper-7">USD 120,500.00</Box>
          </Box>
          <Box className="small-outline-button">
            <Box className="label-icon">
              <Box className="text-wrapper-8">Withdraw</Box>
            </Box>
          </Box>
        </Box>
        <img
          className="line"
          alt="Line"
          src=""
        />
      </Box>
      <Box className="group-2">
        <img
          className="img"
          alt="Line"
          src=""
        />
        <Box className="apr">Apr 1 ,&nbsp;&nbsp;2022</Box>
        <Box className="apr-2">Apr 30 ,&nbsp;&nbsp;2022</Box>
      </Box>
      <Box className="frame-11">
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Ledger Balance</Box>
              <Info1 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 0.00</Box>
        </Box>
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Total Payout</Box>
              <Info2 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 55,080.00</Box>
        </Box>
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Total Revenue</Box>
              <Info3 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 175,580.00</Box>
        </Box>
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Pending Payout</Box>
              <Info4 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 0.00</Box>
        </Box>
      </Box>
      {/*side bar*/}
      <SideBar />

      {/*nav*/}
      <NavBar />
    </Box>
    </StyledWrapper>
  )
};
export default Index

const StyledWrapper = styled.div`
.index {

  height: 1266px;
  overflow: hidden;
  position: relative;
  width: 100%;

}

.index .frame {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1px ;
  border-bottom-color:#fafafa;

  display: flex;
  gap: 24px;
  left: 140px;
  padding: 0px 0px 24px;
  position: absolute;
  top: 601px;
  width: 1300px;
}

.index .div {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  margin-left: 80px;
}

.index .text-wrapper {
  color: var(--colors-black-black-300);
  font-family: var(--degular-headers-3x-small-font-family);
  font-size: var(--degular-headers-3x-small-font-size);
  font-style: var(--degular-headers-3x-small-font-style);
  font-weight: var(--degular-headers-3x-small-font-weight);
  letter-spacing: var(--degular-headers-3x-small-letter-spacing);
  line-height: var(--degular-headers-3x-small-line-height);
  margin-top: -1px;
  position: relative;
  width: 254.5px;
}

.index .p {
  align-self: stretch;
  color: var(--colors-gray-gray-400);
  font-family: var(--degular-paragraph-XX-small-font-family);
  font-size: var(--degular-paragraph-XX-small-font-size);
  font-style: var(--degular-paragraph-XX-small-font-style);
  font-weight: var(--degular-paragraph-XX-small-font-weight);
  letter-spacing: var(--degular-paragraph-XX-small-letter-spacing);
  line-height: var(--degular-paragraph-XX-small-line-height);
  position: relative;
}

.index .frame-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content:start;
  position: relative;


}

.index .button-wrapper {
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.index .button {
  all: unset;
  align-items: center;
  background-color: var(--colors-gray-gray-50);
  border-radius: 100px;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: center;
  padding: 12px 20px 12px 30px;
  position: relative;
}

.index .frame-3 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

.index .text-wrapper-2 {
  color: var(--colors-black-black-300);
  font-family: var(--degular-subtitle-6x-small-font-family);
  font-size: var(--degular-subtitle-6x-small-font-size);
  font-style: var(--degular-subtitle-6x-small-font-style);
  font-weight: var(--degular-subtitle-6x-small-font-weight);
  letter-spacing: var(--degular-subtitle-6x-small-letter-spacing);
  line-height: var(--degular-subtitle-6x-small-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.index .icon-instance-node {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}

.index .div-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

.index .frame-4 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  left: 190px;
  padding: 0px 0px 164px;
  position: absolute;
  top: 706px;
}

.index .transaction-list {
  align-self: stretch;
  height: 49px;
  position: relative;
  width: 100%;
}

.index .call-received-wrapper {
  background-color: var(--trashed-colorsjade100);
  border-radius: 24px;
  height: 48px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.index .icon-instance-node-2 {
  height: 20px !important;
  left: 14px !important;
  position: absolute !important;
  top: 14px !important;
  width: 20px !important;
}

.index .frame-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 49px;
  justify-content: space-between;
  left: 62px;
  position: absolute;
  top: 0;
  width: 355px;
}

.index .psychology-of-money {

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.index .frame-6 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
}

.index .dominic-dan {
  color: var(--colors-gray-gray-400);

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.index .frame-7 {
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  left: 1084px;
  position: absolute;
  top: 2px;
}

.index .text-wrapper-3 {
  color: var(--colors-black-black-300);
  font-family: "Degular-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.index .text-wrapper-4 {

  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.index .call-made-wrapper {
  background-color: var(--trashed-colorsred100);
  border-radius: 24px;
  height: 48px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.index .text-wrapper-5 {
  color: var(--trashed-colorsjade400);
  font-family: var(--degular-paragraph-XX-small-font-family);
  font-size: var(--degular-paragraph-XX-small-font-size);
  font-style: var(--degular-paragraph-XX-small-font-style);
  font-weight: var(--degular-paragraph-XX-small-font-weight);
  letter-spacing: var(--degular-paragraph-XX-small-letter-spacing);
  line-height: var(--degular-paragraph-XX-small-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.index .frame-8 {
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  left: 1070px;
  position: absolute;
  top: 2px;
}

.index .successful {

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.index .overlap {
  height: 321px;
  left: 220px;
  position: absolute;
  top: 144px;
  width: 765px;
  padding-bottom:20px;
}

.index .frame-9 {
  align-items: center;
  display: inline-flex;
  gap: 64px;
  left: 0;
  position: absolute;
  top: 0;
}

.index .frame-10 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.index .text-wrapper-6 {
  color: var(--colors-gray-gray-400);
  font-family: var(--degular-paragraph-XX-small-font-family);
  font-size: var(--degular-paragraph-XX-small-font-size);
  font-style: var(--degular-paragraph-XX-small-font-style);
  font-weight: var(--degular-paragraph-XX-small-font-weight);
  letter-spacing: var(--degular-paragraph-XX-small-letter-spacing);
  line-height: var(--degular-paragraph-XX-small-line-height);
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.index .text-wrapper-7 {
  color: var(--colors-black-black-300);
  font-family: var(--degular-headers-small-font-family);
  font-size: var(--degular-headers-small-font-size);
  font-style: var(--degular-headers-small-font-style);
  font-weight: var(--degular-headers-small-font-weight);
  letter-spacing: var(--degular-headers-small-letter-spacing);
  line-height: var(--degular-headers-small-line-height);
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.index .small-outline-button {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 167px;
}

.index .label-icon {
  align-items: center;
  align-self: stretch;
  background-color: var(--colors-black-black-300);
  border-radius: 100px;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: center;
  padding: 14px 28px;
  position: relative;
  width: 100%;
}

.index .text-wrapper-8 {
  color: var(--trashed-colorswhite100);
  font-family: var(--degular-subtitle-6x-small-font-family);
  font-size: var(--degular-subtitle-6x-small-font-size);
  font-style: var(--degular-subtitle-6x-small-font-style);
  font-weight: var(--degular-subtitle-6x-small-font-weight);
  letter-spacing: var(--degular-subtitle-6x-small-letter-spacing);
  line-height: var(--degular-subtitle-6x-small-line-height);
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.index .line {
  height: 257px;
  left: 0;
  position: absolute;
  top: 64px;
  width: 765px;
}

.index .group-2 {
  height: 35px;
  left: 140px;
  position: absolute;
  top: 484px;
  width: 769px;
}

.index .img {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 765px;
}

.index .apr {
  color: var(--colors-gray-gray-400);
  font-family: var(--degular-paragraph-XX-small-font-family);
  font-size: var(--degular-paragraph-XX-small-font-size);
  font-style: var(--degular-paragraph-XX-small-font-style);
  font-weight: var(--degular-paragraph-XX-small-font-weight);
  height: 16px;
  left: 85px;
  letter-spacing: var(--degular-paragraph-XX-small-letter-spacing);
  line-height: var(--degular-paragraph-XX-small-line-height);
  position: absolute;
  top: 15px;
  white-space: nowrap;
}

.index .apr-2 {
  color: var(--colors-gray-gray-400);
  font-family: var(--degular-paragraph-x-small-font-family);
  font-size: var(--degular-paragraph-x-small-font-size);
  font-style: var(--degular-paragraph-x-small-font-style);
  font-weight: var(--degular-paragraph-x-small-font-weight);
  height: 24px;
  left: 654px;
  letter-spacing: var(--degular-paragraph-x-small-letter-spacing);
  line-height: var(--degular-paragraph-x-small-line-height);
  position: absolute;
  text-align: right;
  top: 11px;
  white-space: nowrap;
}

.index .frame-11 {
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  left: 1129px;
  position: absolute;
  top: 145px;
}

.index .frame-12 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 271px;
  &:hover{
    padding:5px;
    gap:6px;
  }
}

.index .frame-13 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;

}

.index .text-wrapper-9 {
  color: var(--colors-gray-gray-400);
  flex: 1;
  font-family: var(--degular-paragraph-XX-small-font-family);
  font-size: var(--degular-paragraph-XX-small-font-size);
  font-style: var(--degular-paragraph-XX-small-font-style);
  font-weight: var(--degular-paragraph-XX-small-font-weight);
  letter-spacing: var(--degular-paragraph-XX-small-letter-spacing);
  line-height: var(--degular-paragraph-XX-small-line-height);
  position: relative;
}

.index .text-wrapper-10 {
  align-self: stretch;
  color: var(--colors-black-black-300);
  font-family: var(--degular-headers-XX-small-font-family);
  font-size: var(--degular-headers-XX-small-font-size);
  font-style: var(--degular-headers-XX-small-font-style);
  font-weight: var(--degular-headers-XX-small-font-weight);
  letter-spacing: var(--degular-headers-XX-small-letter-spacing);
  line-height: var(--degular-headers-XX-small-line-height);
  position: relative;
}

.index .app-bar {
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

.index .app-bar-list-instance {
  flex: 0 0 auto !important;
}

.index .icon-instance-node-3 {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

 .top-bar {

  height: 60px;
  left: 120px;
  position: fixed;
  top: 0;
  width: 1440px;


}

 .navigation {
  background-color: #ffffff;
  border: 2px solid #fff;

  border-radius: 100px;

  height: 68px;
  left: 14px;
  position: relative;
  top: 14px;
  width: 100%;
  border:1px solid #fafafa;
    -moz-box-shadow: 0 0 3px  0px 2px 2px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
border: 2px solid #fafafa;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.index .menu-2 {
  align-items: center;
  display: inline-flex;
  gap: 20px;
  justify-content: center;
  left: 413px;
  position: absolute;
  top: 12px;
}

.index .menu-item {
  align-items: center;
  border-radius: 100px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  padding: 8px 18px 8px 14px;
  position: relative;

  &:hover{
    padding:5px 16px 5px 12px;
    gap: 3px;
  }
}

.index .text-wrapper-11 {
  color: var(--colors-gray-gray-400);
  font-family: var(--degular-subtitle-6x-small-font-family);
  font-size: var(--degular-subtitle-6x-small-font-size);
  font-style: var(--degular-subtitle-6x-small-font-style);
  font-weight: var(--degular-subtitle-6x-small-font-weight);
  letter-spacing: var(--degular-subtitle-6x-small-letter-spacing);
  line-height: var(--degular-subtitle-6x-small-line-height);
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.index .menu-item-2 {
  align-items: center;
  background-color: var(--colors-black-black-300);
  border-radius: 100px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  padding: 8px 18px 8px 14px;
  position: relative;
}

.index .home-2 {
  color: #fff;

  line-height: 30px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
  background: #000;
  padding: 5px;
  width:100px;
  border-radius:40px;
}

.index .mainstack-logo {
  height: 36px !important;
  left: 24px !important;
  position: absolute !important;
  top: 14px !important;
  width: 36px !important;
}

.index .frame-14 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: flex-end;
  left: 1219px;
  position: absolute;
  top: 12px;
}

.index .small-tertiary {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 40px;
}

.index .icon {
  align-items: center;
  align-self: stretch;
  background-color: var(--colors-white-white-100);
  border-radius: 100px;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: center;
  padding: 10px 24px;
  position: relative;
  width: 100%;
}

.index .icon-instance-node-4 {
  height: 20px !important;
  margin-left: -14px !important;
  margin-right: -14px !important;
  position: relative !important;
  width: 20px !important;
}

.index .small-tertiary-wrapper {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
}

.index .frame-15 {
  align-items: center;
  background-color: #eff1f6;
  border-radius: 100px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 4px 12px 4px 5px;
  position: relative;

}

.index .avi {
  height: 32px;
  position: relative;
  width: 32px;
}

.index .overlap-group {
  height: 32px;
  position: relative;
  &:hover{
    padding:3px 11px 4px 4px;
    gap: 3px;
  }
}

.index .avatar {
  background-color: var(--trashed-colorsgray100);
  border-radius: 16px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}

.index .profile {
  height: 13px;
  left: 11px;
  position: absolute;
  top: 9px;
  width: 10px;
}

.index .avatars {
  height: 32px !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 32px !important;
}

.index .ellipse {
  background: linear-gradient(180deg, rgb(92.13, 102, 111.87) 0%, rgb(19, 19, 22) 100%);
  border-radius: 16px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}

.index .text-wrapper-12 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242.35, 243.02, 244.8) 100%);
  background-clip: text;
  color: transparent;
  font-family: var(--degular-subtitle-7x-small-font-family);
  font-size: var(--degular-subtitle-7x-small-font-size);
  font-style: var(--degular-subtitle-7x-small-font-style);
  font-weight: var(--degular-subtitle-7x-small-font-weight);
  height: 16px;
  left: 9px;
  letter-spacing: var(--degular-subtitle-7x-small-letter-spacing);
  line-height: var(--degular-subtitle-7x-small-line-height);
  position: absolute;
  text-align: center;
  text-fill-color: transparent;
  top: 7px;
  white-space: nowrap;
}


`
