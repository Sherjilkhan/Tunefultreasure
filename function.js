

let home =document.getElementById("home");
let playlist =document.getElementById("playlist");
let trendings =document.getElementById("trendings");
let home_content =document.getElementById("home_content");
let playlist_content =document.getElementById("playlist_content");
let trendings_content =document.getElementById("trendings_content");
let more_trendings =document.getElementById("more_trendings");
let more_playlist =document.getElementById("more_playlist");
let artist_k = document.getElementById("artist_k");
let artist_a = document.getElementById("artist_a");
let artist_c = document.getElementById("artist_c");
let artist_t = document.getElementById("artist_t");
let artist_1 = document.getElementById("artist_1");
let artist_2 = document.getElementById("artist_2");
let artist_3 = document.getElementById("artist_3");
let artist_4 = document.getElementById("artist_4");
let p_1 = document.getElementById("p_1");
let p_2 = document.getElementById("p_2");
let p_3 = document.getElementById("p_3");


home.addEventListener("click",()=>{
    home_content.style.display='block';
    playlist_content.style.display='none';
    trendings_content.style.display='none';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='none';
});
trendings.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='none';
    trendings_content.style.display='block';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='none';

});
playlist.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='block';
    trendings_content.style.display='none';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='none';

});
more_trendings.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='none';
    trendings_content.style.display='block';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='none';

});
more_playlist.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='block';
    trendings_content.style.display='none';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='none';

});
artist_k.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='none';
    trendings_content.style.display='none';
    artist_1.style.display='block';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='none';
});
artist_a.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='none';
    trendings_content.style.display='none';
    artist_1.style.display='none';
    artist_2.style.display='block';
    artist_3.style.display='none';
    artist_4.style.display='none';
});

artist_c.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='none';
    trendings_content.style.display='none';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='block';
    artist_4.style.display='none';
});

artist_t.addEventListener("click",()=>{
    home_content.style.display='none';
    playlist_content.style.display='none';
    trendings_content.style.display='none';
    artist_1.style.display='none';
    artist_2.style.display='none';
    artist_3.style.display='none';
    artist_4.style.display='block';
});


const music = new Audio('audios/1.mp3');

const songs = [
    {
        id: 1,
        songName: 'Blowing Up <br> <h9>KR$NA</h9>',
        poster:"imgs/1.jpeg"
    },
    {
        id: 2,
        songName: 'Body <br> <h9>Russ Millon</h9>',
        poster:"imgs/2.jpeg"
    },
    {
        id: 3,
        songName: 'Chahun Mein Ya Na<br> <h9>Arijit Singh</h9>',
        poster:"imgs/3.jpeg"
    },
    {
        id: 4,
        songName: 'Say My Name <br> <h9>KR$NA</h9>',
        poster:"imgs/4.jpeg"
    },
    {
        id: 5,
        songName: 'Dior <br> <h9>Pop Smoke</h9>',
        poster:"imgs/5.jpeg"
    },
    {
        id: 6,
        songName: 'Gale lag jana ja<br> <h9>Javed Ali</h9>',
        poster:"imgs/6.jpeg"
    },
    {
        id: 7,
        songName: 'Invincible<br> <h9>Pop Smoke</h9>',
        poster:"imgs/7.jpeg"
    },
    {
        id: 8,
        songName: 'Him & I<br> <h9>G-Eazy,Halsey</h9>',
        poster:"imgs/8.jpeg"
    },
    {
        id: 9,
        songName: 'Hua hai aaj pehli baar<br> <h9>Armaan Malik,Amaan Malik</h9>',
        poster:"imgs/9.jpeg"
    },
    {
        id: 10,
        songName: 'Itni si vaat hain<br> <h9>Arijit Singh</h9>',
        poster:"imgs/10.jpeg"
    },


]

let playlist_drills =[
    {
        id:11,
        songName:'Overseas<br> <h9>D-Block Europe, Central Cee</h9>',
        poster:"imgs/11_drills.jpeg"
    },
    {
        id:12,
        songName:'Obsessed With You<br> <h9>Central Cee, Nostalgia</h9>',
        poster:"imgs/12_drills.jpeg"
    },
    {
        id:13,
        songName:'Loading<br> <h9>Central Cee</h9>',
        poster:"imgs/13_drills.jpeg"
    },
    {
        id:14,
        songName:'GATTI<br> <h9>JACKBOYS, Pop Smoke</h9>',
        poster:"imgs/14_drills.jpeg"
    },
    {
        id:15,
        songName:'Element<br> <h9>Pop Smoke</h9>',
        poster:"imgs/15_drills.jpeg"
    },
    {
        id:16,
        songName:'Commitment Issues<br> <h9>Central Cee</h9>',
        poster:"imgs/16_drills.jpeg"
    },
    {
        id:17,
        songName:'Dior<br> <h9>Pop Smoke</h9>',
        poster:"imgs/17_drills.jpeg"
    },
    {
        id:18,
        songName:'Hide N Seek<br> <h9>C1</h9>',
        poster:"imgs/18_drills.jpeg"
    },
    {
        id:19,
        songName:'Gangstas<br> <h9>Pop Smoke</h9>',
        poster:"imgs/19_drills.jpeg"
    },
    {
        id:20,
        songName:'Fake Friends<br> <h9>E1(3x3)</h9>',
        poster:"imgs/20_drills.jpeg"
    },
    {
        id:21,
        songName:'Get Back<br> <h9>Pop Smoke</h9>',
        poster:"imgs/21_drills.jpeg"
    },
    {
        id:22,
        songName:'Welcome to Brixton<br> <h9>SR</h9>',
        poster:"imgs/22_drills.jpeg"
    },
    {
        id:23,
        songName:'Sprinter<br> <h9>Dave, Central Cee</h9>',
        poster:"imgs/23_drills.jpeg"
    },
    {
        id:24,
        songName:'LIVID<br> <h9>Triple01s</h9>',
        poster:"imgs/24_drills.jpeg"
    },
    {
        id:25,
        songName:'Invincible<br> <h9>Pop Smoke</h9>',
        poster:"imgs/25_drills.jpeg"
    },
    {
        id:26,
        songName:'He is Dead<br> <h9>Lil S, Jmash, RD, TM</h9>',
        poster:"imgs/26_drills.jpeg"
    },
    {
        id:27,
        songName:'Doja<br> <h9>Central Cee</h9>',
        poster:"imgs/27_drills.jpeg"
    },
    {
        id:28,
        songName:'Body<br> <h9>Russ Millions, Tion Wayne</h9>',
        poster:"imgs/28_drills.jpeg"
    },
]

