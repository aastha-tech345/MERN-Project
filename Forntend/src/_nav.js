import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cil3d,
  cilClipboard,
  cilCursor,
  cilDescription,
  cilDrop,
  cilEnvelopeLetter,
  cilFilter,
  cilGroup,
  cilMobile,
  cilSettings,
  cilSpeedometer,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Armaturenbrett',
    to: '/dashboard',
    icon: (
      <svg
        width="24"
        height="24"
        style={{ marginRight: '5px' }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_382_11250)">
          <path
            d="M4.14286 4.14286V11.2857H8.42857V4.14286H4.14286ZM2 4.14286C2 2.95982 2.95982 2 4.14286 2H8.42857C9.61161 2 10.5714 2.95982 10.5714 4.14286V11.2857C10.5714 12.4688 9.61161 13.4286 8.42857 13.4286H4.14286C2.95982 13.4286 2 12.4688 2 11.2857V4.14286ZM15.5714 12.7143V19.8571H19.8571V12.7143H15.5714ZM13.4286 12.7143C13.4286 11.5312 14.3884 10.5714 15.5714 10.5714H19.8571C21.0402 10.5714 22 11.5312 22 12.7143V19.8571C22 21.0402 21.0402 22 19.8571 22H15.5714C14.3884 22 13.4286 21.0402 13.4286 19.8571V12.7143ZM8.42857 17H4.14286V19.8571H8.42857V17ZM4.14286 14.8571H8.42857C9.61161 14.8571 10.5714 15.817 10.5714 17V19.8571C10.5714 21.0402 9.61161 22 8.42857 22H4.14286C2.95982 22 2 21.0402 2 19.8571V17C2 15.817 2.95982 14.8571 4.14286 14.8571ZM15.5714 4.14286V7H19.8571V4.14286H15.5714ZM13.4286 4.14286C13.4286 2.95982 14.3884 2 15.5714 2H19.8571C21.0402 2 22 2.95982 22 4.14286V7C22 8.18304 21.0402 9.14286 19.8571 9.14286H15.5714C14.3884 9.14286 13.4286 8.18304 13.4286 7V4.14286Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_382_11250">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    badge: {
      color: 'info',
      // text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Kunden',
    to: '/customer',
    icon: (
      <svg
        width="24"
        height="24"
        style={{ marginRight: '5px' }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_382_11257)">
          <path
            d="M2.75 4H21.25C21.6656 4 22 4.33437 22 4.75C22 5.16562 21.6656 5.5 21.25 5.5H2.75C2.33437 5.5 2 5.16562 2 4.75C2 4.33437 2.33437 4 2.75 4ZM2.75 18.5H21.25C21.6656 18.5 22 18.8344 22 19.25C22 19.6656 21.6656 20 21.25 20H2.75C2.33437 20 2 19.6656 2 19.25C2 18.8344 2.33437 18.5 2.75 18.5ZM12.05 10.5C12.3152 10.5 12.5696 10.3946 12.7571 10.2071C12.9446 10.0196 13.05 9.76522 13.05 9.5C13.05 9.23478 12.9446 8.98043 12.7571 8.79289C12.5696 8.60536 12.3152 8.5 12.05 8.5C11.7848 8.5 11.5304 8.60536 11.3429 8.79289C11.1554 8.98043 11.05 9.23478 11.05 9.5C11.05 9.76522 11.1554 10.0196 11.3429 10.2071C11.5304 10.3946 11.7848 10.5 12.05 10.5ZM10.1594 13.025C10.2875 13.0094 10.4187 13 10.55 13H12.05H13.55C13.6813 13 13.8125 13.0094 13.9406 13.025C15.4125 13.2156 16.55 14.475 16.55 16C16.55 16.5531 16.1031 17 15.55 17H8.55C7.99688 17 7.55 16.5531 7.55 16C7.55 15.65 7.60938 15.3125 7.72188 15C8.05 14.0719 8.825 13.35 9.7875 13.0969C9.90937 13.0656 10.0344 13.0406 10.1594 13.025ZM10.55 11.5C9.94375 11.0437 9.55 10.3187 9.55 9.5C9.55 8.11875 10.6687 7 12.05 7C13.4313 7 14.55 8.11875 14.55 9.5C14.55 10.3187 14.1562 11.0437 13.55 11.5C13.1313 11.8125 12.6125 12 12.05 12C11.4875 12 10.9688 11.8125 10.55 11.5ZM14.2719 14.6844C14.0594 14.5656 13.8125 14.5 13.55 14.5H10.55C9.89688 14.5 9.34063 14.9187 9.13438 15.5H14.9656C14.8844 15.2719 14.75 15.0688 14.5781 14.9062C14.4625 14.8531 14.3594 14.775 14.2719 14.6844ZM6.6 7C7.13043 7 7.63914 7.21071 8.01421 7.58579C8.38929 7.96086 8.6 8.46957 8.6 9C8.6 9.53043 8.38929 10.0391 8.01421 10.4142C7.63914 10.7893 7.13043 11 6.6 11C6.06957 11 5.56086 10.7893 5.18579 10.4142C4.81071 10.0391 4.6 9.53043 4.6 9C4.6 8.46957 4.81071 7.96086 5.18579 7.58579C5.56086 7.21071 6.06957 7 6.6 7ZM5 12H8C8.38125 12 8.74062 12.1062 9.04375 12.2937C7.88125 12.7656 6.99375 13.7688 6.675 15H4C3.44687 15 3 14.5531 3 14C3 12.8969 3.89688 12 5 12ZM20 15H17.425C17.1031 13.7469 16.1875 12.7312 14.9969 12.2688C15.2906 12.0969 15.6344 12 16 12H19C20.1031 12 21 12.8969 21 14C21 14.5531 20.5531 15 20 15ZM17.6 7C18.1304 7 18.6391 7.21071 19.0142 7.58579C19.3893 7.96086 19.6 8.46957 19.6 9C19.6 9.53043 19.3893 10.0391 19.0142 10.4142C18.6391 10.7893 18.1304 11 17.6 11C17.0696 11 16.5609 10.7893 16.1858 10.4142C15.8107 10.0391 15.6 9.53043 15.6 9C15.6 8.46957 15.8107 7.96086 16.1858 7.58579C16.5609 7.21071 17.0696 7 17.6 7Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_382_11257">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    component: CNavGroup,
    name: 'Einstellungen',
    to: '/settings',
    icon: (
      <svg
        width="24"
        height="24"
        style={{ marginRight: '5px' }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_382_11267)">
          <path
            d="M10.4525 4.09629C10.9501 4.00657 11.468 3.95763 11.9982 3.95763C12.5284 3.95763 13.0464 4.00657 13.5439 4.09629L13.8906 5.52781C14.0578 6.22113 14.5268 6.74317 15.0693 7.05312L15.1264 7.08575C15.6647 7.39979 16.3539 7.54661 17.0391 7.34677L18.4502 6.93077C18.752 7.28559 19.0294 7.66488 19.27 8.06456L19.4331 8.34597C19.6534 8.74566 19.845 9.16981 20 9.6062L18.9315 10.6217C18.4135 11.1111 18.1974 11.78 18.2015 12.404V12.4366V12.4692C18.1974 13.0932 18.4176 13.758 18.9315 14.2515L20 15.267C19.845 15.7034 19.6534 16.1275 19.4331 16.5272L19.27 16.8086C19.0294 17.2083 18.752 17.5876 18.4502 17.9424L17.0391 17.5264C16.3539 17.3225 15.6647 17.4693 15.1264 17.7874L15.0693 17.8201C14.5309 18.13 14.0578 18.6521 13.8906 19.3454L13.5439 20.7769C13.0423 20.8707 12.5243 20.9156 11.9982 20.9156C11.4721 20.9156 10.9501 20.8666 10.4525 20.7769L10.1059 19.3454C9.93864 18.6521 9.46963 18.13 8.9272 17.8201L8.8701 17.7874C8.33176 17.4734 7.64251 17.3266 6.95734 17.5264L5.55029 17.9506C5.24849 17.5958 4.97116 17.2165 4.73054 16.8168L4.5674 16.5313C4.34717 16.1316 4.15549 15.7075 4.00051 15.2711L5.06904 14.2556C5.587 13.7662 5.80315 13.0973 5.79908 12.4733V12.4407V12.408C5.80315 11.7841 5.58292 11.1193 5.06904 10.6258L4.00051 9.61027C4.15549 9.17389 4.34717 8.74973 4.5674 8.35005L4.73054 8.06864C4.97116 7.66896 5.24849 7.28967 5.55029 6.93485L6.96142 7.35085C7.64659 7.55477 8.33583 7.40794 8.87418 7.08983L8.93128 7.0572C9.46963 6.74725 9.94272 6.22521 10.1099 5.53189L10.4566 4.10037L10.4525 4.09629ZM11.9982 2C11.3049 2 10.6279 2.06933 9.96719 2.19576C9.645 2.25694 9.0781 2.44454 8.76814 3.01552C8.68658 3.16642 8.62132 3.32548 8.58054 3.49677L8.20125 5.06695C8.18086 5.14852 8.11152 5.26271 7.95654 5.35244C7.93207 5.36875 7.9076 5.38098 7.87905 5.3973C7.72408 5.48702 7.59357 5.4911 7.50792 5.46663L5.96221 5.00985C5.79908 4.96091 5.63186 4.93644 5.46465 4.93236C4.80803 4.91197 4.36348 5.31573 4.14733 5.56043C3.73949 6.02537 3.37243 6.53109 3.05024 7.06536L3.04208 7.08167L2.87079 7.3794L2.86264 7.39571C2.56491 7.92998 2.31613 8.4928 2.11629 9.08008C2.00617 9.38596 1.88382 9.96509 2.21825 10.5198C2.30797 10.6666 2.41809 10.8052 2.54452 10.9276L3.7191 12.0451C3.78027 12.1062 3.84145 12.2204 3.84145 12.3999V12.4448V12.4896C3.84145 12.665 3.78027 12.7833 3.7191 12.8444L2.54452 13.9538C2.41809 14.0761 2.30797 14.2148 2.21825 14.3616C1.88382 14.9163 2.00617 15.4954 2.11221 15.8013C2.31205 16.3886 2.56083 16.9514 2.85856 17.4856L2.86671 17.502L3.04208 17.8038L3.05024 17.8201C3.37243 18.3543 3.73949 18.856 4.14733 19.3209C4.36348 19.5656 4.81211 19.9694 5.46465 19.949C5.63186 19.9449 5.79908 19.9164 5.96221 19.8715L7.512 19.4147C7.59357 19.3903 7.72815 19.3943 7.88313 19.4841C7.9076 19.5004 7.93207 19.5126 7.96062 19.5289C8.1156 19.6186 8.18493 19.7288 8.20533 19.8144L8.58462 21.3846C8.6254 21.5559 8.69065 21.719 8.77222 21.8658C9.08626 22.4368 9.65315 22.6203 9.97127 22.6856C10.6279 22.8161 11.309 22.8814 12.0023 22.8814C12.6956 22.8814 13.3726 22.812 14.0333 22.6856C14.3555 22.6244 14.9224 22.4368 15.2324 21.8658C15.314 21.7149 15.3792 21.5559 15.42 21.3846L15.7993 19.8144C15.8197 19.7328 15.889 19.6186 16.044 19.5289C16.0685 19.5126 16.0929 19.5004 16.1215 19.4841C16.2765 19.3943 16.407 19.3903 16.4926 19.4147L18.0424 19.8715C18.2055 19.9204 18.3727 19.9449 18.54 19.949C19.1966 19.9694 19.6411 19.5656 19.8573 19.3209C20.2651 18.856 20.6322 18.3503 20.9544 17.816L20.9625 17.7997L21.1338 17.502L21.142 17.4856C21.4397 16.9514 21.6885 16.3886 21.8883 15.8013C21.9944 15.4913 22.1167 14.9122 21.7782 14.3575C21.6885 14.2107 21.5784 14.072 21.4519 13.9497L20.2774 12.8363C20.2162 12.7751 20.155 12.6609 20.155 12.4815V12.4366V12.3917C20.155 12.2164 20.2162 12.0981 20.2774 12.0369L21.4479 10.9235C21.5743 10.8012 21.6844 10.6625 21.7741 10.5157C22.1086 9.96102 21.9862 9.38188 21.8842 9.07193C21.6844 8.48464 21.4356 7.92182 21.1379 7.38755L21.1297 7.37124L20.9584 7.07352L20.9503 7.0572C20.6281 6.52293 20.261 6.02129 19.8532 5.55228C19.6371 5.30757 19.1884 4.90381 18.5359 4.92421C18.3687 4.92828 18.2015 4.95683 18.0383 5.00169L16.4845 5.46663C16.4029 5.4911 16.2683 5.48702 16.1133 5.3973C16.0889 5.38098 16.0644 5.36875 16.0358 5.35244C15.8809 5.26271 15.8115 5.15259 15.7911 5.06695L15.4118 3.49677C15.3711 3.32548 15.3058 3.16234 15.2242 3.01552C14.9102 2.44454 14.3433 2.26102 14.0252 2.19576C13.3686 2.06933 12.6916 2 11.9982 2ZM10.0406 12.4407C10.0406 11.9215 10.2469 11.4236 10.614 11.0564C10.9811 10.6893 11.479 10.483 11.9982 10.483C12.5174 10.483 13.0154 10.6893 13.3825 11.0564C13.7496 11.4236 13.9559 11.9215 13.9559 12.4407C13.9559 12.9599 13.7496 13.4578 13.3825 13.8249C13.0154 14.1921 12.5174 14.3983 11.9982 14.3983C11.479 14.3983 10.9811 14.1921 10.614 13.8249C10.2469 13.4578 10.0406 12.9599 10.0406 12.4407ZM15.9135 12.4407C15.9135 11.4023 15.501 10.4064 14.7667 9.67217C14.0325 8.93792 13.0366 8.52542 11.9982 8.52542C10.9598 8.52542 9.96398 8.93792 9.22973 9.67217C8.49547 10.4064 8.08297 11.4023 8.08297 12.4407C8.08297 13.4791 8.49547 14.4749 9.22973 15.2092C9.96398 15.9434 10.9598 16.3559 11.9982 16.3559C13.0366 16.3559 14.0325 15.9434 14.7667 15.2092C15.501 14.4749 15.9135 13.4791 15.9135 12.4407Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_382_11267">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    items: [
      {
        component: CNavItem,
        name: 'Textbausteine',
        to: '/textBlocks',
        icon: (
          <svg
            width="24"
            height="24"
            style={{ marginRight: '5px' }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_382_14557)">
              <path
                d="M12.3448 3.89336C12.2789 3.86702 12.2043 3.86702 12.134 3.89336L8.96857 5.02608L12.2438 6.28173L15.5147 5.02608L12.3448 3.89336ZM7.87097 10.0926L11.3043 11.3175V7.92813L7.87097 6.61101V10.0926ZM13.179 11.3175L16.6123 10.0926V6.61101L13.179 7.92813V11.3219V11.3175ZM18.4869 5.63635V10.1058L22.0695 11.4668C22.9169 11.7873 23.4788 12.6039 23.4788 13.5083V18.1578C23.4788 19.0227 22.9652 19.8085 22.1749 20.1598L18.4123 21.815C17.8679 22.0564 17.2489 22.0608 16.6957 21.8325L12.2394 19.9886L7.78316 21.8325C7.23436 22.0608 6.61532 22.052 6.06652 21.815L2.30834 20.1598C1.51368 19.8129 1 19.0271 1 18.1578V13.5083C1 12.5995 1.56197 11.7873 2.40932 11.4668L5.99188 10.1058V5.63635C5.99188 4.71436 6.57141 3.88897 7.44071 3.57725L11.4974 2.12842C11.9716 1.95719 12.4897 1.95719 12.9682 2.12842L17.0249 3.57725C17.8942 3.88897 18.4738 4.70997 18.4738 5.63635H18.4869ZM11.3043 14.5006L7.87097 15.8177V19.769L11.3043 18.3465V14.5006ZM3.06349 18.4431L6.00066 19.7339V15.8177L2.8747 14.6235V18.1621C2.8747 18.2851 2.94934 18.3992 3.0591 18.4475L3.06349 18.4431ZM16.6123 19.769V15.8177L13.179 14.5006V18.3465L16.6123 19.769ZM18.4869 19.7339L21.4241 18.4431C21.5383 18.3948 21.6085 18.2807 21.6085 18.1578V14.6235L18.4869 15.8177V19.7339ZM7.05436 11.7873C6.98411 11.7609 6.90947 11.7609 6.83923 11.7873L3.76595 12.9551L6.93582 14.1713L10.2111 12.9156L7.05436 11.7917V11.7873ZM17.4333 11.7873L14.2766 12.9112L17.5518 14.1669L20.7217 12.9507L17.6528 11.7873C17.5825 11.7609 17.5079 11.7609 17.4376 11.7873H17.4333Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_14557">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        component: CNavItem,
        name: 'Benutzer',
        to: '/users',
        icon: (
          <svg
            width="24"
            height="24"
            style={{ marginRight: '5px' }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_382_14564)">
              <path
                d="M15.3913 7C15.3913 6.1712 15.0477 5.37634 14.4362 4.79029C13.8247 4.20424 12.9953 3.875 12.1304 3.875C11.2656 3.875 10.4362 4.20424 9.82465 4.79029C9.21312 5.37634 8.86957 6.1712 8.86957 7C8.86957 7.8288 9.21312 8.62366 9.82465 9.20971C10.4362 9.79576 11.2656 10.125 12.1304 10.125C12.9953 10.125 13.8247 9.79576 14.4362 9.20971C15.0477 8.62366 15.3913 7.8288 15.3913 7ZM6.91304 7C6.91304 5.67392 7.46273 4.40215 8.44118 3.46447C9.41963 2.52678 10.7467 2 12.1304 2C13.5142 2 14.8412 2.52678 15.8197 3.46447C16.7981 4.40215 17.3478 5.67392 17.3478 7C17.3478 8.32608 16.7981 9.59785 15.8197 10.5355C14.8412 11.4732 13.5142 12 12.1304 12C10.7467 12 9.41963 11.4732 8.44118 10.5355C7.46273 9.59785 6.91304 8.32608 6.91304 7ZM5.00951 20.125H19.2514C18.8886 17.6523 16.6712 15.75 13.9932 15.75H10.2677C7.58967 15.75 5.37228 17.6523 5.00951 20.125ZM3 20.8398C3 16.9922 6.25272 13.875 10.2677 13.875H13.9932C18.0082 13.875 21.2609 16.9922 21.2609 20.8398C21.2609 21.4805 20.7188 22 20.0503 22H4.2106C3.54212 22 3 21.4805 3 20.8398Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_14564">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        component: CNavItem,
        name: 'E-Mail Vorlage',
        to: '/email',
        icon: (
          <svg
            width="20"
            height="15"
            style={{ marginRight: '5px' }}
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_382_14573)">
              <path
                d="M2.5 1.875C2.15625 1.875 1.875 2.15625 1.875 2.5V3.36328L8.61328 8.89453C9.42188 9.55859 10.582 9.55859 11.3906 8.89453L18.125 3.36328V2.5C18.125 2.15625 17.8438 1.875 17.5 1.875H2.5ZM1.875 5.78906V12.5C1.875 12.8438 2.15625 13.125 2.5 13.125H17.5C17.8438 13.125 18.125 12.8438 18.125 12.5V5.78906L12.5781 10.3438C11.0781 11.5742 8.91797 11.5742 7.42188 10.3438L1.875 5.78906ZM0 2.5C0 1.12109 1.12109 0 2.5 0H17.5C18.8789 0 20 1.12109 20 2.5V12.5C20 13.8789 18.8789 15 17.5 15H2.5C1.12109 15 0 13.8789 0 12.5V2.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_14573">
                <rect width="20" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        component: CNavGroup,
        name: ' Klientlnnen',
        to: '/client',
        icon: (
          <svg
            width="24"
            height="24"
            style={{ marginRight: '5px' }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_382_14580)">
              <path
                d="M6.5 9C7.16304 9 7.79893 8.73661 8.26777 8.26777C8.73661 7.79893 9 7.16304 9 6.5C9 5.83696 8.73661 5.20107 8.26777 4.73223C7.79893 4.26339 7.16304 4 6.5 4C5.83696 4 5.20107 4.26339 4.73223 4.73223C4.26339 5.20107 4 5.83696 4 6.5C4 7.16304 4.26339 7.79893 4.73223 8.26777C5.20107 8.73661 5.83696 9 6.5 9ZM18 9C18.663 9 19.2989 8.73661 19.7678 8.26777C20.2366 7.79893 20.5 7.16304 20.5 6.5C20.5 5.83696 20.2366 5.20107 19.7678 4.73223C19.2989 4.26339 18.663 4 18 4C17.337 4 16.7011 4.26339 16.2322 4.73223C15.7634 5.20107 15.5 5.83696 15.5 6.5C15.5 7.16304 15.7634 7.79893 16.2322 8.26777C16.7011 8.73661 17.337 9 18 9ZM2 13.3344C2 13.7 2.3 14 2.66562 14H9.33437C9.34062 14 9.34687 14 9.35625 14C8.525 13.2656 8.00313 12.1938 8.00313 11C8.00313 10.7625 8.025 10.5312 8.0625 10.3031C7.6375 10.1062 7.16562 10 6.66875 10H5.33437C3.49375 10 2 11.4938 2 13.3344ZM14.6656 14H21.3344C21.7031 14 22 13.7 22 13.3344C22 11.4938 20.5063 10 18.6656 10H17.3344C16.8375 10 16.3656 10.1094 15.9406 10.3031C15.9812 10.5281 16 10.7625 16 11C16 12.1938 15.475 13.2656 14.6469 14C14.6531 14 14.6594 14 14.6687 14H14.6656ZM12 9.5C12.197 9.5 12.392 9.5388 12.574 9.61418C12.756 9.68956 12.9214 9.80005 13.0607 9.93934C13.1999 10.0786 13.3104 10.244 13.3858 10.426C13.4612 10.608 13.5 10.803 13.5 11C13.5 11.197 13.4612 11.392 13.3858 11.574C13.3104 11.756 13.1999 11.9214 13.0607 12.0607C12.9214 12.1999 12.756 12.3104 12.574 12.3858C12.392 12.4612 12.197 12.5 12 12.5C11.803 12.5 11.608 12.4612 11.426 12.3858C11.244 12.3104 11.0786 12.1999 10.9393 12.0607C10.8001 11.9214 10.6896 11.756 10.6142 11.574C10.5388 11.392 10.5 11.197 10.5 11C10.5 10.803 10.5388 10.608 10.6142 10.426C10.6896 10.244 10.8001 10.0786 10.9393 9.93934C11.0786 9.80005 11.244 9.68956 11.426 9.61418C11.608 9.5388 11.803 9.5 12 9.5ZM12 14C12.394 14 12.7841 13.9224 13.1481 13.7716C13.512 13.6209 13.8427 13.3999 14.1213 13.1213C14.3999 12.8427 14.6209 12.512 14.7716 12.1481C14.9224 11.7841 15 11.394 15 11C15 10.606 14.9224 10.2159 14.7716 9.85195C14.6209 9.48797 14.3999 9.15726 14.1213 8.87868C13.8427 8.6001 13.512 8.37913 13.1481 8.22836C12.7841 8.0776 12.394 8 12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14ZM10.1656 16.5H13.8344C15.0781 16.5 16.1219 17.35 16.4156 18.5H7.58437C7.88125 17.35 8.925 16.5 10.1656 16.5ZM10.1656 15C7.86562 15 6 16.8656 6 19.1656C6 19.625 6.37187 20 6.83437 20H17.1656C17.625 20 18 19.6281 18 19.1656C18 16.8656 16.1344 15 13.8344 15H10.1656Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_14580">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        items: [
          {
            component: CNavItem,
            name: 'Filter',
            to: '/client/filter', // Fixed path
            icon: (
              <svg
                width="18"
                height="18"
                style={{ marginRight: '5px' }}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.59102C0 1.78137 0.656367 1.125 1.46602 1.125H16.534C17.3426 1.125 18 1.78137 18 2.59102C18 2.92852 17.884 3.25547 17.6695 3.51562L11.8125 10.7051V15.7395C11.8125 16.3652 11.3027 16.875 10.677 16.875C10.4203 16.875 10.1707 16.7871 9.97031 16.5973L6.71836 14.0484C6.38438 13.7812 6.1875 13.377 6.1875 12.948V10.7051L0.32952 3.51562C0.116402 3.25547 0 2.92852 0 2.59102ZM1.93219 2.8125L7.68516 9.87187C7.8082 10.023 7.875 10.2129 7.875 10.4062V12.8109L10.125 14.5969V10.4062C10.125 10.2129 10.1918 10.023 10.3148 9.87187L16.0664 2.8125H1.93219Z"
                  fill="white"
                />
              </svg>
            ),
          },
          {
            component: CNavItem,
            name: 'NotfallPass',
            to: '/client/emergency',
            icon: (
              <svg
                width="24"
                height="24"
                style={{ marginRight: '5px' }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_382_14599)">
                  <path
                    d="M19.1429 3.14286C19.5357 3.14286 19.8571 3.46429 19.8571 3.85714V21C19.8571 21.3929 19.5357 21.7143 19.1429 21.7143H4.85714C4.46429 21.7143 4.14286 21.3929 4.14286 21V3.85714C4.14286 3.46429 4.46429 3.14286 4.85714 3.14286H19.1429ZM4.85714 1C3.28125 1 2 2.28125 2 3.85714V21C2 22.5759 3.28125 23.8571 4.85714 23.8571H19.1429C20.7188 23.8571 22 22.5759 22 21V3.85714C22 2.28125 20.7188 1 19.1429 1H4.85714ZM6.28571 18.8571C6.28571 19.25 6.60714 19.5714 7 19.5714H17C17.3929 19.5714 17.7143 19.25 17.7143 18.8571C17.7143 18.4643 17.3929 18.1429 17 18.1429H7C6.60714 18.1429 6.28571 18.4643 6.28571 18.8571ZM7.77232 11H9.51786C9.58929 12.3571 9.86161 13.4018 10.1696 14.1607C8.92411 13.5714 8.00893 12.4018 7.77232 11ZM12 14.5714H11.9866C11.8795 14.4152 11.7321 14.1741 11.5804 13.8348C11.3125 13.2277 11.0268 12.3036 10.9464 11H13.0491C12.9688 12.3036 12.6875 13.2277 12.4152 13.8348C12.2634 14.1741 12.1161 14.4152 12.0089 14.5714H11.9955H12ZM16.2277 11C15.9911 12.4018 15.0759 13.5714 13.8304 14.1607C14.1339 13.3973 14.4063 12.3571 14.4821 11H16.2277ZM16.2277 9.57143H14.4821C14.4107 8.21429 14.1384 7.16964 13.8304 6.41071C15.0759 7 15.9911 8.16964 16.2277 9.57143ZM12 6H12.0134C12.1205 6.15625 12.2679 6.39732 12.4196 6.73661C12.6875 7.34375 12.9732 8.26786 13.0536 9.57143H10.9509C11.0312 8.26786 11.3125 7.34375 11.5848 6.73661C11.7366 6.39732 11.8839 6.15625 11.9911 6H12.0045H12ZM7.77232 9.57143C8.00893 8.16964 8.92411 7 10.1696 6.41071C9.86607 7.17411 9.59375 8.21429 9.51786 9.57143H7.77232ZM12 16C13.5155 16 14.969 15.398 16.0406 14.3263C17.1122 13.2547 17.7143 11.8012 17.7143 10.2857C17.7143 8.77019 17.1122 7.31674 16.0406 6.2451C14.969 5.17347 13.5155 4.57143 12 4.57143C10.4845 4.57143 9.03103 5.17347 7.95939 6.2451C6.88775 7.31674 6.28571 8.77019 6.28571 10.2857C6.28571 11.8012 6.88775 13.2547 7.95939 14.3263C9.03103 15.398 10.4845 16 12 16Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_382_14599">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
          },
        ],
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'DSGVO',
  //   to: '/dashboard',
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       style={{ marginRight: '5px' }}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <g clipPath="url(#clip0_382_14606)">
  //         <path
  //           d="M10.75 6.375C10.75 3.95703 8.79297 2 6.375 2C3.95703 2 2 3.95703 2 6.375C2 8.79297 3.95703 10.75 6.375 10.75C6.57812 10.75 6.77344 10.7383 6.96875 10.7109L5.46484 8.70312C4.53516 8.33984 3.875 7.43359 3.875 6.375C3.875 4.99609 4.99609 3.875 6.375 3.875C7.43359 3.875 8.33984 4.53516 8.70312 5.46484L10.7109 6.96875C10.7383 6.77344 10.75 6.57422 10.75 6.375ZM10.332 8.24609L8.77734 7.07812L7.61719 6.20703C7.53516 5.59766 7.00781 5.125 6.375 5.125C5.68359 5.125 5.125 5.68359 5.125 6.375C5.125 7.00781 5.59766 7.53516 6.21094 7.61328L7.08203 8.77344L8.25 10.3281L8.25391 10.332V13.6641L8.25 13.668L7.08203 15.2227L6.21094 16.3828C5.59766 16.4648 5.125 16.9922 5.125 17.625C5.125 18.3164 5.68359 18.875 6.375 18.875C7.00781 18.875 7.53516 18.4023 7.61328 17.7891L8.77344 16.918L10.3281 15.75L10.332 15.7461H13.6641L13.668 15.75L15.2227 16.918L16.3828 17.7891C16.4648 18.4023 16.9883 18.875 17.6211 18.875C18.3125 18.875 18.8711 18.3164 18.8711 17.625C18.8711 16.9922 18.3984 16.4648 17.7852 16.3867L16.9141 15.2266L15.7461 13.6719L15.7422 13.668V10.332L15.7461 10.3281L16.9141 8.77344L17.7852 7.61328C18.3984 7.53125 18.8711 7.00781 18.8711 6.375C18.8711 5.68359 18.3125 5.125 17.6211 5.125C16.9883 5.125 16.4609 5.59766 16.3828 6.21094L15.2227 7.08203L13.668 8.25L13.6641 8.25391H10.332L10.3281 8.25L10.332 8.24609ZM10.7109 17.0312L8.70703 18.5352C8.33984 19.4648 7.43359 20.125 6.375 20.125C4.99609 20.125 3.875 19.0039 3.875 17.625C3.875 16.5664 4.53516 15.6602 5.46484 15.2969L6.96875 13.2891C6.77344 13.2617 6.57422 13.25 6.375 13.25C3.95703 13.25 2 15.207 2 17.625C2 20.043 3.95703 22 6.375 22C8.79297 22 10.75 20.043 10.75 17.625C10.75 17.4219 10.7383 17.2266 10.7109 17.0312ZM13.25 6.375C13.25 6.57812 13.2617 6.77344 13.2891 6.96875L15.293 5.46484C15.6602 4.53516 16.5664 3.875 17.625 3.875C19.0039 3.875 20.125 4.99609 20.125 6.375C20.125 7.43359 19.4648 8.33984 18.5352 8.70312L17.0312 10.7109C17.2266 10.7383 17.4258 10.75 17.625 10.75C20.043 10.75 22 8.79297 22 6.375C22 3.95703 20.043 2 17.625 2C15.207 2 13.25 3.95703 13.25 6.375ZM13.2891 17.0312C13.2617 17.2266 13.25 17.4258 13.25 17.625C13.25 20.043 15.207 22 17.625 22C20.043 22 22 20.043 22 17.625C22 15.207 20.043 13.25 17.625 13.25C17.4219 13.25 17.2266 13.2617 17.0312 13.2891L18.5352 15.293C19.4648 15.6562 20.125 16.5625 20.125 17.6211C20.125 19 19.0039 20.1211 17.625 20.1211C16.5664 20.1211 15.6602 19.4609 15.2969 18.5312L13.2891 17.0312ZM10.75 10.125H13.25C13.5938 10.125 13.875 10.4062 13.875 10.75V13.25C13.875 13.5938 13.5938 13.875 13.25 13.875H10.75C10.4062 13.875 10.125 13.5938 10.125 13.25V10.75C10.125 10.4062 10.4062 10.125 10.75 10.125Z"
  //           fill="white"
  //         />
  //       </g>
  //       <defs>
  //         <clipPath id="clip0_382_14606">
  //           <rect width="24" height="24" fill="white" />
  //         </clipPath>
  //       </defs>
  //     </svg>
  //   ),
  //   badge: {
  //     color: 'info',
  //     // text: 'NEW',
  //   },
  // },
]

export default _nav
