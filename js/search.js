let filesMap = new Map();

        filesMap.set("how_to_find_you_career", {
filename: "how_to_find_you_career",
title: "How to find you career",
text: `Mistakes, advices and ways to find a business you'll like
`,
date: "Fri Oct 09 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
        filesMap.set("performance", {
filename: "performance",
title: "Performance",
text: `This page contains links to articles related to performance.
`,
date: "Fri Oct 09 00:00:00 CEST 2020",
tags: [ {name: 'programming', fileName: 'programming'}, ]
});
        filesMap.set("programming", {
filename: "programming",
title: "Programming",
text: `Top level page containing links to programming sub-topics.
`,
date: "Mon Oct 05 00:00:00 CEST 2020",
tags: [ {name: 'toc', fileName: 'toc'}, ]
});
        filesMap.set("choice.", {
filename: "choice.",
title: "Choice.",
text: `The only mistake is to postpone the choice because you're not sure.
`,
date: "Fri Oct 09 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
        filesMap.set("career_crises", {
filename: "career_crises",
title: "Career crises",
text: ``,
date: "Fri Oct 09 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
    filesMap.set("about_the_digital_garden", {
filename: "about_the_digital_garden",
title: "About the digital garden",
text: `This web site is a collection of my notes. At some point I decided to make them public. A few words about how my notes taking process look like and how this site is organaized.
`,
date: "Mon Oct 05 00:00:00 CEST 2020",
tags: []
});
    filesMap.set("toc", {
filename: "toc",
title: "TOC",
text: `This file is something like a table of contents having links to general subtopics.
`,
date: "Mon Oct 05 00:00:00 CEST 2020",
tags: []
});

let searchMap = new Map();


let parentWordSet = new Set();
        parentWordSet.add("career_crises");
        parentWordSet.add("performance");
        parentWordSet.add("choice.");
        parentWordSet.add("how_to_find_you_career");
        parentWordSet.add("programming");
    searchMap.set("parent", parentWordSet);

let stayingWordSet = new Set();
        stayingWordSet.add("choice.");
    searchMap.set("staying", stayingWordSet);

let aboutWordSet = new Set();
        aboutWordSet.add("career_crises");
        aboutWordSet.add("about_the_digital_garden");
    searchMap.set("about", aboutWordSet);

let yourWordSet = new Set();
        yourWordSet.add("career_crises");
        yourWordSet.add("choice.");
    searchMap.set("your", yourWordSet);

let somewhereWordSet = new Set();
        somewhereWordSet.add("choice.");
    searchMap.set("somewhere", somewhereWordSet);

let defenetlyWordSet = new Set();
        defenetlyWordSet.add("choice.");
    searchMap.set("defenetly", defenetlyWordSet);

let decidedWordSet = new Set();
        decidedWordSet.add("about_the_digital_garden");
    searchMap.set("decided", decidedWordSet);

let understandingWordSet = new Set();
        understandingWordSet.add("career_crises");
    searchMap.set("understanding", understandingWordSet);

let becauseWordSet = new Set();
        becauseWordSet.add("choice.");
    searchMap.set("because", becauseWordSet);

let youWordSet = new Set();
        youWordSet.add("career_crises");
        youWordSet.add("choice.");
        youWordSet.add("how_to_find_you_career");
    searchMap.set("you", youWordSet);

let energyWordSet = new Set();
        energyWordSet.add("choice.");
    searchMap.set("energy", energyWordSet);

let sureWordSet = new Set();
        sureWordSet.add("choice.");
    searchMap.set("sure", sureWordSet);

let goingWordSet = new Set();
        goingWordSet.add("choice.");
    searchMap.set("going", goingWordSet);

let containingWordSet = new Set();
        containingWordSet.add("programming");
    searchMap.set("containing", containingWordSet);

let wantWordSet = new Set();
        wantWordSet.add("career_crises");
    searchMap.set("want", wantWordSet);

let themWordSet = new Set();
        themWordSet.add("about_the_digital_garden");
    searchMap.set("them", themWordSet);

let eachWordSet = new Set();
        eachWordSet.add("about_the_digital_garden");
    searchMap.set("each", eachWordSet);

let somethingWordSet = new Set();
        somethingWordSet.add("career_crises");
        somethingWordSet.add("toc");
    searchMap.set("something", somethingWordSet);

let tagsWordSet = new Set();
        tagsWordSet.add("career_crises");
        tagsWordSet.add("performance");
        tagsWordSet.add("choice.");
        tagsWordSet.add("how_to_find_you_career");
        tagsWordSet.add("programming");
    searchMap.set("tags", tagsWordSet);

let asWordSet = new Set();
        asWordSet.add("career_crises");
        asWordSet.add("choice.");
    searchMap.set("as", asWordSet);

let containsWordSet = new Set();
        containsWordSet.add("performance");
    searchMap.set("contains", containsWordSet);

let atWordSet = new Set();
        atWordSet.add("about_the_digital_garden");
    searchMap.set("at", atWordSet);

let reWordSet = new Set();
        reWordSet.add("choice.");
    searchMap.set("re", reWordSet);

let subWordSet = new Set();
        subWordSet.add("programming");
    searchMap.set("sub", subWordSet);

let roleWordSet = new Set();
        roleWordSet.add("career_crises");
    searchMap.set("role", roleWordSet);

let beWordSet = new Set();
        beWordSet.add("career_crises");
        beWordSet.add("choice.");
    searchMap.set("be", beWordSet);

let achieveWordSet = new Set();
        achieveWordSet.add("choice.");
    searchMap.set("achieve", achieveWordSet);

let experimentsWordSet = new Set();
        experimentsWordSet.add("choice.");
    searchMap.set("experiments", experimentsWordSet);

let choosingWordSet = new Set();
        choosingWordSet.add("choice.");
    searchMap.set("choosing", choosingWordSet);

let rememberWordSet = new Set();
        rememberWordSet.add("about_the_digital_garden");
    searchMap.set("remember", rememberWordSet);

let howWordSet = new Set();
        howWordSet.add("career_crises");
        howWordSet.add("choice.");
        howWordSet.add("how_to_find_you_career");
        howWordSet.add("about_the_digital_garden");
    searchMap.set("how", howWordSet);

let foundWordSet = new Set();
        foundWordSet.add("career_crises");
    searchMap.set("found", foundWordSet);

let sameWordSet = new Set();
        sameWordSet.add("career_crises");
    searchMap.set("same", sameWordSet);

let areWordSet = new Set();
        areWordSet.add("career_crises");
        areWordSet.add("about_the_digital_garden");
    searchMap.set("are", areWordSet);

let expectationsWordSet = new Set();
        expectationsWordSet.add("career_crises");
    searchMap.set("expectations", expectationsWordSet);

let soWordSet = new Set();
        soWordSet.add("career_crises");
    searchMap.set("so", soWordSet);

let situationWordSet = new Set();
        situationWordSet.add("career_crises");
    searchMap.set("situation", situationWordSet);

let linkedWordSet = new Set();
        linkedWordSet.add("about_the_digital_garden");
    searchMap.set("linked", linkedWordSet);

let aWordSet = new Set();
        aWordSet.add("career_crises");
        aWordSet.add("choice.");
        aWordSet.add("how_to_find_you_career");
        aWordSet.add("toc");
        aWordSet.add("about_the_digital_garden");
    searchMap.set("a", aWordSet);

let setWordSet = new Set();
        setWordSet.add("choice.");
    searchMap.set("set", setWordSet);

let organaizedWordSet = new Set();
        organaizedWordSet.add("about_the_digital_garden");
    searchMap.set("organaized", organaizedWordSet);

let decisionWordSet = new Set();
        decisionWordSet.add("choice.");
    searchMap.set("decision", decisionWordSet);

let businessWordSet = new Set();
        businessWordSet.add("how_to_find_you_career");
    searchMap.set("business", businessWordSet);

let subtopicsWordSet = new Set();
        subtopicsWordSet.add("toc");
    searchMap.set("subtopics", subtopicsWordSet);

let wordsWordSet = new Set();
        wordsWordSet.add("about_the_digital_garden");
    searchMap.set("words", wordsWordSet);

let iWordSet = new Set();
        iWordSet.add("choice.");
        iWordSet.add("about_the_digital_garden");
    searchMap.set("i", iWordSet);

let possibleWordSet = new Set();
        possibleWordSet.add("choice.");
    searchMap.set("possible", possibleWordSet);

let rightWordSet = new Set();
        rightWordSet.add("choice.");
    searchMap.set("right", rightWordSet);

let mWordSet = new Set();
        mWordSet.add("choice.");
    searchMap.set("m", mWordSet);

let actuallyWordSet = new Set();
        actuallyWordSet.add("choice.");
    searchMap.set("actually", actuallyWordSet);

let theWordSet = new Set();
        theWordSet.add("career_crises");
        theWordSet.add("choice.");
        theWordSet.add("about_the_digital_garden");
    searchMap.set("the", theWordSet);

let sWordSet = new Set();
        sWordSet.add("career_crises");
    searchMap.set("s", sWordSet);

let fastWordSet = new Set();
        fastWordSet.add("choice.");
    searchMap.set("fast", fastWordSet);

let tWordSet = new Set();
        tWordSet.add("career_crises");
        tWordSet.add("choice.");
    searchMap.set("t", tWordSet);

let vWordSet = new Set();
        vWordSet.add("career_crises");
        vWordSet.add("performance");
        vWordSet.add("choice.");
        vWordSet.add("how_to_find_you_career");
        vWordSet.add("toc");
        vWordSet.add("about_the_digital_garden");
        vWordSet.add("programming");
    searchMap.set("v", vWordSet);

let toWordSet = new Set();
        toWordSet.add("career_crises");
        toWordSet.add("performance");
        toWordSet.add("choice.");
        toWordSet.add("how_to_find_you_career");
        toWordSet.add("toc");
        toWordSet.add("about_the_digital_garden");
        toWordSet.add("programming");
    searchMap.set("to", toWordSet);

let butWordSet = new Set();
        butWordSet.add("career_crises");
        butWordSet.add("choice.");
    searchMap.set("but", butWordSet);

let notesWordSet = new Set();
        notesWordSet.add("about_the_digital_garden");
    searchMap.set("notes", notesWordSet);

let doWordSet = new Set();
        doWordSet.add("choice.");
    searchMap.set("do", doWordSet);

let advertismentWordSet = new Set();
        advertismentWordSet.add("career_crises");
    searchMap.set("advertisment", advertismentWordSet);

let bringsWordSet = new Set();
        bringsWordSet.add("choice.");
    searchMap.set("brings", bringsWordSet);

let biasWordSet = new Set();
        biasWordSet.add("career_crises");
    searchMap.set("bias", biasWordSet);

let thingsWordSet = new Set();
        thingsWordSet.add("about_the_digital_garden");
    searchMap.set("things", thingsWordSet);

let hasWordSet = new Set();
        hasWordSet.add("career_crises");
    searchMap.set("has", hasWordSet);

let programmingWordSet = new Set();
        programmingWordSet.add("performance");
        programmingWordSet.add("toc");
        programmingWordSet.add("programming");
    searchMap.set("programming", programmingWordSet);

let realizeWordSet = new Set();
        realizeWordSet.add("choice.");
    searchMap.set("realize", realizeWordSet);

let thisWordSet = new Set();
        thisWordSet.add("career_crises");
        thisWordSet.add("performance");
        thisWordSet.add("choice.");
        thisWordSet.add("toc");
        thisWordSet.add("about_the_digital_garden");
    searchMap.set("this", thisWordSet);

let collectionWordSet = new Set();
        collectionWordSet.add("about_the_digital_garden");
    searchMap.set("collection", collectionWordSet);

let checkWordSet = new Set();
        checkWordSet.add("choice.");
    searchMap.set("check", checkWordSet);

let lookWordSet = new Set();
        lookWordSet.add("about_the_digital_garden");
    searchMap.set("look", lookWordSet);

let longerWordSet = new Set();
        longerWordSet.add("choice.");
    searchMap.set("longer", longerWordSet);

let httpWordSet = new Set();
        httpWordSet.add("performance");
    searchMap.set("http", httpWordSet);

let pageWordSet = new Set();
        pageWordSet.add("performance");
        pageWordSet.add("programming");
    searchMap.set("page", pageWordSet);

let changedWordSet = new Set();
        changedWordSet.add("career_crises");
        changedWordSet.add("choice.");
    searchMap.set("changed", changedWordSet);

let someWordSet = new Set();
        someWordSet.add("about_the_digital_garden");
    searchMap.set("some", someWordSet);

let survivorshipWordSet = new Set();
        survivorshipWordSet.add("career_crises");
    searchMap.set("survivorship", survivorshipWordSet);

let doingWordSet = new Set();
        doingWordSet.add("choice.");
    searchMap.set("doing", doingWordSet);

let reasonsWordSet = new Set();
        reasonsWordSet.add("career_crises");
    searchMap.set("reasons", reasonsWordSet);

let appliedWordSet = new Set();
        appliedWordSet.add("career_crises");
    searchMap.set("applied", appliedWordSet);

let changesWordSet = new Set();
        changesWordSet.add("career_crises");
    searchMap.set("changes", changesWordSet);

let forWordSet = new Set();
        forWordSet.add("career_crises");
    searchMap.set("for", forWordSet);

let mistakesWordSet = new Set();
        mistakesWordSet.add("career_crises");
        mistakesWordSet.add("how_to_find_you_career");
    searchMap.set("mistakes", mistakesWordSet);

let nonWordSet = new Set();
        nonWordSet.add("about_the_digital_garden");
    searchMap.set("non", nonWordSet);

let weWordSet = new Set();
        weWordSet.add("career_crises");
    searchMap.set("we", weWordSet);

let lifeWordSet = new Set();
        lifeWordSet.add("career_crises");
    searchMap.set("life", lifeWordSet);

let notWordSet = new Set();
        notWordSet.add("career_crises");
        notWordSet.add("choice.");
    searchMap.set("not", notWordSet);

let relatedWordSet = new Set();
        relatedWordSet.add("performance");
    searchMap.set("related", relatedWordSet);

let missingWordSet = new Set();
        missingWordSet.add("choice.");
    searchMap.set("missing", missingWordSet);

let livedWordSet = new Set();
        livedWordSet.add("career_crises");
    searchMap.set("lived", livedWordSet);

let linerWordSet = new Set();
        linerWordSet.add("about_the_digital_garden");
    searchMap.set("liner", linerWordSet);

let justWordSet = new Set();
        justWordSet.add("career_crises");
    searchMap.set("just", justWordSet);

let liveWordSet = new Set();
        liveWordSet.add("career_crises");
    searchMap.set("live", liveWordSet);

let digitalWordSet = new Set();
        digitalWordSet.add("about_the_digital_garden");
    searchMap.set("digital", digitalWordSet);

let mistakeWordSet = new Set();
        mistakeWordSet.add("choice.");
    searchMap.set("mistake", mistakeWordSet);

let figureWordSet = new Set();
        figureWordSet.add("choice.");
    searchMap.set("figure", figureWordSet);

let startWordSet = new Set();
        startWordSet.add("career_crises");
        startWordSet.add("choice.");
    searchMap.set("start", startWordSet);

let cheepWordSet = new Set();
        cheepWordSet.add("choice.");
    searchMap.set("cheep", cheepWordSet);

let advicesWordSet = new Set();
        advicesWordSet.add("how_to_find_you_career");
    searchMap.set("advices", advicesWordSet);

let wayWordSet = new Set();
        wayWordSet.add("career_crises");
        wayWordSet.add("choice.");
        wayWordSet.add("about_the_digital_garden");
    searchMap.set("way", wayWordSet);

let whatWordSet = new Set();
        whatWordSet.add("career_crises");
        whatWordSet.add("choice.");
    searchMap.set("what", whatWordSet);

let thereWordSet = new Set();
        thereWordSet.add("career_crises");
    searchMap.set("there", thereWordSet);

let achievedWordSet = new Set();
        achievedWordSet.add("career_crises");
    searchMap.set("achieved", achievedWordSet);

let timeWordSet = new Set();
        timeWordSet.add("career_crises");
    searchMap.set("time", timeWordSet);

let articlesWordSet = new Set();
        articlesWordSet.add("performance");
    searchMap.set("articles", articlesWordSet);

let takingWordSet = new Set();
        takingWordSet.add("about_the_digital_garden");
    searchMap.set("taking", takingWordSet);

let veryWordSet = new Set();
        veryWordSet.add("career_crises");
    searchMap.set("very", veryWordSet);

let careerWordSet = new Set();
        careerWordSet.add("career_crises");
        careerWordSet.add("choice.");
        careerWordSet.add("how_to_find_you_career");
    searchMap.set("career", careerWordSet);

let happyWordSet = new Set();
        happyWordSet.add("career_crises");
    searchMap.set("happy", happyWordSet);

let whenWordSet = new Set();
        whenWordSet.add("career_crises");
    searchMap.set("when", whenWordSet);

let modelWordSet = new Set();
        modelWordSet.add("career_crises");
    searchMap.set("model", modelWordSet);

let adocWordSet = new Set();
        adocWordSet.add("career_crises");
        adocWordSet.add("performance");
        adocWordSet.add("choice.");
        adocWordSet.add("how_to_find_you_career");
        adocWordSet.add("toc");
        adocWordSet.add("about_the_digital_garden");
        adocWordSet.add("programming");
    searchMap.set("adoc", adocWordSet);

let nobodyWordSet = new Set();
        nobodyWordSet.add("choice.");
    searchMap.set("nobody", nobodyWordSet);

let ifWordSet = new Set();
        ifWordSet.add("choice.");
    searchMap.set("if", ifWordSet);

let fearWordSet = new Set();
        fearWordSet.add("choice.");
    searchMap.set("fear", fearWordSet);

let crisesWordSet = new Set();
        crisesWordSet.add("career_crises");
        crisesWordSet.add("how_to_find_you_career");
    searchMap.set("crises", crisesWordSet);

let havingWordSet = new Set();
        havingWordSet.add("career_crises");
        havingWordSet.add("toc");
    searchMap.set("having", havingWordSet);

let goalWordSet = new Set();
        goalWordSet.add("choice.");
    searchMap.set("goal", goalWordSet);

let inWordSet = new Set();
        inWordSet.add("career_crises");
        inWordSet.add("choice.");
    searchMap.set("in", inWordSet);

let nothingWordSet = new Set();
        nothingWordSet.add("career_crises");
    searchMap.set("nothing", nothingWordSet);

let understandWordSet = new Set();
        understandWordSet.add("career_crises");
    searchMap.set("understand", understandWordSet);

let specifyWordSet = new Set();
        specifyWordSet.add("choice.");
    searchMap.set("specify", specifyWordSet);

let indexWordSet = new Set();
        indexWordSet.add("about_the_digital_garden");
    searchMap.set("index", indexWordSet);

let isWordSet = new Set();
        isWordSet.add("career_crises");
        isWordSet.add("choice.");
        isWordSet.add("toc");
        isWordSet.add("about_the_digital_garden");
    searchMap.set("is", isWordSet);

let itWordSet = new Set();
        itWordSet.add("career_crises");
        itWordSet.add("choice.");
    searchMap.set("it", itWordSet);

let failWordSet = new Set();
        failWordSet.add("choice.");
    searchMap.set("fail", failWordSet);

let contentsWordSet = new Set();
        contentsWordSet.add("toc");
    searchMap.set("contents", contentsWordSet);

let becomeWordSet = new Set();
        becomeWordSet.add("career_crises");
        becomeWordSet.add("choice.");
    searchMap.set("become", becomeWordSet);

let otherWordSet = new Set();
        otherWordSet.add("about_the_digital_garden");
    searchMap.set("other", otherWordSet);

let donWordSet = new Set();
        donWordSet.add("career_crises");
        donWordSet.add("choice.");
    searchMap.set("don", donWordSet);

let tocWordSet = new Set();
        tocWordSet.add("toc");
        tocWordSet.add("about_the_digital_garden");
        tocWordSet.add("programming");
    searchMap.set("toc", tocWordSet);

let thinkingWordSet = new Set();
        thinkingWordSet.add("career_crises");
    searchMap.set("thinking", thinkingWordSet);

let outWordSet = new Set();
        outWordSet.add("choice.");
    searchMap.set("out", outWordSet);

let fileWordSet = new Set();
        fileWordSet.add("how_to_find_you_career");
        fileWordSet.add("toc");
    searchMap.set("file", fileWordSet);

let waysWordSet = new Set();
        waysWordSet.add("how_to_find_you_career");
    searchMap.set("ways", waysWordSet);

let topWordSet = new Set();
        topWordSet.add("programming");
    searchMap.set("top", topWordSet);

let webWordSet = new Set();
        webWordSet.add("about_the_digital_garden");
    searchMap.set("web", webWordSet);

let haveWordSet = new Set();
        haveWordSet.add("career_crises");
        haveWordSet.add("choice.");
    searchMap.set("have", haveWordSet);

let placeWordSet = new Set();
        placeWordSet.add("choice.");
    searchMap.set("place", placeWordSet);

let everythingWordSet = new Set();
        everythingWordSet.add("choice.");
    searchMap.set("everything", everythingWordSet);

let tableWordSet = new Set();
        tableWordSet.add("toc");
    searchMap.set("table", tableWordSet);

let knowsWordSet = new Set();
        knowsWordSet.add("choice.");
    searchMap.set("knows", knowsWordSet);

let moreWordSet = new Set();
        moreWordSet.add("choice.");
    searchMap.set("more", moreWordSet);

let topicsWordSet = new Set();
        topicsWordSet.add("programming");
    searchMap.set("topics", topicsWordSet);

let greatWordSet = new Set();
        greatWordSet.add("career_crises");
    searchMap.set("great", greatWordSet);

let wrongWordSet = new Set();
        wrongWordSet.add("choice.");
    searchMap.set("wrong", wrongWordSet);

let siteWordSet = new Set();
        siteWordSet.add("about_the_digital_garden");
    searchMap.set("site", siteWordSet);

let alexanderWordSet = new Set();
        alexanderWordSet.add("career_crises");
        alexanderWordSet.add("performance");
        alexanderWordSet.add("choice.");
        alexanderWordSet.add("how_to_find_you_career");
        alexanderWordSet.add("toc");
        alexanderWordSet.add("about_the_digital_garden");
        alexanderWordSet.add("programming");
    searchMap.set("alexander", alexanderWordSet);

let futureWordSet = new Set();
        futureWordSet.add("choice.");
    searchMap.set("future", futureWordSet);

let gardenWordSet = new Set();
        gardenWordSet.add("about_the_digital_garden");
    searchMap.set("garden", gardenWordSet);

let choiceWordSet = new Set();
        choiceWordSet.add("choice.");
        choiceWordSet.add("how_to_find_you_career");
    searchMap.set("choice", choiceWordSet);

let firstWordSet = new Set();
        firstWordSet.add("choice.");
    searchMap.set("first", firstWordSet);

let smallWordSet = new Set();
        smallWordSet.add("choice.");
    searchMap.set("small", smallWordSet);

let llWordSet = new Set();
        llWordSet.add("how_to_find_you_career");
    searchMap.set("ll", llWordSet);

let perfectWordSet = new Set();
        perfectWordSet.add("career_crises");
    searchMap.set("perfect", perfectWordSet);

let beforeWordSet = new Set();
        beforeWordSet.add("career_crises");
    searchMap.set("before", beforeWordSet);

let feelWordSet = new Set();
        feelWordSet.add("choice.");
    searchMap.set("feel", feelWordSet);

let mainWordSet = new Set();
        mainWordSet.add("choice.");
    searchMap.set("main", mainWordSet);

let thatWordSet = new Set();
        thatWordSet.add("career_crises");
        thatWordSet.add("choice.");
    searchMap.set("that", thatWordSet);

let findWordSet = new Set();
        findWordSet.add("career_crises");
        findWordSet.add("choice.");
        findWordSet.add("how_to_find_you_career");
    searchMap.set("find", findWordSet);

let introWordSet = new Set();
        introWordSet.add("career_crises");
        introWordSet.add("performance");
        introWordSet.add("choice.");
        introWordSet.add("how_to_find_you_career");
        introWordSet.add("toc");
        introWordSet.add("about_the_digital_garden");
        introWordSet.add("programming");
    searchMap.set("intro", introWordSet);

let shouldWordSet = new Set();
        shouldWordSet.add("career_crises");
        shouldWordSet.add("choice.");
    searchMap.set("should", shouldWordSet);

let onlyWordSet = new Set();
        onlyWordSet.add("choice.");
        onlyWordSet.add("about_the_digital_garden");
    searchMap.set("only", onlyWordSet);

let fewWordSet = new Set();
        fewWordSet.add("about_the_digital_garden");
    searchMap.set("few", fewWordSet);

let fromWordSet = new Set();
        fromWordSet.add("career_crises");
    searchMap.set("from", fromWordSet);

let linksWordSet = new Set();
        linksWordSet.add("career_crises");
        linksWordSet.add("performance");
        linksWordSet.add("choice.");
        linksWordSet.add("how_to_find_you_career");
        linksWordSet.add("toc");
        linksWordSet.add("programming");
    searchMap.set("links", linksWordSet);

let differentWordSet = new Set();
        differentWordSet.add("career_crises");
    searchMap.set("different", differentWordSet);

let potentialWordSet = new Set();
        potentialWordSet.add("career_crises");
    searchMap.set("potential", potentialWordSet);

let idealWordSet = new Set();
        idealWordSet.add("career_crises");
    searchMap.set("ideal", idealWordSet);

let everyoneWordSet = new Set();
        everyoneWordSet.add("career_crises");
        everyoneWordSet.add("choice.");
    searchMap.set("everyone", everyoneWordSet);

let levelWordSet = new Set();
        levelWordSet.add("programming");
    searchMap.set("level", levelWordSet);

let likeWordSet = new Set();
        likeWordSet.add("choice.");
        likeWordSet.add("how_to_find_you_career");
        likeWordSet.add("toc");
        likeWordSet.add("about_the_digital_garden");
    searchMap.set("like", likeWordSet);

let konoplevWordSet = new Set();
        konoplevWordSet.add("career_crises");
        konoplevWordSet.add("performance");
        konoplevWordSet.add("choice.");
        konoplevWordSet.add("how_to_find_you_career");
        konoplevWordSet.add("toc");
        konoplevWordSet.add("about_the_digital_garden");
        konoplevWordSet.add("programming");
    searchMap.set("konoplev", konoplevWordSet);

let myWordSet = new Set();
        myWordSet.add("about_the_digital_garden");
    searchMap.set("my", myWordSet);

let careersWordSet = new Set();
        careersWordSet.add("career_crises");
    searchMap.set("careers", careersWordSet);

let opositeWordSet = new Set();
        opositeWordSet.add("choice.");
    searchMap.set("oposite", opositeWordSet);

let personWordSet = new Set();
        personWordSet.add("career_crises");
        personWordSet.add("choice.");
    searchMap.set("person", personWordSet);

let tryWordSet = new Set();
        tryWordSet.add("choice.");
    searchMap.set("try", tryWordSet);

let collectWordSet = new Set();
        collectWordSet.add("about_the_digital_garden");
    searchMap.set("collect", collectWordSet);

let postponeWordSet = new Set();
        postponeWordSet.add("choice.");
    searchMap.set("postpone", postponeWordSet);

let problemsWordSet = new Set();
        problemsWordSet.add("career_crises");
    searchMap.set("problems", problemsWordSet);

let whoWordSet = new Set();
        whoWordSet.add("career_crises");
        whoWordSet.add("choice.");
    searchMap.set("who", whoWordSet);

let whyWordSet = new Set();
        whyWordSet.add("about_the_digital_garden");
    searchMap.set("why", whyWordSet);

let pointWordSet = new Set();
        pointWordSet.add("about_the_digital_garden");
    searchMap.set("point", pointWordSet);

let generalWordSet = new Set();
        generalWordSet.add("toc");
    searchMap.set("general", generalWordSet);

let canWordSet = new Set();
        canWordSet.add("career_crises");
        canWordSet.add("choice.");
    searchMap.set("can", canWordSet);

let publicWordSet = new Set();
        publicWordSet.add("about_the_digital_garden");
    searchMap.set("public", publicWordSet);

let andWordSet = new Set();
        andWordSet.add("career_crises");
        andWordSet.add("choice.");
        andWordSet.add("how_to_find_you_career");
        andWordSet.add("about_the_digital_garden");
    searchMap.set("and", andWordSet);

let ofWordSet = new Set();
        ofWordSet.add("career_crises");
        ofWordSet.add("choice.");
        ofWordSet.add("toc");
        ofWordSet.add("about_the_digital_garden");
    searchMap.set("of", ofWordSet);

let okWordSet = new Set();
        okWordSet.add("career_crises");
    searchMap.set("ok", okWordSet);

let makeWordSet = new Set();
        makeWordSet.add("choice.");
        makeWordSet.add("about_the_digital_garden");
    searchMap.set("make", makeWordSet);

let hearWordSet = new Set();
        hearWordSet.add("career_crises");
    searchMap.set("hear", hearWordSet);

let directionWordSet = new Set();
        directionWordSet.add("choice.");
    searchMap.set("direction", directionWordSet);

let processWordSet = new Set();
        processWordSet.add("about_the_digital_garden");
    searchMap.set("process", processWordSet);

let orWordSet = new Set();
        orWordSet.add("choice.");
    searchMap.set("or", orWordSet);

let performanceWordSet = new Set();
        performanceWordSet.add("performance");
    searchMap.set("performance", performanceWordSet);

let someoneWordSet = new Set();
        someoneWordSet.add("career_crises");
    searchMap.set("someone", someoneWordSet);


export function getSearchResult(...words) {
    let resultSet = null;
    words.forEach(w => {
        if (searchMap.has(w)) {
            let currentSet = searchMap.get(w);
            if (resultSet == null) {
                resultSet = currentSet;
            } else {
                //conjunction
                resultSet = new Set([...currentSet].filter(x => resultSet.has(x)));
            }
        }
    });
    if (resultSet == null) {
        return [];
    }
    return Array.from(resultSet, w => filesMap.get(w));
}
