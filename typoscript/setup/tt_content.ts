tt_content.uploads.20 {  
    renderObj.15.file {
           import = fileadmin/default/templates/images/icons/
           wrap = |.png               
    }
    # modify linktext of uploads element from filename to description
    renderObj.20.data = file:current:description // file:current:name
    renderObj.30 >

    #display file size with labels  
    itemRendering.30.bytes.labels = " | kB| MB| GB"    
}
    
    

#Systemordner fuer Benutzer
tt_content.login.20.hiddenFields.pid.value = 2

# Custom Lightbox
tt_content.image.20.1.imageLinkWrap {
    JSwindow = 0
    directImageLink = 1  
    typolink >
    typolink {
        parameter.cObject = IMG_RESOURCE
        parameter.cObject.file {
            import.current = 1
        }  
        parameter.override {
            field = image_link
            listNum.stdWrap.data = register : IMAGE_NUM_CURRENT
        }

        ATagParams = class="lightbox" rel="lightbox[cb{field:uid}]"
        ATagParams.insertData = 1
        ATagParams.if.isFalse < .parameter.override

        target = {$styles.content.links.target}
        extTarget = {$styles.content.links.extTarget}
    }
}




tt_content.image.20.maxW = 500
tt_content.image.20.1{
    layoutKey = picture
    layout{
        picture {
            element = <picture>###SOURCECOLLECTION###<img srcset="###SRC###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###></picture>
            source = <source srcset="###SRC###" media="###MEDIAQUERY###" ###SELFCLOSINGTAGSLASH###>
        }
    }
    sourceCollection >
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

#frames for content
tt_content.stdWrap.innerWrap.cObject{
    44 =< tt_content.stdWrap.innerWrap.cObject.default
    44.20.10.value = col-md-2
    45 =< tt_content.stdWrap.innerWrap.cObject.default
    45.20.10.value = col-md-3
    46 =< tt_content.stdWrap.innerWrap.cObject.default
    46.20.10.value = col-md-4 col-sm-6
    47 =< tt_content.stdWrap.innerWrap.cObject.default
    47.20.10.value = col-md-6
    48 =< tt_content.stdWrap.innerWrap.cObject.default
    48.20.10.value = col-md-12 clearfix
}