menu.level2 = HMENU
menu.level2{
    entryLevel = 1     
    1 = TMENU
    1 {
        expAll = 1
        wrap = <ul class="nav navbar-nav">|</ul>
        noBlur = 1            

        NO = 1
        NO.wrapItemAndSub = <li>|</li>       

        ACT = 1
        ACT.wrapItemAndSub = <li class="active">|</li>        

        IFSUB = 1
        IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
        IFSUB.ATagParams = data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle"
        IFSUB.stdWrap.dataWrap = | <span class="caret"></span>

        ACTIFSUB < .IFSUB       
        ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>        
        

        CUR < .NO
        CUR.wrapItemAndSub = <li class="active">|</li>      

    }
    2 < .1
    2{
      wrap = <ul class="dropdown-menu" role="menu">|</ul>
      
      
      
    }
}

 


