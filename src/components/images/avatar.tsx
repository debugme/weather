import { FC } from "react"

type AvatarProps = {
  className: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { className } = props
  return (
    <svg width="80" height="77" viewBox="0 0 80 77" fill="none" className={className}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.07744 64.8473C0.235844 68.3433 -0.55842 72.8406 0.424913 76.926H79.4576C80.4402 72.8406 79.6469 68.3433 77.8069 64.8473C71.3456 52.574 54.3402 54.6033 52.1402 51.4513C50.4322 49.0033 51.4482 41.4806 51.3349 39.5446C43.3749 40.2793 36.5843 40.1193 28.6283 39.386C28.5149 41.3233 29.4522 49.0033 27.7429 51.4513C25.5416 54.6033 8.53891 52.574 2.07744 64.8473" fill="#805D48"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.07744 64.8473C0.235844 68.3433 -0.55842 72.8406 0.424913 76.926H79.4576C80.4402 72.8406 79.6469 68.3433 77.8069 64.8473C75.1802 59.8606 70.8109 57.2366 66.4029 55.662C59.8869 61.982 50.4456 65.9593 39.9402 65.9593C29.4362 65.9593 19.9923 61.982 13.4789 55.662C9.06958 57.2366 4.70158 59.8606 2.07744 64.8473" fill="#646464"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.07744 64.8473C0.235844 68.3433 -0.55842 72.8406 0.424913 76.926H32.9229L23.1283 53.2753C17.0243 54.5646 6.76958 55.9326 2.07744 64.8473V64.8473ZM79.4576 76.926C80.4402 72.8406 79.6469 68.3433 77.8069 64.8473C73.1122 55.9326 62.8576 54.5659 56.7536 53.2753L46.9603 76.926H79.4576" fill="#626262"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9789 76.926C11.7602 72.2753 11.6802 72.3446 11.0989 76.926H11.9789Z" fill="#111111"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M68.7829 76.926C68.2003 72.3433 68.1216 72.2766 67.9003 76.926H68.7829Z" fill="#111111"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.4803 48.93C31.1616 47.4873 29.4416 45.3113 28.1829 42.6913C27.2762 40.8033 26.6096 38.686 26.1296 36.446C25.8443 36.3833 25.5336 36.2193 25.2443 36.014C24.5336 35.5086 24.0509 34.8473 23.6509 34.0687C22.5522 31.9487 22.0576 28.97 23.1829 27.5927C23.6682 26.998 24.3696 26.8287 25.0869 26.9273C25.0682 26.2433 25.0576 25.5566 25.0576 24.8753C25.0576 20.9233 25.0709 16.074 26.4322 13.306C27.4229 11.2846 28.9283 9.95664 30.7109 8.97931C37.5403 5.22865 42.3402 5.22865 49.1709 8.97931C50.9549 9.95664 52.4576 11.2846 53.4522 13.306C54.8122 16.074 54.8229 20.9233 54.8229 24.8753C54.8229 25.5566 54.8136 26.2433 54.7963 26.9273C55.5109 26.8287 56.2122 26.998 56.6989 27.5927C57.8229 28.97 57.3296 31.9487 56.2322 34.0687C55.8282 34.8473 55.3469 35.5086 54.6362 36.014C54.3469 36.2193 54.0389 36.3833 53.7509 36.446C53.2722 38.686 52.6043 40.8033 51.6963 42.6913C50.4389 45.3113 48.7202 47.4873 46.4002 48.93C42.7656 51.194 37.1176 51.194 33.4803 48.93" fill="#A07B5C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.6736 28.558C28.1816 29.3753 28.5549 30.4487 28.6963 31.6473C29.0176 34.3807 27.4936 33.8686 27.2189 35.5086C26.9989 36.8286 26.0483 36.5847 25.2443 36.014C24.5336 35.5113 24.0536 34.8473 23.6509 34.0687C22.5522 31.9487 22.0576 28.97 23.1829 27.5927C24.3682 26.1433 26.8389 27.2247 27.6736 28.558" fill="#A07B5C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.6963 49.3806C48.4323 49.1513 49.0616 48.574 49.4923 47.5846C50.0363 46.83 50.5363 45.9313 50.9896 44.9646C51.459 43.97 51.8776 42.902 52.2456 41.842C52.947 39.8206 53.4563 37.834 53.7536 36.4433C53.7123 36.4433 53.7123 36.4486 53.699 36.5059C53.1083 39.1153 48.1176 46.074 43.2203 45.97C42.015 45.9473 41.495 45.11 41.3003 44.59C41.0616 43.9553 40.9483 43.2926 39.9416 43.2166V43.2686L39.9403 43.2166C38.9336 43.2926 38.823 43.9553 38.5843 44.59C38.3896 45.11 37.8683 45.9473 36.6616 45.97C31.767 46.074 26.7763 39.1153 26.1856 36.5059C26.171 36.4486 26.171 36.4433 26.1296 36.4433C26.427 37.834 26.9376 39.8206 27.639 41.842C28.0043 42.902 28.423 43.97 28.8923 44.9646C29.347 45.9313 29.847 46.83 30.3923 47.5846C30.823 48.574 31.4496 49.1513 32.1856 49.3806C32.663 50.0993 33.5336 50.298 34.5763 50.2246C35.495 50.8686 36.4976 51.0326 37.4643 50.566C38.0536 51.066 39.087 51.162 39.9403 50.8473L39.9416 50.8086V50.8473C40.799 51.162 41.8296 51.066 42.4203 50.566C43.3843 51.03 44.3896 50.8686 45.307 50.2246C46.347 50.298 47.219 50.0993 47.6963 49.3806Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.1669 36.4513L26.127 36.4433C26.151 36.4433 26.1603 36.4433 26.1669 36.4513Z" fill="#5B5B5B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.1736 36.454L26.1709 36.4513V36.4433L26.1736 36.454Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.9403 10.4153C54.6389 12.4899 50.3309 24.3606 53.5269 33.6193C53.6909 33.8806 54.6176 32.2406 54.3843 29.9179C55.4989 29.0193 55.0936 27.9379 54.7723 27.6432C56.0243 27.5579 56.6736 25.4486 54.8736 25.6339C56.4949 24.8659 56.7056 23.7792 55.7269 22.4379C57.4589 22.7219 57.9936 19.5873 56.3056 19.2299C58.3349 19.1393 58.3629 15.7899 56.5243 15.4699C58.8123 15.2659 58.1909 11.9326 56.1829 12.3033C57.8923 11.7686 57.3669 8.98724 55.3349 9.60458C56.1269 7.90991 54.7496 5.80325 52.9483 6.13925C53.3949 4.69658 51.6296 3.23658 50.1563 4.10458C49.9549 2.62058 48.4963 1.73258 46.9243 2.80858C47.0336 1.47525 44.8203 1.11526 43.1203 2.04992C42.7816 1.12059 40.7763 0.347263 39.9403 1.82326C39.1043 0.347263 37.1003 1.12059 36.7603 2.04992C35.0616 1.11526 32.8523 1.47525 32.9563 2.80858C31.3856 1.73258 29.9269 2.62058 29.7256 4.10458C28.2509 3.23658 26.4869 4.69658 26.9323 6.13925C25.1336 5.80325 23.7563 7.91258 24.547 9.60458C22.515 8.98724 21.9909 11.7686 23.6989 12.3033C21.6936 11.9326 21.0696 15.2659 23.3576 15.4699C21.5189 15.7899 21.5483 19.1393 23.579 19.2299C21.8883 19.5873 22.4229 22.7219 24.1563 22.4379C23.1776 23.7792 23.3856 24.8659 25.0096 25.6339C23.2109 25.4486 23.8576 27.5579 25.1096 27.6432C24.7896 27.9379 24.3843 29.0193 25.4989 29.9179C25.2656 32.2406 26.1909 33.8806 26.3563 33.6193C29.5496 24.3606 25.2443 12.4899 39.9403 10.4153" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.1509 25.6287C32.3989 25.174 29.6269 25.0393 26.8442 25.202C26.5789 25.214 26.3175 25.2326 26.0535 25.254C25.4989 25.2953 25.0535 25.2847 24.9269 25.9927C24.8549 26.4087 24.9842 26.6393 25.0869 26.8007C25.2015 26.982 25.4109 27.1047 25.6855 27.402C26.3415 28.11 26.3242 29.9166 26.6775 30.8753C26.9375 31.5846 27.2562 32.1393 27.6455 32.5726C28.5015 33.522 29.7002 33.894 31.3695 34.0647C32.9175 34.2193 34.0189 34.0873 34.9482 33.6046C35.8775 33.126 36.6335 32.3006 37.4869 31.0766C38.0962 30.1993 38.3309 28.818 39.1829 28.4007C39.4629 28.2607 40.4175 28.2607 40.6962 28.4007C41.5469 28.818 41.7815 30.1993 42.3922 31.0766C43.2455 32.3006 44.0015 33.126 44.9322 33.6046C45.8602 34.0873 46.9629 34.2193 48.5095 34.0647C50.1789 33.894 51.3775 33.522 52.2335 32.5726C52.6215 32.1393 52.9389 31.5846 53.2002 30.8753C53.5522 29.9166 53.5389 28.11 54.1962 27.402C54.4695 27.1047 54.6789 26.982 54.7962 26.8007C54.8962 26.6393 55.0242 26.4087 54.9509 25.9927C54.8255 25.2847 54.3829 25.2953 53.8269 25.254C53.5642 25.2326 53.2989 25.214 53.0349 25.202C50.2509 25.0393 47.4842 25.174 44.7295 25.6287C38.9015 26.5927 40.9789 26.5927 35.1509 25.6287Z" fill="#D1D1D1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.0776 29.7593C36.8229 30.5659 36.4362 31.3259 35.7869 31.9899C35.2429 32.5499 34.6896 32.8553 33.9456 33.0899C32.4002 33.5739 30.8349 33.4433 29.2456 32.6993C28.6082 32.3993 28.2242 32.0499 27.8882 31.4126C27.6282 30.9233 27.4576 30.3459 27.3469 29.7059C27.1482 28.5579 26.9589 26.8886 28.2949 26.3446C28.5842 26.2273 28.9269 26.1646 29.3269 26.1566C30.2349 26.1393 31.1269 26.1513 31.9989 26.2139C32.9469 26.2819 34.2629 26.3153 35.3482 26.6433C36.9695 27.1286 37.5576 28.2326 37.0776 29.7593" fill="#525252"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.8056 29.7593C43.0576 30.5659 43.4456 31.3259 44.0936 31.9899C44.6362 32.5499 45.1896 32.8553 45.9336 33.0899C47.4776 33.5739 49.0442 33.4433 50.6336 32.6993C51.2696 32.3993 51.6536 32.0499 51.9909 31.4126C52.2482 30.9233 52.4229 30.3459 52.5322 29.7059C52.7296 28.5579 52.9202 26.8886 51.5829 26.3446C51.2949 26.2273 50.9522 26.1646 50.5549 26.1566C49.6469 26.1393 48.7536 26.1513 47.8789 26.2139C46.9336 26.2819 45.6162 26.3153 44.5296 26.6433C42.9082 27.1286 42.3229 28.2326 42.8056 29.7593" fill="#525252"/>
    </svg>
  )
}
