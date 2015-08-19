page = PAGE
page{
  10 = FLUIDTEMPLATE
  10 {
     partialRootPath = fileadmin/default/templates/fluid/partials/
     layoutRootPath = fileadmin/default/templates/fluid/layouts/
     variables{
      col2 < styles.content.get
      col2.select.where = colPos=0
      
      col3 < styles.content.get
      col3.select.where = colPos=1

      headerimage < styles.content.get
      headerimage{
            select.where = colPos=2
            slide = -1
      }
    }

    #display corresponding FE-Template for each BE-Layout
    #the number before each template is the BE-Layout ID
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
      key.data = levelfield:-1, backend_layout_next_level, slide
      key.override.field = backend_layout
      default = TEXT
      default.value = fileadmin/default/templates/bootstrap-1col.html
      1 = TEXT
      1.value = fileadmin/default/templates/bootstrap-2col.html
      7 = TEXT
      7.value = fileadmin/default/templates/bootstrap-1col-grid.html
    }
  }
 
  config{
      metaCharset = utf-8
      additionalHeaders = Content-Type:text/html;charset=utf-8
  }

  #Stylesheets
  includeCSS{
    file1 = fileadmin/default/templates/css/default.css
  }
  
    #favicon
    shortcutIcon = fileadmin/default/templates/img/favicon.ico

    # JS
    includeJSFooterlibs.file2 = fileadmin/default/templates/javascript/jquery.colorbox-min.js
    includeJSFooterlibs.file5 = fileadmin/default/templates/javascript/picturefill.min.js
    includeJSFooter.allDomains = fileadmin/default/templates/javascript/allDomains.js

    
}

