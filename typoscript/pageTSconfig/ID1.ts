# paste into pageTSConfig
RTE.classesAnchor {
  pdf {
    class = pdf    
    type = file    
    titleText = PDF File
    image = fileadmin/default/templates/images/icons/pdf.png
    altText = PDF File
  }    
  download {
    class = download
    type = file    
    titleText = File
    image = fileadmin/default/templates/images/icons/pdf.png
    altText = File
  }     
  doc {
    class = doc
    type = file
    titleText = DOC File
    image = fileadmin/default/templates/images/icons/doc.png
    altText = DOC File
  }        
  xls {
    class = xls
    type = file
    titleText = XLS File
    image = fileadmin/default/templates/images/icons/xls.png
    altText = XLS File
  }        
  mail {
    class = mail
    type = mail
    titleText = LLL:EXT:rtehtmlarea/res/accessibilityicons/locallang.xml:mail_titleText
    image = fileadmin/default/templates/images/icons/mail.png
    altText = Mail
  }
}


RTE.default {
  contentCSS = fileadmin/templates/css/rte.css  
  buttons.textstyle.tags.span.allowedClasses := removeFromList(name-of-person, detail, important)
  classesAnchor := addToList(pdf,doc,xls,download)
  proc{
    # replace <b> with <strong> and <i> with <em>
    exitHTMLparser_db = 1
    exitHTMLparser_db {
      tags.b.remap = strong
      tags.i.remap = em
    }    
  }  

  ## Markup options
  enableWordClean = 1
  removeTrailingBR = 1
  removeComments = 1
  removeTags = center, sdfield
  removeTagsAndContents = style,script, pre

  showButtons =  textstyle, formatblock, line, link, image, removeformat, findreplace, undo, redo, textcolor,  copy, cut,insertcharacter, bold, italic, underline, left, center, right, orderedlist, unorderedlist, chMode
  hideButtons =  blockstyle, paste,table, toggleborders, tableproperties, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge, showhelp, about, spellcheck, emoticon, bgcolor,lefttoright, righttoleft, fontsize, strikethrough,indent,fontstyle, subscript, superscript,outdent,   textindicator, justifyfull,  insertcharacter,  acronym, user,inserttag,blockstylelabel, textstylelabel

  toolbarOrder = textstyle, formatblock, formatblocklabel, line, link, image, removeformat, findreplace, undo, redo, textcolor,  copy, cut,insertcharacter, bold, italic, underline, left, center, right, orderedlist, unorderedlist, chMode
}





#copy and paste into page typoscript
TCEFORM.tt_content.section_frame {
     #removeItems = 1,5,6,10,11,12,20,21
}

# neuen Rahmen hinzufuegen
TCEFORM.tt_content.section_frame {
     #addItems.100 = 250px Breite
}

#frames for content
TCEFORM.tt_content.section_frame.addItems{
  44 = 50:50
}