let playlist_romantic=[
    {
        id:29,
        songName: 'Hale dil<br> <h9>Harshit Saxena</h9>',
        poster:"imgs/29_r.jpeg",
        
    },
    {
        id:30,
        songName: 'Cant Forget You (Tujhe Bhula Diya)<br> <h9>Arjun, Jonita Gandhi, Vishal_Shekhar</h9>',
        poster:"imgs/30_r.jpeg",

    },
    {
        id:31,
        songName: 'Janiye<br> <h9>Vishal Mishra, Rashma</h9>',
        poster:"imgs/31_r.jpeg",
    },
    {
        id:32,
        songName: 'Just You and I<br> <h9>Tom Walker</h9>',
        poster:"imgs/32_r.jpeg",
    },
    {
        id:33,
        songName: 'Pe Loon <br> <h9>Pritam, Mohit Chauhan</h9>',
        poster:"imgs/33_r.jpeg",
    },
    {
        id:34,
        songName: 'Mere Bina <br> <h9>Pritam, Nikhil DSouza</h9>',
        poster:"imgs/34_r.jpeg",
    },
    {
        id:35,
        songName: 'Tum Se Hi<br> <h9>Pritam, Mohit Chauhan</h9>',
        poster:"imgs/35_r.jpeg",
    },
    {
        id:36,
        songName: 'Chahu Mein Ya Naa<br> <h9>Arijit Singh, Palak Muchhalh</h9>',
        poster:"imgs/36_r.jpeg",
    },
    {
        id:37,
        songName: 'Him & I<br> <h9>G-Eazy, Halsey</h9>',
        poster:"imgs/37_r.jpeg",
    },
    {
        id:38,
        songName: 'Hua hai Aaj Pehli Baar<br> <h9>Amaal Malik, Armaan Malik</h9>',
        poster:"imgs/38_r.jpeg",
    },
    {
        id:39,
        songName: 'Ishq Wala Love<br> <h9>Vishal-Shekhar</h9>',
        poster:"imgs/39_r.jpeg",
    },
    {
        id:40,
        songName: 'Phir Mohabbat<br> <h9>Arijit Singh, Mohammad Irfan, Saim Bhat </h9>',
        poster:"imgs/40_r.jpeg",
    },
    {
        id:41,
        songName: 'Zara Zara <br> <h9>Bombay Jayshri</h9>',
        poster:"imgs/41_r.jpeg",
    },
    {
        id:42,
        songName: 'Pehli Bhi Main <br> <h9>Vishal Mishra, Raj Shikhar</h9>',
        poster:"imgs/42_r.jpeg",
    },
    {
        id:43,
        songName: 'Gale Lag Jana Ja<br> <h9>Arijit Singh, Ankit Tiwari, Mithoon, Kiran Kamath</h9>',
        poster:"imgs/43_r.jpeg",
    },
    {
        id:44,
        songName: 'Mujhko Barsaat Bana Lo <br> <h9>Armaan Malik</h9>',
        poster:"imgs/44_r.jpeg",
    },
    {
        id:45,
        songName: 'Itni Si Baat Hai<br> <h9>Arijit Singh, Ankit Tiwari, Mithoon, Kiran Kamath</h9>',
        poster:"imgs/45_r.jpeg",
    },
    {
        id:46,
        songName: 'I Wanna Be Yours<br> <h9>Artic Monkey</h9>',
        poster:"imgs/46_r.jpeg",
    },
    {
        id:47,
        songName: 'Tere liye<br> <h9>Arijit Singh, Ankit Tiwari, Mithoon, Kiran Kamath</h9>',
        poster:"imgs/47_r.jpeg",
    },
    {
        id:48,
        songName: 'Ashiqui 2 Mashup<br> <h9>Arijit Singh, Ankit Tiwari....</h9>',
        poster:"imgs/48_r.jpeg",
    },
]

let playlist_hiphop = [
    {
        id:49,
        songName:"4.10<br> <h9>Divine, Lal Chand Yamla Jatt</h9>",
        poster:"imgs/49_h.jpeg",

    },
    {
        id:50,
        songName:"Agency<br> <h9>Talha Anjum, Rap Demon</h9>",
        poster:"imgs/50_h.jpeg",
    },
    {
        id:51,
        songName:"Kaha Tak<br> <h9>KR$SN, Jokhay, Umair</h9>",
        poster:"imgs/51_h.jpeg",
    },
    {
        id:52,
        songName:"Nevermind<br> <h9>Seedhe Maut, Talha Anjum, Umair</h9>",
        poster:"imgs/52_h.jpeg",
    },
    {
        id:53,
        songName:"Still Standing<br> <h9>KR$NA</h9>",
        poster:"imgs/53_h.jpeg",
    },
    {
        id:54,
        songName:"Two Tone <br> <h9>Young Stunners</h9>",
        poster:"imgs/54_h.jpeg",
    },
    {
        id:55,
        songName:"Why Not Meri Jaan<br> <h9>Young Stunners</h9>",
        poster:"imgs/55_h.jpeg",
    },
    {
        id:56,
        songName:"Woh Raat<br> <h9>Raftaar, KR$NA</h9>",
        poster:"imgs/56_h.jpeg",
    },
    {
        id:57,
        songName:"Prathna<br> <h9>KR$NA,Bharg</h9>",
        poster:"imgs/57_h.jpeg",
    },
    {
        id:58,
        songName:"Been a While<br> <h9>KR$NA, Talha Anjum</h9>",
        poster:"imgs/58_h.jpeg",
    },
    {
        id:59,
        songName:"Wanna Know<br> <h9>KR$NA</h9>",
        poster:"imgs/59_h.jpeg",
    },
    {
        id:60,
        songName:"Hola Amigo<br> <h9>KR$NA, Seedhe Maut</h9>",
        poster:"imgs/60_h.jpeg",
    },
    {
        id:61,
        songName:"Touch Base<br> <h9>KR$NA, Young Stunners</h9>",
        poster:"imgs/61_h.jpeg",
    },
    {
        id:62,
        songName:"TRAP PRAA<br> <h9>Raftaar, Prabh Dheep</h9>",
        poster:"imgs/62_h.jpeg",
    },
    {
        id:63,
        songName:"RA TA TA<br> <h9>KALAM INK, Bella,Greyybass </h9>",
        poster:"imgs/63_h.jpeg",
    },
    {
        id:64,
        songName:"Galat Karam<br> <h9>Panther, Raga</h9>",
        poster:"imgs/64_h.jpeg",
    },

]

