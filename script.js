
let category;
let currentPage;
let currentCategory;
let calls;
let clicked;
let opened;
let currentArrow;
let safeArrivalCounter;
var imgCounter1;
var imgCounter2;
const SAFE_ARRIVAL = ["בדקו ביחד עם האדם המבוגר כמה זמן עומד לרשותו כדי להיכנס למרחב המוגן ובחרו עימו את המרחב המוגן בהתאם.", "חשוב לתכנן מראש את נתיב ההגעה למרחב המוגן ולפנות את הדרך אליו ממכשורלים שעלולים להפריע לתנועה, כמו נפילות ופציעות. תרגלו ביחד, אם הדבר אפשרי, את ההגעה למרחב המוגן בזמן.", "אם המרחב המוגן של האדם המבוגר הוא חדר המדרגות,והכינו מראש כיסא מתאים בחדר המדרגות.", 
    '<b>אם קיים קושי בניידות (אדם הנעזר בכיסא גלגלים או בהליכון ומרותקי מיטה) -</b><br>דאגו להכין מיטה בממ"ד או בחדר פנימי והצמידו אותה לקיר פנימי, מתחת לקו חלונות ולא מול הדלת. וודאו שלא מותקנים מעל למיטה מדפים וחפצים שעלולים ליפול עליו.', `<b>אם קיים קושי לעבור מישיבה על ספה לכיסא גלגלים בזמן קצר- </b><br>הצמידו את הספה לקיר פנימי, מתחת לקו חלונות ולא מול הדלת.
אם האדם המבוגר נדרש לאביזרים המסייעים לו להתנייד כמו כיסא גלגלים או הליכון, יש להכין אותם בקרבת מקום כך שיוכל להגיע אליהם במהירות במידת הצורך.` ]
const SAFE_ARRIVAL_DOTS = ["<b>●</b>●●●●", "●<b>●</b>●●●", "●●<b>●</b>●●", "●●●<b>●</b>●", "●●●●<b>●</b>"];
let neighborsCounter;
const NEIGHBORS_TEXT = ["טקסטהנגישו למטפל בשפתו את כל ההנחיות. באתר זה תוכלו למצוא הנחיות בשפה האנגלית והרוסית.", "טקסטעדכנו את המטפל מראש מה זמן ההתגוננות באזור המגורים וודאו שהוא יודע כיצד לפעול בעת קבלת התרעה בכל מקום בו הוא נמצא.", "טקסטיש להראות למטפל את המרחב המוגן ולתכנן יחד איתו את דרך ההגעה המהירה והבטוחה ביותר.", "טקסטאם הדבר נדרש, סייעו למטפל הזר בהורדת יישומון פיקוד העורף כדי שיקבל התרעות בהתאם למיקומו.", 'העבירו ושמרו בטלפון של המטפל את הטלפונים הנדרשים בעת הצורך: מוקד פיקוד העורף (104), משטרה (100), מד"א (101) , המוקד העירוני (106) , קרובי משפחה וארגוני סיוע.', "הנחו את המטפל כי לאחר כל התרעה יש ליצור קשר עם קרובי המשפחה ולעדכן שהכל בסדר."];
const NEIGHBORS_DOTS = ["<b>●</b>●●●●●", "●<b>●</b>●●●●", "●●<b>●</b>●●●", "●●●<b>●</b>●●", "●●●●<b>●</b>●", "●●●●●<b>●</b>"];
const AGRICULTURE_TEXT = ["טקסט1", "טקסט2", "טקסט3", "טקסט4", "טקסט5", "טקסט6"];
const AGRICULTURE_DOTS = ["<b>●</b>●●●●●", "●<b>●</b>●●●●", "●●<b>●</b>●●●", "●●●<b>●</b>●●", "●●●●<b>●</b>●", "●●●●●<b>●</b>"];
let helpCounter;
const HELP_TEXT = ["טקסט1", "טקסט2", "טקסט3", "טקסט4", "טקסט5", "טקסט6"];
const HELP_DOTS = ["<b>●</b>●●●●●", "●<b>●</b>●●●●", "●●<b>●</b>●●●", "●●●<b>●</b>●●", "●●●●<b>●</b>●", "●●●●●<b>●</b>"];
const IMPORTANT_TEXT = [`<b>1.</b> לאחר שבחרנו את המרחב המוגן, יש לתרגל את ההגעה אליו ממקומות שונים (למשל מהמטבח, מהסלון ומחדר השינה) כדי לוודא שאתם מגיעים אליו בזמן ובבטחה.`,`<b>2</b>. יש לפנות את המסלולים המובילים אל המרחב המוגן ממכשולים ומחפצים שעלולים להפריע לתנועה, כגון שטיחים, עציצים וכיסאות, ולהזיז ספות וכורסאות כדי לאפשר מעבר רחב ובטוח. מומלץ להיעזר בבני משפחה, חברים או שכנים לבצע את הפעולות הללו, אם איננו יכולים לבצע אותן לבד.`, `<b>3</b>. <b>שימו לב:</b> למרחב המוגן הולכים במהירות ובזהירות. אם אנו הולכים בקצב שאינו אופייני לנו, מומלץ להיעזר בכל תמיכה שיש בסביבה (קיר, מעקה או אביזר ניידות).`, `<b>4.</b> אם קיים קושי בניידות (אדם הנעזר בכיסא גלגלים או בהליכון ומרותקי מיטה) - העבירו את המיטה לממ"ד או לחלל פנימי והצמידו אותה לקיר פנימי, מתחת לקו חלונות ולא מול הדלת. ודאו שלא מותקנים מעל למיטה מדפים וחפצים שעלולים ליפול.`,`<b>5.</b> אם קיים קושי לעבור מישיבה על ספה לכיסא גלגלים בזמן קצר - הצמידו את הספה לקיר פנימי, מתחת לקו חלונות ולא מול הדלת.`];
const IMPORTANT_DOTS = ["<b>●</b>●●●●", "●<b>●</b>●●●", "●●<b>●</b>●●", "●●●<b>●</b>●", "●●●●<b>●</b>"];
var EQUIP_DOTS1  = ["<b>●</b>●●●●●", "●<b>●</b>●●●●", "●●<b>●</b>●●●", "●●●<b>●</b>●●", "●●●●<b>●</b>●", "●●●●●<b>●</b>"];
var EQUIP_DOTS2  = ["<b>●</b>●●●", "●<b>●</b>●●", "●●<b>●</b>●", "●●●<b>●</b>"];

