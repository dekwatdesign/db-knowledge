# `opdscreen_doctor_pe`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_doctor_pe_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pe_ga | char(1) | YES |  | NULL |  |  |
| pe_heent | char(1) | YES |  | NULL |  |  |
| pe_heart | char(1) | YES |  | NULL |  |  |
| pe_chest | char(1) | YES |  | NULL |  |  |
| pe_ab | char(1) | YES |  | NULL |  |  |
| pe_pv | char(1) | YES |  | NULL |  |  |
| pe_pr | char(1) | YES |  | NULL |  |  |
| pe_gen | char(1) | YES |  | NULL |  |  |
| pe_neuro | char(1) | YES |  | NULL |  |  |
| pe_ext | char(1) | YES |  | NULL |  |  |
| pe_ga_text | varchar(100) | YES |  | NULL |  |  |
| pe_heent_text | varchar(100) | YES |  | NULL |  |  |
| pe_heart_text | varchar(100) | YES |  | NULL |  |  |
| pe_chest_text | varchar(100) | YES |  | NULL |  |  |
| pe_ab_text | varchar(100) | YES |  | NULL |  |  |
| pe_pv_text | varchar(100) | YES |  | NULL |  |  |
| pe_pr_text | varchar(100) | YES |  | NULL |  |  |
| pe_gen_text | varchar(100) | YES |  | NULL |  |  |
| pe_neuro_text | varchar(100) | YES |  | NULL |  |  |
| pe_ext_text | varchar(100) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| pe_rtf | longtext | YES |  | NULL |  |  |
| pe | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| pe_html | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | opdscreen_doctor_pe_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opdscreen_doctor_pe_id": 1,
    "vn": "671002071336",
    "pe_ga": null,
    "pe_heent": null,
    "pe_heart": null,
    "pe_chest": null,
    "pe_ab": null,
    "pe_pv": null,
    "pe_pr": null,
    "pe_gen": null,
    "pe_neuro": null,
    "pe_ext": null,
    "pe_ga_text": null,
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "0037",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset2 Wingdings;}{\\f2\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\f0\\fs44\\cf16 .\\par\r\n\\pard\\plain\\plain\\f0\\fs44\\cf16\\par\r\n}}",
    "pe": ".\r\n",
    "update_datetime": "2024-10-02 11:27:38",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 2,
    "vn": "671003083026",
    "pe_ga": "Y",
    "pe_heent": "Y",
    "pe_heart": "Y",
    "pe_chest": "Y",
    "pe_ab": "Y",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "Y",
    "pe_ext": "Y",
    "pe_ga_text": null,
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "353",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset2 Wingdings;}{\\f2\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\fs44 Euthymic, mild anxious\\par\r\n\\plain\\fs44 no hallucination no delusion\\par\r\n\\plain\\fs44 good insight\\par\r\n\\plain\\fs44 good judgment but immature\\par\r\n\\sect}\\sectd\\ltrsect\\sbknone\\sectdefaultcl{\\plain\\fs40\\cf0\\cb0 Coperative \\par\r\n\\plain\\fs40\\cf0\\cb0 GA  normal  \\par\r\n\\plain\\fs40\\cf0\\cb0 Repetitive behavior no\\par\r\n\\plain\\fs40\\cf0\\cb0 EC good\\par\r\n\\plain\\fs40\\cf0\\cb0 affect  slightly restrict  \\par\r\n\\plain\\fs40\\cf0\\cb0 Language \\par\r\n\\plain\\fs40\\cf0\\cb0 Receptive  good\\par\r\n\\plain\\fs40\\cf0\\cb0 Expressive          \\u3648 ?\\u3621 ?\\u3656 ?\\u3634 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3652 ?\\u3604 ?\\u3657 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3619 ?\\u3634 ?\\u3623 ?\\par\r\n\\plain\\fs40\\cf0\\cb0 Insight     good \\par\r\n\\plain\\fs40\\cf0\\cb0 Judgement good \\par\r\n\\pard\\plain\\plain\\fs40\\par\r\n}}",
    "pe": "Euthymic, mild anxious\r\nno hallucination no delusion\r\ngood insight\r\ngood judgment but immature\r\nCoperative \r\nGA  normal  \r\nRepetitive behavior no\r\nEC good\r\naffect  slightly restrict  \r\nLanguage \r\nReceptive  good\r\nExpressive          เล่าเรื่องได้เป็นเรื่องเป็นราว\r\nInsight     good \r\nJudgement good \r\n",
    "update_datetime": "2024-10-03 09:03:18",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 3,
    "vn": "671003083010",
    "pe_ga": "Y",
    "pe_heent": "Y",
    "pe_heart": "Y",
    "pe_chest": "Y",
    "pe_ab": "Y",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "-",
    "pe_ext": "Y",
    "pe_ga_text": null,
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "353",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset2 Wingdings;}{\\f2\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\fs40\\cf0\\cb0 Coperative  \\par\r\n\\plain\\fs40\\cf0\\cb0 GA  normal  \\par\r\n\\plain\\fs40\\cf0\\cb0 Repetitive behavior  none\\par\r\n\\plain\\fs40\\cf0\\cb0 EC  \\cf0\\cb0 good\\par\r\n\\plain\\fs40\\cf0\\cb0 mood  euthymic \\par\r\n\\plain\\fs40\\cf0\\cb0 affect   approriate\\par\r\n\\plain\\fs40\\cf0\\cb0 Language \\par\r\n\\plain\\fs40\\cf0\\cb0 Receptive      \\u3648 ?\\u3586 ?\\u3657 ?\\u3634 ?\\u3651 ?\\u3592 ? \\u3606 ?\\u3634 ?\\u3617 ?\\u3605 ?\\u3629 ?\\u3610 ?\\u3605 ?\\u3619 ?\\u3591 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3648 ?\\u3604 ?\\u3655 ?\\u3609 ?\\par\r\n\\plain\\fs40\\cf0\\cb0 Expressive    \\u3648 ?\\u3621 ?\\u3656 ?\\u3634 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3652 ?\\u3604 ?\\u3657 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3619 ?\\u3634 ?\\u3623 ?\\par\r\n\\plain\\fs40\\cf0\\cb0 Insight     good \\par\r\n\\plain\\fs40\\cf0\\cb0 Judgement good \\par\r\n\\pard\\plain\\plain\\fs40\\par\r\n}}",
    "pe": "Coperative  \r\nGA  normal  \r\nRepetitive behavior  none\r\nEC  good\r\nmood  euthymic \r\naffect   approriate\r\nLanguage \r\nReceptive      เข้าใจ ถามตอบตรงประเด็น\r\nExpressive    เล่าเรื่องได้เป็นเรื่องเป็นราว\r\nInsight     good \r\nJudgement good \r\n",
    "update_datetime": "2024-10-03 09:16:03",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 4,
    "vn": "671003083008",
    "pe_ga": "Y",
    "pe_heent": "Y",
    "pe_heart": "Y",
    "pe_chest": "Y",
    "pe_ab": "Y",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "-",
    "pe_ext": "Y",
    "pe_ga_text": null,
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "353",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset2 Wingdings;}{\\f2\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\fs40\\cf0\\cb0 Coperative  \\u3611 ?\\u3634 ?\\u3609 ?\\u3585 ?\\u3621 ?\\u3634 ?\\u3591 ? \\u3604 ?\\u3641 ?\\u3585 ?\\u3623 ?\\u3609 ?\\u3649 ?\\u3605 ?\\u3656 ?\\u3588 ?\\u3623 ?\\u3634 ?\\u3617 ?\\u3592 ?\\u3619 ?\\u3636 ?\\u3591 ?\\u3652 ?\\u3617 ?\\u3656 ?\\u3648 ?\\u3586 ?\\u3657 ?\\u3634 ?\\u3651 ?\\u3592 ?\\u3588 ?\\u3635 ?\\u3606 ?\\u3634 ?\\u3617 ? \\u3610 ?\\u3634 ?\\u3591 ?\\u3629 ?\\u3618 ?\\u3656 ?\\u3634 ?\\u3591 ?\\u3585 ?\\u3655 ?\\u3629 ?\\u3618 ?\\u3634 ?\\u3585 ?\\u3651 ?\\u3627 ?\\u3657 ?\\u3614 ?\\u3656 ?\\u3629 ?\\u3605 ?\\u3629 ?\\u3610 ?\\u3649 ?\\u3607 ?\\u3609 ? \\u3610 ?\\u3629 ?\\u3585 ?\\u3623 ?\\u3656 ?\\u3634 ?\\u3614 ?\\u3656 ?\\u3629 ?\\u3619 ?\\u3641 ?\\u3657 ?\\u3607 ?\\u3640 ?\\u3585 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\par\r\n\\plain\\fs40\\cf0\\cb0 GA  normal  \\par\r\n\\plain\\fs40\\cf0\\cb0 Repetitive behavior none\\par\r\n\\plain\\fs40\\cf0\\cb0 EC\\par\r\n\\plain\\fs40\\cf0\\cb0 mood  euthymic  \\par\r\n\\plain\\fs40\\cf0\\cb0 affect restrict   \\par\r\n\\plain\\fs40\\cf0\\cb0 Language \\par\r\n\\plain\\fs40\\cf0\\cb0 Receptive  \\u3648 ?\\u3586 ?\\u3657 ?\\u3634 ?\\u3651 ?\\u3592 ? \\u3607 ?\\u3635 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3588 ?\\u3635 ?\\u3626 ?\\u3633 ?\\u3656 ?\\u3591 ?\\u3652 ?\\u3604 ?\\u3657 ? \\u3652 ?\\u3617 ?\\u3656 ?\\u3648 ?\\u3586 ?\\u3657 ?\\u3634 ?\\u3651 ?\\u3592 ?\\u3588 ?\\u3635 ?\\u3606 ?\\u3634 ?\\u3617 ?\\u3610 ?\\u3634 ?\\u3591 ?\\u3629 ?\\u3618 ?\\u3656 ?\\u3634 ?\\u3591 ? \\u3648 ?\\u3594 ?\\u3656 ?\\u3609 ?  \"\\u3623 ?\\u3636 ?\\u3594 ?\\u3634 ?\\u3607 ?\\u3637 ?\\u3656 ?\\u3607 ?\\u3635 ?\\u3652 ?\\u3604 ?\\u3657 ?\\u3604 ?\\u3637 ?\\u3588 ?\\u3639 ?\\u3629 ?\\u3623 ?\\u3636 ?\\u3594 ?\\u3634 ?\\u3629 ?\\u3632 ?\\u3652 ?\\u3619 ?\"  \"\\u3623 ?\\u3636 ?\\u3594 ?\\u3634 ?\\u3607 ?\\u3637 ?\\u3656 ?\\u3607 ?\\u3635 ?\\u3652 ?\\u3604 ?\\u3657 ?\\u3604 ?\\u3637 ?\"\\par\r\n\\plain\\fs40\\cf0\\cb0 Expressive    \\u3648 ?\\u3621 ?\\u3656 ?\\u3634 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3650 ?\\u3618 ?\\u3588 ?\\u3626 ?\\u3633 ?\\u3657 ?\\u3609 ?\\u3654 ? \\u3652 ?\\u3617 ?\\u3656 ?\\u3617 ?\\u3637 ?\\u3588 ?\\u3635 ?\\u3648 ?\\u3594 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3617 ?  \\u3615 ?\\u3633 ?\\u3591 ?\\u3649 ?\\u3621 ?\\u3657 ?\\u3623 ?\\u3618 ?\\u3633 ?\\u3591 ?\\u3605 ?\\u3657 ?\\u3629 ?\\u3591 ?\\u3606 ?\\u3634 ?\\u3617 ?\\u3648 ?\\u3614 ?\\u3636 ?\\u3656 ?\\u3617 ?\\par\r\n\\plain\\fs40\\cf0\\cb0                     \\par\r\n\\plain\\fs40\\cf0\\cb0 Insight     fair \\par\r\n\\plain\\fs40\\cf0\\cb0 Judgement  fair \\par\r\n\\pard\\plain\\plain\\fs40\\cf0\\cb0\\par\r\n\\pard\\plain\\plain\\fs40\\par\r\n}}",
    "pe": "Coperative  ปานกลาง ดูกวนแต่ความจริงไม่เข้าใจคำถาม บางอย่างก็อยากให้พ่อตอบแทน บอกว่าพ่อรู้ทุกเรื่อง\r\nGA  normal  \r\nRepetitive behavior none\r\nEC\r\nmood  euthymic  \r\naffect restrict   \r\nLanguage \r\nReceptive  เข้าใจ ทำตามคำสั่งได้ ไม่เข้าใจคำถามบางอย่าง เช่น  \"วิชาที่ทำได้ดีคือวิชาอะไร\"  \"วิชาที่ทำได้ดี\"\r\nExpressive    เล่าเรื่องเป็นประโยคสั้นๆ ไม่มีคำเชื่อม  ฟังแล้วยังต้องถามเพิ่ม\r\n                    \r\nInsight     fair \r\nJudgement  fair \r\n\r\n",
    "update_datetime": "2024-10-03 09:37:05",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 5,
    "vn": "671003083042",
    "pe_ga": "-",
    "pe_heent": "-",
    "pe_heart": "-",
    "pe_chest": "-",
    "pe_ab": "-",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "-",
    "pe_ext": "-",
    "pe_ga_text": null,
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "353",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset2 Wingdings;}{\\f2\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\fs40\\cf0\\cb0 Non-Coperative\\par\r\n\\plain\\fs40\\cf0\\cb0 GA    fidget  \\par\r\n\\plain\\fs40\\cf0\\cb0 Repetitive behavior  \\u3633 ?yes\\par\r\n\\plain\\fs40\\cf0\\cb0 EC poor\\par\r\n\\plain\\fs40\\cf0\\cb0 mood  euthymic\\par\r\n\\plain\\fs40\\cf0\\cb0 affect restrict   approriate\\par\r\n\\plain\\fs40\\cf0\\cb0 Language \\par\r\n\\plain\\fs40\\cf0\\cb0 Receptive  \\u3648 ?\\u3586 ?\\u3657 ?\\u3634 ?\\u3651 ?\\u3592 ? \\u3607 ?\\u3635 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3588 ?\\u3635 ?\\u3626 ?\\u3633 ?\\u3656 ?\\u3591 ?\\u3652 ?\\u3604 ?\\u3657 ? \\u3591 ?\\u3656 ?\\u3634 ?\\u3618 ?\\u3654 ? \\par\r\n\\plain\\fs40\\cf0\\cb0 Expressie \\u3614 ?\\u3641 ?\\u3604 ?\\u3588 ?\\u3609 ?\\u3648 ?\\u3604 ?\\u3637 ?\\u3618 ?\\u3623 ? neologism\\par\r\n\\plain\\fs40\\cf0\\cb0 Insight     N/A\\par\r\n\\plain\\fs40\\cf0\\cb0 Judgement N/A\\par\r\n\\pard\\plain\\plain\\fs40\\par\r\n}}",
    "pe": "Non-Coperative\r\nGA    fidget  \r\nRepetitive behavior  ัyes\r\nEC poor\r\nmood  euthymic\r\naffect restrict   approriate\r\nLanguage \r\nReceptive  เข้าใจ ทำตามคำสั่งได้ ง่ายๆ \r\nExpressie พูดคนเดียว neologism\r\nInsight     N/A\r\nJudgement N/A\r\n",
    "update_datetime": "2024-10-03 09:53:10",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 6,
    "vn": "671003083000",
    "pe_ga": "Y",
    "pe_heent": "Y",
    "pe_heart": "Y",
    "pe_chest": "Y",
    "pe_ab": "Y",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "-",
    "pe_ext": "Y",
    "pe_ga_text": null,
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "068",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset0 Angsana New;}{\\f2\\fnil\\fcharset2 Wingdings;}{\\f3\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\f0\\fs44\\u3619 ?\\u3656 ?\\u3623 ?\\u3617 ?\\u3617 ?\\u3639 ?\\u3629 ?\\u3604 ?\\u3637 ?\\par\r\n\\plain\\f0\\fs44\\u3650 ?\\u3605 ?\\u3657 ?\\u3605 ?\\u3629 ?\\u3610 ?\\u3605 ?\\u3619 ?\\u3591 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3648 ?\\u3604 ?\\u3655 ?\\u3609 ? \\par\r\n\\plain\\f1\\fs44 GA normal\\par\r\n\\plain\\f1\\fs44 EC \\f0\\u3604 ?\\u3637 ?\\par\r\n\\plain\\f1\\fs44 Euthymic Appropriate affect\\par\r\n\\plain\\f1\\fs44 good insight and judgement\\par\r\n}}",
    "pe": "ร่วมมือดี\r\nโต้ตอบตรงประเด็น \r\nGA normal\r\nEC ดี\r\nEuthymic Appropriate affect\r\ngood insight and judgement",
    "update_datetime": "2024-10-03 10:05:59",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 7,
    "vn": "671003093054",
    "pe_ga": "N",
    "pe_heent": "Y",
    "pe_heart": "Y",
    "pe_chest": "Y",
    "pe_ab": "Y",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "-",
    "pe_ext": "Y",
    "pe_ga_text": "มีปานเขียวที่เปลือกตาขวา",
    "pe_heent_text": null,
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "068",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset0 Angsana New;}{\\f2\\fnil\\fcharset2 Wingdings;}{\\f3\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\f1\\fs44 GA  normal\\par\r\n\\plain\\f1\\fs44 Anxious mood \\f0\\u3648 ?\\u3586 ?\\u3636 ?\\u3609 ? \\u3652 ?\\u3617 ?\\u3656 ?\\u3585 ?\\u3621 ?\\u3657 ?\\u3634 ?\\par\r\n\\plain\\f0\\fs44\\u3652 ?\\u3617 ?\\u3656 ?\\u3614 ?\\u3641 ?\\u3604 ? \\u3649 ?\\u3605 ?\\u3656 ?\\u3626 ?\\u3610 ?\\u3605 ?\\u3634 ?\\u3604 ?\\u3637 ?\\par\r\n\\pard\\plain\\plain\\f0\\fs44\\par\r\n\\plain\\f1\\fs44 Insight and Judgement  N/A\\par\r\n}}",
    "pe": "GA  normal\r\nAnxious mood เขิน ไม่กล้า\r\nไม่พูด แต่สบตาดี\r\n\r\nInsight and Judgement  N/A",
    "update_datetime": "2024-10-03 10:23:25",
    "pe_html": null
  },
  {
    "opdscreen_doctor_pe_id": 8,
    "vn": "671003093022",
    "pe_ga": "Y",
    "pe_heent": "N",
    "pe_heart": "Y",
    "pe_chest": "Y",
    "pe_ab": "Y",
    "pe_pv": "-",
    "pe_pr": "-",
    "pe_gen": "-",
    "pe_neuro": "-",
    "pe_ext": "Y",
    "pe_ga_text": null,
    "pe_heent_text": "ตาค่อนข้างโปน",
    "pe_heart_text": null,
    "pe_chest_text": null,
    "pe_ab_text": null,
    "pe_pv_text": null,
    "pe_pr_text": null,
    "pe_gen_text": null,
    "pe_neuro_text": null,
    "pe_ext_text": null,
    "doctor_code": "068",
    "pe_rtf": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset1 Aptos;}{\\f2\\fnil\\fcharset1 Cordia New;}{\\f3\\fnil\\fcharset222 Cordia New;}{\\f4\\fnil\\fcharset2 Wingdings;}{\\f5\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;\\red0\\green0\\blue0;\\red128\\green128\\blue0;}\\wpprheadfoot1\\paperw12240\\paperh15840\\margl1880\\margr1880\\margt1440\\margb1440\\headery720\\footery720\\pgbrdrhead\\pgbrdrfoot\\pgbrdropt32\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\stylesheet\r\n{\\s1\\li0\\fi0\\ri0\\sb0\\sa160\\sl278\\slmult1\\ql\\vertalt\\f1\\fs24 Normal;}\r\n{\\s2\\li0\\fi0\\ri0\\sb0\\sa0\\ql\\vertalt\\fs44 Default Paragraph Font;}}\r\n{\\sa160\\sl278\\slmult1\\wpparflg32\\plain\\f1\\fs24 MSE \\f2\\fs30   \\par\r\n\\wpparflg32\\plain\\f1\\fs24 GA  \\f3\\fs30   \\u3626 ?\\u3610 ?\\u3605 ?\\u3634 ?\\u3604 ?\\u3637 ?  \\u3606 ?\\u3639 ?\\u3629 ?\\u3605 ?\\u3640 ?\\u3658 ?\\u3585 ?\\u3605 ?\\u3634 ?\\u3605 ?\\u3636 ?\\u3604 ?\\u3617 ?\\u3639 ?\\u3629 ? \\u3617 ?\\u3634 ?\\u3604 ?\\u3657 ?\\u3623 ?\\u3618 ?\\par\r\n\\wpparflg32\\plain\\f1\\fs24 Mood  Euthymic \\f3\\fs30\\u3649 ?\\u3605 ?\\u3656 ?\\u3618 ?\\u3633 ?\\u3591 ?\\u3604 ?\\u3641 ?\\u3648 ?\\u3586 ?\\u3636 ?\\u3609 ?\\u3649 ?\\u3614 ?\\u3607 ?\\u3618 ?\\u3660 ?\\par\r\n\\plain\\f1\\fs24 Affect  appropriate\\par\r\n\\wpparflg32\\plain\\f1\\fs24 Language \\f3\\fs30  \\u3650 ?\\u3605 ?\\u3657 ?\\u3605 ?\\u3629 ?\\u3610 ?\\u3605 ?\\u3619 ?\\u3591 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3648 ?\\u3604 ?\\u3655 ?\\u3609 ? \\u3649 ?\\u3605 ?\\u3656 ?\\u3618 ?\\u3633 ?\\u3591 ?\\u3652 ?\\u3617 ?\\u3656 ?\\u3648 ?\\u3621 ?\\u3656 ?\\u3634 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3619 ?\\u3634 ?\\u3623 ?\\par\r\n\\plain\\f1\\fs24 Insight and Judgement  good\\par\r\n\\pard\\plain\\sa160\\sl278\\slmult1\\plain\\f1\\fs24\\par\r\n}}",
    "pe": "MSE   \r\nGA    สบตาดี  ถือตุ๊กตาติดมือ มาด้วย\r\nMood  Euthymic แต่ยังดูเขินแพทย์\r\nAffect  appropriate\r\nLanguage  โต้ตอบตรงประเด็น แต่ยังไม่เล่าเป็นเรื่องราว\r\nInsight and Judgement  good\r\n",
    "update_datetime": "2024-10-03 10:40:26",
    "pe_html": null
  }
]
```
