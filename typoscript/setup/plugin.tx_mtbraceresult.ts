# setup
plugin.tx_mtbraceresult{
    persistence.storagePid = 32
    view.templateRootPath = fileadmin/default/templates/extensions/mtbraceresult/Templates/
    view.partialRootPath = fileadmin/default/templates/extensions/mtbraceresult/Partials/
    view.layoutRootPath = fileadmin/default/templates/extensions/mtbraceresult/Layouts/
}

plugin.tx_mtbraceresult.settings{
    defaultPortrait = fileadmin/default/templates/images/portraits/radfahrer.png
    pidDetail = 88
    pidList = 43
}

plugin.tx_mtbraceresult.settings.allocationSeasonToClass{
    2016{
        2005 = U11
        2004 = U13
        2003 = U15
        2002 = U15
        2001 = U17
        2000 = U17
        1999 = U19
        1998 = U19
        1997 = U23
        1996 = U23
        1995 = U23
        1994 = U23        
        default = Elite
    }
    2015{
        2004 = U11
        2003 = U13
        2002 = U15
        2001 = U15
        2000 = U17
        1999 = U17
        1998 = U19
        1997 = U19
        1996 = U23
        1995 = U23
        1994 = U23
        1993 = U23        
        default = Elite
    }
    2014{
        2003 = U11
        2002 = U13
        2001 = U15
        2000 = U15
        1999 = U17
        1998 = U17
        1997 = U19
        1996 = U19
        1995 = U23
        1994 = U23
        1993 = U23
        1992 = U23        
        default = Elite
    }
    2013{
        2003 = U11
        2002 = U13
        2001 = U13
        2000 = U15
        1999 = U15
        1998 = U17
        1997 = U17
        1996 = U19
        1995 = U19
        1994 = U23
        1993 = U23
        1992 = U23
        1991 = U23        
        default = Elite
    }
    2012{
        2002 = U11
        2001 = U13
        2000 = U13
        1999 = U15
        1998 = U15
        1997 = U17
        1996 = U17
        1995 = U19
        1994 = U19
        1993 = U23
        1992 = U23        
        1991 = U23
        1990 = U23
        default = Elite
    }
}