let importantCounter;

const EMPHASIS_COPING = [
    {title: "וודאו שיש לכם דרך לקבל התרעות", text: " ניתן לקבל את ההתרעות באמצעות  יישומון פיקוד העורף. אם קיימת ירידה בשמיעה, ניתן להגדיר קבלת התרעות באמצעות רטט, ובמכשירי אנדרואיד - גם באמצעות הבהוב של הפנס. אם >אתם מתקשים בתפעול היישומון, אל תהססו לבקש סיוע מקרובים או ממכרים. בנוסף, ההתרעות מתקבלות גם בצופרי פיקוד העורף, באתר זה וכן באמצעי התקשורת."},
    {title: "בדקו מהו משך זמן הכניסה למרחב המוגן", text: "חשוב לבדוק מראש מה הזמן העומד לרשותכם כדי להיכנס למרחב המוגן ולבחור את המרחב המוגן בהתאם לפרק זמן זה. משך הזמן שבו נשמעת האזעקה מהצופרים, הוא כמשך זמן ההגעה למרחב המוגן. ניתן לבדוק את זמן הכניסה למרחב המוגן ביישוב שלכם ביישומון פיקוד העורף, או באתר זה - באמצעות הזנת שם היישוב בחלונית בדף הבית, או בחיוג למוקד פיקוד העורף במספר 104. "},
    {title: "בחרו את המרחב המוגן", text: `חשוב מאוד לבחור את המרחב המוגן שלכם בהתאם למיגון שיש לכם, אך לא פחות חשוב - בהתאם ליכולת שלכם להגיע אליו בזמן העומד לרשותכם. שימו לב - אם אתם מעריכים שזמן ההגעה שלכם לממ"ד או למקלט גדול מהזמן העומד לרשותכם להגעה למרחב המוגן, יש לבחור במרחב המוגן הקרוב יותר, כמו חדר מדרגות פנימי או חלל פנימי.`},
    {title: "תכננו את ההגעה למרחב המוגן", text: "כדי לאפשר הגעה מהירה ובטוחה למרחב המוגן ולמנוע נפילות ופציעות בדרך, חשוב לתכנן מראש את דרכי ההגעה למרחב המוגן ולבחור שלוש דרכים לפחות שבהן תוכלו להגיע אליו במהירות, למשל מהמטבח, מהסלון, מחדר השינה, ומכל מקום אחר בבית שבו אתם יכולים להימצא בזמן קבלת ההתרעה. נסו לספור את הצעדים בכל מסלול, כך שתדעו בדיוק מה המרחק שעליכם לעבור כדי להגיע אליו. בנוסף, דאגו לפנות מראש מכשולים וחפצים שעלולים להפריע לתנועה, כמו עציצים במסדרונות הבית או בחדר מדרגות. אם אתם נדרשים לחפצים המסייעים לכם להתנייד כמו כיסא גלגלים או הליכון, הכינו אותם בקרבת מקום יחד עם בני המשפחה או בעזרת השכנים, כך שתוכלו להגיע אליהם במהירות במידת הצורך."},
    {title: "הכינו את המרחב המוגן", text: "חשוב לבצע פעולות להכנת המרחב המוגן, למשל להכניס כיסא שיאפשר לשבת, לתלות שעון גדול שבעזרתו תוכלו לדעת כמה זמן אתם נמצאים במרחב המוגן, להכין מספרי טלפון חשובים כתובים על דף, ואמצעים להנעים את הזמן כמו תשבצים, עיתונים וספרים. בנוסף, יש להכין במרחב המוגן ציוד לחירום, לרבות ציוד המותאם לצרכים שלכם כמו מזון ייחודי אם נדרש, מקל הליכה, ציוד רפואי, משקפי ראייה ועוד."},
    {title: "הכירו את ההנחיות בעת קבלת התרעה", text: "יש לדעת כיצד לפעול בעת קבלת התרעה בכל מקום בו אנחנו נמצאים. הימנעו מריצה או מהליכה בקצב שאינו אופייני לכם, שכן הדבר עלול לסכן אתכם בנפילות. בנוסף, צרו נוהל קבוע - להתקשר מיד לאחר האירוע לקרובי המשפחה ולעדכן אותם שהכל בסדר."},
    {title: "התנהלות יומיומית בזמן חירום", text: "בעת מצב חירום, עלולים לחוש פחד, בלבול, חוסר אונים ואף חרדה במקרים מסוימים. חשוב לזכור כי לרוב אלו תגובות נורמליות למצב לא נורמלי. דגשים להתמודדות:"},
    {title: "דעו מה הפעולות שעליכם לבצע", text: " ידיעה מראש של הפעולות שעלינו לבצע בכל רגע נתון והכרת הפתרונות שיש ברשותנו מסייעים בהתמודדות, למשל לדעת באילו אמצעים נקבל את ההתרעה, היכן נמצא המרחב המוגן שבחרנו, ולאיזה מהמרחבים המוגנים כדאי ללכת גם כשאנחנו בבית של מישהו אחר או בחוץ."},
    {title: "שתפו בתחושות", text: "שיחה על המצב ועל תחושותיכם עם משפחה, קרובים ושכנים, תקל על תחושת בדידות שאתם עלולים לחוות. ניתן גם להתקשר לקווים ייעודיים לגיל השלישי - המשרד לשוויון חברתי בטלפון 8840* , או למשרד הרווחה בטלפון 118, או למוקד העירוני בטלפון 106."},
    {title: "היו פעילים ", text: "אקטיביות מאפשרת להימנע מתחושה של חוסר אונים. לכן, על אף הקושי והרגשות שצפים בזמן משבר, אל תוותרו על הרגלי השגרה שלכם במידת האפשר. למשל, המשיכו לבצע פעילות גופנית אם אתם מורגלים בכך, גם אם היא נעשית בבית. בנוסף, הכינו רשימה של דברים שחשוב לכם לקחת או לעשות והניחו אותה במקום שקרוב אליכם רוב הזמן, כמו הכיס של החולצה המועדפת או השולחן בסלון."} 
];
const MUST_SAFE = [
    {title: ` ממ"ד, ממ"ק או ממ"מ`, text: `ממ"ד (מרחב מוגן דירתי), ממ"ק (מרחב מוגן קומתי) או ממ"מ (מרחב מוגן מוסדי) - הם הבחירה המועדפת. <br><br>  בעת קבלת התרעה, יש לסגור את הדלת היטב ולסובב את הידית ב-90 מעלות, ולוודא שחלון הפלדה החיצוני וחלון הזכוכית הפנימי סגורים.`},
    {title: "מקלט", text: `מקלט בבניין משותף או מקלט ציבורי - בתנאי שניתן להגיע אליו בזמן ההתגוננות העומד לרשותנו. <br><br> <b>*שימו לב:</b> אם אין ממ״ד, ממ״ק, ממ"מ או מקלט, נבחר מקום טוב באמצע - חדר מדרגות פנימי או חלל פנימי בתוך המבנה.`},
    {title: " חדר מדרגות פנימי", text: 'ניתן לבחור בחדר המדרגות (ללא חלונות וקירות חיצוניים) לשמש כמרחב מוגן ולהתמקם במרכזו - לא בקומה העליונה ולא בקומה התחתונה.<br><br><b>בבניין מעל שלוש קומות -</b> יש לשהות בגרם מדרגות שיש מעליו שתי קומות לפחות.<br> <b>בבניין מתחת לשלוש קומות -</b> יש לשהות בגרם המדרגות של הקומה האמצעית. <br><br>*יש לשהות על גרם המדרגות ולא בחלל הקומה. חשוב לוודא כי חדרי המדרגות פנויים מציוד שעלול להפריע למעבר.'},
    {title: "חלל פנימי ", text: 'אם אין ממ"ד, ממ"ק, מקלט או חדר מדרגות פנימי, יש לבחור כמרחב מוגן בחלל פנימי שמוקף בכמה שיותר קירות ושכולל כמה שפחות חלונות ופתחים.<br><br> אין לבחור במטבח, מקלחת או שירותים לשמש כמרחב מוגן, יש לוודא שאין בחלל הפנימי קרמיקה, חרסינה או זכוכיות שעלולות להתנפץ. <br><br> ניתן לבחור גם במסדרון פנימי, ולסגור את הדלתות והחלונות.<br> בעת קבלת התרעה - יש לשבת צמוד לקיר פנימי, מתחת לקו החלונות ולא מול הדלת.'},
    {title: "דגשים חשובים", text: `
        <div class="white-div">
            <p id="white-div-num1-important" class="white-div-num">1</p>
            <p id="white-div-text1-important"><b>1.</b> לאחר שבחרנו את המרחב המוגן, יש לתרגל את ההגעה אליו ממקומות שונים (למשל מהמטבח, מהסלון ומחדר השינה) כדי לוודא שאתם מגיעים אליו בזמן ובבטחה.</p>
            <div class="move-pages-white-div-important">
              <img src="../assets/images/white-div-arrow-back.svg" alt="arrow-down" class="arrow-move" id="back-arrow-important"/>
              <p class="page-move-color" id="page-move-color-important"><b>●</b>●●●●</p>
              <img src="../assets/images/white-div-arrow.svg" alt="arrow-down" class="arrow-move" id="front-arrow-important"/>
            </div>
          </div>
        `},
]; 

