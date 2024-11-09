/* eslint-disable react/prop-types */
export const RightTikIcon = () => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3828 1.11719C17.8711 1.60547 17.8711 2.39844 17.3828 2.88672L7.38281 12.8867C6.89453 13.375 6.10156 13.375 5.61328 12.8867L0.613281 7.88672C0.125 7.39844 0.125 6.60547 0.613281 6.11719C1.10156 5.62891 1.89453 5.62891 2.38281 6.11719L6.5 10.2305L15.6172 1.11719C16.1055 0.628906 16.8984 0.628906 17.3867 1.11719H17.3828Z"
        fill="#00ADEF"
      />
    </svg>
  );
};
export const PhoneIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_100_2121)">
        <path
          d="M5.15312 0.768966C4.9125 0.187716 4.27812 -0.121659 3.67188 0.0439663L0.921875 0.793966C0.378125 0.943966 0 1.43772 0 2.00022C0 9.73147 6.26875 16.0002 14 16.0002C14.5625 16.0002 15.0563 15.6221 15.2063 15.0783L15.9563 12.3283C16.1219 11.7221 15.8125 11.0877 15.2312 10.8471L12.2312 9.59709C11.7219 9.38459 11.1313 9.53147 10.7844 9.95959L9.52188 11.5002C7.32188 10.4596 5.54063 8.67834 4.5 6.47834L6.04063 5.21897C6.46875 4.86897 6.61562 4.28147 6.40312 3.77209L5.15312 0.772091V0.768966Z"
          fill="#611D69"
        />
      </g>
      <defs>
        <clipPath id="clip0_100_2121">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const MessageIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_100_2127)">
        <path
          d="M2 0.5C0.896875 0.5 0 1.39688 0 2.5V11.5C0 12.6031 0.896875 13.5 2 13.5H5V16C5 16.1906 5.10625 16.3625 5.275 16.4469C5.44375 16.5312 5.64688 16.5125 5.8 16.4L9.66562 13.5H14C15.1031 13.5 16 12.6031 16 11.5V2.5C16 1.39688 15.1031 0.5 14 0.5H2Z"
          fill="#611D69"
        />
      </g>
      <defs>
        <clipPath id="clip0_100_2127">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
