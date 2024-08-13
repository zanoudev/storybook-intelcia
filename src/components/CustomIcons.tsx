import React from 'react';

export interface IconProps {
  color?: string;
  height?: string;
  width?: string;
  viewBox?: string;
}

export const CheckmarkIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18", viewBox= "0 0 18 18"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
    <path d="M15 4.5L6.75 12.75L3 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="24", height="24" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EmailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.3334 4.99998C18.3334 4.08331 17.5834 3.33331 16.6667 3.33331H3.33341C2.41675 3.33331 1.66675 4.08331 1.66675 4.99998M18.3334 4.99998V15C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33341C2.41675 16.6666 1.66675 15.9166 1.66675 15V4.99998M18.3334 4.99998L10.0001 10.8333L1.66675 4.99998" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


// Color Toast Icons
export const WarningIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
  <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#F79009" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 6V9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 12H9.0075" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const InfoIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_1618_18010)">
    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 12V9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 6H9.0075" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1618_18010">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

export const ErrorIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
  <path d="M7.71758 2.89499L1.36508 13.5C1.2341 13.7268 1.1648 13.984 1.16407 14.2459C1.16334 14.5078 1.23119 14.7653 1.3609 14.9929C1.4906 15.2204 1.67762 15.41 1.90336 15.5429C2.12909 15.6757 2.38568 15.7471 2.64758 15.75H15.3526C15.6145 15.7471 15.8711 15.6757 16.0968 15.5429C16.3225 15.41 16.5096 15.2204 16.6393 14.9929C16.769 14.7653 16.8368 14.5078 16.8361 14.2459C16.8354 13.984 16.766 13.7268 16.6351 13.5L10.2826 2.89499C10.1489 2.67457 9.96062 2.49233 9.73597 2.36585C9.51133 2.23937 9.25788 2.17293 9.00008 2.17293C8.74227 2.17293 8.48882 2.23937 8.26418 2.36585C8.03953 2.49233 7.85128 2.67457 7.71758 2.89499V2.89499Z" stroke="#F04438" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 6.74998V9.74998M9 12.75H9.0075" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);


// Dark Toast Icons
export const CopiedIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_255_5022)">
    <path d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z" stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75" stroke="#14142B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_255_5022">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.8335 8.33331L10.0002 12.5L14.1668 8.33331" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 12.5V2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const LoadIcon: React.FC<IconProps> = ({ color = "#27AE60" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 20.1667C16.0626 20.1667 20.1667 16.0626 20.1667 11C20.1667 5.93739 16.0626 1.83333 11 1.83333C5.93739 1.83333 1.83333 5.93739 1.83333 11C1.83333 16.0626 5.93739 20.1667 11 20.1667Z" fill="url(#paint0_angular_255_5159)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.883 8.80067C21.3851 8.73589 21.8446 9.0904 21.9094 9.5925C21.9696 10.0593 21.9998 10.5294 21.9998 11C21.9998 11.5063 21.5894 11.9167 21.0832 11.9167C20.5769 11.9167 20.1665 11.5063 20.1665 11C20.1665 10.6078 20.1413 10.2161 20.0911 9.82709C20.0264 9.32499 20.3809 8.86545 20.883 8.80067Z" fill={color}/>
  <defs>
    <radialGradient id="paint0_angular_255_5159" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 11) scale(11)">
      <stop stop-color="#27AE60" stop-opacity="0"/>
      <stop offset="0.0001" stop-color={color} stop-opacity="0"/>
      <stop offset="1" stop-color={color}/>
    </radialGradient>
  </defs>
</svg>
);

export const PrinterIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_255_5130)">
    <path d="M5 7.50002V1.66669H15V7.50002" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.99984 15H3.33317C2.89114 15 2.46722 14.8244 2.15466 14.5118C1.8421 14.1993 1.6665 13.7754 1.6665 13.3333V9.16667C1.6665 8.72464 1.8421 8.30072 2.15466 7.98816C2.46722 7.6756 2.89114 7.5 3.33317 7.5H16.6665C17.1085 7.5 17.5325 7.6756 17.845 7.98816C18.1576 8.30072 18.3332 8.72464 18.3332 9.16667V13.3333C18.3332 13.7754 18.1576 14.1993 17.845 14.5118C17.5325 14.8244 17.1085 15 16.6665 15H14.9998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 11.6667H5V18.3334H15V11.6667Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_255_5130">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