window.addEventListener('load', () => { 
    opened = false;
    imgCounter1 = 0;
    imgCounter2 = 8;
    safeArrivalCounter = 0;
    neighborsCounter = 0;
    agricultureCounter = 0;
    helpCounter = 0;
    importantCounter = 0;
    currentPage = window.location.href;
    currentPage = currentPage.split("/");
    currentPage = currentPage[currentPage.length -1];

    if (currentPage === "index.html") {
        document.getElementById(`startButton`).addEventListener("click", startButton);
    } else {
        category = currentPage[8];
        let categories = document.getElementsByClassName("category");
        for (i=0; i<categories.length; i++) {
            categories[i].addEventListener("click", window[`categoryManager${category}`]);
        };
        document.getElementById(`back-button`).addEventListener("click", backManager);
    };
    
    calls = document.getElementsByClassName("spec-call");
    for (i=0; i<calls.length; i++) {
        calls[i].addEventListener("click", callManager);
    };
    clicked = 0;

     if (currentPage === "category2.html"){
        for (i=0; i<=4; i++) {
            document.getElementById(`mustSafe${i}`).addEventListener("click",mustProtectedManager);
        };
        for (i=1; i<=2; i++) {
            document.getElementById(`front-arrow-img${i}`).addEventListener("click", imgDisplayManager);
        };
    };

    if (currentPage === "category4.html"){
        for (i=1; i<=4; i++) {
        document.getElementById(`circle${i}`).addEventListener("click",circleManager);
        };
        document.getElementById(`front-arrow-safe`).addEventListener("click", infoDivForwardsManager);
        document.getElementById(`front-arrow-neighbors`).addEventListener("click", infoDivForwardsManager);
        document.getElementById(`front-arrow-agriculture`).addEventListener("click", infoDivForwardsManager);
        document.getElementById(`front-arrow-help`).addEventListener("click", infoDivForwardsManager);
        for (i=5; i<=7; i++) {
        document.getElementById(`circle${i}`).addEventListener("click",popExplenationManager);
        };
    };

     if (currentPage === "category5.html"){
         for (i=0; i<=9; i++) {
            document.getElementById(`emphasis${i}`).addEventListener("click",empsisManager);
        };
    }
});

