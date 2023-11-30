import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";
import styled from "styled-components"


export const StyledNavWrapper = styled.div`
.top-bar {
  position: fixed;


 ${MediaQuery.between("mobileSmall", "tablets")`
        width: 100%;
`};




${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
    height: 60px;
    left: 140px;

    top: 0;
    width: 80%;
    margin:auto;
    margin-top: 2%;
`};

}

.navigation {
  height: 68px;
  ${MediaQuery.between("mobileSmall", "tablets")`
      width: 100%;


 `};

    ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
        border-radius: 100px;
        background-color: #ffffff;
        border: 2px solid #fff;
        border:1px solid #fafafa;
          -moz-box-shadow: 0 0 3px  0px 2px 2px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
        border: 2px solid #fafafa;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

        left: 14px;
        position: relative;
        top: 14px;
        width: 100%;

   `};
}

 .menu-2 {


 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
       align-items: center;
       display: inline-flex;
       gap: 20px;
       justify-content: center;
       left: 413px;
       position: absolute;
       top: 12px;
 `};

 ${MediaQuery.between("mobileSmall", "tablets")`
        display: none;
`};
}

 .menu-item {
   ${MediaQuery.between("mobileSmall", "tablets")`
          display: none;
  `};


  ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
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
  `};



}

 .text-wrapper-11 {

     margin-top: -1px;
     position: relative;
     text-align: center;
     white-space: nowrap;
     width: fit-content;
}

 .menu-item-2 {


 ${MediaQuery.between("mobileSmall", "tablets")`
        display: none;
`};


${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
    align-items: center;
    background-color: var(--colors-black-black-300);
    border-radius: 100px;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    justify-content: center;
    padding: 8px 18px 8px 14px;
    position: relative;
`};
}

.home-2 {
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

 .mainstack-logo {
    height: 36px !important;
    width: 36px !important;
   ${MediaQuery.between("mobileSmall", "tablets")`
        position: relative;
  `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`

     left: 24px !important;
     position: absolute !important;
     top: 14px !important;

 `};
}

 .frame-14 {


 ${MediaQuery.between("mobileSmall", "tablets")`
      float: right;
      position: absolute;
      right: 0px;
      top:-10px;
      margin-right:10px;

`};

${MediaQuery.between("laptopSmall", "retinaMaxWidth")`

      align-items: center;
      display: inline-flex;
      gap: 8px;
      justify-content: flex-end;
      left: 1219px;
      position: absolute;
      top: 15px;

`};
}

 .small-tertiary {


 ${MediaQuery.between("mobileSmall", "tablets")`
    float:left;
    margin-top:20px;
`};

${MediaQuery.between("laptopSmall", "retinaMaxWidth")`

      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      position: relative;
      width: 40px;

`};
}

 .icon {
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

 .icon-instance-node-4 {
     height: 20px !important;
     margin-left: -14px !important;
     margin-right: -14px !important;
     position: relative !important;
     width: 20px !important;
}

 .small-tertiary-wrapper {
     align-items: center;
     display: inline-flex;
     flex: 0 0 auto;
     justify-content: center;
     position: relative;
}
`
