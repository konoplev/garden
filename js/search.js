let filesMap = new Map();

filesMap.set("file_b", {
filename: "file_b",
title: "File B",
text: `This is file B
`,
date: "Tue Nov 09 00:00:00 CET 6",
tags: ["zettelcasten"]
});
filesMap.set("name_me", {
filename: "name_me",
title: "Name me",
text: `> Qute
`,
date: "Thu Sep 17 00:00:00 CEST 2020",
tags: ["zettelcasten"]
});
filesMap.set("about_the_digital_garden", {
filename: "about_the_digital_garden",
title: "About the digital garden",
text: `This web site is a collection of my notes. At some point I decided to make them public. A few words about how my notes taking process look like and how this site is organaized.
`,
date: "Sun Dec 22 00:00:00 CET 65",
tags: ["zettelcasten"]
});
filesMap.set("toc", {
filename: "toc",
title: "TOC",
text: `This file is something like a table of contents of all garden.
`,
date: "Tue Nov 09 00:00:00 CET 6",
tags: ["zettelcasten"]
});

let searchMap = new Map();


let comWordSet = new Set();
        comWordSet.add("name_me");
    searchMap.set("com", comWordSet);

let notesWordSet = new Set();
        notesWordSet.add("about_the_digital_garden");
    searchMap.set("notes", notesWordSet);

let aboutWordSet = new Set();
        aboutWordSet.add("about_the_digital_garden");
    searchMap.set("about", aboutWordSet);

let threeWordSet = new Set();
        threeWordSet.add("name_me");
    searchMap.set("three", threeWordSet);

let decidedWordSet = new Set();
        decidedWordSet.add("about_the_digital_garden");
    searchMap.set("decided", decidedWordSet);

let numberWordSet = new Set();
        numberWordSet.add("name_me");
    searchMap.set("number", numberWordSet);

let fafcWordSet = new Set();
        fafcWordSet.add("name_me");
    searchMap.set("fafc", fafcWordSet);

let introWordSet = new Set();
        introWordSet.add("file_b");
        introWordSet.add("toc");
        introWordSet.add("about_the_digital_garden");
        introWordSet.add("name_me");
    searchMap.set("intro", introWordSet);

let thingsWordSet = new Set();
        thingsWordSet.add("about_the_digital_garden");
    searchMap.set("things", thingsWordSet);

let onlyWordSet = new Set();
        onlyWordSet.add("about_the_digital_garden");
    searchMap.set("only", onlyWordSet);

let meWordSet = new Set();
        meWordSet.add("name_me");
    searchMap.set("me", meWordSet);

let fewWordSet = new Set();
        fewWordSet.add("about_the_digital_garden");
    searchMap.set("few", fewWordSet);

let adocWordSet = new Set();
        adocWordSet.add("about_the_digital_garden");
    searchMap.set("adoc", adocWordSet);

let linksWordSet = new Set();
        linksWordSet.add("name_me");
    searchMap.set("links", linksWordSet);

let idWordSet = new Set();
        idWordSet.add("file_b");
    searchMap.set("id", idWordSet);

let allWordSet = new Set();
        allWordSet.add("toc");
    searchMap.set("all", allWordSet);

let quteWordSet = new Set();
        quteWordSet.add("name_me");
    searchMap.set("qute", quteWordSet);

let abWordSet = new Set();
        abWordSet.add("name_me");
    searchMap.set("ab", abWordSet);

let imageWordSet = new Set();
        imageWordSet.add("name_me");
    searchMap.set("image", imageWordSet);

let itemWordSet = new Set();
        itemWordSet.add("name_me");
    searchMap.set("item", itemWordSet);

let likeWordSet = new Set();
        likeWordSet.add("toc");
        likeWordSet.add("about_the_digital_garden");
    searchMap.set("like", likeWordSet);

let konoplevWordSet = new Set();
        konoplevWordSet.add("file_b");
        konoplevWordSet.add("toc");
        konoplevWordSet.add("about_the_digital_garden");
        konoplevWordSet.add("name_me");
    searchMap.set("konoplev", konoplevWordSet);

