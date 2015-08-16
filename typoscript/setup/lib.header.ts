

[PIDinRootline = {$pidOfTSW}]
lib.header = IMAGE
lib.header{
    file = fileadmin/default/templates/images/header/headerTswBg.png
    file.width = 320
    stdWrap.typolink.parameter = {$pidOfTSW}
    altText = Logo
    layoutKey = picture
    layout{
        picture {
            element = <picture>###SOURCECOLLECTION###<img src="###SRC###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###></picture>
            source = <source src="###SRC###" media="###MEDIAQUERY###" ###SELFCLOSINGTAGSLASH###>
        }
    }
    sourceCollection {
        large{
            width = 1140
            maxW = 1140
            mediaQuery = (min-device-width: 1170px)
        }
        small{
            width = 720
            maxW = 720
            mediaQuery = (min-device-width: 750px)
        }
        medium{
            width = 940
            maxW = 940
            mediaQuery = (min-device-width: 940px)
        }
    }
}

[global]

[PIDinRootline = {$pidOfBikepark}]
lib.header = IMAGE
lib.header{  
  file = fileadmin/default/templates/images/header/headerBikeparkBg.png
  stdWrap.typolink.parameter = {pidOfBikepark}
}
[global]

[PIDinRootline = {$pidOfRV}]
lib.header = IMAGE
lib.header{  
  file = fileadmin/default/templates/images/header/headerRvBg.png
  stdWrap.typolink.parameter = {pidOfRV}
}

[global]

