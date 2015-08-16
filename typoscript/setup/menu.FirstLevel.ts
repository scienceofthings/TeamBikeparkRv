## Menu oben
lib.menufirstlevel = HMENU
lib.menufirstlevel {  
         entryLevel = 0
         1 = TMENU
         1 {
            noBlur = 1
            wrap =  <ul class="topbar pull-right hidden-sm hidden-xs">|</ul>
            
            NO = 1
            NO.allWrap = <li> |</li>
            NO.ATagBeforeWrap = 1
           
            ACT = 1
            ACT.allWrap = <li class="active">|</li>
            
            CUR = 1
            CUR < .NO
            CUR.allWrap = <li class="active">|</li>
            CUR.ATagBeforeWrap = 1
            
            SPC = 1
            SPC.allWrap = <hr>
            SPC.doNotShowLink = 1  
         }
}