let playlist_sad = [
    {
        id:65,
        songName:"Anjaan<br> <h9>Talha Yunus, Nabil Akbar, Jani</h9>",
        poster:"imgs/65_s.jpeg",
    },
    {
        id:66,
        songName:"Gumaan<br> <h9>Young Stunner</h9>",
        poster:"imgs/66_s.jpeg",
    },
    {
        id:67,
        songName:"295<br> <h9>Sidhu Moose Wala</h9>",
        poster:"imgs/67_s.jpeg",
    },
    {
        id:68,
        songName:"Mokingbird<br> <h9>Eminem</h9>",
        poster:"imgs/68_s.jpeg",
    },
    {
        id:69,
        songName:"Falling<br> <h9>Trevor Daniel</h9>",
        poster:"imgs/69_s.jpeg",
    },
    {
        id:70,
        songName:"Akela <br> <h9>Divine</h9>",
        poster:"imgs/70_s.jpeg",
    },
    {
        id:71,
        songName:"At The Top<br> <h9>Talha Anjm, Umair</h9>",
        poster:"imgs/71_s.jpeg",
    },
    {
        id:72,
        songName:"Happy Hour<br> <h9>Talha Anjum, Jokhay</h9>",
        poster:"imgs/72_s.jpeg",
    },
    {
        id:73,
        songName:"4AM in Karachi<br> <h9>Talha Anjm, Umair</h9>",
        poster:"imgs/73_s.jpeg",
    },
    {
        id:74,
        songName:"Talaash<br> <h9>Jokhay, Danish, Shareh, Nabeel Akbar</h9>",
        poster:"imgs/74_s.jpeg",
    },
    {
        id:75,
        songName:"Phir Milenge<br> <h9>Faisal Kapadia, Young Stunners</h9>",
        poster:"imgs/75_s.jpeg",
    },
    {
        id:76,
        songName:"Life Goes On<br> <h9>Aleemrk</h9>",
        poster:"imgs/76_s.jpeg",
    },
    {
        id:77,
        songName:"Jo Tu Na Mila<br> <h9>Asim Azhar</h9>",
        poster:"imgs/77_s.jpeg",
    },
    {
        id:78,
        songName:"Hate Me<br> <h9>Ellie Goulding, Juice WRLD</h9>",
        poster:"imgs/78_s.jpeg",
    },
    {
        id:79,
        songName:"Ektarfa<br> <h9>King</h9>",
        poster:"imgs/79_s.jpeg",
    },
    {
        id:80,
        songName:"DeathBed<br> <h9>Powfu, beabadoobee</h9>",
        poster:"imgs/80_s.jpeg",
    },
    {
        id:81,
        songName:"Cold Hours<br> <h9>Aleemrk, Umair</h9>",
        poster:"imgs/81_s.jpeg",
    },
    {
        id:82,
        songName:"Afsanay<br> <h9>Young Stunner </h9>",
        poster:"imgs/82_s.jpeg",
    },
]

let playlist_Punjabi = [
    {
        id:83,
        songName:"LEVELS<br> <h9>Sidhu Moose Wala, Sunny Malton</h9>",
        poster:"imgs/83_p.jpeg",
    },
    {
        id:84,
        songName:"Baller<br> <h9>Shubh,Ikky</h9>",
        poster:"imgs/84_p.jpeg",
    },
    {
        id:85,
        songName:"Brown Munde<br> <h9>AP Dhillon,Gminxr, Gurinder Gill, Shindha Kahlon </h9>",
        poster:"imgs/85_p.jpeg",
    },
    {
        id:86,
        songName:"Daku<br> <h9>Chani Nattan, Inderpal Moga</h9>",
        poster:"imgs/86_p.jpeg",
    },
    {
        id:87,
        songName:"Droptop<br><h9>AP Dhillon, Gurinder Gill, Gminxr</h9>",
        poster:"imgs/87_p.jpeg",
    },
    {
        id:88,
        songName:"Elevated<br><h9>Shubh</h9>",
        poster:"imgs/88_p.jpeg",
    },
    {
        id:89,
        songName:"Excuses<br> <h9>AP Dhillon, Gurinder Gill, Gminxr, Shindha Kahlon </h9>",
        poster:"imgs/89_p.jpeg",
    },
    {
        id:90,
        songName:"Faraar<br> <h9>Gurinder Gill, Shindha Kahlon </h9>",
        poster:"imgs/90_p.jpeg",
    },
    {
        id:91,
        songName:"Fuck Em All<br> <h9>Sidhu Moose Wala, Sunny Malton</h9>",
        poster:"imgs/91_p.jpeg",
    },
    {
        id:92,
        songName:"IMAGE<br> <h9>Deep Kalsi, Raftaar</h9>",
        poster:"imgs/92_p.jpeg",
    },
    {
        id:93,
        songName:"Ma Bella<br> <h9>AP Dhillon, Amari</h9>",
        poster:"imgs/93_p.jpeg",
    },
    {
        id:94,
        songName:"No Love<br> <h9>Shubh</h9>",
        poster:"imgs/94_p.jpeg",
    },
    {
        id:95,
        songName:"Offshore<br> <h9>Shubh</h9>",
        poster:"imgs/95_p.jpeg",
    },
    {
        id:96,
        songName:"We Rollin<br> <h9>Shubh</h9>",
        poster:"imgs/96_p.jpeg",
    },
    {
        id:97,
        songName:"Ykwim<br> <h9>Karan Aujla, KR$NA, Mehar Vaani</h9>",
        poster:"imgs/97_p.jpeg",
    },
    
]

let artist_krsna =[

    {
        id: 98,
        songName:"Fall Off<br><h9>KR$NA</h9>",
        poster: "imgs/98_k.jpeg",
    },
    {
        id: 99,
        songName:"NGL<br><h9>KR$NA,Talha Yunus</h9>",
        poster: "imgs/99_k.jpeg",
    },
    {
        id: 100,
        songName:"No Cap <br><h9>KR$NA</h9>",
        poster: "imgs/100_k.jpeg",
    },
    {
        id: 101,
        songName:"Wanna Know <br><h9>KR$NA</h9>",
        poster: "imgs/101_k.jpeg",
    },
    {
        id: 102,
        songName:"Still Standing <br><h9>KR$NA</h9>",
        poster: "imgs/102_k.jpeg",
    },
    {
        id: 103,
        songName:"Hola Amigo <br><h9>KR$NA, Seedhe Maut</h9>",
        poster: "imgs/103_k.jpeg",
    },
    {
        id: 104,
        songName:"Prathna<br><h9>KR$NA</h9>",
        poster: "imgs/104_k.jpeg",
    },
    {
        id: 105,
        songName:"Kaha Tak<br><h9>KR$NA</h9>",
        poster: "imgs/105_k.jpeg",
    },
    {
        id: 106,
        songName:"Been a While<br><h9>KR$NA,Talha Anjum</h9>",
        poster: "imgs/106_k.jpeg",
    },
    {
        id: 107,
        songName:"Roll Up<br><h9>KR$NA,Baadshah</h9>",
        poster: "imgs/107_k.jpeg",
    },
    {
        id: 108,
        songName:"NO CHINA<br><h9>KR$NA, Raftaar</h9>",
        poster: "imgs/108_k.jpeg",
    },
    {
        id: 109,
        songName:"Villian<br><h9>KR$NA,Karma, Ikka</h9>",
        poster: "imgs/109_k.jpeg",
    },
    {
        id: 110,
        songName:"Saza-e-Maut<br><h9>KR$NA, Raftaar</h9>",
        poster: "imgs/110_k.jpeg",
    },

]