/* eslint-disable react/prop-types */
export const SearchIcon = ({ isContactPage }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={` ${isContactPage ? "fill-white" : "fill-[#1D1D1D]"}`}
        d="M16.2508 8.12344C16.2508 9.9165 15.6687 11.5728 14.6882 12.9166L19.6338 17.8661C20.1221 18.3544 20.1221 19.1474 19.6338 19.6357C19.1455 20.124 18.3525 20.124 17.8642 19.6357L12.9186 14.6863C11.5748 15.6707 9.91845 16.2488 8.1254 16.2488C3.6369 16.2488 0 12.6119 0 8.12344C0 3.63494 3.6369 -0.00195312 8.1254 -0.00195312C12.6139 -0.00195312 16.2508 3.63494 16.2508 8.12344ZM8.1254 13.7487C8.86412 13.7487 9.59561 13.6032 10.2781 13.3205C10.9606 13.0378 11.5807 12.6235 12.1031 12.1011C12.6254 11.5788 13.0398 10.9586 13.3225 10.2761C13.6052 9.59365 13.7507 8.86217 13.7507 8.12344C13.7507 7.38472 13.6052 6.65323 13.3225 5.97074C13.0398 5.28825 12.6254 4.66813 12.1031 4.14577C11.5807 3.62342 10.9606 3.20906 10.2781 2.92637C9.59561 2.64367 8.86412 2.49817 8.1254 2.49817C7.38668 2.49817 6.65519 2.64367 5.9727 2.92637C5.29021 3.20906 4.67008 3.62342 4.14773 4.14577C3.62537 4.66813 3.21102 5.28825 2.92832 5.97074C2.64562 6.65323 2.50012 7.38472 2.50012 8.12344C2.50012 8.86217 2.64562 9.59365 2.92832 10.2761C3.21102 10.9586 3.62537 11.5788 4.14773 12.1011C4.67008 12.6235 5.29021 13.0378 5.9727 13.3205C6.65519 13.6032 7.38668 13.7487 8.1254 13.7487Z"
        fill="#1D1D1D"
      />
    </svg>
  );
};
export const SliderArrowIcon = () => {
  return (
    <svg
      width="20"
      height="36"
      viewBox="0 0 20 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.728516 16.2344C-0.248047 17.2109 -0.248047 18.7969 0.728516 19.7734L15.7285 34.7734C16.7051 35.75 18.291 35.75 19.2676 34.7734C20.2441 33.7969 20.2441 32.2109 19.2676 31.2344L6.0332 18L19.2598 4.76562C20.2363 3.78906 20.2363 2.20312 19.2598 1.22656C18.2832 0.25 16.6973 0.25 15.7207 1.22656L0.720703 16.2266L0.728516 16.2344Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const NextGoIcon = () => {
  return (
    <svg
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5971 7.97128C22.1343 7.43415 22.1343 6.56184 21.5971 6.0247L16.0969 0.524434C15.5597 -0.0127019 14.6874 -0.0127019 14.1503 0.524434C13.6132 1.06157 13.6132 1.93388 14.1503 2.47101L17.3044 5.62507H1.37507C0.614483 5.62507 0 6.23956 0 7.00014C0 7.76072 0.614483 8.37521 1.37507 8.37521H17.3044L14.1503 11.5293C13.6132 12.0664 13.6132 12.9387 14.1503 13.4758C14.6874 14.013 15.5597 14.013 16.0969 13.4758L21.5971 7.97558V7.97128Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const FbIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.57143 0C1.15313 0 0 1.15313 0 2.57143V15.4286C0 16.8469 1.15313 18 2.57143 18H6.51696V12.142H4.39554V9H6.51696V7.64598C6.51696 4.14643 8.1 2.52321 11.5393 2.52321C12.1902 2.52321 13.3152 2.65179 13.7772 2.78036V5.625C13.5362 5.60089 13.1143 5.58482 12.5879 5.58482C10.9004 5.58482 10.2496 6.22366 10.2496 7.88304V9H13.6085L13.0299 12.142H10.2455V18H15.4286C16.8469 18 18 16.8469 18 15.4286V2.57143C18 1.15313 16.8469 0 15.4286 0H2.57143Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const InstaIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.81071 7.22009C7.57671 7.37653 7.37581 7.57753 7.21949 7.81162C7.06316 8.0457 6.95447 8.30829 6.89963 8.58437C6.78887 9.14196 6.90414 9.72071 7.22009 10.1933C7.53604 10.6659 8.02679 10.9936 8.58437 11.1044C9.14196 11.2152 9.72071 11.0999 10.1933 10.7839C10.6659 10.468 10.9936 9.97723 11.1044 9.41964C11.2152 8.86206 11.0999 8.28331 10.7839 7.81071C10.468 7.33812 9.97723 7.01039 9.41964 6.89963C8.86206 6.78887 8.28331 6.90414 7.81071 7.22009ZM13.5281 4.47188C13.3192 4.26295 13.0661 4.09821 12.7888 3.98973C12.0616 3.70446 10.4746 3.71652 9.45 3.72857C9.28527 3.72857 9.13259 3.73259 9 3.73259C8.86741 3.73259 8.71071 3.73259 8.54196 3.72857C7.51741 3.71652 5.93839 3.70045 5.21116 3.98973C4.93393 4.09821 4.68482 4.26295 4.47188 4.47188C4.25893 4.6808 4.09821 4.93393 3.98973 5.21116C3.70446 5.93839 3.72054 7.52946 3.72857 8.55402C3.72857 8.71875 3.73259 8.87143 3.73259 9C3.73259 9.12857 3.73259 9.28125 3.72857 9.44598C3.72054 10.4705 3.70446 12.0616 3.98973 12.7888C4.09821 13.0661 4.26295 13.3152 4.47188 13.5281C4.6808 13.7411 4.93393 13.9018 5.21116 14.0103C5.93839 14.2955 7.52545 14.2835 8.55 14.2714C8.71473 14.2714 8.86741 14.2674 9 14.2674C9.13259 14.2674 9.28929 14.2674 9.45804 14.2714C10.4826 14.2835 12.0616 14.2996 12.7888 14.0103C13.0661 13.9018 13.3152 13.7371 13.5281 13.5281C13.7411 13.3192 13.9018 13.0661 14.0103 12.7888C14.2996 12.0656 14.2835 10.4826 14.2714 9.45402C14.2714 9.28527 14.2674 9.12857 14.2674 8.99598C14.2674 8.86339 14.2674 8.71071 14.2714 8.53795C14.2835 7.51339 14.2996 5.93036 14.0103 5.20312C13.9018 4.92589 13.7371 4.67679 13.5281 4.46384V4.47188ZM10.8321 6.25982C11.5589 6.74574 12.0628 7.50045 12.2331 8.35792C12.4034 9.2154 12.2261 10.1054 11.7402 10.8321C11.4996 11.192 11.1905 11.5009 10.8305 11.7413C10.4705 11.9817 10.0667 12.1488 9.64208 12.2331C8.7846 12.4034 7.8946 12.2261 7.16786 11.7402C6.44112 11.2548 5.93696 10.5006 5.76629 9.6435C5.59563 8.7864 5.77243 7.89661 6.25781 7.16987C6.74319 6.44313 7.49739 5.93897 8.35449 5.7683C9.21159 5.59763 10.1014 5.77444 10.8281 6.25982H10.8321ZM12.0054 6.20759C11.8808 6.12321 11.7804 6.00268 11.7201 5.86205C11.6598 5.72143 11.6478 5.56875 11.6759 5.41607C11.704 5.26339 11.7804 5.1308 11.8848 5.02232C11.9893 4.91384 12.1299 4.84152 12.2786 4.81339C12.4272 4.78527 12.5839 4.79732 12.7246 4.85759C12.8652 4.91786 12.9857 5.01429 13.0701 5.13884C13.1545 5.26339 13.1987 5.41205 13.1987 5.56473C13.1987 5.66518 13.1786 5.76562 13.1424 5.85804C13.1062 5.95045 13.046 6.03482 12.9777 6.10714C12.9094 6.17946 12.821 6.23571 12.7286 6.27589C12.6362 6.31607 12.5357 6.33616 12.4353 6.33616C12.2826 6.33616 12.1339 6.29196 12.0094 6.20759H12.0054ZM18 2.57143C18 1.15313 16.8469 0 15.4286 0H2.57143C1.15313 0 0 1.15313 0 2.57143V15.4286C0 16.8469 1.15313 18 2.57143 18H15.4286C16.8469 18 18 16.8469 18 15.4286V2.57143ZM14.3438 14.3438C13.5924 15.0951 12.6804 15.3321 11.6518 15.3844C10.5911 15.4446 7.40893 15.4446 6.34821 15.3844C5.31964 15.3321 4.40759 15.0951 3.65625 14.3438C2.90491 13.5924 2.66786 12.6804 2.61964 11.6518C2.55937 10.5911 2.55937 7.40893 2.61964 6.34821C2.67187 5.31964 2.90491 4.40759 3.65625 3.65625C4.40759 2.90491 5.32366 2.66786 6.34821 2.61964C7.40893 2.55937 10.5911 2.55937 11.6518 2.61964C12.6804 2.67187 13.5924 2.90491 14.3438 3.65625C15.0951 4.40759 15.3321 5.31964 15.3804 6.34821C15.4406 7.40491 15.4406 10.583 15.3804 11.6478C15.3281 12.6763 15.0951 13.5884 14.3438 14.3397V14.3438Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const LinkdinIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 2.57143C18 1.15312 16.8469 0 15.4286 0H2.57143C1.15313 0 0 1.15312 0 2.57143V15.4286C0 16.8469 1.15313 18 2.57143 18H15.4286C16.8469 18 18 16.8469 18 15.4286V2.57143ZM2.77232 6.83839V15.4286H5.4442V6.83839H2.77232ZM2.55938 4.1183C2.55938 4.97009 3.25045 5.66518 4.10625 5.66518C4.96205 5.66518 5.65312 4.97411 5.65312 4.1183C5.65312 3.26652 4.95804 2.57143 4.10625 2.57143C3.25045 2.57143 2.55938 3.26652 2.55938 4.1183ZM12.7728 15.4286H15.4406V10.7196C15.4406 8.40536 14.9384 6.62545 12.2384 6.62545C10.9406 6.62545 10.0688 7.33661 9.71116 8.01161H9.675V6.83839H7.11563V15.4286H9.78348V11.1777C9.78348 10.0567 9.99643 8.97188 11.3866 8.97188C12.7527 8.97188 12.7728 10.2536 12.7728 11.25V15.4286Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const EmailIcon = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8 0.800049C0.804375 0.800049 0 1.60442 0 2.60005V3.3313L8.72438 9.79442C8.80313 9.85067 8.89875 9.88442 9 9.88442C9.10125 9.88442 9.19687 9.85067 9.27563 9.79442L18 3.3313V2.60005C18 1.60442 17.1956 0.800049 16.2 0.800049H1.8ZM18 5.57005L10.35 11.24C9.96187 11.5269 9.48938 11.6844 9 11.6844C8.51062 11.6844 8.04375 11.5269 7.65 11.24L0 5.57005V13.4C0 14.3957 0.804375 15.2 1.8 15.2H16.2C17.1956 15.2 18 14.3957 18 13.4V5.57005Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const UserIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 9C9.19347 9 10.3381 8.52589 11.182 7.68198C12.0259 6.83807 12.5 5.69347 12.5 4.5C12.5 3.30653 12.0259 2.16193 11.182 1.31802C10.3381 0.474106 9.19347 0 8 0C6.80653 0 5.66193 0.474106 4.81802 1.31802C3.97411 2.16193 3.5 3.30653 3.5 4.5C3.5 5.69347 3.97411 6.83807 4.81802 7.68198C5.66193 8.52589 6.80653 9 8 9ZM5.04063 10C2.25625 10 0 12.2562 0 15.0406C0 15.5719 0.43125 16 0.959375 16H15.0406C15.5719 16 16 15.5687 16 15.0406C16 12.2562 13.7438 10 10.9594 10H5.04063Z"
        fill="#611D69"
      />
    </svg>
  );
};
export const LockIcon = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.14286 5.99979V7.71408H10.8571V5.99979C10.8571 4.42122 9.57857 3.14265 8 3.14265C6.42143 3.14265 5.14286 4.42122 5.14286 5.99979ZM2.85714 7.71408V5.99979C2.85714 3.16051 5.16071 0.856934 8 0.856934C10.8393 0.856934 13.1429 3.16051 13.1429 5.99979V7.71408H13.7143C14.975 7.71408 16 8.73908 16 9.99979V16.8569C16 18.1176 14.975 19.1426 13.7143 19.1426H2.28571C1.025 19.1426 0 18.1176 0 16.8569V9.99979C0 8.73908 1.025 7.71408 2.28571 7.71408H2.85714Z"
        fill="#611D69"
      />
    </svg>
  );
};

