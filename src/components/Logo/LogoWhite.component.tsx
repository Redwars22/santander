interface ILogo {
    width: string;
    height: string;
}

export default function LogoWhiteComponent(props: ILogo) {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 650 114" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1390_2654)">
                <path
                    d="M86.65 52.5222C86.3777 48.4373 85.2884 44.3524 83.1098 40.8121L64.5916 8.40528C63.2299 5.95434 62.1406 3.23108 61.596 0.507812L60.779 1.86944C56.1495 9.76691 56.1495 19.843 60.779 27.7405L75.757 53.6115C80.3865 61.5089 80.3865 71.585 75.757 79.4825L74.94 80.8441C74.3953 78.1208 73.306 75.3976 71.9444 72.9466L58.3281 49.2542L49.6136 34.004C48.252 31.553 47.1627 28.8298 46.618 26.1065L45.801 27.4681C41.1715 35.3656 41.1715 45.1693 45.801 53.3391L60.779 79.2101C65.4085 87.1076 65.4085 97.1837 60.779 105.081L59.962 106.443C59.4174 103.72 58.3281 100.996 56.9664 98.5453L38.1759 66.1385C35.725 61.7813 34.6357 56.8794 34.6357 51.9775C14.7558 57.1517 0.867188 68.3171 0.867188 81.1164C0.867188 99.09 27.5552 113.523 60.5067 113.523C93.4582 113.523 120.146 99.09 120.146 81.1164C120.418 68.8617 106.802 57.6964 86.65 52.5222ZM143.022 107.804C143.294 103.175 143.839 100.179 145.2 96.3667C151.464 99.3623 159.633 100.724 165.625 100.724C175.973 100.724 181.964 97.456 181.964 90.6479C181.964 84.112 177.607 81.1164 167.259 76.4869L161.54 74.3083C150.919 69.6787 143.839 63.6875 143.839 51.9775C143.839 39.1782 152.825 31.0084 170.799 31.0084C178.152 31.0084 184.96 32.0977 191.223 34.2763C190.951 38.6335 190.134 42.1738 189.045 45.4417C183.054 43.2631 175.701 42.1738 170.527 42.1738C160.723 42.1738 156.366 45.9863 156.366 51.9775C156.366 57.6964 160.723 61.2366 168.62 64.5045L174.611 66.9555C188.772 72.9466 194.764 79.4825 194.764 90.3755C194.764 103.175 184.96 112.162 165.897 112.162C156.91 112.162 149.285 110.8 143.022 107.804ZM254.948 54.1561V110.255H243.51L242.965 103.447C239.697 108.349 235.068 111.617 227.17 111.617C212.465 111.617 202.389 100.724 202.389 81.9334C202.389 62.3259 213.009 50.8882 233.706 50.8882C241.876 51.1605 248.684 51.9775 254.948 54.1561ZM242.693 97.456V62.3259C240.242 61.7813 237.247 61.7813 233.706 61.7813C220.907 61.7813 214.916 69.6787 214.916 82.2057C214.916 93.6434 219.545 101.813 230.438 101.813C235.613 101.541 239.425 99.907 242.693 97.456ZM318.127 72.6743V110.255H305.873V74.8529C305.873 65.8662 302.877 61.7813 290.622 61.7813C287.627 61.7813 284.359 62.0536 280.819 62.5982V110.255H268.564V54.1561C276.462 52.2498 285.176 50.8882 290.895 50.8882C311.592 51.1605 318.127 59.058 318.127 72.6743ZM352.441 101.269C355.981 101.269 359.521 100.724 361.972 99.6346C361.7 102.903 361.155 106.715 360.61 109.983C357.342 111.345 353.53 111.889 350.262 111.889C338.28 111.889 330.654 106.443 330.654 92.8265V33.7316C334.467 32.37 339.097 31.8254 342.909 31.8254V53.0668H362.517C362.244 56.8794 361.972 60.4196 361.427 63.6875H342.909V91.1925C342.909 98.273 346.449 101.269 352.441 101.269ZM418.616 54.1561V110.255H407.178L406.634 103.447C403.366 108.349 398.736 111.617 390.839 111.617C376.133 111.617 366.057 100.724 366.057 81.9334C366.057 62.3259 376.678 50.8882 397.374 50.8882C405.544 51.1605 412.08 51.9775 418.616 54.1561ZM406.089 97.456V62.3259C403.638 61.7813 400.642 61.7813 397.102 61.7813C384.303 61.7813 378.312 69.6787 378.312 82.2057C378.312 93.6434 382.941 101.813 393.834 101.813C399.008 101.541 403.093 99.907 406.089 97.456ZM481.796 72.6743V110.255H469.269V74.8529C469.269 65.8662 466.273 61.7813 454.018 61.7813C451.023 61.7813 447.755 62.0536 444.215 62.5982V110.255H431.96V54.1561C439.857 52.2498 448.572 50.8882 454.291 50.8882C474.987 51.1605 481.796 59.058 481.796 72.6743ZM544.158 31.8254V110.255H532.721L532.176 103.175C528.908 108.349 524.279 111.617 516.109 111.617C501.403 111.617 491.327 100.724 491.327 81.9334C491.327 62.3259 501.948 50.8882 522.645 50.8882C525.913 50.8882 528.908 51.1605 531.904 51.7052V33.187C535.716 32.0977 540.073 31.8254 544.158 31.8254ZM531.904 97.456V62.8706C528.636 62.3259 525.368 61.7813 522.1 61.7813C509.845 61.7813 504.126 69.4064 504.126 82.2057C504.126 93.6434 508.756 101.813 519.649 101.813C524.551 101.541 528.636 99.907 531.904 97.456ZM606.249 86.2906H566.761C568.395 96.3667 574.114 100.996 585.28 100.996C592.088 100.996 598.896 99.6346 604.887 96.639C604.343 99.907 603.798 104.264 602.981 107.804C597.262 110.255 591.543 111.345 584.735 111.345C564.038 111.345 554.234 99.907 554.234 80.8441C554.234 64.2322 561.86 50.8882 581.467 50.8882C599.168 50.8882 606.793 62.3259 606.793 76.4869C606.793 80.2995 606.793 83.0227 606.249 86.2906ZM566.761 75.9422H594.539C594.539 66.6831 589.637 61.2366 581.195 61.2366C572.208 61.5089 567.578 66.4108 566.761 75.9422ZM649.549 51.7052C649.549 55.5178 649.004 59.875 648.459 62.3259C645.464 62.0536 642.741 61.7813 639.2 61.7813C636.205 61.7813 633.209 62.0536 630.214 62.3259V110.255H617.959V54.1561C623.133 52.2498 632.12 50.8882 638.928 50.8882C642.468 51.1605 646.825 51.1605 649.549 51.7052Z"
                    fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_1390_2654">
                    <rect width="648.682" height="113.015" fill="white" transform="translate(0.871094 0.515625)" />
                </clipPath>
            </defs>
        </svg>
    )
}