let artist_arijit = [
    {
        id:111,
        songName:"Chahu Main Ya Na<br><h9>Arijit Singh, Palak Muchal</h9>",
        poster:"imgs/111_a.jpeg",
    },
    {
        id:112,
        songName:"Dekh Lena<br><h9>Arijit Singh,Tulsi Kumar</h9>",
        poster:"imgs/112_a.jpeg",
    },
    {
        id:113,
        songName:"Phir Mohabbat<br><h9>Arijit Singh, Mohammad irfan, Saim Bhatt</h9>",
        poster:"imgs/113_a.jpeg",
    },
    {
        id:114,
        songName:"Itni si Baat hai<br><h9>Arijit Singh, Antara Mitra</h9>",
        poster:"imgs/114_a.jpeg",
    },
    {
        id:115,
        songName:"Ashiqui 2 Mashup<br><h9>Arijit Singh, Ankit Tiwari....</h9>",
        poster:"imgs/115_a.jpeg",
    },
]

let artist_centralc = [

    {
        id:116,
        songName:"Doja<br><h9>Central Cee</h9>",
        poster:"imgs/116_c.jpeg",
    },
    {
        id:117,
        songName:"Sprinter <br><h9>Central Cee, Dave</h9>",
        poster:"imgs/117_c.jpeg",
    },
    {
        id:118,
        songName:"Commitment Issues<br><h9>Central Cee</h9>",
        poster:"imgs/118_c.jpeg",
    },
    {
        id:119,
        songName:"Loading<br><h9>Central Cee</h9>",
        poster:"imgs/119_c.jpeg",
    },
    {
        id:120,
        songName:"Obsessed With You<br><h9>Central Cee</h9>",
        poster:"imgs/120_c.jpeg",
    },
    {
        id:121,
        songName:"Overseas<br><h9>Central Cee, D-block Europe</h9>",
        poster:"imgs/121_c.jpeg",
    },
]

let artist_talhaanjum = [

    {
        id:122,
        songName:"Two Tones<br><h9>Talha Anjum, Talha Yunus</h9>",
        poster:"imgs/122_t.jpeg",
    },
    {
        id:123,
        songName:"4AM in Karachi<br><h9>Talha Anjum</h9>",
        poster:"imgs/123_t.jpeg",
    },
    {
        id:124,
        songName:"Quarantine<br><h9>Talha Anjum, Talha Yunus, KR$NA</h9>",
        poster:"imgs/124_t.jpeg",
    },
    {
        id:125,
        songName:"Phir Milenge<br><h9>Talha Anjum, Talha Yunus, Faisal Kapadia</h9>",
        poster:"imgs/125_t.jpeg",
    },
    {
        id:126,
        songName:"Gumaan<br><h9>Talha Anjum, Talha Yunus</h9>",
        poster:"imgs/126_t.jpeg",
    },
    {
        id:127,
        songName:"Benz <br><h9>Talha Anjum, Talha Yunus</h9>",
        poster:"imgs/127_t.jpeg",
    },
    {
        id:128,
        songName:"Afsanay<br><h9>Talha Anjum, Talha Yunus</h9>",
        poster:"imgs/128_t.jpeg",
    },

]

Array.from(document.getElementsByClassName('song')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h1')[0].innerHTML = songs[i].songName;

});
Array.from(document.getElementsByClassName('trendingsong')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h3')[0].innerHTML = songs[i].songName;

});

Array.from(document.getElementsByClassName('s_k')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = artist_krsna[i].poster;
    e.getElementsByTagName('h1')[0].innerHTML = artist_krsna[i].songName;
});

Array.from(document.getElementsByClassName('s_a')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = artist_arijit[i].poster;
    e.getElementsByTagName('h1')[0].innerHTML = artist_arijit[i].songName;
});

Array.from(document.getElementsByClassName('s_c')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = artist_centralc[i].poster;
    e.getElementsByTagName('h1')[0].innerHTML = artist_centralc[i].songName;
});

Array.from(document.getElementsByClassName('s_t')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = artist_talhaanjum[i].poster;
    e.getElementsByTagName('h1')[0].innerHTML = artist_talhaanjum[i].songName;
});


let masterPlay =  document.getElementById('masterPlay');
let masterForward = document.getElementById('masterForward');
let masterBack = document.getElementById('masterBack');
let shuffle = document.getElementById('shuffle');
let download = document.getElementById('download');
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0){
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
    }
   else{
    music.pause();
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-fill');
    
   }
});