export const NoConnectionIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_255_5216)">
    <path d="M1.5 1.5L16.5 16.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.6" d="M6.375 12.375C7.07598 11.6879 8.01843 11.303 9 11.303C9.98157 11.303 10.924 11.6879 11.625 12.375" stroke="#4E4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.6" d="M1.5 6.615C2.42547 5.78418 3.48231 5.11258 4.6275 4.6275" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.6" d="M7.99512 3.74998C11.0026 3.47998 14.1001 4.42498 16.5001 6.56998" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.6" d="M12.6377 8.4375C13.2487 8.77781 13.8092 9.20192 14.3027 9.6975" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.6" d="M3.75 9.74999C4.82094 8.679 6.19104 7.95735 7.68 7.67999" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.6" d="M9 15H9.0075" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_255_5216">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

export const UploadCloudIcon: React.FC<IconProps> = ({ color='#475467', width="20", height="20"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_48_3445)">
    <path d="M13.3333 13.3334L10 10M10 10L6.66666 13.3334M10 10V17.5M16.9917 15.325C17.8044 14.8819 18.4465 14.1808 18.8166 13.3322C19.1866 12.4837 19.2635 11.5361 19.0352 10.6389C18.8068 9.74182 18.2862 8.94629 17.5556 8.3779C16.8249 7.80951 15.9257 7.50064 15 7.50003H13.95C13.6978 6.5244 13.2276 5.61864 12.575 4.85085C11.9223 4.08307 11.104 3.47324 10.1817 3.0672C9.25946 2.66116 8.25712 2.46949 7.25009 2.5066C6.24307 2.5437 5.25755 2.80861 4.36764 3.28142C3.47774 3.75422 2.70659 4.42261 2.11218 5.23635C1.51777 6.05008 1.11557 6.98797 0.935814 7.97952C0.756055 8.97107 0.803418 9.99047 1.07434 10.9611C1.34527 11.9317 1.8327 12.8282 2.5 13.5834" stroke={color} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_48_3445">
      <rect width={width} height={height} fill="white"/>
    </clipPath>
  </defs>
</svg>
)

// Utility Icons
export const CloseIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="24", height="24", viewBox='0 0 16 16' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
  <path d="M12 4L4 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 4L12 12" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 50 50" fill="none">
  <path d="M33.1489 28.0691L25.0002 19.9571L16.8514 28.0691" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
);