export function Dashboard() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="4" fill="white" fillOpacity="0.29" />
      <path
        d="M23.9931 13.9826C23.9931 14.6076 23.4722 15.0972 22.8819 15.0972H21.7708L21.7951 20.6597C21.7951 20.7534 21.7882 20.8472 21.7778 20.9409V21.5C21.7778 22.2673 21.1562 22.8889 20.3889 22.8889H19.8333C19.7951 22.8889 19.7569 22.8889 19.7188 22.8854C19.6701 22.8889 19.6215 22.8889 19.5729 22.8889H18.4444H17.6111C16.8438 22.8889 16.2222 22.2673 16.2222 21.5V20.6666V18.4444C16.2222 17.8298 15.7257 17.3333 15.1111 17.3333H12.8889C12.2743 17.3333 11.7778 17.8298 11.7778 18.4444V20.6666V21.5C11.7778 22.2673 11.1563 22.8889 10.3889 22.8889H9.55556H8.44792C8.39583 22.8889 8.34375 22.8854 8.29167 22.8819C8.25 22.8854 8.20833 22.8889 8.16667 22.8889H7.61111C6.84375 22.8889 6.22222 22.2673 6.22222 21.5V17.6111C6.22222 17.5798 6.22222 17.5451 6.22569 17.5139V15.0972H5.11111C4.48611 15.0972 4 14.6111 4 13.9826C4 13.6701 4.10417 13.3923 4.34722 13.1493L13.25 5.38886C13.4931 5.14581 13.7708 5.11108 14.0139 5.11108C14.2569 5.11108 14.5347 5.18053 14.7431 5.35414L23.6111 13.1493C23.8889 13.3923 24.0278 13.6701 23.9931 13.9826Z"
        fill="white"
      />
    </svg>
  );
}
export function PolicyRenewal() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 2C0.671875 2 0 2.67188 0 3.5V13.5C0 14.3281 0.671875 15 1.5 15H2C2 16.6562 3.34375 18 5 18C6.65625 18 8 16.6562 8 15H12C12 16.6562 13.3438 18 15 18C16.6562 18 18 16.6562 18 15H19C19.5531 15 20 14.5531 20 14C20 13.4469 19.5531 13 19 13V11V10V9.41563C19 8.88438 18.7906 8.375 18.4156 8L16 5.58437C15.625 5.20937 15.1156 5 14.5844 5H13V3.5C13 2.67188 12.3281 2 11.5 2H1.5ZM13 7H14.5844L17 9.41563V10H13V7ZM3.5 15C3.5 14.6022 3.65804 14.2206 3.93934 13.9393C4.22064 13.658 4.60218 13.5 5 13.5C5.39782 13.5 5.77936 13.658 6.06066 13.9393C6.34196 14.2206 6.5 14.6022 6.5 15C6.5 15.3978 6.34196 15.7794 6.06066 16.0607C5.77936 16.342 5.39782 16.5 5 16.5C4.60218 16.5 4.22064 16.342 3.93934 16.0607C3.65804 15.7794 3.5 15.3978 3.5 15ZM15 13.5C15.3978 13.5 15.7794 13.658 16.0607 13.9393C16.342 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5C14.6022 16.5 14.2206 16.342 13.9393 16.0607C13.658 15.7794 13.5 15.3978 13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5Z"
        fill="white"
      />
    </svg>
  );
}
export function NewVenture() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.375 0C3.33984 0 2.5 0.839844 2.5 1.875V18.125C2.5 19.1602 3.33984 20 4.375 20H8.125V16.875C8.125 15.8398 8.96484 15 10 15C11.0352 15 11.875 15.8398 11.875 16.875V20H15.625C16.6602 20 17.5 19.1602 17.5 18.125V1.875C17.5 0.839844 16.6602 0 15.625 0H4.375ZM5 9.375C5 9.03125 5.28125 8.75 5.625 8.75H6.875C7.21875 8.75 7.5 9.03125 7.5 9.375V10.625C7.5 10.9688 7.21875 11.25 6.875 11.25H5.625C5.28125 11.25 5 10.9688 5 10.625V9.375ZM9.375 8.75H10.625C10.9688 8.75 11.25 9.03125 11.25 9.375V10.625C11.25 10.9688 10.9688 11.25 10.625 11.25H9.375C9.03125 11.25 8.75 10.9688 8.75 10.625V9.375C8.75 9.03125 9.03125 8.75 9.375 8.75ZM12.5 9.375C12.5 9.03125 12.7812 8.75 13.125 8.75H14.375C14.7188 8.75 15 9.03125 15 9.375V10.625C15 10.9688 14.7188 11.25 14.375 11.25H13.125C12.7812 11.25 12.5 10.9688 12.5 10.625V9.375ZM5.625 3.75H6.875C7.21875 3.75 7.5 4.03125 7.5 4.375V5.625C7.5 5.96875 7.21875 6.25 6.875 6.25H5.625C5.28125 6.25 5 5.96875 5 5.625V4.375C5 4.03125 5.28125 3.75 5.625 3.75ZM8.75 4.375C8.75 4.03125 9.03125 3.75 9.375 3.75H10.625C10.9688 3.75 11.25 4.03125 11.25 4.375V5.625C11.25 5.96875 10.9688 6.25 10.625 6.25H9.375C9.03125 6.25 8.75 5.96875 8.75 5.625V4.375ZM13.125 3.75H14.375C14.7188 3.75 15 4.03125 15 4.375V5.625C15 5.96875 14.7188 6.25 14.375 6.25H13.125C12.7812 6.25 12.5 5.96875 12.5 5.625V4.375C12.5 4.03125 12.7812 3.75 13.125 3.75Z"
        fill="white"
      />
    </svg>
  );
}
export function Cancellations() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3.33331C0 2.10761 0.996528 1.11108 2.22222 1.11108H7.77778V5.55553C7.77778 6.17011 8.27431 6.66664 8.88889 6.66664H13.3333V8.00692C10.7674 8.73261 8.88889 11.0903 8.88889 13.8889C8.88889 15.9409 9.89931 17.7534 11.4479 18.8646C11.3368 18.8819 11.2257 18.8889 11.1111 18.8889H2.22222C0.996528 18.8889 0 17.8923 0 16.6666V3.33331ZM13.3333 5.55553H8.88889V1.11108L13.3333 5.55553ZM15 8.88886C16.3261 8.88886 17.5979 9.41565 18.5355 10.3533C19.4732 11.291 20 12.5628 20 13.8889C20 15.2149 19.4732 16.4867 18.5355 17.4244C17.5979 18.3621 16.3261 18.8889 15 18.8889C13.6739 18.8889 12.4021 18.3621 11.4645 17.4244C10.5268 16.4867 10 15.2149 10 13.8889C10 12.5628 10.5268 11.291 11.4645 10.3533C12.4021 9.41565 13.6739 8.88886 15 8.88886ZM15 17.2222C15.221 17.2222 15.433 17.1344 15.5893 16.9781C15.7455 16.8218 15.8333 16.6099 15.8333 16.3889C15.8333 16.1678 15.7455 15.9559 15.5893 15.7996C15.433 15.6433 15.221 15.5555 15 15.5555C14.779 15.5555 14.567 15.6433 14.4107 15.7996C14.2545 15.9559 14.1667 16.1678 14.1667 16.3889C14.1667 16.6099 14.2545 16.8218 14.4107 16.9781C14.567 17.1344 14.779 17.2222 15 17.2222ZM15 10.5555C14.6944 10.5555 14.4444 10.8055 14.4444 11.1111V13.8889C14.4444 14.1944 14.6944 14.4444 15 14.4444C15.3056 14.4444 15.5556 14.1944 15.5556 13.8889V11.1111C15.5556 10.8055 15.3056 10.5555 15 10.5555Z"
        fill="white"
      />
    </svg>
  );
}
export function CompanySafety() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2006_854)">
        <path
          d="M10 0C10.1797 0 10.3594 0.0390625 10.5235 0.113281L17.8789 3.23438C18.7383 3.59766 19.3789 4.44531 19.375 5.46875C19.3555 9.34375 17.7617 16.4336 11.0313 19.6563C10.3789 19.9688 9.62111 19.9688 8.96877 19.6563C2.2383 16.4336 0.644549 9.34375 0.625018 5.46875C0.621112 4.44531 1.26174 3.59766 2.12111 3.23438L9.48049 0.113281C9.64064 0.0390625 9.82033 0 10 0ZM10 2.60938V17.375C15.3906 14.7656 16.8399 8.98828 16.875 5.52344L10 2.60938Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2006_854">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export function Notifications() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0002 0C9.30882 0 8.75023 0.558594 8.75023 1.25V2C5.89867 2.57812 3.75023 5.10156 3.75023 8.125V8.85938C3.75023 10.6953 3.07445 12.4688 1.8557 13.8438L1.56664 14.168C1.23851 14.5352 1.16039 15.0625 1.3596 15.5117C1.55882 15.9609 2.00804 16.25 2.50023 16.25H17.5002C17.9924 16.25 18.4377 15.9609 18.6409 15.5117C18.844 15.0625 18.7619 14.5352 18.4338 14.168L18.1448 13.8438C16.926 12.4688 16.2502 10.6992 16.2502 8.85938V8.125C16.2502 5.10156 14.1018 2.57812 11.2502 2V1.25C11.2502 0.558594 10.6916 0 10.0002 0ZM11.7698 19.2695C12.2385 18.8008 12.5002 18.1641 12.5002 17.5H10.0002H7.50023C7.50023 18.1641 7.76195 18.8008 8.2307 19.2695C8.69945 19.7383 9.33617 20 10.0002 20C10.6643 20 11.301 19.7383 11.7698 19.2695Z"
        fill="white"
      />
    </svg>
  );
}