const startButton = () => {
        document.getElementById("startPage").style.display="none";
        document.getElementById("homepage").style.display="block";
        document.getElementById("explenationHome").style.display="block";
}

var categoryManager1 = (event) => {
    currentCategory = event.target.id;
    currentCategory = currentCategory[8];
    document.getElementById(`main-page1`).style.display="none";
    document.getElementById(`category${currentCategory}-page`).style.display="block";
    document.getElementById(`back-button`).style.display="block";
}

var categoryManager2 = (event) => {
    currentCategory = event.target.id;
    currentCategory = currentCategory[8];
    document.getElementById(`main-page1`).style.display="none";
    document.getElementById(`category${currentCategory}-page`).style.display="block";
    document.getElementById(`back-button`).style.display="block";
}

var categoryManager3 = (event) => {
    currentCategory = event.target.id;
    currentCategory = currentCategory[8];
    document.getElementById(`main-page1`).style.display="none";
    document.getElementById(`category${currentCategory}-page`).style.display="block";
    document.getElementById(`back-button`).style.display="block";
}


var categoryManager4 = (event) => {
    currentCategory = event.target.id;
    currentCategory = currentCategory[8];
    document.getElementById(`main-page1`).style.display="none";
    document.getElementById(`category${currentCategory}-page`).style.display="block";
    document.getElementById(`back-button`).style.display="block";
}