masterBack.addEventListener('click',()=>{
    if(index>0,index<11){
        if (index<=1)
            {
            index = 11;
        }
        index--;
        music.src = "audios/"+index+".mp3";
        poster_live.src = "imgs/"+index+".jpeg";
        music.play();
    
        let songtitle_l = songs.filter((els)=>{
            return els.id == index;
        });
    
        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
       
    }

    else{
           if(index>10,index<29){
                if(index<=11){
                    index=29;
                }
                   index--;
                   music.src = "audios/"+index+"_drills.mp3";
                   poster_live.src = "imgs/"+index+"_drills.jpeg";
                   music.play();
    
                   let songtitle_l = playlist_drills.filter((els)=>{
                     return els.id == index;
                     });
    
                       songtitle_l.forEach(elss =>{
                         let {songName}= elss;
                          song_title_live.innerHTML = songName; 
                        });
            }

            else {
                if (index>28,index<49)
                {
                  if ( index<=29) {
                      index = 49;
                    }
                    index--;
                    music.src = "audios/"+index+"_r.mp3";
                    poster_live.src = "imgs/"+index+"_r.jpeg";
                    music.play();
                
                    let songtitle_l = playlist_romantic.filter((els)=>{
                        return els.id == index;
                    });
                
                    songtitle_l.forEach(elss =>{
                        let {songName}= elss;
                        song_title_live.innerHTML = songName; 
                    });
                }
                else{
                    if (index>48,index<65)
                        {
                          if (index<=49) {
                              index = 65;
                            }
                            index--;
                            music.src = "audios/"+index+"_h.mp3";
                            poster_live.src = "imgs/"+index+"_h.jpeg";
                            music.play();
                        
                            let songtitle_l = playlist_hiphop.filter((els)=>{
                                return els.id == index;
                            });
                        
                            songtitle_l.forEach(elss =>{
                                let {songName}= elss;
                                song_title_live.innerHTML = songName; 
                            });
                            
                        }
                        else{
                            if (index>64,index<83)
                                {
                                  if (index<=65) {
                                      index = 83;
                                    }
                                    index--;
                                    music.src = "audios/"+index+"_s.mp3";
                                    poster_live.src = "imgs/"+index+"_s.jpeg";
                                    music.play();
                                
                                    let songtitle_l = playlist_sad.filter((els)=>{
                                        return els.id == index;
                                    });
                                
                                    songtitle_l.forEach(elss =>{
                                        let {songName}= elss;
                                        song_title_live.innerHTML = songName; 
                                    });
                                }
                                else{
                                    if (index>82,index<98)
                                    {
                                     if (index<=83) {
                                            index = 99;
                                        }
                                        index--;
                                        music.src = "audios/"+index+"_p.mp3";
                                        poster_live.src = "imgs/"+index+"_p.jpeg";
                                        music.play();
                                    
                                        let songtitle_l = playlist_Punjabi.filter((els)=>{
                                            return els.id == index;
                                        });
                                    
                                        songtitle_l.forEach(elss =>{
                                            let {songName}= elss;
                                            song_title_live.innerHTML = songName; 
                                        });    
                                    } 
                                    else{
                                        if(index>97, index<111)
                                            {
                                            if(index<=98){
                                                index=111;
                                            }
                                            index--;
                                            music.src = "audios/"+index+"_k.mp3";
                                            poster_live.src = "imgs/"+index+"_k.jpeg";
                                            music.play();
                                        
                                            let songtitle_l = artist_krsna.filter((els)=>{
                                                return els.id == index;
                                            });
                                        
                                            songtitle_l.forEach(elss =>{
                                                let {songName}= elss;
                                                song_title_live.innerHTML = songName; 
                                            });   
                                            

                                        }
                                        else{
                                            if(index>110, index<116)
                                            {
                                                if(index<=111){
                                                    index=116;
                                                }
                                                index--;
                                                music.src = "audios/"+index+"_a.mp3";
                                                poster_live.src = "imgs/"+index+"_a.jpeg";
                                                music.play();
                                            
                                                let songtitle_l = artist_arijit.filter((els)=>{
                                                    return els.id == index;
                                                });
                                            
                                                songtitle_l.forEach(elss =>{
                                                    let {songName}= elss;
                                                    song_title_live.innerHTML = songName; 
                                                });  
                                            }
                                            else{
                                                if(index>115, index<122){
                                                    if(index<=116){
                                                        index=122;
                                                    }
                                                    index--;
                                                music.src = "audios/"+index+"_c.mp3";
                                                poster_live.src = "imgs/"+index+"_c.jpeg";
                                                music.play();
                                            
                                                let songtitle_l = artist_centralc.filter((els)=>{
                                                    return els.id == index;
                                                });
                                            
                                                songtitle_l.forEach(elss =>{
                                                    let {songName}= elss;
                                                    song_title_live.innerHTML = songName; 
                                                });  
                                                }
                                                else{
                                                    if(index>121,index<129){
                                                        if(index<=122){
                                                            index=129;
                                                        }
                                                        index--;
                                                        music.src = "audios/"+index+"_t.mp3";
                                                        poster_live.src = "imgs/"+index+"_t.jpeg";
                                                        music.play();
                                                    
                                                        let songtitle_l = artist_talhaanjum.filter((els)=>{
                                                            return els.id == index;
                                                        });
                                                    
                                                        songtitle_l.forEach(elss =>{
                                                            let {songName}= elss;
                                                            song_title_live.innerHTML = songName; 
                                                        });  
                                                    }
                                                }
                                            }
                                        }
                                    }

                                }
                        }
                }
        
            }
    }
    });
masterForward.addEventListener('click',()=>{
    if(index<=10, index<11){
        if (index>=10) {
            index = 0 ;
        }
        index++;
        music.src = "audios/"+index+".mp3";
        poster_live.src = "imgs/"+index+".jpeg";
        music.play();
    
        let songtitle_l = songs.filter((els)=>{
            return els.id == index;
        });
    
        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
       }
       else{
        if(index>10, index<=28){
            if (index>=28 )
                {
                index = 10 ;
            }
        index++;
        music.src = "audios/"+index+"_drills.mp3";
        poster_live.src = "imgs/"+index+"_drills.jpeg";
        music.play();
    
        let songtitle_l = playlist_drills.filter((els)=>{
            return els.id == index;
        });
    
        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
       }
       else {
        if (index>28, index<=48)
        {
            if (index>=48)
                {
                index = 28;
            }
        index++;
        music.src = "audios/"+index+"_r.mp3";
        poster_live.src = "imgs/"+index+"_r.jpeg";
        music.play();
    
        let songtitle_l = playlist_romantic.filter((els)=>{
            return els.id == index;
        });
    
        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
    }
        
    else{
        if(index>48, index<=64){
            if (index>=64){
                index=48;
            }
            index++;
            music.src ="audios/"+index+"_h.mp3";
            poster_live.src = "img"+index+"_h.jpeg";
            music.play();
            let songtitle_l = playlist_hiphop.filter((els)=>{
                return els.id==index;
            });
            songtitle_l.forEach(elss =>{
                let{songName}=elss;
                song_title_live.innerHTML= songName;
            });
        }
        else{
            if (index>64, index<83 ) {
                if (index>=82)
                    {
                    index = 64;
                }
                index++;
                music.src = "audios/"+index+"_s.mp3";
                poster_live.src = "imgs/"+index+"_s.jpeg";
                music.play();
            
                let songtitle_l = playlist_sad.filter((els)=>{
                    return els.id == index;
                });
            
                songtitle_l.forEach(elss =>{
                    let {songName}= elss;
                    song_title_live.innerHTML = songName; 
                });
            }
            else{
                if (index>82, index<98 ) {
                    if (index>=97)
                        {
                        index =82;
                    }
                    index++;
                    music.src = "audios/"+index+"_p.mp3";
                    poster_live.src = "imgs/"+index+"_p.jpeg";
                    music.play();
                
                    let songtitle_l = playlist_Punjabi.filter((els)=>{
                        return els.id == index;
                    });
                
                    songtitle_l.forEach(elss =>{
                        let {songName}= elss;
                        song_title_live.innerHTML = songName; 
                    });
                }
                else{
                    if(index>97, index<111){
                        if(index>=110){
                            index=97;
                        }
                        index++;
                        music.src = "audios/"+index+"_k.mp3";
                        poster_live.src = "imgs/"+index+"_k.jpeg";
                        music.play();
                    
                        let songtitle_l = artist_krsna.filter((els)=>{
                            return els.id == index;
                        });
                    
                        songtitle_l.forEach(elss =>{
                            let {songName}= elss;
                            song_title_live.innerHTML = songName; 
                        });
                    }
                    else{
                        if(index>110, index<116){
                            if(index>=115){
                                index=110;
                            }
                            index++;
                            music.src = "audios/"+index+"_a.mp3";
                            poster_live.src = "imgs/"+index+"_a.jpeg";
                            music.play();
                        
                            let songtitle_l = artist_arijit.filter((els)=>{
                                return els.id == index;
                            });
                        
                            songtitle_l.forEach(elss =>{
                                let {songName}= elss;
                                song_title_live.innerHTML = songName; 
                            });
                        }
                        else{
                            if(index>115, index<122){
                                if(index>=121){
                                    index=115;
                                }
                                index++;
                                music.src = "audios/"+index+"_c.mp3";
                                poster_live.src = "imgs/"+index+"_c.jpeg";
                                music.play();
                            
                                let songtitle_l = artist_centralc.filter((els)=>{
                                    return els.id == index;
                                });
                            
                                songtitle_l.forEach(elss =>{
                                    let {songName}= elss;
                                    song_title_live.innerHTML = songName; 
                                });
                            }
                            else{
                                if(index>121, index<129){
                                    if(index>=128){
                                        index=121;
                                    }
                                    index++;
                                music.src = "audios/"+index+"_t.mp3";
                                poster_live.src = "imgs/"+index+"_t.jpeg";
                                music.play();
                            
                                let songtitle_l = artist_talhaanjum.filter((els)=>{
                                    return els.id == index;
                                });
                            
                                songtitle_l.forEach(elss =>{
                                    let {songName}= elss;
                                    song_title_live.innerHTML = songName; 
                                });
                                }
                            }
                        }
                    }
                }
            }
        }

        
    }
       }
    }
    });
