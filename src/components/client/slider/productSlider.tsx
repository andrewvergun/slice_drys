import { Splide, SplideSlide } from '@splidejs/react-splide'
import Product from '../product/product'
import { IProductCard } from '@/types/product'
import '@splidejs/react-splide/css/core'
import '@splidejs/react-splide/css'
import { Rubik_Doodle_Shadow } from 'next/font/google'

const rubikDoodleShadow = Rubik_Doodle_Shadow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik-doodle-shadow',
  weight: ['400'],
})

type SplideSliderProps = {
  products: IProductCard[]
}

export default function ProductSlider({ products }: SplideSliderProps) {
  const splideOptions = {
    arrowPath:
      'M6.72147 0.201926C6.86759 0.201926 6.965 0.224362 7.0137 0.269235C7.0137 0.269235 6.89194 0.17949 6.6484 0C6.79452 0.044872 6.94064 0.0897448 7.08676 0.134617C7.28159 0.17949 7.45206 0.246799 7.59818 0.336547C8.03656 0.516032 8.45056 0.76284 8.84017 1.07695C9.27857 1.34618 9.71689 1.61542 10.1553 1.88466C10.7884 2.24364 11.4216 2.60263 12.0548 2.96161C12.688 3.32059 13.3211 3.67958 13.9543 4.03856C13.9543 4.03856 13.9543 4.061 13.9543 4.10587C14.003 4.10587 14.0518 4.10587 14.1005 4.10587C14.1005 4.15075 14.1005 4.17319 14.1005 4.17319C14.1492 4.17319 14.1735 4.19562 14.1735 4.24049C15.1963 5.09307 16.3653 5.78861 17.6804 6.32708C18.9955 6.82068 20.3349 7.31429 21.6987 7.80792C23.0624 8.30152 24.2314 9.01944 25.2055 9.96176C26.4719 10.9041 27.8113 11.7791 29.2238 12.5869C30.6363 13.3946 31.9513 14.3145 33.169 15.3466C33.8508 15.7953 34.5815 16.2664 35.3607 16.76C36.14 17.2088 36.8707 17.6799 37.5525 18.1735C37.8447 18.353 38.1614 18.555 38.5023 18.7793C38.8432 18.9588 39.1111 19.2281 39.3059 19.587C39.5495 19.9011 39.6956 20.2377 39.7443 20.5966C39.8417 20.9557 39.9148 21.3146 39.9635 21.6736C40.0122 21.8082 40.0122 21.9429 39.9635 22.0775C39.9635 22.2121 39.9635 22.3467 39.9635 22.4814C39.9635 22.5263 39.9391 22.571 39.8904 22.6159C39.8904 22.6608 39.8904 22.7282 39.8904 22.8179C39.8417 23.5359 39.7931 24.2314 39.7443 24.9045C39.6956 25.5776 39.4277 26.2058 38.9407 26.7891C38.5997 27.2379 38.137 27.6193 37.5525 27.9334C36.968 28.2027 36.4079 28.4495 35.8722 28.6738C35.2877 28.9879 34.7275 29.302 34.1918 29.6162C33.656 29.8854 33.1203 30.1995 32.5845 30.5585C31.3668 31.4559 30.0518 32.2636 28.6393 32.9816C27.2268 33.6996 25.9361 34.5522 24.7671 35.5394C23.4521 36.751 21.9665 37.8279 20.3105 38.7703C18.7032 39.6677 17.242 40.7222 15.927 41.9338C15.927 41.9338 15.927 41.9562 15.927 42.0011C15.927 42.0011 15.9026 42.0011 15.8539 42.0011L15.7808 42.0684C15.0015 42.6068 14.1735 43.1453 13.2968 43.6838C12.4688 44.2223 11.6408 44.7383 10.8128 45.2319C10.2283 45.5909 9.61952 45.9499 8.98632 46.3089C8.40184 46.6679 7.76865 46.9595 7.08676 47.1839C6.69712 47.3634 6.30747 47.2736 5.91781 46.9147C5.86911 46.8249 5.8204 46.7576 5.77169 46.7127C5.77169 46.6679 5.74734 46.623 5.69864 46.5781L4.6758 47.0493L3.65297 47.4531L2.55708 47.9243C2.41096 48.0589 2.26484 48.014 2.11872 47.7897C2.02131 47.6999 2.04567 47.5878 2.19179 47.4531H2.04567C1.85084 47.498 1.70472 47.4307 1.60731 47.2512C1.60731 47.0717 1.68037 46.9595 1.82649 46.9147L3.14155 46.5781L4.38356 46.2415L5.33334 45.9723C4.94369 45.7031 4.6271 45.389 4.38356 45.03L3.0685 45.5011L0.876713 46.3089C0.730597 46.4435 0.584476 46.3986 0.438358 46.1743C0.340943 45.9947 0.389651 45.8602 0.584476 45.7704L1.68037 45.2992L2.84932 44.9627L4.16439 44.4915C4.11568 44.2671 4.11568 44.0652 4.16439 43.8857L2.99543 44.3569L1.82649 44.6935L0.730594 44.9627C0.53577 45.0075 0.389651 44.9403 0.292239 44.7607C0.292239 44.5813 0.365302 44.4691 0.51142 44.4242L1.68037 44.0877L2.77626 43.8184L4.23745 43.2127V42.6742L3.0685 43.1453L1.82649 43.4819L0.803656 43.8184C0.608832 43.8633 0.462711 43.8184 0.365299 43.6838C0.267887 43.5043 0.340946 43.3697 0.584476 43.2799L1.60731 42.8761H1.68037L2.84932 42.6068L4.23745 42.0011V41.8664C4.23745 41.6421 4.2131 41.4626 4.16439 41.328L1.82649 42.4049H1.75343L0.657535 42.6742C0.462711 42.7191 0.316593 42.6517 0.21918 42.4723C0.21918 42.2927 0.292236 42.1806 0.438358 42.1357L1.53425 41.7991L2.7032 41.328L3.87215 40.7895C3.87215 40.7895 3.89651 40.7895 3.94521 40.7895C3.99391 40.7895 4.09133 40.7671 4.23745 40.7222V40.1837L3.28767 40.5875L1.97261 40.9241L0.730594 41.328C0.53577 41.3728 0.389651 41.328 0.292239 41.1934C0.194827 41.0139 0.267887 40.8792 0.51142 40.7895L1.75343 40.3183H1.82649L3.0685 40.0491L4.09133 39.5779H4.16439V39.1067L2.92238 39.4433L1.75343 39.9145L0.584476 40.2511C0.389651 40.2959 0.243534 40.2511 0.146122 40.1164C0.0487091 39.9369 0.121765 39.8023 0.365299 39.7126L1.46118 39.3087L2.7032 38.9048L4.16439 38.4337V37.9625L3.0685 38.3663L1.89954 38.9048L0.584476 39.3087C0.389651 39.3535 0.243534 39.3087 0.146122 39.1741C0.0487091 38.9946 0.121765 38.8599 0.365299 38.7703L2.84932 37.8279L4.09133 37.2894V36.4817L2.99543 36.751L1.89954 37.2221H1.82649L0.584476 37.4914C0.389651 37.5362 0.243534 37.4689 0.146122 37.2894C0.146122 37.1099 0.21918 36.9978 0.365299 36.9529L1.68037 36.6163L2.77626 36.2125L4.09133 35.8086V35.4721L3.14155 35.8759L1.89954 36.2125L0.876713 36.4817C0.681892 36.5266 0.53577 36.4817 0.438358 36.3471C0.438358 36.1227 0.511417 35.9881 0.657535 35.9432L1.75343 35.6067L2.92238 35.3375L4.01827 34.8663V34.2605L3.0685 34.6643L1.89954 35.2028L0.584476 35.6067C0.389651 35.6515 0.243534 35.6067 0.146122 35.4721C0.0487091 35.2926 0.121765 35.1579 0.365299 35.0682L1.60731 34.5971L2.77626 34.1259L3.94521 33.5874H4.01827C4.01827 33.4079 4.01827 33.2508 4.01827 33.1163C4.06698 32.9367 4.11568 32.7572 4.16439 32.5778L3.72603 32.7797H3.65297L2.48403 33.0489L1.38813 33.3855C1.33942 33.4303 1.26637 33.4303 1.16895 33.3855C1.07154 33.2957 1.02283 33.2284 1.02283 33.1835C0.925417 33.004 0.998481 32.8695 1.24201 32.7797L2.26484 32.5104L3.0685 32.3085L2.84932 32.1066C2.75191 31.9271 2.82496 31.7925 3.0685 31.7027L4.09133 31.2989L4.82192 31.097C4.82192 31.0072 4.84627 30.9623 4.89498 30.9623C4.89498 30.9175 4.89498 30.8951 4.89498 30.8951C4.94368 30.8502 4.96804 30.8277 4.96804 30.8277C5.21157 30.5136 5.50381 30.2668 5.84476 30.0873C6.1857 29.863 6.50229 29.661 6.79452 29.4815C7.379 29.0777 7.96348 28.6963 8.54792 28.3373C9.13241 27.9783 9.74129 27.6193 10.3744 27.2603C10.3744 27.1706 10.4962 27.1033 10.7398 27.0584C10.9346 26.9687 11.105 26.8789 11.2511 26.7891C11.446 26.6994 11.6164 26.6097 11.7626 26.5199C11.8113 26.3853 12.0061 26.2955 12.347 26.2507C13.3212 25.7571 14.2953 25.2635 15.2694 24.7699C16.2922 24.2763 17.2664 23.7378 18.1918 23.1544C18.2405 23.1095 18.2649 23.0871 18.2649 23.0871L17.0228 23.491L15.927 24.0295L14.6118 24.5007C14.4658 24.6352 14.3196 24.5903 14.1735 24.366C14.0761 24.1865 14.1492 24.0519 14.3927 23.9622L15.6347 23.491L16.7306 22.9525H16.8037L17.9726 22.4814H18.0457L18.2649 22.414L17.8265 22.2121L17.0228 22.4814L15.927 22.8852L14.685 23.3563H14.6118L13.443 23.6929C13.2481 23.6929 13.102 23.6256 13.0046 23.491C13.0046 23.2667 13.102 23.132 13.2968 23.0871L14.4658 22.7506L15.7078 22.3467L16.7306 21.8755C16.7793 21.8755 16.901 21.8531 17.0959 21.8082C17.0472 21.7634 16.9742 21.7185 16.8767 21.6736C16.7793 21.6287 16.6819 21.5838 16.5845 21.539L15.8539 21.8082L13.516 22.4814L12.274 22.8179C12.0305 22.9076 11.9086 22.8403 11.9086 22.6159C11.86 22.3916 11.933 22.257 12.1278 22.2121L13.2968 21.8755L14.4658 21.6063L15.8539 21.1351C15.8052 21.0902 15.7321 21.0454 15.6347 21.0006C15.5373 20.9557 15.4399 20.9108 15.3425 20.8659L14.758 21.0679L13.7352 21.4044L12.4931 21.9429L11.2511 22.2795C11.0076 22.3691 10.8858 22.3019 10.8858 22.0775C10.7884 21.898 10.8615 21.7634 11.105 21.6736L12.274 21.4044L13.443 20.8659L14.5388 20.4621C14.4901 20.4172 14.3683 20.3498 14.1735 20.2602L13.516 20.4621L12.2009 20.7986L11.105 21.2025L9.86305 21.6063C9.81433 21.6512 9.74129 21.6512 9.64385 21.6063C9.54641 21.5166 9.49777 21.4493 9.49777 21.4044C9.40033 21.2249 9.44905 21.0902 9.64385 21.0006L10.8858 20.664L11.9818 20.1928H12.0548L13.443 19.8562C13.2481 19.7666 13.102 19.6768 13.0046 19.587L12.347 19.8562L11.3242 20.2602L10.0822 20.5966L8.84017 21.0679C8.64537 21.1127 8.49928 21.0454 8.40184 20.8659C8.3044 20.7313 8.35312 20.6191 8.54792 20.5294L9.86305 20.0582L11.032 19.6543L12.274 19.2505C12.2253 19.1607 12.1278 19.0934 11.9818 19.0486C11.8843 19.0037 11.7869 18.9588 11.6895 18.9139L11.1781 19.0486L9.93609 19.5198L8.76713 19.9909L7.52512 20.3947C7.33029 20.4396 7.18417 20.3723 7.08676 20.1928C6.98935 20.0134 7.06241 19.8787 7.30594 19.789L8.54792 19.4524L9.64385 18.9813V18.9139L10.9589 18.5101C10.7641 18.4203 10.618 18.3306 10.5206 18.2409L10.0822 18.3754L8.98632 18.7793H8.91328L7.67124 19.1158L6.57535 19.5198C6.38052 19.5646 6.2344 19.5197 6.13699 19.3851C6.03958 19.2056 6.08829 19.071 6.28312 18.9813L7.45206 18.5101H7.52512L8.76713 18.1735L9.71689 17.837L9.27856 17.635L8.76713 17.7024L7.7443 18.2409L6.72147 18.6447L6.6484 18.712L5.47946 18.9813C5.28463 19.0261 5.13851 18.9588 5.0411 18.7793C4.94369 18.555 5.01675 18.4428 5.26028 18.4428L6.42923 18.1062L7.45206 17.7024L8.47488 17.2312C8.37744 17.1863 8.28008 17.119 8.18264 17.0293L7.67124 17.2312H7.59818L6.50229 17.5678L5.26028 17.9716L4.16439 18.3754C3.96956 18.4203 3.82344 18.3754 3.72603 18.2409C3.62862 18.0614 3.70167 17.9267 3.94521 17.837L5.0411 17.3658L6.28312 16.962L7.379 16.6927C7.23288 16.5581 6.965 16.4684 6.57535 16.4235L5.40639 16.8946L4.38356 17.4331H4.31051L3.0685 17.7697C2.87367 17.8146 2.72755 17.7697 2.63014 17.635C2.63014 17.4107 2.7032 17.2761 2.84932 17.2312L4.09133 16.8274L5.11416 16.3562H5.18722L6.21005 15.9523L5.62558 15.4138C5.52816 15.3241 5.4551 15.2343 5.40639 15.1446L3.79909 15.885C3.79909 15.885 3.77474 15.885 3.72603 15.885C3.72603 15.885 3.72603 15.9074 3.72603 15.9523L2.48403 16.2216L1.31507 16.76C1.12025 16.8498 0.974129 16.8049 0.876713 16.6254C0.779304 16.4459 0.85236 16.3113 1.09589 16.2216L2.19179 15.6831H2.26484L3.50685 15.3466L5.11416 14.6062C5.01675 14.3818 4.91934 14.1798 4.82192 14.0003C4.72451 13.8209 4.55403 13.6414 4.31051 13.4618L3.28767 13.7311L2.11872 14.2022H2.04567L0.949776 14.4715C0.75495 14.5164 0.608832 14.449 0.51142 14.2696C0.51142 14.0901 0.584476 13.9779 0.730594 13.933L1.89954 13.5965L3.0685 13.1926L4.16439 12.8561L4.52968 12.7214C4.52968 12.4971 4.43227 12.3401 4.23745 12.2503L2.99543 12.7214L1.75343 13.058L0.51142 13.4618C0.316593 13.5067 0.170471 13.4618 0.0730592 13.3273C-0.0243531 13.1478 0.0487091 13.0131 0.292239 12.9234L1.53425 12.4522H1.60731L2.77626 12.183L4.01827 11.7118L4.38356 11.5772C4.38356 11.4426 4.31051 11.308 4.16439 11.1734C4.11568 11.1734 4.09133 11.1958 4.09133 11.2406L2.92238 11.5099L1.75343 12.0484L0.657535 12.5195C0.511417 12.6542 0.365299 12.6093 0.21918 12.385C0.170475 12.2503 0.21918 12.1157 0.365299 11.981L1.46118 11.4426L2.63014 10.9714H2.7032L4.23745 10.5002C4.18874 10.4105 4.16439 10.2983 4.16439 10.1637C4.16439 10.0291 4.14003 9.89448 4.09133 9.75984L2.84932 10.2983L1.68037 10.7022L0.51142 11.0387C0.316593 11.0836 0.170471 11.0387 0.0730592 10.9041C0.0730592 10.6798 0.146122 10.5451 0.292239 10.5002L1.46118 10.0964L2.63014 9.75984L3.87215 9.22136H3.94521L4.09133 9.15408C4.04263 9.06432 4.01827 8.8848 4.01827 8.6156L2.99543 8.95216L1.89954 9.49064L0.730594 9.89448C0.53577 9.98424 0.389651 9.93936 0.292239 9.75984C0.194827 9.5804 0.267887 9.44576 0.51142 9.356L2.7032 8.41368H2.77626L3.87215 8.00984H3.94521V7.67328L3.21462 7.94248L1.97261 8.27904L0.876713 8.6156C0.681892 8.66048 0.53577 8.6156 0.438358 8.48096C0.340943 8.30152 0.414005 8.16688 0.657535 8.07712L1.75343 7.67328H1.82649L2.99543 7.40404L3.87215 7.06748C3.87215 6.93287 3.84779 6.82068 3.79909 6.73094C3.79909 6.59632 3.79909 6.48414 3.79909 6.39439L2.84932 6.79825L1.75343 7.33672H1.68037L0.438358 7.67328C0.243531 7.71816 0.0974153 7.67328 0 7.53865C0 7.31429 0.0730622 7.17967 0.21918 7.1348L1.46118 6.73094L3.79909 5.78861C3.79909 5.69886 3.77474 5.60911 3.72603 5.51937C3.72603 5.38475 3.72603 5.25013 3.72603 5.11551L3.0685 5.38475L1.82649 5.85591L0.730594 6.32708C0.584476 6.46171 0.438358 6.41683 0.292239 6.19246C0.243534 6.05784 0.292236 5.92323 0.438358 5.78861L1.53425 5.31744V5.25013L2.84932 4.84627L3.72603 4.50973V3.97125L2.99543 4.17319L1.97261 4.57703L0.730594 4.9809C0.53577 5.02577 0.389651 4.9809 0.292239 4.84627C0.194827 4.66679 0.267887 4.53216 0.51142 4.44242L1.68037 3.97125L3.65297 3.36547V3.23085C3.60427 3.14111 3.57991 3.02892 3.57991 2.89431L2.04567 3.36547L1.02283 3.63471C0.828008 3.67958 0.681892 3.63471 0.584476 3.50009C0.584476 3.27572 0.657538 3.14111 0.803656 3.09623L2.92238 2.49045L3.65297 2.28852C3.65297 2.19877 3.62862 2.1539 3.57991 2.1539H3.50685L2.26484 2.49045C2.07002 2.53532 1.9239 2.49045 1.82649 2.35583C1.82649 2.13147 1.97261 1.97441 2.26484 1.88466L3.28767 1.4135L4.74886 0.942328L5.40639 0.336547C5.30899 0.516032 5.23592 0.673088 5.18722 0.807712L5.62558 0.605784L6.72147 0.201926ZM7.52512 45.2319H7.59818C7.98783 45.0075 8.37744 44.7832 8.76713 44.5588C9.15681 44.2896 9.52209 44.0652 9.86305 43.8857C10.691 43.3921 11.519 42.8985 12.347 42.4049C13.175 41.8664 13.9787 41.328 14.758 40.7895C16.073 39.5779 17.5343 38.5235 19.1415 37.6259C20.7489 36.6836 22.2101 35.5843 23.5251 34.3278H23.5982C24.8159 33.2957 26.1309 32.4207 27.5434 31.7027C28.9559 30.9847 30.271 30.1547 31.4886 29.2123H31.5617C32.0975 28.8533 32.6575 28.5167 33.242 28.2027C33.8265 27.8885 34.411 27.5744 34.9955 27.2603C35.3851 27.0359 35.8235 26.834 36.3105 26.6545C36.8463 26.4302 37.2603 26.1609 37.5525 25.8468C37.7961 25.4879 37.9422 25.1064 37.9909 24.7026C38.0883 24.2539 38.137 23.8051 38.137 23.3563V22.7506C38.137 22.6608 38.137 22.5935 38.137 22.5487C38.1857 22.5038 38.2101 22.4589 38.2101 22.414C38.2101 22.3243 38.2101 22.2346 38.2101 22.1448C38.2587 22.055 38.2587 21.9653 38.2101 21.8755C38.1614 21.6512 38.1127 21.4044 38.0639 21.1351C38.0639 20.8659 37.9665 20.6415 37.7717 20.4621C37.6256 20.2377 37.4307 20.0582 37.1872 19.9236C36.9437 19.7441 36.7002 19.587 36.4567 19.4524C35.7747 18.9139 35.0442 18.4203 34.2649 17.9716C33.5343 17.5229 32.8037 17.0742 32.0731 16.6254C32.0243 16.6254 32 16.6254 32 16.6254C32 16.5806 32 16.5581 32 16.5581C30.7823 15.526 29.4673 14.6062 28.0548 13.7984C26.6423 12.9907 25.3029 12.1157 24.0366 11.1734V11.1061C23.0624 10.2086 21.8935 9.51304 20.5297 9.01944C19.2147 8.52584 17.8752 8.03224 16.5114 7.53865C15.1963 7.00018 14.0274 6.30464 13.0046 5.45206C12.3714 5.09307 11.7382 4.73409 11.105 4.37511C10.4718 3.97126 9.81433 3.58983 9.1324 3.23085C8.79144 3.00649 8.45056 2.78212 8.1096 2.55775C7.81736 2.28852 7.47641 2.06415 7.08676 1.88466C7.47641 1.61542 7.50076 1.1667 7.15983 0.538472C7.15983 0.673088 7.06241 0.76284 6.86759 0.807712C7.06241 0.942328 7.0137 1.14426 6.72147 1.4135C6.62405 1.50324 6.52664 1.57055 6.42923 1.61542C6.28311 1.61542 6.16135 1.59299 6.06393 1.54811C5.86911 1.45837 5.77169 1.36862 5.77169 1.27888L5.26028 1.54811C5.26028 1.54811 5.26028 1.57055 5.26028 1.61542C5.26028 1.61542 5.28463 1.61542 5.33334 1.61542C5.47946 1.61542 5.55251 1.68274 5.55251 1.81735C5.60122 1.81735 5.62558 1.86222 5.62558 1.95197C5.67428 1.99684 5.72299 2.01928 5.77169 2.01928C5.8204 2.01928 5.86911 2.04171 5.91781 2.08659C5.62558 2.35583 5.43075 2.55775 5.33334 2.69238V2.82699C5.47946 2.82699 5.57687 2.89431 5.62558 3.02892C5.62558 3.25328 5.55251 3.38791 5.40639 3.43278V3.70202C5.4551 3.79176 5.47946 3.90395 5.47946 4.03856C5.57687 4.12831 5.62558 4.19562 5.62558 4.24049C5.62558 4.41999 5.57687 4.53216 5.47946 4.57703V5.31744L5.62558 5.45206C5.62558 5.58668 5.60122 5.69886 5.55251 5.78861C5.55251 5.92323 5.55251 6.08028 5.55251 6.25978C5.55251 6.3944 5.57687 6.52901 5.62558 6.66363V6.86556C5.67428 7.67328 5.74734 8.50344 5.84476 9.356C5.94216 10.1637 6.06393 10.9714 6.21005 11.7791C6.25876 12.2278 6.30746 12.699 6.35617 13.1926C6.45358 13.6414 6.67276 14.0452 7.0137 14.4042C7.35465 14.7632 7.793 15.0773 8.3288 15.3466C8.91328 15.6158 9.42465 15.8626 9.86305 16.087C10.691 16.4908 11.4946 16.9171 12.274 17.3658C13.0533 17.7697 13.8326 18.196 14.6118 18.6447C15.5373 19.1383 16.4627 19.6319 17.3882 20.1255C18.3135 20.5742 19.239 21.0454 20.1644 21.539C20.4567 21.7185 20.7732 21.8307 21.1142 21.8755C21.4551 21.9204 21.6256 22.1672 21.6256 22.6159C21.6743 22.9301 21.6012 23.1544 21.4064 23.2891C21.2603 23.3788 21.0655 23.4686 20.8219 23.5583C20.6759 23.6031 20.5054 23.6705 20.3105 23.7603C20.1157 23.8948 19.9209 24.0295 19.726 24.1641C19.5312 24.2539 19.3364 24.366 19.1415 24.5007C18.1187 25.084 17.0715 25.6449 16 26.1834C14.9285 26.7219 13.857 27.2827 12.7854 27.8661C12.7367 27.8661 12.688 27.8885 12.6393 27.9334C12.6393 27.9334 12.6149 27.9334 12.5662 27.9334C12.5662 27.9783 12.5175 28.0456 12.4201 28.1354L11.5434 28.4719C11.5434 28.5167 11.519 28.5392 11.4703 28.5392C11.3729 28.6738 11.2998 28.7635 11.2511 28.8084L10.3014 29.2123C10.3014 29.302 10.2283 29.3918 10.0822 29.4815L9.57081 29.6835C9.52209 29.7283 9.44904 29.7732 9.3516 29.8181C9.30288 29.863 9.22984 29.9079 9.1324 29.9527C9.03504 30.0424 8.86457 30.1547 8.62104 30.2892C8.5236 30.3341 8.40184 30.4015 8.25568 30.4911C8.1096 30.5809 7.98783 30.6707 7.89041 30.7604C7.64688 30.9399 7.379 31.1194 7.08676 31.2989C6.79452 31.4335 6.551 31.613 6.35617 31.8374C6.06393 32.2412 5.89346 32.6451 5.84476 33.0489C5.79605 33.4079 5.77169 33.8118 5.77169 34.2605V34.5297C5.77169 34.9785 5.77169 35.4496 5.77169 35.9432C5.8204 36.4368 5.84476 36.9304 5.84476 37.424C5.89346 38.142 5.91781 38.8824 5.91781 39.6452C5.96652 40.3632 5.99088 41.1036 5.99088 41.8664V43.1453C5.99088 43.1902 5.96652 43.2351 5.91781 43.2799C5.91781 43.3248 5.91781 43.3921 5.91781 43.4819C5.8204 43.796 5.8204 44.0203 5.91781 44.155C6.11264 44.5588 6.6484 44.9178 7.52512 45.2319ZM7.08676 1.88466C6.84324 2.10902 6.45358 2.17634 5.91781 2.08659C6.11264 1.95197 6.28311 1.79492 6.42923 1.61542C6.52664 1.6603 6.5997 1.68274 6.6484 1.68274C6.69712 1.68274 6.74582 1.70517 6.79452 1.75004C6.79452 1.75004 6.89194 1.79491 7.08676 1.88466Z',
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '40px',
    pagination: true,
    // autoplay: true,
    arrows: true,
    breakpoints: {
      320: {
        perPage: 1.1,
        gap: '4px',
      },
      768: {
        perPage: 2.2,
        gap: '4px',
      },
      992: {
        perPage: 2.2,
        gap: '24px',
      },
      1024: {
        perPage: 3,
        gap: '29px',
      },
      1280: {
        perPage: 3,
        gap: '34px',
      },
    },
    omitEnd: true,
    autoHeight: true,
    classes: {
      arrows: 'splide__arrows product__arrows',
      arrow: 'splide__arrow product__arrow',
      prev: 'splide__arrow--prev product__arrow-prev',
      next: 'splide__arrow--next product__arrow-next',
      pagination: 'splide__pagination product__pagination',
      page: 'splide__pagination__page product__pagination-page',
    },
  }
  return (
    <div className="mx-auto mb-12 mt-10 max-w-6xl pl-4 pr-0 md:pr-4">
      <div className="pb-[51px] pr-4 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[147px]">
        <h2
          className={`${rubikDoodleShadow.className} mb-2 text-[32px] sm:mb-4 sm:text-5xl md:mb-6 md:text-6xl lg:mb-8 lg:text-7xl xl:mb-12 xl:text-8xl`}
        >
          ТОПОВІ СУШЕНИКИ
        </h2>
        <div className="slider-label relative grid place-content-start text-base sm:place-content-end md:text-lg lg:text-xl xl:text-2xl">
          найсмачніші кусь-топчики
        </div>
      </div>
      <Splide options={splideOptions} className="mb-48 mt-10 max-w-6xl">
        {products.map((product) => (
          <SplideSlide key={product._id} className="px-2 py-8">
            <Product product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
