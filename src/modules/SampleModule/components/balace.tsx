
import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";
import Box from "components/shared/Box-v1"
import styled from "styled-components"
export const BalanceComponent =  ({availableBalance}) => {
  return(
    <BalanceWrapper>
    <Box className="overlap">
      <Box className="frame-9">
        <Box className="frame-10">
          <Box className="text-wrapper-6">Available Balance</Box>
          <Box className="text-wrapper-7">USD {availableBalance}</Box>
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
    </BalanceWrapper>
  )
}


const BalanceWrapper = styled.span`
.overlap {

  height: 321px;
  position: absolute;


  ${MediaQuery.between("mobileSmall", "tablets")`
      top:50px;
      left: 10px;
      width:100%;
      padding-bottom:2px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`

        left: 220px;
        top: 144px;
        width: 765px;
        padding-bottom:20px;


 `};
}

.frame-9 {
  align-items: center;
  display: inline-flex;
  gap: 64px;
  left: 0;
  position: absolute;
  top: 0;
}

 .frame-10 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

 .text-wrapper-6 {

  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.text-wrapper-7 {

  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.small-outline-button {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 167px;
}

.label-icon {
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

 .text-wrapper-8 {

  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}




 .line {
  height: 257px;
  left: 0;
  position: absolute;
  top: 64px;

  ${MediaQuery.between("mobileSmall", "tablets")`
      width: 450px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
       width: 765px;
 `};
}`