let fbcWordSet = new Set();
        fbcWordSet.add("name_me");
    searchMap.set("fbc", fbcWordSet);

let pngWordSet = new Set();
        pngWordSet.add("name_me");
    searchMap.set("png", pngWordSet);

let thisWordSet = new Set();
        thisWordSet.add("file_b");
        thisWordSet.add("toc");
        thisWordSet.add("about_the_digital_garden");
    searchMap.set("this", thisWordSet);

let indexWordSet = new Set();
        indexWordSet.add("about_the_digital_garden");
    searchMap.set("index", indexWordSet);

let themWordSet = new Set();
        themWordSet.add("about_the_digital_garden");
    searchMap.set("them", themWordSet);

let googleWordSet = new Set();
        googleWordSet.add("name_me");
    searchMap.set("google", googleWordSet);

let isWordSet = new Set();
        isWordSet.add("file_b");
        isWordSet.add("toc");
        isWordSet.add("about_the_digital_garden");
    searchMap.set("is", isWordSet);

let collectionWordSet = new Set();
        collectionWordSet.add("about_the_digital_garden");
    searchMap.set("collection", collectionWordSet);

let checkWordSet = new Set();
        checkWordSet.add("file_b");
        checkWordSet.add("toc");
    searchMap.set("check", checkWordSet);

let myWordSet = new Set();
        myWordSet.add("about_the_digital_garden");
    searchMap.set("my", myWordSet);

let listWordSet = new Set();
        listWordSet.add("name_me");
    searchMap.set("list", listWordSet);

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
        tagsWordSet.add("name_me");
    searchMap.set("tags", tagsWordSet);

let atWordSet = new Set();
        atWordSet.add("about_the_digital_garden");
    searchMap.set("at", atWordSet);

let contentsWordSet = new Set();
        contentsWordSet.add("toc");
    searchMap.set("contents", contentsWordSet);

let nameWordSet = new Set();
        nameWordSet.add("name_me");
    searchMap.set("name", nameWordSet);

let httpWordSet = new Set();
        httpWordSet.add("name_me");
    searchMap.set("http", httpWordSet);

let helloWordSet = new Set();
        helloWordSet.add("name_me");
    searchMap.set("hello", helloWordSet);

let collectWordSet = new Set();
        collectWordSet.add("about_the_digital_garden");
    searchMap.set("collect", collectWordSet);

let someWordSet = new Set();
        someWordSet.add("about_the_digital_garden");
    searchMap.set("some", someWordSet);

let checkingWordSet = new Set();
        checkingWordSet.add("file_b");
    searchMap.set("checking", checkingWordSet);

let otherWordSet = new Set();
        otherWordSet.add("about_the_digital_garden");
    searchMap.set("other", otherWordSet);

let anotherWordSet = new Set();
        anotherWordSet.add("name_me");
    searchMap.set("another", anotherWordSet);

let linkWordSet = new Set();
        linkWordSet.add("file_b");
        linkWordSet.add("name_me");
    searchMap.set("link", linkWordSet);

let tocWordSet = new Set();
        tocWordSet.add("toc");
        tocWordSet.add("about_the_digital_garden");
    searchMap.set("toc", tocWordSet);

let whyWordSet = new Set();
        whyWordSet.add("about_the_digital_garden");
    searchMap.set("why", whyWordSet);

let nonWordSet = new Set();
        nonWordSet.add("about_the_digital_garden");
    searchMap.set("non", nonWordSet);

let twoWordSet = new Set();
        twoWordSet.add("name_me");
    searchMap.set("two", twoWordSet);

let pointWordSet = new Set();
        pointWordSet.add("about_the_digital_garden");
    searchMap.set("point", pointWordSet);

let rememberWordSet = new Set();
        rememberWordSet.add("about_the_digital_garden");
    searchMap.set("remember", rememberWordSet);

let durationWordSet = new Set();
        durationWordSet.add("file_b");
    searchMap.set("duration", durationWordSet);

let howWordSet = new Set();
        howWordSet.add("about_the_digital_garden");
    searchMap.set("how", howWordSet);

let worldWordSet = new Set();
        worldWordSet.add("name_me");
    searchMap.set("world", worldWordSet);

