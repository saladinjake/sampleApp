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



 .frame-15 {
  align-items: center;
  background-color: #eff1f6;
  border-radius: 100px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 4px 12px 4px 5px;
  position: relative;

}




`
