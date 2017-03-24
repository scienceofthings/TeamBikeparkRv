lib.header = IMAGE
lib.header{
    file = fileadmin/default/templates/images/header/headerTswBg.png
    file.width = 255
    params = class="img-responsive img-content"
    stdWrap.typolink.parameter = {$pidOfTSW}
    altText = Logo
    layoutKey = picture
    layout{
        picture {
            element = <picture>###SOURCECOLLECTION###<img srcset="###SRC###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###></picture>
            source = <source srcset="###SRC###" media="###MEDIAQUERY###" ###SELFCLOSINGTAGSLASH###>
        }
    }
    sourceCollection {
        large{
            width = 1140
            maxW = 1140
            mediaQuery = (min-width: 1170px)
        }
        medium{
            width = 940
            maxW = 940
            mediaQuery = (min-width: 940px)
        }
        small{
            width = 720
            maxW = 720
            mediaQuery = (min-width: 720px)
        }
    }
}

[PIDinRootline = {$pidOfTSW}]
lib.header = IMAGE
lib.header{
    file = fileadmin/default/templates/images/header/headerTswBg.png
    stdWrap.typolink.parameter = {$pidOfTSW}
}
[global]

    [PIDinRootline = {$pidOfBikepark}]
lib.header = IMAGE
lib.header{
    file = fileadmin/default/templates/images/header/headerBikeparkBg.png
    file.width = 255
    stdWrap.typolink.parameter = {$pidOfBikepark}
}
[global]

    [PIDinRootline = {$pidOfRV}]
lib.header = IMAGE
lib.header{
    file = fileadmin/default/templates/images/header/headerRvBg.png
    file.width = 255
    stdWrap.typolink.parameter = {$pidOfRV}
[global]

