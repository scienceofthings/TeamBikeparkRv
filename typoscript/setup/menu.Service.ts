lib.menuservice = HMENU
lib.menuservice{  
  special = list
    special.value = uidOfContactPage, uidOfImpressum
         1 = TMENU
         1 {
            noBlur = 1
            wrap =  <ul class="topbar pull-right">|</ul>
            
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

[PIDinRootline = {$pidOfTSW}]
    lib.menuservice.special.value = 65,66
[global]

[PIDinRootline = {$pidOfBikepark}]
    lib.menuservice.special.value = 59,60
[global]

[PIDinRootline = {$pidOfRV}]
lib.menuservice.special.value = 70,69
[global]