music.addEventListener('ended',()=>{

   if(index<=10){
      if (index>=10 )
        {
        index = 0 ;
        }
         index++;
       music.src = "audios/"+index+".mp3";
       poster_live.src = "imgs/"+index+".jpeg";
       music.play();

       let songtitle_l = songs.filter((els)=>{
        return els.id == index;
        });

       songtitle_l.forEach(elss =>{
        let {songName}= elss;
        song_title_live.innerHTML = songName; 
       }); 
    }
   else{
     if(index>10, index<29) 
       {     
         
        if (index>=28)
            {
               index = 10 ;
           }
           index++;
           music.src = "audios/"+index+"_drills.mp3";
           poster_live.src = "imgs/"+index+"_drills.jpeg";
           music.play();
       
           let songtitle_l = playlist_drills.filter((els)=>{
               return els.id == index;
           });
       
           songtitle_l.forEach(elss =>{
               let {songName}= elss;
               song_title_live.innerHTML = songName; 
           });
        }
     else {  
        if (index>28, index<49 )
        {
            if (index>=48)
                {
                index = 28;
            }
            index++;
            music.src = "audios/"+index+"_r.mp3";
            poster_live.src = "imgs/"+index+"_r.jpeg";
            music.play();
        
            let songtitle_l = playlist_romantic.filter((els)=>{
                return els.id == index;
            });
        
            songtitle_l.forEach(elss =>{
                let {songName}= elss;
                song_title_live.innerHTML = songName; 
            });
        }
        
        else
        {
            if (index>48, index<65 ) {
                    if (index>=64)
                        {
                        index = 48;
                    }
                    index++;
                    music.src = "audios/"+index+"_h.mp3";
                    poster_live.src = "imgs/"+index+"_h.jpeg";
                    music.play();
                
                    let songtitle_l = playlist_hiphop.filter((els)=>{
                        return els.id == index;
                    });
                
                    songtitle_l.forEach(elss =>{
                        let {songName}= elss;
                        song_title_live.innerHTML = songName; 
                    });
            }   
            else{
                if (index>64, index<83 ) {
                    if (index>=82)
                        {
                        index = 64;
                    }
                    index++;
                    music.src = "audios/"+index+"_s.mp3";
                    poster_live.src = "imgs/"+index+"_s.jpeg";
                    music.play();
                
                    let songtitle_l = playlist_sad.filter((els)=>{
                        return els.id == index;
                    });
                
                    songtitle_l.forEach(elss =>{
                        let {songName}= elss;
                        song_title_live.innerHTML = songName; 
                    });
                }
                else{
                    if (index>82, index<98 ) {
                        if (index>=97)
                            {
                            index =82;
                        }
                        index++;
                        music.src = "audios/"+index+"_p.mp3";
                        poster_live.src = "imgs/"+index+"_p.jpeg";
                        music.play();
                    
                        let songtitle_l = playlist_Punjabi.filter((els)=>{
                            return els.id == index;
                        });
                    
                        songtitle_l.forEach(elss =>{
                            let {songName}= elss;
                            song_title_live.innerHTML = songName; 
                        });
                    }
                    else{
                        if(index>97, index<111){
                            if(index>=110){
                                index=97;
                            }
                            index++;
                            music.src = "audios/"+index+"_k.mp3";
                            poster_live.src = "imgs/"+index+"_k.jpeg";
                            music.play();
                        
                            let songtitle_l = artist_krsna.filter((els)=>{
                                return els.id == index;
                            });
                        
                            songtitle_l.forEach(elss =>{
                                let {songName}= elss;
                                song_title_live.innerHTML = songName; 
                            });
                        }
                        else{
                            if(index>110, index<116){
                                if(index>=115){
                                    index=110;
                                }
                                index++;
                                music.src = "audios/"+index+"_a.mp3";
                                poster_live.src = "imgs/"+index+"_a.jpeg";
                                music.play();
                            
                                let songtitle_l = artist_arijit.filter((els)=>{
                                    return els.id == index;
                                });
                            
                                songtitle_l.forEach(elss =>{
                                    let {songName}= elss;
                                    song_title_live.innerHTML = songName; 
                                });
                            }
                            else{
                                if(index>115, index<122){
                                    if(index>=121){
                                        index=115;
                                    }
                                    index++;
                                    music.src = "audios/"+index+"_c.mp3";
                                    poster_live.src = "imgs/"+index+"_c.jpeg";
                                    music.play();
                                
                                    let songtitle_l = artist_centralc.filter((els)=>{
                                        return els.id == index;
                                    });
                                
                                    songtitle_l.forEach(elss =>{
                                        let {songName}= elss;
                                        song_title_live.innerHTML = songName; 
                                    });
                                }
                                else{
                                    if(index>121, index<129){
                                        if(index>=128){
                                            index=121;
                                        }
                                        index++;
                                    music.src = "audios/"+index+"_t.mp3";
                                    poster_live.src = "imgs/"+index+"_t.jpeg";
                                    music.play();
                                
                                    let songtitle_l = artist_talhaanjum.filter((els)=>{
                                        return els.id == index;
                                    });
                                
                                    songtitle_l.forEach(elss =>{
                                        let {songName}= elss;
                                        song_title_live.innerHTML = songName; 
                                    });
                                    }
                                }
                            }
                        }
                    }
                }
            } 
                
            
        }
    
   }
}
});

