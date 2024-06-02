export default function () {
  const info = `
Name: ${import.meta.env.VITE_NAME}
Version: ${import.meta.env.VITE_VERSION}
HomePage: ${import.meta.env.VITE_HOME_PAGE}
Repositroy: ${import.meta.env.VITE_REPOSITORY}
Powered By: ${import.meta.env.VITE_POWERED_BY}
Author: ${import.meta.env.VITE_AUTHOR}
License: ${import.meta.env.VITE_LICENSE}
`
  console.info(
    `%c${import.meta.env.VITE_NAME}の主页 %c\n
    
                                                                  ____________________________________________________________________________
                                                                  $LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  $LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  $LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  \`\`\`\`\`\`\`\`\`\`\`\`$LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                           ______________                     $LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL,_____
                                           BBBBBBBBBBBBBB                     $LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                           BBBBBBBBBBBBBBRRRRRRRRRRRRRRRRRRRRRELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                           BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN@@@$LLLLLLLLLLLLLLL@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                                                  L$$$$$$$$$$$LLLLLLLLLLLL$5LLHHHHL$LLLLLHHHHL35$LLLLLLLLLLLLLLL0RBBbLLLLLLLLLLLLLLLBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLL$LP       L$LLL$L      \`t}$LLLLLLLLLLLLL0RBBbLLLLLLLLLLLLLLLBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLLL^        L$LL$@L        \`LLLLLLLLLLLLLL0RBBbLLLLLLLLLLLLLLLBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLPL         L$LL$BL         ]$LLLLLLLLLLLL0RBBbLLLLLLLLLLLLLLLBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLLL         L$LL$BL         ]$LLLLLLLLLLLL0RBB5LLLLLLLLLLLLLLLBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLL$KL         L$LL$BL         ]$LLLLLLLLLLLL0RBB$LLLLLLLLLLLLLLLBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLL[KL         L$LL$BL         ]$LLLLLLLLLLLL0RBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLL[KL         LLLLP^^         ]$LLLLLLLLLLLL0RBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLL[KL                         ]$LLLLLLLLLLLL$MMMMMMMMMMMMMM""""""""""""""""""""""""""""""""""""""""""""""""""""""""^
                                                                  LLLLLLLLLLLLLLLLLLLL[KL                         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLL[KL                         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLL[KL                         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLL[KL                         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLL[KL         ,-=;@@L         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLL[KL         L0RBBBL         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLL[KL         L0BBBBL         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                              ,,,,L$$$$$$$$$$$LLLLLLLL[KL         L5F}$BL         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                              LLLLLLLLLLLLLLLLLLLLLLLL[KL         L$LL$BL         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                              LLLLLLLLLLLLLLLLLLLLLLLL[KL         L$LL$BL         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
                                                              LLLLLLLLLLLLLLLLLLLLLLLL[KL         L$LL$BL         ]$LLLLLLLLLLLLLLLLLLLLLLLLLL
        ammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmLLLLLLLLLLLLLLLa@@LLLLLL[KL---------L$LL$BL---------$$LLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBLLLLLLLLLLLLLLL0RHLLLLLL[RRRRRRRRRRRHLLL$RRRRRRRRRRRKLLLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBLLLLLLLLLLLLLLL0RHLLLLLL[RBBBBBBBBBBHLLL$RBBBBBBBBBBKLLLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBLLLLLLLLLLLLLLL0RHLLLLLLMMMMMMMMMMMMNLLL$MMMMMMMMMMMNLLLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBLLLLLLLLLLLLLLL0RHLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB@@@@@@@@@@@@@@@@RHLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBHLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBHLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLP^^^^^^^^^
        [BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBHLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        FMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL0BR               BBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL0BWmmmmmmmmmmmmmmmBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL0BBBBBBBBBBBBBBBBBBBBBBBBB
                                                                  LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
                                                                  LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
     
     
     
     
                                                                      ,@@P  ]@@p ]@@@L!@@@L ;@@@@@@@@,  @@@@@@@@p  @@@@@@@@@,  $@@@@@@@p
                                                                      $LLP  ]LLL ]LLLL!LLLL $LLLLLLLL$ ]LLLLLLLLLL LLLLLLLLL$ ]LLLLLLLLLP
                                                                      LLLP _]LLL ]LLLL!LLLL'$LLP\`\`""\`\` ]LLLP""$LLL LLLLLLLLLL ]LLL"\`\`\`\`\`\`
                                                                      LLL$$$LLLL ]LLLL!LLLL'$LL@$$LL   ]LLL  '$LLL LLLP"\`]LLL ]LLLu@@@$$L
                                                                      LLLLLLLLLL ]LLLL!LLLL'$LLLLLLL   ]LLL  '$LLL LLLL  ]LLL ]LLLL$LLLLL
                                                                      LLLP\` ]LLL ]LLLL!LLLL'$LLP\`      ]LLL,,nLLLL LLLL  ]LLL ]LLLL"\`LLLL
                                                                      LLLP  ]LLL ]LLLL!LLLL'$LLL       ]LLLLLLLLLL LLLL  ]LLL ]LLLLLLLLLL
                                                                      LLLP  ]LLL ]LLLL!LLLL'$LLL       ]LLLLLLLLLL LLLL  ]LLL ]LLLLLLLLLL
     
     
                                                                    @@@@@@n  ,@@@@@@w !@@@@@@@L         +@@@@@p_ ,@@@@@@, ,@@@@@@n  +@@@@@h_
                                                                   ]LL55$LLL $LLPPP"" ]LLLLLLLL        !LL&5$LLP $LLLLLLL ]LL55LLLL!LLLLLLLP
                                                                   ]LL  \`\`   $LL,wn@P !""LL$           !P^,@LLP\` $LP  $LL ]P ,PLLP !LLL  LLL
                                                                   ]LL       $LLLLLLL    LL$            _@LLP^   $LP  $LL \`,PLLP   !LLL  LLL
                                                                   ]LL__]$LL ^"\`\` ]LL    LL$           !LL$^____ $LL,,$LL ]LLP____ !LLL,,LLL
                                                                   ]LLLLLLLL @PP$LLLL    LL$    np     !LLLLLLLL $LLLLLLL ]LLLLLLL !LLLLLLLL
                                                                   '"""""""  """"""""    """    ""     '"""""""" """""""" '""""""" '""""""""

    %c\n${info}`,
    'font-size: 50px; font-weight: 900;color: rgb(244,167,89);',
    'font-size: 12px; font-weight: 900; color: rgb(30,152,255);',
    'font-size: 18px; color: rgb(244,167,89);'
  )
}
