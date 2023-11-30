import styled from "styled-components"
import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";




export const StyledWrapper = styled.div`
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




  ${MediaQuery.between("mobileSmall", "tablets")`
         position: absolute;
         top: 601px;
         left:0px;
         gap: 17px;
        padding: 0px 0px 15px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
         position: absolute;
         top: 601px;
         left: 140px;
         width: 1300px;
        padding: 0px 0px 24px;
 `};



}

.index .table-title {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  position: relative;

  ${MediaQuery.between("mobileSmall", "tablets")`
        margin-left: 20px;
 `};
  ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
          margin-left: 80px;
  `};
}

.index .text-wrapper {

  margin-top: -1px;
  position: relative;


  ${MediaQuery.between("mobileSmall", "tablets")`
        font-size:12px;
        width: 144.5px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
        width: 254.5px;
 `};
}

.index .p {
  align-self: stretch;

  position: relative;

  ${MediaQuery.between("mobileSmall", "tablets")`
        font-size:14px;

 `};


}



.index .div-wrapper {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}






.index .img {
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 765px;
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

  position: relative;
}

.index .text-wrapper-10 {
  align-self: stretch;
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