shuffle.addEventListener('click',()=>{
    if(index<=10){
       shuffle.style.color='white';
        music.addEventListener('ended',()=>{
            index= Math.floor((Math.random()*10)+1);
            music.src = "audios/"+index+".mp3";
            poster_live.src = "imgs/"+index+".jpeg";
            music.play();
     
            let songtitle_l = songs.filter((els)=>{
             return els.id == index;
             });
     
            songtitle_l.forEach(elss =>{
             let {songName}= elss;
             song_title_live.innerHTML = songName; 
            }); 
            
        })
    }
    else{
   
        if(index <=28 && index>=11){
            shuffle.style.color='white';
            music.addEventListener('ended',()=>{
                index = Math.floor((Math.random()*18) + 11);
                music.src = "audios/"+index+"_drills.mp3";
                poster_live.src = "imgs/"+index+"_drills.jpeg";
                music.play();
         
                let songtitle_l = playlist_drills.filter((els)=>{
                 return els.id == index;
                 });
         
                songtitle_l.forEach(elss =>{
                 let {songName}= elss;
                 song_title_live.innerHTML = songName; 
                }); 
                
            })
        }
        else{
            if(index>28 && index<49){
                shuffle.style.color ='white';
                music.addEventListener('ended',()=>{

                    index = Math.floor((Math.random()*21) + 29)
                    music.src = "audios/"+index+"_r.mp3";
                    poster_live.src = "imgs/"+index+"_r.jpeg";
                    music.play();
             
                    let songtitle_l = playlist_romantic.filter((els)=>{
                     return els.id == index;
                     });
             
                    songtitle_l.forEach(elss =>{
                     let {songName}= elss;
                     song_title_live.innerHTML = songName; 
                    }); 
                })
            }
            else{
                if(index>48 && index<64){
                    shuffle.style.color ='white';
                    music.addEventListener('ended',()=>{
    
                        index = Math.floor((Math.random()*16) + 49)
                        music.src = "audios/"+index+"_h.mp3";
                        poster_live.src = "imgs/"+index+"_h.jpeg";
                        music.play();
                 
                        let songtitle_l = playlist_hiphop.filter((els)=>{
                         return els.id == index;
                         });
                 
                        songtitle_l.forEach(elss =>{
                         let {songName}= elss;
                         song_title_live.innerHTML = songName; 
                        }); 
                    })
                }
                else{
                    if(index>64 && index<83){
                        shuffle.style.color ='white';
                        music.addEventListener('ended',()=>{
        
                            index = Math.floor((Math.random()*18) + 64)
                            music.src = "audios/"+index+"_s.mp3";
                            poster_live.src = "imgs/"+index+"_s.jpeg";
                            music.play();
                     
                            let songtitle_l = playlist_sad.filter((els)=>{
                             return els.id == index;
                             });
                     
                            songtitle_l.forEach(elss =>{
                             let {songName}= elss;
                             song_title_live.innerHTML = songName; 
                            }); 
                        })
                    }
                    else{
                        if(index>82 && index<98){
                            shuffle.style.color ='white';
                            music.addEventListener('ended',()=>{
            
                                index = Math.floor((Math.random()*16) + 83)
                                music.src = "audios/"+index+"_p.mp3";
                                poster_live.src = "imgs/"+index+"_p.jpeg";
                                music.play();
                         
                                let songtitle_l = playlist_Punjabi.filter((els)=>{
                                 return els.id == index;
                                 });
                         
                                songtitle_l.forEach(elss =>{
                                 let {songName}= elss;
                                 song_title_live.innerHTML = songName; 
                                }); 
                            })
                        }
                        else{
                            if(index>97 && index<111){
                                shuffle.style.color ='white';
                                music.addEventListener('ended',()=>{
                
                                    index = Math.floor((Math.random()*14) + 98)
                                    music.src = "audios/"+index+"_k.mp3";
                                    poster_live.src = "imgs/"+index+"_k.jpeg";
                                    music.play();
                             
                                    let songtitle_l = artist_krsna.filter((els)=>{
                                     return els.id == index;
                                     });
                             
                                    songtitle_l.forEach(elss =>{
                                     let {songName}= elss;
                                     song_title_live.innerHTML = songName; 
                                    }); 
                                })
                            }
                            else{
                                if(index>110 && index<116){
                                    shuffle.style.color ='white';
                                    music.addEventListener('ended',()=>{
                    
                                        index = Math.floor((Math.random()*6) + 111)
                                        music.src = "audios/"+index+"_a.mp3";
                                        poster_live.src = "imgs/"+index+"_a.jpeg";
                                        music.play();
                                 
                                        let songtitle_l = artist_arijit.filter((els)=>{
                                         return els.id == index;
                                         });
                                 
                                        songtitle_l.forEach(elss =>{
                                         let {songName}= elss;
                                         song_title_live.innerHTML = songName; 
                                        }); 
                                    })
                                }
                                else{
                                    if(index>115 && index<122){
                                        shuffle.style.color ='white';
                                        music.addEventListener('ended',()=>{
                        
                                            index = Math.floor((Math.random()*7) + 116)
                                            music.src = "audios/"+index+"_c.mp3";
                                            poster_live.src = "imgs/"+index+"_c.jpeg";
                                            music.play();
                                     
                                            let songtitle_l = artist_centralc.filter((els)=>{
                                             return els.id == index;
                                             });
                                     
                                            songtitle_l.forEach(elss =>{
                                             let {songName}= elss;
                                             song_title_live.innerHTML = songName; 
                                            }); 
                                        })
                                    }
                                    else{
                                        if(index>121 && index<129){
                                            shuffle.style.color ='white';
                                            music.addEventListener('ended',()=>{
                            
                                                index = Math.floor((Math.random()*8) + 122)
                                                music.src = "audios/"+index+"_t.mp3";
                                                poster_live.src = "imgs/"+index+"_t.jpeg";
                                                music.play();
                                         
                                                let songtitle_l = artist_talhaanjum.filter((els)=>{
                                                 return els.id == index;
                                                 });
                                         
                                                songtitle_l.forEach(elss =>{
                                                 let {songName}= elss;
                                                 song_title_live.innerHTML = songName; 
                                                }); 
                                            })
                                        }
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }

    }

});



let song_title_live= document.getElementById('song_title_live');
let poster_live= document.getElementById('poster_live');
let poster1= document.getElementById('poster1');
let song_title1= document.getElementById(' song_title1');

let poster2= document.getElementById('poster2');
let song_title2= document.getElementById(' song_title2');

let poster3= document.getElementById('poster3');
let song_title3= document.getElementById(' song_title3');
let index;


Array.from(document.getElementsByClassName('poster_1')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
       
        index =el.target.id;
        music.src = "audios/"+index+".mp3";
        poster_live.src = "imgs/"+index+".jpeg";
        music.play();
        
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');

        let songtitle_l = songs.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
    });
    
}); 

Array.from(document.getElementsByClassName('trendingsong')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        music.src = "audios/"+index+".mp3";
        poster_live.src = "imgs/"+index+".jpeg";
        music.play();
        
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = songs.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
        
    });
   
})  
Array.from(document.getElementsByClassName('poster_p1')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        music.src = "audios/"+index+"_drills.mp3";
        poster_live.src = "imgs/"+index+"_drills.jpeg";
        music.play();
        
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = playlist_drills.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
        
    });
   
})  
Array.from(document.getElementsByClassName('poster_p2')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        music.src = "audios/"+index+"_r.mp3";
        poster_live.src = "imgs/"+index+"_r.jpeg";
        music.play();
        
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = playlist_romantic.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
        
    });
   
})  
Array.from(document.getElementsByClassName('poster_p3')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        music.src = "audios/"+index+"_h.mp3";
        poster_live.src = "imgs/"+index+"_h.jpeg";
        music.play();
        
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = playlist_hiphop.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
        
    });
   
})  
Array.from(document.getElementsByClassName('poster_p4')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        music.src = "audios/"+index+"_s.mp3";
        poster_live.src = "imgs/"+index+"_s.jpeg";
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = playlist_sad.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
        
    });
   
});

