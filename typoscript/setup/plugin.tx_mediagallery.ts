# setup
plugin.tx_mediagallery{
    view.templateRootPaths = fileadmin/default/templates/extensions/media_gallery/Templates
}

plugin.tx_mediagallery.list.image = IMAGE
plugin.tx_mediagallery.list.image{
    file {
    import.current = 1
        treatIdAsReference = 1
    }
    params = class="img-responsive img-content"
    altText.data = field:altText
    titleText.data = field:titleText
    layoutKey = picture
    layout{
        picture {
            element = <picture>###SOURCECOLLECTION###<img srcset="###SRC###" ###PARAMS### ###ALTPARAMS### ###SELFCLOSINGTAGSLASH###></picture>
            source = <source srcset="###SRC###" media="###MEDIAQUERY###" ###SELFCLOSINGTAGSLASH###>
        }
    }
    sourceCollection>
    sourceCollection{
        small{
            width = 366c
            height = 450c
            mediaQuery = (min-width: 720px)
        }
    }
}
