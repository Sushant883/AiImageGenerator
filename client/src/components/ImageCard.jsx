// import React from "react";
// import styled from "styled-components";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Avatar } from "@mui/material";
// import { DownloadRounded } from "@mui/icons-material";
// import Filesaver from "file-saver";
// // import download  from "@mui/icons-material";

// const Card = styled.div`
//   position: relative;
//   display: flex;
//   border-radius: 20px;
//   box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
//   cursor: pointer;
//   transition: all 0.3s ease;
//   &:hover {
//     box-shadow: 1px 2px 20px 0.25px ${({ theme }) => theme.creamy};
//     scale: 1.05;
//   }
//   &:nth-child(7n + 1) {
//     grid-column: auto/span 2;
//     grid-row: auto/span 2;
//   }
// `;
// const HoverOverlay = styled.div`
//   opacity: 0;
//   position: absolute;
//   // border: 2px solid red;
//   // border-radius: 20px;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   gap: 10px;
//   backdrop-filter: blur(2px);
//   background: rgba(0, 0, 0, 0.5);
//   color: ${({ theme }) => theme.white};
//   transition: opacity 0.3s ease;
//   border-radius: 6px;
//   justify-content: end;
//   padding: 12px;

//   ${Card}:hover & {
//     opacity: 1;
//   }
// `;
// const Prompt = styled.div`
//   font-weight: 600;
//   font-size: 20px;
//   color: ${({ theme }) => theme.white};
// `;
// const Author = styled.div`
//   font-weight: 600;
//   font-size: 20px;
//   display: flex;
//   gap: 8px;
//   align-items: center;
//   color: ${({ theme }) => theme.white};
// `;

// const ImageCard = ({ item }) => {
//   return (
//     <Card>
//       <LazyLoadImage 
//       alt={item?.prompt}
//       style={{borderRadius: "12px"}} 
//       width="100%" 
//       src={item?.photo} 
//       />

//       <HoverOverlay>
//         <Prompt>{item?.prompt}</Prompt>
//         <div
//           style={{
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Author>
//             <Avatar sx={{ width: "32px", height: "32px" }}>
//               {item?.author[0]}
//             </Avatar>

//             {item?.author}
//           </Author>
//           <DownloadRounded
//             onClick={() => Filesaver.saveAs(item?.photo, "download.jpg")}
//           />
//         </div>
//       </HoverOverlay>
//     </Card>
//   );
// };

// export default ImageCard;

import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 1px 2px 20px 0.25px ${({ theme }) => theme.creamy};
    transform: scale(1.05);
  }

  &:nth-child(7n + 1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;

const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  border-radius: 12px;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 10px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DownloadIcon = styled(DownloadRounded)`
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.creamy};
  }
`;

const ImageCard = ({ item }) => {
  const handleDownload = () => {
    FileSaver.saveAs(item?.photo, "download.jpg");
  };

  return (
    <Card>
      <LazyLoadImage
        alt={item?.prompt}
        src={item?.photo}
        width="100%"
        style={{ borderRadius: "12px", objectFit: "cover" }}
      />

      <HoverOverlay>
        <Prompt>{item?.prompt}</Prompt>
        <Footer>
          <Author>
            <Avatar sx={{ width: 32, height: 32 }}>
              {item?.author?.charAt(0)}
            </Avatar>
            {item?.author}
          </Author>
          <DownloadIcon onClick={handleDownload} />
        </Footer>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