Array.from(document.getElementsByClassName('poster_p5')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        music.src = "audios/"+index+"_p.mp3";
        poster_live.src = "imgs/"+index+"_p.jpeg";
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = playlist_Punjabi.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        
        
    });
   
});
Array.from(document.getElementsByClassName('bi bi-play-circle')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index =el.target.id;
        if(index<98, index<111){
        music.src = "audios/"+index+"_k.mp3";
        poster_live.src = "imgs/"+index+"_k.jpeg";
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = artist_krsna.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        }
        else{
        if(index>110, index<116){
        music.src = "audios/"+index+"_a.mp3";
        poster_live.src = "imgs/"+index+"_a.jpeg";
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        let songtitle_l = artist_arijit.filter((els)=>{
            return els.id == index;
        });

        songtitle_l.forEach(elss =>{
            let {songName}= elss;
            song_title_live.innerHTML = songName; 
        });
        }
        else{
            if(index>115, index<122){
                music.src = "audios/"+index+"_c.mp3";
                poster_live.src = "imgs/"+index+"_c.jpeg";
                music.play();
                masterPlay.classList.add('bi-pause-fill');
                masterPlay.classList.remove('bi-play-fill');
                let songtitle_l = artist_centralc.filter((els)=>{
                    return els.id == index;
                });
        
                songtitle_l.forEach(elss =>{
                    let {songName}= elss;
                    song_title_live.innerHTML = songName; 
                });
            }
            else{
                if(index>121, index<129){
                    music.src = "audios/"+index+"_t.mp3";
                    poster_live.src = "imgs/"+index+"_t.jpeg";
                    music.play();
                    masterPlay.classList.add('bi-pause-fill');
                    masterPlay.classList.remove('bi-play-fill');
                    let songtitle_l = artist_talhaanjum.filter((els)=>{
                        return els.id == index;
                    });
            
                    songtitle_l.forEach(elss =>{
                        let {songName}= elss;
                        song_title_live.innerHTML = songName; 
                    });
                }
            }
        }

        }
    });
   
}) 
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_durr = music.duration;
    let seek = document.getElementById('seek');
    let min1 = Math.floor(music_durr/60);
    let sec1 = Math.floor(music_durr%60); 
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if (sec1<10){
        sec1 = "0"+sec1;
    };
    if (sec2<10){
        sec2 = "0"+sec2;
    };

 
    currentEnd.innerText = min1+":"+sec1;
    currentStart.innerText = min2+":"+sec2;
    let seekbar = parseInt((music_curr/music_durr)*100);
    seek.value = seekbar;
});
seek.addEventListener('change',()=>{
    music.currentTime = seek.value*music.duration/100;
 
});

let vol=document.getElementById('vol');
vol.addEventListener('change',()=>{
    let vol_a = vol.value;
    music.volume = vol_a/100;
});

p_1.addEventListener("click",()=>{
     
    index=11;   
    music.src = "audios/"+index+"_drills.mp3";
    poster_live.src = "imgs/"+index+"_drills.jpeg";
    music.play();
    
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
    let songtitle_l = playlist_drills.filter((els)=>{
        return els.id == index;
    });

    songtitle_l.forEach(elss =>{
        let {songName}= elss;
        song_title_live.innerHTML = songName; 
    });
    
    


});
p_2.addEventListener("click",()=>{
     
    index=29;   
    music.src = "audios/"+index+"_r.mp3";
    poster_live.src = "imgs/"+index+"_r.jpeg";
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
    let songtitle_l = playlist_romantic.filter((els)=>{
        return els.id == index;
    });

    songtitle_l.forEach(elss =>{
        let {songName}= elss;
        song_title_live.innerHTML = songName; 
    });
    
    


});
p_3.addEventListener("click",()=>{
     
    index=49;   
    music.src = "audios/"+index+"_h.mp3";
    poster_live.src = "imgs/"+index+"_h.jpeg";
    music.play();
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
    let songtitle_l = playlist_hiphop.filter((els)=>{
        return els.id == index;
    });

    songtitle_l.forEach(elss =>{
        let {songName}= elss;
        song_title_live.innerHTML = songName; 
    });
    
    


});