var categoryManager5 = (event) => {
    currentCategory = event.target.id;
    currentCategory = currentCategory[8];
    document.getElementById(`main-page1`).style.display="none";
    document.getElementById(`category${currentCategory}-page`).style.display="block";
    document.getElementById(`back-button`).style.display="block";
}

const backManager = () => {
    if (currentPage === "category4.html"){ 
        for (i=1; i<=4; i++) {
            document.getElementById(`circle${i}-page`).style.display="none";
        };
        console.log(currentCategory);
        if (currentCategory == "1") {
            if (document.getElementById("category1-circles").style.display === "block") {
                document.getElementById(`category${currentCategory}-page`).style.display="none";
                document.getElementById(`main-page1`).style.display="block";
                document.getElementById(`back-button`).style.display="none";
            } else {
                document.getElementById("category1-circles").style.display = "block";
            };
        } else {
            document.getElementById(`main-page1`).style.display="block";
            document.getElementById(`category${currentCategory}-page`).style.display="none";
            document.getElementById(`back-button`).style.display="none";
        }
    } else {
        document.getElementById(`main-page1`).style.display="block";
        document.getElementById(`category${currentCategory}-page`).style.display="none";
        document.getElementById(`back-button`).style.display="none";
    }
};

const circleManager = (event) => {
    document.getElementById("category1-circles").style.display="none";
    console.log(`${event.target.id}-page`);
    document.getElementById(`${event.target.id}-page`).style.display="block";  
}
const mustProtectedManager = (event) =>{
    document.getElementById(`theMustProtected-container`).style.display="block";
    document.getElementById(`mustProtected-title`).innerHTML = MUST_SAFE[event.target.id[8]].title;
     document.getElementById(`mustProtected-text`).innerHTML = MUST_SAFE[event.target.id[8]].text;
     if (event.target.id[8] == 4) {
        document.getElementById(`front-arrow-important`).addEventListener("click", infoDivForwardsManager);
     }
}

const empsisManager = (event) =>{
    document.getElementById(`emphasisExplenations-container`).style.display="block";
    document.getElementById(`emphasis-title`).innerHTML = EMPHASIS_COPING[event.target.id[8]].title;
     document.getElementById(`emphasis-text`).innerHTML = EMPHASIS_COPING[event.target.id[8]].text;
}

