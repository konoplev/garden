let filesMap = new Map();

        filesMap.set("how_to_find_you_career", {
filename: "how_to_find_you_career",
title: "How to find you career",
text: `Mistakes, advices and ways to find a business you'll like
`,
date: "Fri Oct 09 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
        filesMap.set("devops", {
filename: "devops",
title: "Devops",
text: `TOC for DevOps related topics
`,
date: "Mon Oct 19 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
        filesMap.set("terraform", {
filename: "terraform",
title: "Terraform",
text: `Quick intro to terraform
`,
date: "Mon Oct 19 00:00:00 CEST 2020",
tags: [ {name: 'devops', fileName: 'devops'}, ]
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
        filesMap.set("choice", {
filename: "choice",
title: "Choice",
text: `The only mistake is to postpone the choice because you're not sure.
`,
date: "Fri Oct 09 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
        filesMap.set("interest", {
filename: "interest",
title: "Interest",
text: ``,
date: "Mon Oct 12 00:00:00 CEST 2020",
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
        filesMap.set("day_dreams", {
filename: "day_dreams",
title: "Day dreams",
text: ``,
date: "Mon Oct 12 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});
        filesMap.set("how_to_create_a_python_project", {
filename: "how_to_create_a_python_project",
title: "How to create a python project",
text: `Quick steps to create a python project
`,
date: "Thu Oct 15 00:00:00 CEST 2020",
tags: [ {name: '', fileName: ''}, ]
});

let searchMap = new Map();


let parentWordSet = new Set();
        parentWordSet.add("career_crises");
        parentWordSet.add("performance");
        parentWordSet.add("how_to_find_you_career");
        parentWordSet.add("interest");
        parentWordSet.add("day_dreams");
        parentWordSet.add("devops");
        parentWordSet.add("terraform");
        parentWordSet.add("how_to_create_a_python_project");
        parentWordSet.add("choice");
        parentWordSet.add("programming");
    searchMap.set("parent", parentWordSet);

let badWordSet = new Set();
        badWordSet.add("day_dreams");
    searchMap.set("bad", badWordSet);

let pluginsWordSet = new Set();
        pluginsWordSet.add("terraform");
    searchMap.set("plugins", pluginsWordSet);

let tasteWordSet = new Set();
        tasteWordSet.add("day_dreams");
    searchMap.set("taste", tasteWordSet);

let stayingWordSet = new Set();
        stayingWordSet.add("choice");
    searchMap.set("staying", stayingWordSet);

let bringWordSet = new Set();
        bringWordSet.add("day_dreams");
    searchMap.set("bring", bringWordSet);

let aboutWordSet = new Set();
        aboutWordSet.add("career_crises");
        aboutWordSet.add("about_the_digital_garden");
    searchMap.set("about", aboutWordSet);

let pyWordSet = new Set();
        pyWordSet.add("how_to_create_a_python_project");
    searchMap.set("py", pyWordSet);

let areasWordSet = new Set();
        areasWordSet.add("interest");
    searchMap.set("areas", areasWordSet);

let yourWordSet = new Set();
        yourWordSet.add("career_crises");
        yourWordSet.add("interest");
        yourWordSet.add("day_dreams");
        yourWordSet.add("choice");
    searchMap.set("your", yourWordSet);

let remoteWordSet = new Set();
        remoteWordSet.add("terraform");
    searchMap.set("remote", remoteWordSet);

let parsingWordSet = new Set();
        parsingWordSet.add("terraform");
    searchMap.set("parsing", parsingWordSet);

let somewhereWordSet = new Set();
        somewhereWordSet.add("choice");
    searchMap.set("somewhere", somewhereWordSet);

let defenetlyWordSet = new Set();
        defenetlyWordSet.add("choice");
    searchMap.set("defenetly", defenetlyWordSet);

let decidedWordSet = new Set();
        decidedWordSet.add("about_the_digital_garden");
    searchMap.set("decided", decidedWordSet);

let pathWordSet = new Set();
        pathWordSet.add("terraform");
    searchMap.set("path", pathWordSet);

let barWordSet = new Set();
        barWordSet.add("day_dreams");
    searchMap.set("bar", barWordSet);

let locallyWordSet = new Set();
        locallyWordSet.add("terraform");
    searchMap.set("locally", locallyWordSet);

let devopsWordSet = new Set();
        devopsWordSet.add("devops");
        devopsWordSet.add("terraform");
    searchMap.set("devops", devopsWordSet);

let analiseWordSet = new Set();
        analiseWordSet.add("interest");
    searchMap.set("analise", analiseWordSet);

let understandingWordSet = new Set();
        understandingWordSet.add("career_crises");
    searchMap.set("understanding", understandingWordSet);

let becauseWordSet = new Set();
        becauseWordSet.add("choice");
    searchMap.set("because", becauseWordSet);

let stateWordSet = new Set();
        stateWordSet.add("terraform");
    searchMap.set("state", stateWordSet);

let mkdirWordSet = new Set();
        mkdirWordSet.add("how_to_create_a_python_project");
    searchMap.set("mkdir", mkdirWordSet);

let youWordSet = new Set();
        youWordSet.add("career_crises");
        youWordSet.add("how_to_find_you_career");
        youWordSet.add("interest");
        youWordSet.add("day_dreams");
        youWordSet.add("terraform");
        youWordSet.add("choice");
    searchMap.set("you", youWordSet);

let energyWordSet = new Set();
        energyWordSet.add("interest");
        energyWordSet.add("day_dreams");
        energyWordSet.add("choice");
    searchMap.set("energy", energyWordSet);

let sureWordSet = new Set();
        sureWordSet.add("choice");
    searchMap.set("sure", sureWordSet);

let separatelyWordSet = new Set();
        separatelyWordSet.add("terraform");
    searchMap.set("separately", separatelyWordSet);

let goingWordSet = new Set();
        goingWordSet.add("choice");
    searchMap.set("going", goingWordSet);

let containingWordSet = new Set();
        containingWordSet.add("programming");
    searchMap.set("containing", containingWordSet);

let moduleWordSet = new Set();
        moduleWordSet.add("how_to_create_a_python_project");
    searchMap.set("module", moduleWordSet);

let wantWordSet = new Set();
        wantWordSet.add("career_crises");
    searchMap.set("want", wantWordSet);

let themWordSet = new Set();
        themWordSet.add("about_the_digital_garden");
    searchMap.set("them", themWordSet);

let requireWordSet = new Set();
        requireWordSet.add("interest");
    searchMap.set("require", requireWordSet);

let somethingWordSet = new Set();
        somethingWordSet.add("career_crises");
        somethingWordSet.add("interest");
        somethingWordSet.add("day_dreams");
        somethingWordSet.add("toc");
    searchMap.set("something", somethingWordSet);

let eachWordSet = new Set();
        eachWordSet.add("day_dreams");
        eachWordSet.add("terraform");
        eachWordSet.add("about_the_digital_garden");
    searchMap.set("each", eachWordSet);

let tagsWordSet = new Set();
        tagsWordSet.add("career_crises");
        tagsWordSet.add("performance");
        tagsWordSet.add("how_to_find_you_career");
        tagsWordSet.add("interest");
        tagsWordSet.add("day_dreams");
        tagsWordSet.add("devops");
        tagsWordSet.add("terraform");
        tagsWordSet.add("how_to_create_a_python_project");
        tagsWordSet.add("choice");
        tagsWordSet.add("programming");
    searchMap.set("tags", tagsWordSet);

let bucketWordSet = new Set();
        bucketWordSet.add("terraform");
    searchMap.set("bucket", bucketWordSet);

let containsWordSet = new Set();
        containsWordSet.add("performance");
    searchMap.set("contains", containsWordSet);

let asWordSet = new Set();
        asWordSet.add("career_crises");
        asWordSet.add("terraform");
        asWordSet.add("choice");
    searchMap.set("as", asWordSet);

let requestedWordSet = new Set();
        requestedWordSet.add("terraform");
    searchMap.set("requested", requestedWordSet);

let atWordSet = new Set();
        atWordSet.add("about_the_digital_garden");
    searchMap.set("at", atWordSet);

let reWordSet = new Set();
        reWordSet.add("choice");
    searchMap.set("re", reWordSet);

let creatingWordSet = new Set();
        creatingWordSet.add("terraform");
    searchMap.set("creating", creatingWordSet);

let startingWordSet = new Set();
        startingWordSet.add("terraform");
    searchMap.set("starting", startingWordSet);

let subWordSet = new Set();
        subWordSet.add("programming");
    searchMap.set("sub", subWordSet);

let sharedWordSet = new Set();
        sharedWordSet.add("terraform");
    searchMap.set("shared", sharedWordSet);

let weeksWordSet = new Set();
        weeksWordSet.add("interest");
    searchMap.set("weeks", weeksWordSet);

let criterionWordSet = new Set();
        criterionWordSet.add("interest");
    searchMap.set("criterion", criterionWordSet);

let roleWordSet = new Set();
        roleWordSet.add("career_crises");
        roleWordSet.add("terraform");
    searchMap.set("role", roleWordSet);

let beWordSet = new Set();
        beWordSet.add("career_crises");
        beWordSet.add("terraform");
        beWordSet.add("choice");
    searchMap.set("be", beWordSet);

let achieveWordSet = new Set();
        achieveWordSet.add("choice");
    searchMap.set("achieve", achieveWordSet);

let experimentsWordSet = new Set();
        experimentsWordSet.add("choice");
    searchMap.set("experiments", experimentsWordSet);

let anotherWordSet = new Set();
        anotherWordSet.add("terraform");
    searchMap.set("another", anotherWordSet);

let overcomeWordSet = new Set();
        overcomeWordSet.add("interest");
    searchMap.set("overcome", overcomeWordSet);

let inspiringWordSet = new Set();
        inspiringWordSet.add("interest");
    searchMap.set("inspiring", inspiringWordSet);

let choosingWordSet = new Set();
        choosingWordSet.add("choice");
    searchMap.set("choosing", choosingWordSet);

let twoWordSet = new Set();
        twoWordSet.add("interest");
    searchMap.set("two", twoWordSet);

let exampleWordSet = new Set();
        exampleWordSet.add("terraform");
    searchMap.set("example", exampleWordSet);

let rememberWordSet = new Set();
        rememberWordSet.add("about_the_digital_garden");
    searchMap.set("remember", rememberWordSet);

let intoWordSet = new Set();
        intoWordSet.add("terraform");
    searchMap.set("into", intoWordSet);

let howWordSet = new Set();
        howWordSet.add("career_crises");
        howWordSet.add("how_to_find_you_career");
        howWordSet.add("interest");
        howWordSet.add("day_dreams");
        howWordSet.add("terraform");
        howWordSet.add("about_the_digital_garden");
        howWordSet.add("how_to_create_a_python_project");
        howWordSet.add("choice");
    searchMap.set("how", howWordSet);

let defaultWordSet = new Set();
        defaultWordSet.add("terraform");
    searchMap.set("default", defaultWordSet);

let foundWordSet = new Set();
        foundWordSet.add("career_crises");
    searchMap.set("found", foundWordSet);

let sameWordSet = new Set();
        sameWordSet.add("career_crises");
        sameWordSet.add("terraform");
    searchMap.set("same", sameWordSet);

let desiredWordSet = new Set();
        desiredWordSet.add("terraform");
    searchMap.set("desired", desiredWordSet);

let areWordSet = new Set();
        areWordSet.add("career_crises");
        areWordSet.add("interest");
        areWordSet.add("day_dreams");
        areWordSet.add("about_the_digital_garden");
    searchMap.set("are", areWordSet);

let byWordSet = new Set();
        byWordSet.add("terraform");
    searchMap.set("by", byWordSet);

let expectationsWordSet = new Set();
        expectationsWordSet.add("career_crises");
    searchMap.set("expectations", expectationsWordSet);

let freeWordSet = new Set();
        freeWordSet.add("day_dreams");
    searchMap.set("free", freeWordSet);

let soWordSet = new Set();
        soWordSet.add("career_crises");
        soWordSet.add("interest");
        soWordSet.add("terraform");
    searchMap.set("so", soWordSet);

let arnWordSet = new Set();
        arnWordSet.add("terraform");
    searchMap.set("arn", arnWordSet);

let situationWordSet = new Set();
        situationWordSet.add("career_crises");
    searchMap.set("situation", situationWordSet);

let keyWordSet = new Set();
        keyWordSet.add("terraform");
    searchMap.set("key", keyWordSet);

let linkedWordSet = new Set();
        linkedWordSet.add("about_the_digital_garden");
    searchMap.set("linked", linkedWordSet);

let cdWordSet = new Set();
        cdWordSet.add("how_to_create_a_python_project");
    searchMap.set("cd", cdWordSet);

let aWordSet = new Set();
        aWordSet.add("career_crises");
        aWordSet.add("how_to_find_you_career");
        aWordSet.add("interest");
        aWordSet.add("day_dreams");
        aWordSet.add("toc");
        aWordSet.add("terraform");
        aWordSet.add("about_the_digital_garden");
        aWordSet.add("how_to_create_a_python_project");
        aWordSet.add("choice");
    searchMap.set("a", aWordSet);

let setWordSet = new Set();
        setWordSet.add("terraform");
        setWordSet.add("choice");
    searchMap.set("set", setWordSet);

let organaizedWordSet = new Set();
        organaizedWordSet.add("about_the_digital_garden");
    searchMap.set("organaized", organaizedWordSet);

let decisionWordSet = new Set();
        decisionWordSet.add("choice");
    searchMap.set("decision", decisionWordSet);

let necessaryWordSet = new Set();
        necessaryWordSet.add("interest");
        necessaryWordSet.add("terraform");
        necessaryWordSet.add("how_to_create_a_python_project");
    searchMap.set("necessary", necessaryWordSet);

let businessWordSet = new Set();
        businessWordSet.add("how_to_find_you_career");
    searchMap.set("business", businessWordSet);

let oneWordSet = new Set();
        oneWordSet.add("terraform");
    searchMap.set("one", oneWordSet);

let subtopicsWordSet = new Set();
        subtopicsWordSet.add("toc");
    searchMap.set("subtopics", subtopicsWordSet);

let wordsWordSet = new Set();
        wordsWordSet.add("about_the_digital_garden");
    searchMap.set("words", wordsWordSet);

let makesWordSet = new Set();
        makesWordSet.add("interest");
    searchMap.set("makes", makesWordSet);

let iWordSet = new Set();
        iWordSet.add("about_the_digital_garden");
        iWordSet.add("choice");
    searchMap.set("i", iWordSet);

let possibleWordSet = new Set();
        possibleWordSet.add("day_dreams");
        possibleWordSet.add("choice");
    searchMap.set("possible", possibleWordSet);

let rightWordSet = new Set();
        rightWordSet.add("choice");
    searchMap.set("right", rightWordSet);

let teamWordSet = new Set();
        teamWordSet.add("terraform");
    searchMap.set("team", teamWordSet);

let mWordSet = new Set();
        mWordSet.add("how_to_create_a_python_project");
        mWordSet.add("choice");
    searchMap.set("m", mWordSet);

let actuallyWordSet = new Set();
        actuallyWordSet.add("day_dreams");
        actuallyWordSet.add("choice");
    searchMap.set("actually", actuallyWordSet);

let theWordSet = new Set();
        theWordSet.add("career_crises");
        theWordSet.add("interest");
        theWordSet.add("day_dreams");
        theWordSet.add("terraform");
        theWordSet.add("about_the_digital_garden");
        theWordSet.add("choice");
    searchMap.set("the", theWordSet);

let boringWordSet = new Set();
        boringWordSet.add("interest");
    searchMap.set("boring", boringWordSet);

let fastWordSet = new Set();
        fastWordSet.add("choice");
    searchMap.set("fast", fastWordSet);

let sWordSet = new Set();
        sWordSet.add("career_crises");
        sWordSet.add("interest");
        sWordSet.add("day_dreams");
        sWordSet.add("terraform");
    searchMap.set("s", sWordSet);

let tWordSet = new Set();
        tWordSet.add("career_crises");
        tWordSet.add("terraform");
        tWordSet.add("choice");
    searchMap.set("t", tWordSet);

let inspireWordSet = new Set();
        inspireWordSet.add("interest");
    searchMap.set("inspire", inspireWordSet);

let vWordSet = new Set();
        vWordSet.add("career_crises");
        vWordSet.add("performance");
        vWordSet.add("how_to_find_you_career");
        vWordSet.add("interest");
        vWordSet.add("day_dreams");
        vWordSet.add("devops");
        vWordSet.add("toc");
        vWordSet.add("terraform");
        vWordSet.add("about_the_digital_garden");
        vWordSet.add("how_to_create_a_python_project");
        vWordSet.add("choice");
        vWordSet.add("programming");
    searchMap.set("v", vWordSet);

let excitingWordSet = new Set();
        excitingWordSet.add("interest");
    searchMap.set("exciting", excitingWordSet);

let toWordSet = new Set();
        toWordSet.add("career_crises");
        toWordSet.add("performance");
        toWordSet.add("how_to_find_you_career");
        toWordSet.add("interest");
        toWordSet.add("day_dreams");
        toWordSet.add("toc");
        toWordSet.add("terraform");
        toWordSet.add("about_the_digital_garden");
        toWordSet.add("how_to_create_a_python_project");
        toWordSet.add("choice");
        toWordSet.add("programming");
    searchMap.set("to", toWordSet);

let configWordSet = new Set();
        configWordSet.add("terraform");
    searchMap.set("config", configWordSet);

let thingWordSet = new Set();
        thingWordSet.add("terraform");
    searchMap.set("thing", thingWordSet);

let venvWordSet = new Set();
        venvWordSet.add("how_to_create_a_python_project");
    searchMap.set("venv", venvWordSet);

let throughWordSet = new Set();
        throughWordSet.add("day_dreams");
    searchMap.set("through", throughWordSet);

let butWordSet = new Set();
        butWordSet.add("career_crises");
        butWordSet.add("day_dreams");
        butWordSet.add("terraform");
        butWordSet.add("choice");
    searchMap.set("but", butWordSet);

let notesWordSet = new Set();
        notesWordSet.add("about_the_digital_garden");
    searchMap.set("notes", notesWordSet);

let digWordSet = new Set();
        digWordSet.add("interest");
    searchMap.set("dig", digWordSet);

let separateWordSet = new Set();
        separateWordSet.add("terraform");
    searchMap.set("separate", separateWordSet);

let declareWordSet = new Set();
        declareWordSet.add("terraform");
    searchMap.set("declare", declareWordSet);

let buyWordSet = new Set();
        buyWordSet.add("day_dreams");
    searchMap.set("buy", buyWordSet);

let projectWordSet = new Set();
        projectWordSet.add("how_to_create_a_python_project");
    searchMap.set("project", projectWordSet);

let runWordSet = new Set();
        runWordSet.add("how_to_create_a_python_project");
    searchMap.set("run", runWordSet);

let sourceWordSet = new Set();
        sourceWordSet.add("how_to_create_a_python_project");
    searchMap.set("source", sourceWordSet);

let doWordSet = new Set();
        doWordSet.add("choice");
    searchMap.set("do", doWordSet);

let downWordSet = new Set();
        downWordSet.add("interest");
    searchMap.set("down", downWordSet);

let observeWordSet = new Set();
        observeWordSet.add("interest");
    searchMap.set("observe", observeWordSet);

let advertismentWordSet = new Set();
        advertismentWordSet.add("career_crises");
    searchMap.set("advertisment", advertismentWordSet);

let bringsWordSet = new Set();
        bringsWordSet.add("choice");
    searchMap.set("brings", bringsWordSet);

let biasWordSet = new Set();
        biasWordSet.add("career_crises");
    searchMap.set("bias", biasWordSet);

let thingsWordSet = new Set();
        thingsWordSet.add("interest");
        thingsWordSet.add("about_the_digital_garden");
    searchMap.set("things", thingsWordSet);

let implementWordSet = new Set();
        implementWordSet.add("how_to_create_a_python_project");
    searchMap.set("implement", implementWordSet);

let yourselfWordSet = new Set();
        yourselfWordSet.add("interest");
    searchMap.set("yourself", yourselfWordSet);

let hasWordSet = new Set();
        hasWordSet.add("career_crises");
        hasWordSet.add("day_dreams");
    searchMap.set("has", hasWordSet);

let workspacesWordSet = new Set();
        workspacesWordSet.add("terraform");
    searchMap.set("workspaces", workspacesWordSet);

let resultsWordSet = new Set();
        resultsWordSet.add("terraform");
    searchMap.set("results", resultsWordSet);

let usWordSet = new Set();
        usWordSet.add("interest");
    searchMap.set("us", usWordSet);

let programmingWordSet = new Set();
        programmingWordSet.add("performance");
        programmingWordSet.add("toc");
        programmingWordSet.add("how_to_create_a_python_project");
        programmingWordSet.add("programming");
    searchMap.set("programming", programmingWordSet);

let realizeWordSet = new Set();
        realizeWordSet.add("choice");
    searchMap.set("realize", realizeWordSet);

let barmanWordSet = new Set();
        barmanWordSet.add("day_dreams");
    searchMap.set("barman", barmanWordSet);

let whichWordSet = new Set();
        whichWordSet.add("terraform");
    searchMap.set("which", whichWordSet);

let doesnWordSet = new Set();
        doesnWordSet.add("terraform");
    searchMap.set("doesn", doesnWordSet);

let lastWordSet = new Set();
        lastWordSet.add("terraform");
    searchMap.set("last", lastWordSet);

let finallyWordSet = new Set();
        finallyWordSet.add("how_to_create_a_python_project");
    searchMap.set("finally", finallyWordSet);

let thisWordSet = new Set();
        thisWordSet.add("career_crises");
        thisWordSet.add("performance");
        thisWordSet.add("interest");
        thisWordSet.add("toc");
        thisWordSet.add("about_the_digital_garden");
        thisWordSet.add("choice");
    searchMap.set("this", thisWordSet);

let itsWordSet = new Set();
        itsWordSet.add("interest");
    searchMap.set("its", itsWordSet);

let collectionWordSet = new Set();
        collectionWordSet.add("about_the_digital_garden");
    searchMap.set("collection", collectionWordSet);

let checkWordSet = new Set();
        checkWordSet.add("day_dreams");
        checkWordSet.add("choice");
    searchMap.set("check", checkWordSet);

let listWordSet = new Set();
        listWordSet.add("interest");
    searchMap.set("list", listWordSet);

let lookWordSet = new Set();
        lookWordSet.add("about_the_digital_garden");
    searchMap.set("look", lookWordSet);

let modulesWordSet = new Set();
        modulesWordSet.add("how_to_create_a_python_project");
    searchMap.set("modules", modulesWordSet);

let takeWordSet = new Set();
        takeWordSet.add("day_dreams");
    searchMap.set("take", takeWordSet);

let externalWordSet = new Set();
        externalWordSet.add("interest");
    searchMap.set("external", externalWordSet);

let longerWordSet = new Set();
        longerWordSet.add("choice");
    searchMap.set("longer", longerWordSet);

let nameWordSet = new Set();
        nameWordSet.add("how_to_create_a_python_project");
    searchMap.set("name", nameWordSet);

let httpWordSet = new Set();
        httpWordSet.add("performance");
    searchMap.set("http", httpWordSet);

let helpsWordSet = new Set();
        helpsWordSet.add("interest");
    searchMap.set("helps", helpsWordSet);

let pageWordSet = new Set();
        pageWordSet.add("performance");
        pageWordSet.add("programming");
    searchMap.set("page", pageWordSet);

let regionWordSet = new Set();
        regionWordSet.add("terraform");
    searchMap.set("region", regionWordSet);

let changedWordSet = new Set();
        changedWordSet.add("career_crises");
        changedWordSet.add("choice");
    searchMap.set("changed", changedWordSet);

let someWordSet = new Set();
        someWordSet.add("day_dreams");
        someWordSet.add("about_the_digital_garden");
    searchMap.set("some", someWordSet);

let survivorshipWordSet = new Set();
        survivorshipWordSet.add("career_crises");
    searchMap.set("survivorship", survivorshipWordSet);

let virtualWordSet = new Set();
        virtualWordSet.add("how_to_create_a_python_project");
    searchMap.set("virtual", virtualWordSet);

let doingWordSet = new Set();
        doingWordSet.add("choice");
    searchMap.set("doing", doingWordSet);

let reasonsWordSet = new Set();
        reasonsWordSet.add("career_crises");
    searchMap.set("reasons", reasonsWordSet);

let appliedWordSet = new Set();
        appliedWordSet.add("career_crises");
    searchMap.set("applied", appliedWordSet);

let neededWordSet = new Set();
        neededWordSet.add("terraform");
    searchMap.set("needed", neededWordSet);

let ideaWordSet = new Set();
        ideaWordSet.add("day_dreams");
        ideaWordSet.add("terraform");
    searchMap.set("idea", ideaWordSet);

let motivationWordSet = new Set();
        motivationWordSet.add("interest");
    searchMap.set("motivation", motivationWordSet);

let changesWordSet = new Set();
        changesWordSet.add("career_crises");
        changesWordSet.add("terraform");
    searchMap.set("changes", changesWordSet);

let forWordSet = new Set();
        forWordSet.add("career_crises");
        forWordSet.add("interest");
        forWordSet.add("day_dreams");
        forWordSet.add("devops");
        forWordSet.add("terraform");
    searchMap.set("for", forWordSet);

let descriptionWordSet = new Set();
        descriptionWordSet.add("terraform");
    searchMap.set("description", descriptionWordSet);

let mistakesWordSet = new Set();
        mistakesWordSet.add("career_crises");
        mistakesWordSet.add("how_to_find_you_career");
    searchMap.set("mistakes", mistakesWordSet);

let nonWordSet = new Set();
        nonWordSet.add("about_the_digital_garden");
    searchMap.set("non", nonWordSet);

let directoryWordSet = new Set();
        directoryWordSet.add("terraform");
    searchMap.set("directory", directoryWordSet);

let weWordSet = new Set();
        weWordSet.add("career_crises");
    searchMap.set("we", weWordSet);

let lifeWordSet = new Set();
        lifeWordSet.add("career_crises");
    searchMap.set("life", lifeWordSet);

let missWordSet = new Set();
        missWordSet.add("day_dreams");
    searchMap.set("miss", missWordSet);

let statesWordSet = new Set();
        statesWordSet.add("terraform");
    searchMap.set("states", statesWordSet);

let societyWordSet = new Set();
        societyWordSet.add("interest");
    searchMap.set("society", societyWordSet);

let notWordSet = new Set();
        notWordSet.add("career_crises");
        notWordSet.add("interest");
        notWordSet.add("day_dreams");
        notWordSet.add("choice");
    searchMap.set("not", notWordSet);

let terrafromWordSet = new Set();
        terrafromWordSet.add("terraform");
    searchMap.set("terrafrom", terrafromWordSet);

let relatedWordSet = new Set();
        relatedWordSet.add("performance");
        relatedWordSet.add("devops");
    searchMap.set("related", relatedWordSet);

let providerWordSet = new Set();
        providerWordSet.add("terraform");
    searchMap.set("provider", providerWordSet);

let interestWordSet = new Set();
        interestWordSet.add("how_to_find_you_career");
        interestWordSet.add("interest");
    searchMap.set("interest", interestWordSet);

let rootWordSet = new Set();
        rootWordSet.add("terraform");
    searchMap.set("root", rootWordSet);

let missingWordSet = new Set();
        missingWordSet.add("choice");
    searchMap.set("missing", missingWordSet);

let ignoreWordSet = new Set();
        ignoreWordSet.add("day_dreams");
    searchMap.set("ignore", ignoreWordSet);

let directoriesWordSet = new Set();
        directoriesWordSet.add("terraform");
    searchMap.set("directories", directoriesWordSet);

let livedWordSet = new Set();
        livedWordSet.add("career_crises");
    searchMap.set("lived", livedWordSet);

let bonusesWordSet = new Set();
        bonusesWordSet.add("interest");
    searchMap.set("bonuses", bonusesWordSet);

let linerWordSet = new Set();
        linerWordSet.add("about_the_digital_garden");
    searchMap.set("liner", linerWordSet);

let justWordSet = new Set();
        justWordSet.add("career_crises");
        justWordSet.add("interest");
        justWordSet.add("day_dreams");
        justWordSet.add("terraform");
    searchMap.set("just", justWordSet);

let liveWordSet = new Set();
        liveWordSet.add("career_crises");
    searchMap.set("live", liveWordSet);

let digitalWordSet = new Set();
        digitalWordSet.add("about_the_digital_garden");
    searchMap.set("digital", digitalWordSet);

let mistakeWordSet = new Set();
        mistakeWordSet.add("choice");
    searchMap.set("mistake", mistakeWordSet);

let figureWordSet = new Set();
        figureWordSet.add("choice");
    searchMap.set("figure", figureWordSet);

let applyWordSet = new Set();
        applyWordSet.add("terraform");
    searchMap.set("apply", applyWordSet);

let approvalWordSet = new Set();
        approvalWordSet.add("interest");
    searchMap.set("approval", approvalWordSet);

let startWordSet = new Set();
        startWordSet.add("career_crises");
        startWordSet.add("day_dreams");
        startWordSet.add("choice");
    searchMap.set("start", startWordSet);

let cheepWordSet = new Set();
        cheepWordSet.add("choice");
    searchMap.set("cheep", cheepWordSet);

let readingWordSet = new Set();
        readingWordSet.add("terraform");
    searchMap.set("reading", readingWordSet);

let advicesWordSet = new Set();
        advicesWordSet.add("how_to_find_you_career");
    searchMap.set("advices", advicesWordSet);

let envWordSet = new Set();
        envWordSet.add("terraform");
        envWordSet.add("how_to_create_a_python_project");
    searchMap.set("env", envWordSet);

let keptWordSet = new Set();
        keptWordSet.add("terraform");
    searchMap.set("kept", keptWordSet);

let wayWordSet = new Set();
        wayWordSet.add("career_crises");
        wayWordSet.add("terraform");
        wayWordSet.add("about_the_digital_garden");
        wayWordSet.add("choice");
    searchMap.set("way", wayWordSet);

let withWordSet = new Set();
        withWordSet.add("day_dreams");
    searchMap.set("with", withWordSet);

let whatWordSet = new Set();
        whatWordSet.add("career_crises");
        whatWordSet.add("interest");
        whatWordSet.add("day_dreams");
        whatWordSet.add("choice");
    searchMap.set("what", whatWordSet);

let moneyWordSet = new Set();
        moneyWordSet.add("interest");
        moneyWordSet.add("day_dreams");
    searchMap.set("money", moneyWordSet);

let thereWordSet = new Set();
        thereWordSet.add("career_crises");
        thereWordSet.add("terraform");
    searchMap.set("there", thereWordSet);

let achievedWordSet = new Set();
        achievedWordSet.add("career_crises");
    searchMap.set("achieved", achievedWordSet);

let clicksWordSet = new Set();
        clicksWordSet.add("interest");
    searchMap.set("clicks", clicksWordSet);

let bashWordSet = new Set();
        bashWordSet.add("how_to_create_a_python_project");
    searchMap.set("bash", bashWordSet);

let timeWordSet = new Set();
        timeWordSet.add("career_crises");
    searchMap.set("time", timeWordSet);

let articlesWordSet = new Set();
        articlesWordSet.add("performance");
    searchMap.set("articles", articlesWordSet);

let localsWordSet = new Set();
        localsWordSet.add("terraform");
    searchMap.set("locals", localsWordSet);

let takingWordSet = new Set();
        takingWordSet.add("about_the_digital_garden");
    searchMap.set("taking", takingWordSet);

let bigWordSet = new Set();
        bigWordSet.add("day_dreams");
    searchMap.set("big", bigWordSet);

let veryWordSet = new Set();
        veryWordSet.add("career_crises");
        veryWordSet.add("day_dreams");
    searchMap.set("very", veryWordSet);

let careerWordSet = new Set();
        careerWordSet.add("career_crises");
        careerWordSet.add("how_to_find_you_career");
        careerWordSet.add("interest");
        careerWordSet.add("day_dreams");
        careerWordSet.add("choice");
    searchMap.set("career", careerWordSet);

let binWordSet = new Set();
        binWordSet.add("how_to_create_a_python_project");
    searchMap.set("bin", binWordSet);

let backedWordSet = new Set();
        backedWordSet.add("terraform");
    searchMap.set("backed", backedWordSet);

let happyWordSet = new Set();
        happyWordSet.add("career_crises");
    searchMap.set("happy", happyWordSet);

let programWordSet = new Set();
        programWordSet.add("how_to_create_a_python_project");
    searchMap.set("program", programWordSet);

let duringWordSet = new Set();
        duringWordSet.add("interest");
    searchMap.set("during", duringWordSet);

let typeWordSet = new Set();
        typeWordSet.add("terraform");
    searchMap.set("type", typeWordSet);

let approachWordSet = new Set();
        approachWordSet.add("day_dreams");
    searchMap.set("approach", approachWordSet);

let whenWordSet = new Set();
        whenWordSet.add("career_crises");
    searchMap.set("when", whenWordSet);

let modelWordSet = new Set();
        modelWordSet.add("career_crises");
    searchMap.set("model", modelWordSet);

let adocWordSet = new Set();
        adocWordSet.add("career_crises");
        adocWordSet.add("performance");
        adocWordSet.add("how_to_find_you_career");
        adocWordSet.add("interest");
        adocWordSet.add("day_dreams");
        adocWordSet.add("devops");
        adocWordSet.add("toc");
        adocWordSet.add("terraform");
        adocWordSet.add("about_the_digital_garden");
        adocWordSet.add("how_to_create_a_python_project");
        adocWordSet.add("choice");
        adocWordSet.add("programming");
    searchMap.set("adoc", adocWordSet);

let nobodyWordSet = new Set();
        nobodyWordSet.add("choice");
    searchMap.set("nobody", nobodyWordSet);

let writeWordSet = new Set();
        writeWordSet.add("interest");
    searchMap.set("write", writeWordSet);

let ifWordSet = new Set();
        ifWordSet.add("interest");
        ifWordSet.add("day_dreams");
        ifWordSet.add("choice");
    searchMap.set("if", ifWordSet);

let planWordSet = new Set();
        planWordSet.add("terraform");
    searchMap.set("plan", planWordSet);

let flowWordSet = new Set();
        flowWordSet.add("interest");
    searchMap.set("flow", flowWordSet);

let fearWordSet = new Set();
        fearWordSet.add("choice");
    searchMap.set("fear", fearWordSet);

let crisesWordSet = new Set();
        crisesWordSet.add("career_crises");
        crisesWordSet.add("how_to_find_you_career");
    searchMap.set("crises", crisesWordSet);

let initWordSet = new Set();
        initWordSet.add("terraform");
    searchMap.set("init", initWordSet);

let pythonWordSet = new Set();
        pythonWordSet.add("how_to_create_a_python_project");
    searchMap.set("python", pythonWordSet);

let stillWordSet = new Set();
        stillWordSet.add("day_dreams");
    searchMap.set("still", stillWordSet);

let havingWordSet = new Set();
        havingWordSet.add("career_crises");
        havingWordSet.add("toc");
    searchMap.set("having", havingWordSet);

let goalWordSet = new Set();
        goalWordSet.add("choice");
    searchMap.set("goal", goalWordSet);

let inWordSet = new Set();
        inWordSet.add("career_crises");
        inWordSet.add("interest");
        inWordSet.add("terraform");
        inWordSet.add("choice");
    searchMap.set("in", inWordSet);

let dependsWordSet = new Set();
        dependsWordSet.add("terraform");
    searchMap.set("depends", dependsWordSet);

let dependencyWordSet = new Set();
        dependencyWordSet.add("terraform");
    searchMap.set("dependency", dependencyWordSet);

let workWordSet = new Set();
        workWordSet.add("interest");
    searchMap.set("work", workWordSet);

let varWordSet = new Set();
        varWordSet.add("terraform");
    searchMap.set("var", varWordSet);

let nothingWordSet = new Set();
        nothingWordSet.add("career_crises");
        nothingWordSet.add("terraform");
    searchMap.set("nothing", nothingWordSet);

let understandWordSet = new Set();
        understandWordSet.add("career_crises");
    searchMap.set("understand", understandWordSet);

let specifyWordSet = new Set();
        specifyWordSet.add("choice");
    searchMap.set("specify", specifyWordSet);

let indexWordSet = new Set();
        indexWordSet.add("about_the_digital_garden");
    searchMap.set("index", indexWordSet);

let comeWordSet = new Set();
        comeWordSet.add("day_dreams");
    searchMap.set("come", comeWordSet);

let isWordSet = new Set();
        isWordSet.add("career_crises");
        isWordSet.add("interest");
        isWordSet.add("day_dreams");
        isWordSet.add("toc");
        isWordSet.add("terraform");
        isWordSet.add("about_the_digital_garden");
        isWordSet.add("choice");
    searchMap.set("is", isWordSet);

let itWordSet = new Set();
        itWordSet.add("career_crises");
        itWordSet.add("interest");
        itWordSet.add("day_dreams");
        itWordSet.add("terraform");
        itWordSet.add("choice");
    searchMap.set("it", itWordSet);

let brewWordSet = new Set();
        brewWordSet.add("how_to_create_a_python_project");
    searchMap.set("brew", brewWordSet);

let loadingWordSet = new Set();
        loadingWordSet.add("terraform");
    searchMap.set("loading", loadingWordSet);

let scriptWordSet = new Set();
        scriptWordSet.add("how_to_create_a_python_project");
    searchMap.set("script", scriptWordSet);

let failWordSet = new Set();
        failWordSet.add("choice");
    searchMap.set("fail", failWordSet);

let installWordSet = new Set();
        installWordSet.add("how_to_create_a_python_project");
    searchMap.set("install", installWordSet);

let evenWordSet = new Set();
        evenWordSet.add("day_dreams");
    searchMap.set("even", evenWordSet);

let contentsWordSet = new Set();
        contentsWordSet.add("toc");
    searchMap.set("contents", contentsWordSet);

let amongWordSet = new Set();
        amongWordSet.add("terraform");
    searchMap.set("among", amongWordSet);

let becomeWordSet = new Set();
        becomeWordSet.add("career_crises");
        becomeWordSet.add("interest");
        becomeWordSet.add("day_dreams");
        becomeWordSet.add("choice");
    searchMap.set("become", becomeWordSet);

let internalWordSet = new Set();
        internalWordSet.add("interest");
    searchMap.set("internal", internalWordSet);

let donWordSet = new Set();
        donWordSet.add("career_crises");
        donWordSet.add("choice");
    searchMap.set("don", donWordSet);

let otherWordSet = new Set();
        otherWordSet.add("terraform");
        otherWordSet.add("about_the_digital_garden");
    searchMap.set("other", otherWordSet);

let tocWordSet = new Set();
        tocWordSet.add("devops");
        tocWordSet.add("toc");
        tocWordSet.add("about_the_digital_garden");
        tocWordSet.add("programming");
    searchMap.set("toc", tocWordSet);

let thinkingWordSet = new Set();
        thinkingWordSet.add("career_crises");
    searchMap.set("thinking", thinkingWordSet);

let localWordSet = new Set();
        localWordSet.add("terraform");
    searchMap.set("local", localWordSet);

let outWordSet = new Set();
        outWordSet.add("choice");
    searchMap.set("out", outWordSet);

let lotWordSet = new Set();
        lotWordSet.add("interest");
        lotWordSet.add("day_dreams");
    searchMap.set("lot", lotWordSet);

let fileWordSet = new Set();
        fileWordSet.add("how_to_find_you_career");
        fileWordSet.add("toc");
        fileWordSet.add("terraform");
    searchMap.set("file", fileWordSet);

let waysWordSet = new Set();
        waysWordSet.add("how_to_find_you_career");
        waysWordSet.add("terraform");
    searchMap.set("ways", waysWordSet);

let topWordSet = new Set();
        topWordSet.add("programming");
    searchMap.set("top", topWordSet);

let freedomWordSet = new Set();
        freedomWordSet.add("how_to_find_you_career");
    searchMap.set("freedom", freedomWordSet);

let webWordSet = new Set();
        webWordSet.add("about_the_digital_garden");
    searchMap.set("web", webWordSet);

let haveWordSet = new Set();
        haveWordSet.add("career_crises");
        haveWordSet.add("interest");
        haveWordSet.add("day_dreams");
        haveWordSet.add("choice");
    searchMap.set("have", haveWordSet);

let vacationWordSet = new Set();
        vacationWordSet.add("day_dreams");
    searchMap.set("vacation", vacationWordSet);

let shareWordSet = new Set();
        shareWordSet.add("terraform");
    searchMap.set("share", shareWordSet);

let placeWordSet = new Set();
        placeWordSet.add("choice");
    searchMap.set("place", placeWordSet);

let everythingWordSet = new Set();
        everythingWordSet.add("choice");
    searchMap.set("everything", everythingWordSet);

let tableWordSet = new Set();
        tableWordSet.add("toc");
    searchMap.set("table", tableWordSet);

let knowsWordSet = new Set();
        knowsWordSet.add("choice");
    searchMap.set("knows", knowsWordSet);

let implementingWordSet = new Set();
        implementingWordSet.add("day_dreams");
    searchMap.set("implementing", implementingWordSet);

let moreWordSet = new Set();
        moreWordSet.add("interest");
        moreWordSet.add("choice");
    searchMap.set("more", moreWordSet);

let couldWordSet = new Set();
        couldWordSet.add("interest");
        couldWordSet.add("day_dreams");
        couldWordSet.add("terraform");
    searchMap.set("could", couldWordSet);

let topicsWordSet = new Set();
        topicsWordSet.add("devops");
        topicsWordSet.add("programming");
    searchMap.set("topics", topicsWordSet);

let changeWordSet = new Set();
        changeWordSet.add("terraform");
    searchMap.set("change", changeWordSet);

let greatWordSet = new Set();
        greatWordSet.add("career_crises");
    searchMap.set("great", greatWordSet);

let wrongWordSet = new Set();
        wrongWordSet.add("choice");
    searchMap.set("wrong", wrongWordSet);

let siteWordSet = new Set();
        siteWordSet.add("about_the_digital_garden");
    searchMap.set("site", siteWordSet);

let alexanderWordSet = new Set();
        alexanderWordSet.add("career_crises");
        alexanderWordSet.add("performance");
        alexanderWordSet.add("how_to_find_you_career");
        alexanderWordSet.add("interest");
        alexanderWordSet.add("day_dreams");
        alexanderWordSet.add("devops");
        alexanderWordSet.add("toc");
        alexanderWordSet.add("terraform");
        alexanderWordSet.add("about_the_digital_garden");
        alexanderWordSet.add("how_to_create_a_python_project");
        alexanderWordSet.add("choice");
        alexanderWordSet.add("programming");
    searchMap.set("alexander", alexanderWordSet);

let futureWordSet = new Set();
        futureWordSet.add("choice");
    searchMap.set("future", futureWordSet);

let ableWordSet = new Set();
        ableWordSet.add("terraform");
    searchMap.set("able", ableWordSet);

let gardenWordSet = new Set();
        gardenWordSet.add("about_the_digital_garden");
    searchMap.set("garden", gardenWordSet);

let choiceWordSet = new Set();
        choiceWordSet.add("how_to_find_you_career");
        choiceWordSet.add("choice");
    searchMap.set("choice", choiceWordSet);

let firstWordSet = new Set();
        firstWordSet.add("choice");
    searchMap.set("first", firstWordSet);

let smallWordSet = new Set();
        smallWordSet.add("day_dreams");
        smallWordSet.add("choice");
    searchMap.set("small", smallWordSet);

let llWordSet = new Set();
        llWordSet.add("how_to_find_you_career");
    searchMap.set("ll", llWordSet);

let quickWordSet = new Set();
        quickWordSet.add("terraform");
        quickWordSet.add("how_to_create_a_python_project");
    searchMap.set("quick", quickWordSet);

let perfectWordSet = new Set();
        perfectWordSet.add("career_crises");
    searchMap.set("perfect", perfectWordSet);

let beforeWordSet = new Set();
        beforeWordSet.add("career_crises");
    searchMap.set("before", beforeWordSet);

let environmentsWordSet = new Set();
        environmentsWordSet.add("terraform");
    searchMap.set("environments", environmentsWordSet);

let subjectWordSet = new Set();
        subjectWordSet.add("interest");
    searchMap.set("subject", subjectWordSet);

let feelWordSet = new Set();
        feelWordSet.add("day_dreams");
        feelWordSet.add("choice");
    searchMap.set("feel", feelWordSet);

let mainWordSet = new Set();
        mainWordSet.add("choice");
    searchMap.set("main", mainWordSet);

let thatWordSet = new Set();
        thatWordSet.add("career_crises");
        thatWordSet.add("interest");
        thatWordSet.add("day_dreams");
        thatWordSet.add("terraform");
        thatWordSet.add("choice");
    searchMap.set("that", thatWordSet);

let pipWordSet = new Set();
        pipWordSet.add("how_to_create_a_python_project");
    searchMap.set("pip", pipWordSet);

let findWordSet = new Set();
        findWordSet.add("career_crises");
        findWordSet.add("how_to_find_you_career");
        findWordSet.add("interest");
        findWordSet.add("day_dreams");
        findWordSet.add("choice");
    searchMap.set("find", findWordSet);

let sufficientWordSet = new Set();
        sufficientWordSet.add("interest");
    searchMap.set("sufficient", sufficientWordSet);

let membersWordSet = new Set();
        membersWordSet.add("terraform");
    searchMap.set("members", membersWordSet);

let introWordSet = new Set();
        introWordSet.add("career_crises");
        introWordSet.add("performance");
        introWordSet.add("how_to_find_you_career");
        introWordSet.add("interest");
        introWordSet.add("day_dreams");
        introWordSet.add("devops");
        introWordSet.add("toc");
        introWordSet.add("terraform");
        introWordSet.add("about_the_digital_garden");
        introWordSet.add("how_to_create_a_python_project");
        introWordSet.add("choice");
        introWordSet.add("programming");
    searchMap.set("intro", introWordSet);

let shouldWordSet = new Set();
        shouldWordSet.add("career_crises");
        shouldWordSet.add("choice");
    searchMap.set("should", shouldWordSet);

let onlyWordSet = new Set();
        onlyWordSet.add("about_the_digital_garden");
        onlyWordSet.add("choice");
    searchMap.set("only", onlyWordSet);

let quiteWordSet = new Set();
        quiteWordSet.add("day_dreams");
    searchMap.set("quite", quiteWordSet);

let fewWordSet = new Set();
        fewWordSet.add("about_the_digital_garden");
    searchMap.set("few", fewWordSet);

let createWordSet = new Set();
        createWordSet.add("terraform");
        createWordSet.add("how_to_create_a_python_project");
    searchMap.set("create", createWordSet);

let fromWordSet = new Set();
        fromWordSet.add("career_crises");
        fromWordSet.add("interest");
        fromWordSet.add("day_dreams");
        fromWordSet.add("terraform");
    searchMap.set("from", fromWordSet);

let linksWordSet = new Set();
        linksWordSet.add("career_crises");
        linksWordSet.add("performance");
        linksWordSet.add("how_to_find_you_career");
        linksWordSet.add("interest");
        linksWordSet.add("day_dreams");
        linksWordSet.add("devops");
        linksWordSet.add("toc");
        linksWordSet.add("terraform");
        linksWordSet.add("how_to_create_a_python_project");
        linksWordSet.add("choice");
        linksWordSet.add("programming");
    searchMap.set("links", linksWordSet);

let differentWordSet = new Set();
        differentWordSet.add("career_crises");
        differentWordSet.add("terraform");
    searchMap.set("different", differentWordSet);

let potentialWordSet = new Set();
        potentialWordSet.add("career_crises");
        potentialWordSet.add("day_dreams");
    searchMap.set("potential", potentialWordSet);

let dayWordSet = new Set();
        dayWordSet.add("how_to_find_you_career");
        dayWordSet.add("day_dreams");
    searchMap.set("day", dayWordSet);

let newWordSet = new Set();
        newWordSet.add("day_dreams");
    searchMap.set("new", newWordSet);

let idealWordSet = new Set();
        idealWordSet.add("career_crises");
    searchMap.set("ideal", idealWordSet);

let alreadyWordSet = new Set();
        alreadyWordSet.add("interest");
    searchMap.set("already", alreadyWordSet);

let everyoneWordSet = new Set();
        everyoneWordSet.add("career_crises");
        everyoneWordSet.add("choice");
    searchMap.set("everyone", everyoneWordSet);

let levelWordSet = new Set();
        levelWordSet.add("programming");
    searchMap.set("level", levelWordSet);

let resourceWordSet = new Set();
        resourceWordSet.add("terraform");
    searchMap.set("resource", resourceWordSet);

let likeWordSet = new Set();
        likeWordSet.add("how_to_find_you_career");
        likeWordSet.add("day_dreams");
        likeWordSet.add("toc");
        likeWordSet.add("about_the_digital_garden");
        likeWordSet.add("choice");
    searchMap.set("like", likeWordSet);

let konoplevWordSet = new Set();
        konoplevWordSet.add("career_crises");
        konoplevWordSet.add("performance");
        konoplevWordSet.add("how_to_find_you_career");
        konoplevWordSet.add("interest");
        konoplevWordSet.add("day_dreams");
        konoplevWordSet.add("devops");
        konoplevWordSet.add("toc");
        konoplevWordSet.add("terraform");
        konoplevWordSet.add("about_the_digital_garden");
        konoplevWordSet.add("how_to_create_a_python_project");
        konoplevWordSet.add("choice");
        konoplevWordSet.add("programming");
    searchMap.set("konoplev", konoplevWordSet);

let treeWordSet = new Set();
        treeWordSet.add("terraform");
    searchMap.set("tree", treeWordSet);

let touchWordSet = new Set();
        touchWordSet.add("how_to_create_a_python_project");
    searchMap.set("touch", touchWordSet);

let ideasWordSet = new Set();
        ideasWordSet.add("day_dreams");
    searchMap.set("ideas", ideasWordSet);

let myWordSet = new Set();
        myWordSet.add("about_the_digital_garden");
    searchMap.set("my", myWordSet);

let stepsWordSet = new Set();
        stepsWordSet.add("how_to_create_a_python_project");
    searchMap.set("steps", stepsWordSet);

let doneWordSet = new Set();
        doneWordSet.add("terraform");
    searchMap.set("done", doneWordSet);

let mostWordSet = new Set();
        mostWordSet.add("interest");
    searchMap.set("most", mostWordSet);

let importantWordSet = new Set();
        importantWordSet.add("interest");
        importantWordSet.add("day_dreams");
    searchMap.set("important", importantWordSet);

let careersWordSet = new Set();
        careersWordSet.add("career_crises");
    searchMap.set("careers", careersWordSet);

let opositeWordSet = new Set();
        opositeWordSet.add("choice");
    searchMap.set("oposite", opositeWordSet);

let dreamWordSet = new Set();
        dreamWordSet.add("how_to_find_you_career");
        dreamWordSet.add("day_dreams");
    searchMap.set("dream", dreamWordSet);

let personWordSet = new Set();
        personWordSet.add("career_crises");
        personWordSet.add("choice");
    searchMap.set("person", personWordSet);

let keepWordSet = new Set();
        keepWordSet.add("terraform");
    searchMap.set("keep", keepWordSet);

let activateWordSet = new Set();
        activateWordSet.add("how_to_create_a_python_project");
    searchMap.set("activate", activateWordSet);

let createsWordSet = new Set();
        createsWordSet.add("terraform");
    searchMap.set("creates", createsWordSet);

let tryWordSet = new Set();
        tryWordSet.add("day_dreams");
        tryWordSet.add("choice");
    searchMap.set("try", tryWordSet);

let terraformWordSet = new Set();
        terraformWordSet.add("devops");
        terraformWordSet.add("terraform");
    searchMap.set("terraform", terraformWordSet);

let jobWordSet = new Set();
        jobWordSet.add("interest");
        jobWordSet.add("day_dreams");
    searchMap.set("job", jobWordSet);

let collectWordSet = new Set();
        collectWordSet.add("about_the_digital_garden");
    searchMap.set("collect", collectWordSet);

let postponeWordSet = new Set();
        postponeWordSet.add("choice");
    searchMap.set("postpone", postponeWordSet);

let problemsWordSet = new Set();
        problemsWordSet.add("career_crises");
        problemsWordSet.add("interest");
    searchMap.set("problems", problemsWordSet);

let whoWordSet = new Set();
        whoWordSet.add("career_crises");
        whoWordSet.add("interest");
        whoWordSet.add("choice");
    searchMap.set("who", whoWordSet);

let configurationWordSet = new Set();
        configurationWordSet.add("terraform");
    searchMap.set("configuration", configurationWordSet);

let whyWordSet = new Set();
        whyWordSet.add("interest");
        whyWordSet.add("day_dreams");
        whyWordSet.add("about_the_digital_garden");
    searchMap.set("why", whyWordSet);

let dreamsWordSet = new Set();
        dreamsWordSet.add("how_to_find_you_career");
        dreamsWordSet.add("day_dreams");
    searchMap.set("dreams", dreamsWordSet);

let pointWordSet = new Set();
        pointWordSet.add("about_the_digital_garden");
    searchMap.set("point", pointWordSet);

let generalWordSet = new Set();
        generalWordSet.add("toc");
    searchMap.set("general", generalWordSet);

let canWordSet = new Set();
        canWordSet.add("career_crises");
        canWordSet.add("interest");
        canWordSet.add("day_dreams");
        canWordSet.add("choice");
    searchMap.set("can", canWordSet);

let publicWordSet = new Set();
        publicWordSet.add("about_the_digital_garden");
    searchMap.set("public", publicWordSet);

let andWordSet = new Set();
        andWordSet.add("career_crises");
        andWordSet.add("how_to_find_you_career");
        andWordSet.add("interest");
        andWordSet.add("day_dreams");
        andWordSet.add("terraform");
        andWordSet.add("about_the_digital_garden");
        andWordSet.add("how_to_create_a_python_project");
        andWordSet.add("choice");
    searchMap.set("and", andWordSet);

let spendWordSet = new Set();
        spendWordSet.add("interest");
    searchMap.set("spend", spendWordSet);

let ofWordSet = new Set();
        ofWordSet.add("career_crises");
        ofWordSet.add("interest");
        ofWordSet.add("day_dreams");
        ofWordSet.add("toc");
        ofWordSet.add("terraform");
        ofWordSet.add("about_the_digital_garden");
        ofWordSet.add("choice");
    searchMap.set("of", ofWordSet);

let backendWordSet = new Set();
        backendWordSet.add("terraform");
    searchMap.set("backend", backendWordSet);

let okWordSet = new Set();
        okWordSet.add("career_crises");
    searchMap.set("ok", okWordSet);

let makeWordSet = new Set();
        makeWordSet.add("about_the_digital_garden");
        makeWordSet.add("choice");
    searchMap.set("make", makeWordSet);

let excitementsWordSet = new Set();
        excitementsWordSet.add("day_dreams");
    searchMap.set("excitements", excitementsWordSet);

let hearWordSet = new Set();
        hearWordSet.add("career_crises");
    searchMap.set("hear", hearWordSet);

let informsWordSet = new Set();
        informsWordSet.add("terraform");
    searchMap.set("informs", informsWordSet);

let directionWordSet = new Set();
        directionWordSet.add("choice");
    searchMap.set("direction", directionWordSet);

let onWordSet = new Set();
        onWordSet.add("interest");
        onWordSet.add("terraform");
    searchMap.set("on", onWordSet);

let processWordSet = new Set();
        processWordSet.add("about_the_digital_garden");
    searchMap.set("process", processWordSet);

let orWordSet = new Set();
        orWordSet.add("day_dreams");
        orWordSet.add("terraform");
        orWordSet.add("choice");
    searchMap.set("or", orWordSet);

let willWordSet = new Set();
        willWordSet.add("terraform");
    searchMap.set("will", willWordSet);

let mvpWordSet = new Set();
        mvpWordSet.add("day_dreams");
    searchMap.set("mvp", mvpWordSet);

let spentWordSet = new Set();
        spentWordSet.add("day_dreams");
    searchMap.set("spent", spentWordSet);

let interestingWordSet = new Set();
        interestingWordSet.add("interest");
    searchMap.set("interesting", interestingWordSet);

let readsWordSet = new Set();
        readsWordSet.add("terraform");
    searchMap.set("reads", readsWordSet);

let resourcesWordSet = new Set();
        resourcesWordSet.add("terraform");
    searchMap.set("resources", resourcesWordSet);

let anyWordSet = new Set();
        anyWordSet.add("interest");
    searchMap.set("any", anyWordSet);

let commandWordSet = new Set();
        commandWordSet.add("terraform");
    searchMap.set("command", commandWordSet);

let performanceWordSet = new Set();
        performanceWordSet.add("performance");
    searchMap.set("performance", performanceWordSet);

let someoneWordSet = new Set();
        someoneWordSet.add("career_crises");
    searchMap.set("someone", someoneWordSet);

let attentionWordSet = new Set();
        attentionWordSet.add("interest");
    searchMap.set("attention", attentionWordSet);

let writesWordSet = new Set();
        writesWordSet.add("terraform");
    searchMap.set("writes", writesWordSet);

let hypothesisWordSet = new Set();
        hypothesisWordSet.add("day_dreams");
    searchMap.set("hypothesis", hypothesisWordSet);

let providersWordSet = new Set();
        providersWordSet.add("terraform");
    searchMap.set("providers", providersWordSet);


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