let fileWordSet = new Set();
        fileWordSet.add("file_b");
        fileWordSet.add("toc");
        fileWordSet.add("about_the_digital_garden");
    searchMap.set("file", fileWordSet);

let publicWordSet = new Set();
        publicWordSet.add("about_the_digital_garden");
    searchMap.set("public", publicWordSet);

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

let funnyWordSet = new Set();
        funnyWordSet.add("name_me");
    searchMap.set("funny", funnyWordSet);

let emailWordSet = new Set();
        emailWordSet.add("file_b");
    searchMap.set("email", emailWordSet);

let linkedWordSet = new Set();
        linkedWordSet.add("about_the_digital_garden");
    searchMap.set("linked", linkedWordSet);

let cbWordSet = new Set();
        cbWordSet.add("name_me");
    searchMap.set("cb", cbWordSet);

let digitalWordSet = new Set();
        digitalWordSet.add("about_the_digital_garden");
    searchMap.set("digital", digitalWordSet);

let aWordSet = new Set();
        aWordSet.add("file_b");
        aWordSet.add("toc");
        aWordSet.add("about_the_digital_garden");
        aWordSet.add("name_me");
    searchMap.set("a", aWordSet);

let processWordSet = new Set();
        processWordSet.add("about_the_digital_garden");
    searchMap.set("process", processWordSet);

let bWordSet = new Set();
        bWordSet.add("file_b");
        bWordSet.add("about_the_digital_garden");
    searchMap.set("b", bWordSet);

let addressWordSet = new Set();
        addressWordSet.add("file_b");
    searchMap.set("address", addressWordSet);

let organaizedWordSet = new Set();
        organaizedWordSet.add("about_the_digital_garden");
    searchMap.set("organaized", organaizedWordSet);

let dWordSet = new Set();
        dWordSet.add("name_me");
    searchMap.set("d", dWordSet);

let eWordSet = new Set();
        eWordSet.add("name_me");
    searchMap.set("e", eWordSet);

let fWordSet = new Set();
        fWordSet.add("name_me");
    searchMap.set("f", fWordSet);

let customWordSet = new Set();
        customWordSet.add("file_b");
    searchMap.set("custom", customWordSet);

let wordsWordSet = new Set();
        wordsWordSet.add("about_the_digital_garden");
    searchMap.set("words", wordsWordSet);

let iWordSet = new Set();
        iWordSet.add("file_b");
        iWordSet.add("toc");
        iWordSet.add("about_the_digital_garden");
    searchMap.set("i", iWordSet);

let mWordSet = new Set();
        mWordSet.add("file_b");
        mWordSet.add("toc");
    searchMap.set("m", mWordSet);

let wayWordSet = new Set();
        wayWordSet.add("about_the_digital_garden");
    searchMap.set("way", wayWordSet);

let theWordSet = new Set();
        theWordSet.add("about_the_digital_garden");
    searchMap.set("the", theWordSet);

let siteWordSet = new Set();
        siteWordSet.add("about_the_digital_garden");
    searchMap.set("site", siteWordSet);

let booleanWordSet = new Set();
        booleanWordSet.add("file_b");
    searchMap.set("boolean", booleanWordSet);

let alexanderWordSet = new Set();
        alexanderWordSet.add("file_b");
        alexanderWordSet.add("toc");
        alexanderWordSet.add("about_the_digital_garden");
        alexanderWordSet.add("name_me");
    searchMap.set("alexander", alexanderWordSet);

let vWordSet = new Set();
        vWordSet.add("file_b");
        vWordSet.add("toc");
        vWordSet.add("about_the_digital_garden");
        vWordSet.add("name_me");
    searchMap.set("v", vWordSet);

let subitemWordSet = new Set();
        subitemWordSet.add("name_me");
    searchMap.set("subitem", subitemWordSet);

let gardenWordSet = new Set();
        gardenWordSet.add("toc");
        gardenWordSet.add("about_the_digital_garden");
    searchMap.set("garden", gardenWordSet);

let toWordSet = new Set();
        toWordSet.add("about_the_digital_garden");
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