export const ChevronRightIcon: React.FC<IconProps> = ({color = "#A0A3BD" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path d="M7.5 15L12.5 10L7.5 5" stroke={color} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({color = "#A0A3BD" , width="18", height="18" }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
  <path d="M12.5 15L7.5 10L12.5 5" stroke={color} stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const ThreeDotsIcon: React.FC<IconProps> = ({ color = "#A0A3BD" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
  <path d="M1.69533 1.76706C1.4851 1.76706 1.3047 1.69178 1.15414 1.54121C1.00357 1.39064 0.928284 1.21024 0.928284 1.00002C0.928284 0.789789 1.00357 0.609392 1.15414 0.458823C1.3047 0.308255 1.4851 0.232971 1.69533 0.232971C1.90556 0.232971 2.08595 0.308255 2.23652 0.458823C2.38709 0.609392 2.46237 0.789789 2.46237 1.00002C2.46237 1.13922 2.42686 1.26706 2.35584 1.38354C2.28766 1.50002 2.19533 1.59377 2.07885 1.66479C1.96522 1.73297 1.83737 1.76706 1.69533 1.76706Z" fill={color}/>
  <path d="M5.00002 1.76706C4.78979 1.76706 4.60939 1.69178 4.45882 1.54121C4.30826 1.39064 4.23297 1.21024 4.23297 1.00002C4.23297 0.789789 4.30826 0.609392 4.45882 0.458823C4.60939 0.308255 4.78979 0.232971 5.00002 0.232971C5.21024 0.232971 5.39064 0.308255 5.54121 0.458823C5.69178 0.609392 5.76706 0.789789 5.76706 1.00002C5.76706 1.13922 5.73155 1.26706 5.66053 1.38354C5.59235 1.50002 5.50002 1.59377 5.38354 1.66479C5.2699 1.73297 5.14206 1.76706 5.00002 1.76706Z" fill={color}/>
  <path d="M8.3047 1.76706C8.09448 1.76706 7.91408 1.69178 7.76351 1.54121C7.61294 1.39064 7.53766 1.21024 7.53766 1.00002C7.53766 0.789789 7.61294 0.609392 7.76351 0.458823C7.91408 0.308255 8.09448 0.232971 8.3047 0.232971C8.51493 0.232971 8.69533 0.308255 8.8459 0.458823C8.99647 0.609392 9.07175 0.789789 9.07175 1.00002C9.07175 1.13922 9.03624 1.26706 8.96522 1.38354C8.89703 1.50002 8.8047 1.59377 8.68823 1.66479C8.57459 1.73297 8.44675 1.76706 8.3047 1.76706Z" fill={color}/>
</svg>
);

export const EditIcon: React.FC<IconProps> = ({ color = '#667085', width="20", height="20"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path d="M10 16.6666H17.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08085 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)




// Other Icons
export const HelpCircleIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_2165_7823)">
      <path d="M6.05992 5.99998C6.21665 5.55442 6.52602 5.17872 6.93322 4.9394C7.34042 4.70009 7.81918 4.61261 8.2847 4.69245C8.75022 4.7723 9.17246 5.01433 9.47664 5.37567C9.78081 5.737 9.94729 6.19433 9.94659 6.66665C9.94659 7.99998 7.94659 8.66665 7.94659 8.66665M7.99992 11.3333H8.00659M14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_2165_7823">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const RightArrowIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
    <path d="M3.75 9H14.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 3.75L14.25 9L9 14.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UpArrowIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
  <path d="M7 11.0833V2.91663" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.91666 6.99996L6.99999 2.91663L11.0833 6.99996" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const DownArrowIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
  <path d="M7 2.91663V11.0833" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.0834 7L7.00002 11.0833L2.91669 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const CrownIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
  <path d="M3.33337 13.3334H12.6667M1.33337 2.66669L3.33337 10.6667H12.6667L14.6667 2.66669L10.6667 7.33335L8.00004 2.66669L5.33337 7.33335L1.33337 2.66669Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);

export const ClockIcon: React.FC<IconProps> = ({ color = "#98A2B3" , width="18", height="18" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_701_25161)">
    <path d="M7.99998 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998C1.33331 11.6819 4.31808 14.6666 7.99998 14.6666Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 4V8H11" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_701_25161">
      <rect width={width} height={height} fill="white"/>
    </clipPath>
  </defs>
</svg>
);

export const HomeFilledIcon: React.FC<IconProps> = ({color = "#98A2B3" , width="20", height="20"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.48198 7.59216C2.85656 8.16072 2.5 8.96674 2.5 9.81198V16.8182C2.5 16.8182 2.5 18.3334 4 18.3334C5.5 18.3334 16 18.3334 16 18.3334C16 18.3334 17.5 18.3334 17.5 16.8182C17.5 15.7253 17.5 11.8733 17.5 9.8112C17.5 8.96596 17.1434 8.16072 16.518 7.59216L12.018 3.50125C10.8738 2.46101 9.12625 2.46101 7.98198 3.50125L3.48198 7.59216Z" fill={color}/>
  </svg>
)

export const SlashDividerIcon: React.FC<IconProps> = ({color = "#98A2B3" , width="20", height="20"}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
  <line x1="6.26361" y1="18.4759" x2="14.0116" y2="1.86023" stroke={color} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

export const LeftArrowCircleIcon: React.FC<IconProps> = ({ color = '#667085', width="21", height="20"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 20" fill="none">
    <path d="M10.5 6.66663L7.16663 9.99996M7.16663 9.99996L10.5 13.3333M7.16663 9.99996H13.8333M18.8333 9.99996C18.8333 14.6023 15.1023 18.3333 10.5 18.3333C5.89759 18.3333 2.16663 14.6023 2.16663 9.99996C2.16663 5.39759 5.89759 1.66663 10.5 1.66663C15.1023 1.66663 18.8333 5.39759 18.8333 9.99996Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

export const RightArrowCircleIcon: React.FC<IconProps> = ({ color = '#667085', width="21", height="20"}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 20" fill="none">
  <path d="M10.5001 13.3333L13.8334 9.99996M13.8334 9.99996L10.5001 6.66663M13.8334 9.99996H7.16675M18.8334 9.99996C18.8334 14.6023 15.1025 18.3333 10.5001 18.3333C5.89771 18.3333 2.16675 14.6023 2.16675 9.99996C2.16675 5.39759 5.89771 1.66663 10.5001 1.66663C15.1025 1.66663 18.8334 5.39759 18.8334 9.99996Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)