const callManager = (event) => {
    let indexNum =  currentPage.replace(/\D/g, "");
    let wantedCalls = document.getElementsByClassName(`call-chap${indexNum}`);
    let categories = document.getElementsByClassName("page1");
    for (let i=1; i<=wantedCalls.length; i++) {
        document.getElementById(`info${i}`).style.height = "0vh";
        document.getElementById(`call${i}`).style.backgroundColor = "#ffffffff";
        // document.getElementById(`down-arrow${i}`).style.rotate = "0deg";
    };

    if (clicked === event.target.id.replace(/\D/g, "") && opened) {
        if (event.target.id.replace(/[0-9]/g, '') === "back-arrow-img" || event.target.id.replace(/[0-9]/g, '') === "front-arrow-img"|| event.target.id.replace(/[0-9]/g, '') === "movePages-equip" || event.target.id.replace(/[0-9]/g, '') === "equipment-img-" || event.target.id.replace(/[0-9]/g, '') === "equipment-img-div") {
            return;
        } else {
            clicked = event.target.id.replace(/\D/g, "");
            document.getElementById(`info${clicked}`).style.height = "0vh";
            document.getElementById(`info${clicked}`).style.marginTop = "0vh";
            for(i=1; i <= categories.length; i++){
                document.getElementById(`chap${i}-info`).style.overflowY = "hidden";
            }
            // document.getElementById(`down-arrow${clicked}`).style.rotate = "0deg";
            document.getElementById(`call${clicked}`).style.backgroundColor = "#ffffffff";
            clicked = 0;
        };
    } else {
        if (clicked > 0) {
            document.getElementById(`call${clicked}`).style.backgroundColor = "#ffffffff";
        };
        clicked = event.target.id.replace(/\D/g, "");
        if (currentPage === "category1.html" && clicked === "1" || clicked === "6") {
            document.getElementById(`info${clicked}`).style.height = "50vh";
        } else if ( currentPage === "category2.html") {
            if (event.target.id.replace(/[0-9]/g, '') === "back-arrow-img" || event.target.id.replace(/[0-9]/g, '') === "front-arrow-img"|| event.target.id.replace(/[0-9]/g, '') === "movePages-equip" || event.target.id.replace(/[0-9]/g, '') === "equipment-img-" || event.target.id.replace(/[0-9]/g, '') === "equipment-img-div") {
                return;
            } else {
                if (screen.width < "450") {
                    document.getElementById(`info${clicked}`).style.height = "20vh";
                } else {
                    document.getElementById(`info${clicked}`).style.height = "50vh";
                }
            };
        } else {
            document.getElementById(`info${clicked}`).style.height = "fit-content";
        }
        if (currentPage === "category2.html"){
            document.getElementById("chap1-info").style.overflowY = "scroll";
        }
        if (currentPage === "category1.html") {
            if (clicked <= 5) {
                document.getElementById("chap1-info").style.overflowY = "scroll";
            } else if (clicked <= 10) {
                document.getElementById("chap2-info").style.overflowY = "scroll";
            } else if (clicked <= 14) {
                document.getElementById("chap3-info").style.overflowY = "scroll";
            } else if (clicked <= 19) {
                document.getElementById("chap4-info").style.overflowY = "scroll";
            } else if (clicked <= 23) {
                document.getElementById("chap5-info").style.overflowY = "scroll";
            } else if (clicked <= 27) {
                document.getElementById("chap6-info").style.overflowY = "scroll";
            }
            else if (clicked <= 31) {
                document.getElementById("chap7-info").style.overflowY = "scroll";
            }
        }
        opened = true;
        document.getElementById(`call${clicked}`).style.backgroundColor = "#ffe4b7ff";
        // document.getElementById(`down-arrow${clicked}`).style.rotate = "180deg";
        clicked = event.target.id.replace(/\D/g, "");
    };
}

