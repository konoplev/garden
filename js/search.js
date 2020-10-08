let filesMap = new Map();

        filesMap.set("programming", {
filename: "programming",
title: "Programming",
text: `Top level page containing links to programming sub-topics.
`,
date: "Mon Oct 05 00:00:00 CEST 2020",
tags: [ {name: 'toc', fileName: 'toc'}, ]
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
        parentWordSet.add("programming");
    searchMap.set("parent", parentWordSet);

let notesWordSet = new Set();
        notesWordSet.add("about_the_digital_garden");
    searchMap.set("notes", notesWordSet);

let aboutWordSet = new Set();
        aboutWordSet.add("about_the_digital_garden");
    searchMap.set("about", aboutWordSet);

let decidedWordSet = new Set();
        decidedWordSet.add("about_the_digital_garden");
    searchMap.set("decided", decidedWordSet);

let introWordSet = new Set();
        introWordSet.add("toc");
        introWordSet.add("about_the_digital_garden");
        introWordSet.add("programming");
    searchMap.set("intro", introWordSet);

let thingsWordSet = new Set();
        thingsWordSet.add("about_the_digital_garden");
    searchMap.set("things", thingsWordSet);

let onlyWordSet = new Set();
        onlyWordSet.add("about_the_digital_garden");
    searchMap.set("only", onlyWordSet);

let fewWordSet = new Set();
        fewWordSet.add("about_the_digital_garden");
    searchMap.set("few", fewWordSet);

let adocWordSet = new Set();
        adocWordSet.add("toc");
        adocWordSet.add("about_the_digital_garden");
        adocWordSet.add("programming");
    searchMap.set("adoc", adocWordSet);

let linksWordSet = new Set();
        linksWordSet.add("toc");
        linksWordSet.add("programming");
    searchMap.set("links", linksWordSet);

let programmingWordSet = new Set();
        programmingWordSet.add("toc");
        programmingWordSet.add("programming");
    searchMap.set("programming", programmingWordSet);

let havingWordSet = new Set();
        havingWordSet.add("toc");
    searchMap.set("having", havingWordSet);

let likeWordSet = new Set();
        likeWordSet.add("toc");
        likeWordSet.add("about_the_digital_garden");
    searchMap.set("like", likeWordSet);

let levelWordSet = new Set();
        levelWordSet.add("programming");
    searchMap.set("level", levelWordSet);

let konoplevWordSet = new Set();
        konoplevWordSet.add("toc");
        konoplevWordSet.add("about_the_digital_garden");
        konoplevWordSet.add("programming");
    searchMap.set("konoplev", konoplevWordSet);

let containingWordSet = new Set();
        containingWordSet.add("programming");
    searchMap.set("containing", containingWordSet);

let thisWordSet = new Set();
        thisWordSet.add("toc");
        thisWordSet.add("about_the_digital_garden");
    searchMap.set("this", thisWordSet);

let indexWordSet = new Set();
        indexWordSet.add("about_the_digital_garden");
    searchMap.set("index", indexWordSet);

let themWordSet = new Set();
        themWordSet.add("about_the_digital_garden");
    searchMap.set("them", themWordSet);

let isWordSet = new Set();
        isWordSet.add("toc");
        isWordSet.add("about_the_digital_garden");
    searchMap.set("is", isWordSet);

let collectionWordSet = new Set();
        collectionWordSet.add("about_the_digital_garden");
    searchMap.set("collection", collectionWordSet);

let myWordSet = new Set();
        myWordSet.add("about_the_digital_garden");
    searchMap.set("my", myWordSet);

let lookWordSet = new Set();
        lookWordSet.add("about_the_digital_garden");
    searchMap.set("look", lookWordSet);

let somethingWordSet = new Set();
        somethingWordSet.add("toc");
    searchMap.set("something", somethingWordSet);

let eachWordSet = new Set();
        eachWordSet.add("about_the_digital_garden");
    searchMap.set("each", eachWordSet);

let tagsWordSet = new Set();
        tagsWordSet.add("programming");
    searchMap.set("tags", tagsWordSet);

let atWordSet = new Set();
        atWordSet.add("about_the_digital_garden");
    searchMap.set("at", atWordSet);

let contentsWordSet = new Set();
        contentsWordSet.add("toc");
    searchMap.set("contents", contentsWordSet);

let pageWordSet = new Set();
        pageWordSet.add("programming");
    searchMap.set("page", pageWordSet);

let collectWordSet = new Set();
        collectWordSet.add("about_the_digital_garden");
    searchMap.set("collect", collectWordSet);

let someWordSet = new Set();
        someWordSet.add("about_the_digital_garden");
    searchMap.set("some", someWordSet);

let subWordSet = new Set();
        subWordSet.add("programming");
    searchMap.set("sub", subWordSet);

let otherWordSet = new Set();
        otherWordSet.add("about_the_digital_garden");
    searchMap.set("other", otherWordSet);

let whyWordSet = new Set();
        whyWordSet.add("about_the_digital_garden");
    searchMap.set("why", whyWordSet);

let tocWordSet = new Set();
        tocWordSet.add("toc");
        tocWordSet.add("about_the_digital_garden");
        tocWordSet.add("programming");
    searchMap.set("toc", tocWordSet);

let nonWordSet = new Set();
        nonWordSet.add("about_the_digital_garden");
    searchMap.set("non", nonWordSet);

let pointWordSet = new Set();
        pointWordSet.add("about_the_digital_garden");
    searchMap.set("point", pointWordSet);

let rememberWordSet = new Set();
        rememberWordSet.add("about_the_digital_garden");
    searchMap.set("remember", rememberWordSet);

let generalWordSet = new Set();
        generalWordSet.add("toc");
    searchMap.set("general", generalWordSet);

let howWordSet = new Set();
        howWordSet.add("about_the_digital_garden");
    searchMap.set("how", howWordSet);

let fileWordSet = new Set();
        fileWordSet.add("toc");
    searchMap.set("file", fileWordSet);

let publicWordSet = new Set();
        publicWordSet.add("about_the_digital_garden");
    searchMap.set("public", publicWordSet);

let topWordSet = new Set();
        topWordSet.add("programming");
    searchMap.set("top", topWordSet);

let areWordSet = new Set();
        areWordSet.add("about_the_digital_garden");
    searchMap.set("are", areWordSet);

let webWordSet = new Set();
        webWordSet.add("about_the_digital_garden");
    searchMap.set("web", webWordSet);

let andWordSet = new Set();
        andWordSet.add("about_the_digital_garden");
    searchMap.set("and", andWordSet);

let ofWordSet = new Set();
        ofWordSet.add("toc");
        ofWordSet.add("about_the_digital_garden");
    searchMap.set("of", ofWordSet);

let linerWordSet = new Set();
        linerWordSet.add("about_the_digital_garden");
    searchMap.set("liner", linerWordSet);

let makeWordSet = new Set();
        makeWordSet.add("about_the_digital_garden");
    searchMap.set("make", makeWordSet);

let tableWordSet = new Set();
        tableWordSet.add("toc");
    searchMap.set("table", tableWordSet);

let linkedWordSet = new Set();
        linkedWordSet.add("about_the_digital_garden");
    searchMap.set("linked", linkedWordSet);

let digitalWordSet = new Set();
        digitalWordSet.add("about_the_digital_garden");
    searchMap.set("digital", digitalWordSet);

let aWordSet = new Set();
        aWordSet.add("toc");
        aWordSet.add("about_the_digital_garden");
    searchMap.set("a", aWordSet);

let processWordSet = new Set();
        processWordSet.add("about_the_digital_garden");
    searchMap.set("process", processWordSet);

let organaizedWordSet = new Set();
        organaizedWordSet.add("about_the_digital_garden");
    searchMap.set("organaized", organaizedWordSet);

let topicsWordSet = new Set();
        topicsWordSet.add("programming");
    searchMap.set("topics", topicsWordSet);

let subtopicsWordSet = new Set();
        subtopicsWordSet.add("toc");
    searchMap.set("subtopics", subtopicsWordSet);

let wordsWordSet = new Set();
        wordsWordSet.add("about_the_digital_garden");
    searchMap.set("words", wordsWordSet);

let iWordSet = new Set();
        iWordSet.add("about_the_digital_garden");
    searchMap.set("i", iWordSet);

let wayWordSet = new Set();
        wayWordSet.add("about_the_digital_garden");
    searchMap.set("way", wayWordSet);

let theWordSet = new Set();
        theWordSet.add("about_the_digital_garden");
    searchMap.set("the", theWordSet);

let siteWordSet = new Set();
        siteWordSet.add("about_the_digital_garden");
    searchMap.set("site", siteWordSet);

let alexanderWordSet = new Set();
        alexanderWordSet.add("toc");
        alexanderWordSet.add("about_the_digital_garden");
        alexanderWordSet.add("programming");
    searchMap.set("alexander", alexanderWordSet);

let vWordSet = new Set();
        vWordSet.add("toc");
        vWordSet.add("about_the_digital_garden");
        vWordSet.add("programming");
    searchMap.set("v", vWordSet);

let gardenWordSet = new Set();
        gardenWordSet.add("about_the_digital_garden");
    searchMap.set("garden", gardenWordSet);

let toWordSet = new Set();
        toWordSet.add("toc");
        toWordSet.add("about_the_digital_garden");
        toWordSet.add("programming");
    searchMap.set("to", toWordSet);

let takingWordSet = new Set();
        takingWordSet.add("about_the_digital_garden");
    searchMap.set("taking", takingWordSet);


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
