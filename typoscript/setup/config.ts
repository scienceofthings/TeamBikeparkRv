#### deutsches Datumsformat
config.language = de
config.htmlTag_langKey = de
config.locale_all = de_DE.utf-8

[browser = msie]
config.xmlprologue = none
[global]

config.no_cache = 1
config.index_enable = 1
config.index_external = 1

# Code cleaning
config.disablePrefixComment  = 1
config.xhtml_cleaning = all

config{ ...
  //Links zwischen mehreren Domains (domain-records)
  typolinkCheckRootline = 1  
  typolinkEnableLinksAccrosDomains=1
  jumpurl_enable = 0
  jumpurl_mailto_disable = 1
}


# SEO: preserve original filenames for typo3temp
config.meaningfulTempFilePrefix = 100

#Spam vermeiden
config.spamProtectEmailAddresses = 2
config.spamProtectEmailAddresses_atSubst = <img src="fileadmin/default/templates/images/at.png">

config.simulateStaticDocuments = 0
config.tx_realurl_enable = 1



[PIDinRootline = {$pidOfTSW}]
config.baseURL = http://www.team-steinlach-wiesaz.de/
[global]

[PIDinRootline = {$pidOfBikepark}]
config.baseURL = http://www.bikepark-gomaringen.de/
[global]

[PIDinRootline = {$pidOfRV}]
config.baseURL = http://www.rv-gomaringen.de/
[global]