const infoDivBackManager = (event) => {
    currentArrow = event.target.id.split("-");
    currentArrow = currentArrow[currentArrow.length -1];
    if (currentArrow === "safe") {
        safeArrivalCounter--;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = SAFE_ARRIVAL[safeArrivalCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = SAFE_ARRIVAL_DOTS[safeArrivalCounter];
            document.getElementById(`white-div-num1-${currentArrow}`).innerText = safeArrivalCounter + 1;
    } else if (currentArrow === "neighbors") {
        neighborsCounter--;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = NEIGHBORS_TEXT[neighborsCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = NEIGHBORS_DOTS[neighborsCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = neighborsCounter + 1;
    } else if (currentArrow === "agriculture") {
        agricultureCounter--;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = AGRICULTURE_TEXT[agricultureCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = AGRICULTURE_DOTS[agricultureCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = agricultureCounter + 1;
    } else if (currentArrow === "help") {
        helpCounter--;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = HELP_TEXT[helpCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = HELP_DOTS[helpCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = helpCounter + 1;
    }else if (currentArrow === "important") {
        importantCounter--;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = IMPORTANT_TEXT[importantCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = IMPORTANT_DOTS[importantCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = importantCounter + 1;
    }

    if (currentPage === "category4.html") {
        if (safeArrivalCounter === 0) {
            document.getElementById(`back-arrow-safe`).style.opacity = 0;
            document.getElementById(`back-arrow-safe`).removeEventListener("click", infoDivBackManager);
        };

        if (neighborsCounter === 0) {
            document.getElementById(`back-arrow-neighbors`).style.opacity = 0;
            document.getElementById(`back-arrow-neighbors`).removeEventListener("click", infoDivBackManager);
        };

        if (agricultureCounter === 0) {
            document.getElementById(`back-arrow-agriculture`).style.opacity = 0;
            document.getElementById(`back-arrow-agriculture`).removeEventListener("click", infoDivBackManager);
        };

        if (helpCounter === 0) {
            document.getElementById(`back-arrow-help`).style.opacity = 0;
            document.getElementById(`back-arrow-help`).removeEventListener("click", infoDivBackManager);
        };
    } else if (currentPage === "category2.html") {
        if (importantCounter === 0) {
            document.getElementById(`back-arrow-important`).style.opacity = 0;
            document.getElementById(`back-arrow-important`).removeEventListener("click", infoDivBackManager);
        };
    };

    document.getElementById(`front-arrow-${currentArrow}`).style.opacity = 1;
    document.getElementById(`front-arrow-${currentArrow}`).addEventListener("click", infoDivForwardsManager);
}

const infoDivForwardsManager = (event) => {
    currentArrow = event.target.id.split("-");
    currentArrow = currentArrow[currentArrow.length -1];
    console.log(currentArrow);
    if (currentArrow === "safe") {
        safeArrivalCounter++;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = SAFE_ARRIVAL[safeArrivalCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = SAFE_ARRIVAL_DOTS[safeArrivalCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = safeArrivalCounter + 1;
    } else if (currentArrow === "neighbors") {
        neighborsCounter++;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = NEIGHBORS_TEXT[neighborsCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = NEIGHBORS_DOTS[neighborsCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = neighborsCounter + 1;
    }
    else if (currentArrow === "agriculture") {
        agricultureCounter++;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = AGRICULTURE_TEXT[agricultureCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = AGRICULTURE_DOTS[agricultureCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = agricultureCounter + 1;
    } else if (currentArrow === "help") {
        helpCounter++;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = HELP_TEXT[helpCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = HELP_DOTS[helpCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = helpCounter + 1;
    } else if (currentArrow === "important") {
        importantCounter++;
        document.getElementById(`white-div-text1-${currentArrow}`).innerHTML = IMPORTANT_TEXT[importantCounter];
        document.getElementById(`page-move-color-${currentArrow}`).innerHTML = IMPORTANT_DOTS[importantCounter];
        document.getElementById(`white-div-num1-${currentArrow}`).innerText = importantCounter + 1;
    }

    if (safeArrivalCounter === SAFE_ARRIVAL.length - 1) {
        document.getElementById(`front-arrow-safe`).style.opacity = 0;
        document.getElementById(`front-arrow-safe`).removeEventListener("click", infoDivForwardsManager);
    };

    if (neighborsCounter == NEIGHBORS_TEXT.length - 1) {
        document.getElementById(`front-arrow-neighbors`).style.opacity = 0;
        document.getElementById(`front-arrow-neighbors`).removeEventListener("click", infoDivForwardsManager);
    };

    if (agricultureCounter == AGRICULTURE_TEXT.length - 1) {
        document.getElementById(`front-arrow-agriculture`).style.opacity = 0;
        document.getElementById(`front-arrow-agriculture`).removeEventListener("click", infoDivForwardsManager);
    };

    if (helpCounter == HELP_TEXT.length - 1) {
        document.getElementById(`front-arrow-help`).style.opacity = 0;
        document.getElementById(`front-arrow-help`).removeEventListener("click", infoDivForwardsManager);
    };

    if (importantCounter == IMPORTANT_TEXT.length - 1) {
        document.getElementById(`front-arrow-important`).style.opacity = 0;
        document.getElementById(`front-arrow-important`).removeEventListener("click", infoDivForwardsManager);
    };
    document.getElementById(`back-arrow-${currentArrow}`).style.opacity = 1;
    document.getElementById(`back-arrow-${currentArrow}`).addEventListener("click", infoDivBackManager);
}

const popExplenationManager = (event) =>{
    document.getElementById(`${event.target.id}-explenation`).style.display="block";
    let closeButtons = document.getElementsByClassName("close-button");
    for (i=0; i<closeButtons.length; i++) {
        closeButtons[i].addEventListener("click",() =>{
            console.log(event.target.id);
            document.getElementById(`${event.target.id}-explenation`).style.display="none";
        });
    };
}

const imgDisplayManager = (event) => {
    let arrowNum =  event.target.id.replace(/\D/g, "");
    if (event.target.id.replace(/[0-9]/g, '') === "front-arrow-img") {
        window[`imgCounter${arrowNum}`] = window[`imgCounter${arrowNum}`] + 1;
        for (i = 1; i <= 3; i++) {
            document.getElementById(`equipment-img${i}-${arrowNum}`).setAttribute("src", `../assets/images/protectedSpace/equipment${i + window[`imgCounter${arrowNum}`]}.svg`);
        };
        document.getElementById(`back-arrow-img${arrowNum}`).style.opacity = 1;
        document.getElementById(`back-arrow-img${arrowNum}`).addEventListener("click", imgDisplayManager);
        console.log(arrowNum === 1 && imgCounter1 === 5)
        if ((arrowNum === "1" && imgCounter1 === 5)  || (arrowNum === "2" && imgCounter2 === 11)) {
            console.log("works2");

            document.getElementById(`front-arrow-img${arrowNum}`).style.opacity = 0;
            document.getElementById(`front-arrow-img${arrowNum}`).removeEventListener("click", imgDisplayManager);
        };
    } else {
        // imgCounter--;
        window[`imgCounter${arrowNum}`] = window[`imgCounter${arrowNum}`] - 1;
        for (i = 3; i >= 1; i--) {
            document.getElementById(`equipment-img${i}-${arrowNum}`).setAttribute("src", `../assets/images/protectedSpace/equipment${window[`imgCounter${arrowNum}`] + i}.svg`);
        };
        document.getElementById(`front-arrow-img${arrowNum}`).style.opacity = 1;
        document.getElementById(`front-arrow-img${arrowNum}`).addEventListener("click", imgDisplayManager);
        if ((arrowNum === "1" && imgCounter1 === 0) || (arrowNum === "2" && imgCounter2 === 8)) {
            console.log("works");
            document.getElementById(`back-arrow-img${arrowNum}`).style.opacity = 0;
            document.getElementById(`back-arrow-img${arrowNum}`).removeEventListener("click", imgDisplayManager);
        }
    };

    for (i = 1; i <= 3; i++) {
            let currentImg = document.getElementById(`equipment-img${i}-${arrowNum}`).src.split("/");
            currentImg = currentImg[currentImg.length -1];
        console.log(currentImg === "equipment9.svg")
        if (currentImg === "equipment9.svg") {
            document.getElementById(`equipment-img${i}-${arrowNum}`).style.position = "relative";
            document.getElementById(`equipment-img${i}-${arrowNum}`).style.top = "3vh";
        } else {
            document.getElementById(`equipment-img${i}-${arrowNum}`).style.position = "relative";
            document.getElementById(`equipment-img${i}-${arrowNum}`).style.top = "0";
        }
    };

    let currentEquip = window[`EQUIP_DOTS${arrowNum}`];
    if (arrowNum === "1") {
        console.log(document.getElementById(`page-move-color-equip-${arrowNum}`))
        document.getElementById(`page-move-color-equip-${arrowNum}`).innerHTML = currentEquip[window[`imgCounter${arrowNum}`]];
    } else if (arrowNum === "2") {
        document.getElementById(`page-move-color-equip-${arrowNum}`).innerHTML = currentEquip[window[`imgCounter${arrowNum}`] - 8];
    };

};
