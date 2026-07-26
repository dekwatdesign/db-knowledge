# `doctor_pe_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| template_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| template_name | varchar(50) | YES |  | NULL |  |  |
| template_text | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| template_field_text | text | YES |  | NULL |  |  |
| template_normal_text | text | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| template_html | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "template_id": 1,
    "doctor": "187",
    "template_name": "test1",
    "template_text": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset1 TH SarabunPSK;}{\\f2\\fnil\\fcharset2 Wingdings;}{\\f3\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw11906\\paperh16838\\margl527\\margr493\\margt624\\margb493\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\f1\\fs40\\u3611 ?\\u3619 ?\\u3632 ?\\u3623 ?\\u3633 ?\\u3605 ?\\u3636 ?\\u3614 ?\\u3633 ?\\u3602 ?\\u3609 ?\\u3634 ?\\u3585 ?\\u3634 ?\\u3619 ?\\par\r\n\\plain\\f1\\fs40 Gross motor VS GM [ ] \\u3611 ?\\u3585 ?\\u3605 ?\\u3636 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3623 ?\\u3633 ?\\u3618 ? [ ] \\u3594 ?\\u3657 ?\\u3634 ?\\par\r\n\\plain\\f1\\fs40 Fine motor VS GM [ ] \\u3611 ?\\u3585 ?\\u3605 ?\\u3636 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3623 ?\\u3633 ?\\u3618 ? [ ] \\u3594 ?\\u3657 ?\\u3634 ?\\par\r\n\\plain\\f1\\fs40\\u3616 ?\\u3634 ?\\u3625 ?\\u3634 ? [ ] \\u3611 ?\\u3585 ?\\u3605 ?\\u3636 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3623 ?\\u3633 ?\\u3618 ? [ ] \\u3594 ?\\u3657 ?\\u3634 ?\\par\r\n\\plain\\f1\\fs40\\u3626 ?\\u3633 ?\\u3591 ?\\u3588 ?\\u3617 ? [ ] \\u3611 ?\\u3585 ?\\u3605 ?\\u3636 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3623 ?\\u3633 ?\\u3618 ? [ ] \\u3594 ?\\u3657 ?\\u3634 ?\\par\r\n\\pard\\plain\\plain\\f1\\fs40\\par\r\n\\plain\\f1\\fs40\\u3611 ?\\u3619 ?\\u3632 ?\\u3623 ?\\u3633 ?\\u3605 ?\\u3636 ?\\u3592 ?\\u3636 ?\\u3605 ?\\u3648 ?\\u3623 ?\\u3594 ?\\u3651 ?\\u3609 ?\\u3629 ?\\u3604 ?\\u3637 ?\\u3605 ?\\par\r\n\\plain\\f1\\fs40 [ ] \\u3652 ?\\u3617 ?\\u3656 ?\\u3617 ?\\u3637 ? [ ] \\u3617 ?\\u3637 ?..............................\\par\r\n\\plain\\f1\\fs40 [ ] \\u3586 ?\\u3634 ?\\u3604 ?\\u3585 ?\\u3634 ?\\u3619 ?\\u3619 ?\\u3633 ?\\u3585 ?\\u3625 ?\\u3634 ? \\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3619 ?\\u3632 ?\\u3618 ?\\u3632 ?\\u3648 ?\\u3623 ?\\u3621 ?\\u3634 ? .......................... (\\u3623 ?\\u3633 ?\\u3609 ?/\\u3648 ?\\u3604 ?\\u3639 ?\\u3629 ?\\u3609 ?/\\u3611 ?\\u3637 ?)\\par\r\n\\plain\\f1\\fs40 [ ] \\u3586 ?\\u3634 ?\\u3604 ?\\u3618 ?\\u3634 ?\\u3607 ?\\u3634 ?\\u3591 ?\\u3592 ?\\u3636 ?\\u3605 ?\\u3648 ?\\u3623 ?\\u3594 ?\\u3607 ?\\u3637 ?\\u3656 ?\\u3585 ?\\u3636 ?\\u3609 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3592 ?\\u3635 ?\\par\r\n\\plain\\f1\\fs40 [ ] \\u3611 ?\\u3619 ?\\u3632 ?\\u3623 ?\\u3633 ?\\u3605 ?\\u3636 ?\\u3588 ?\\u3604 ?\\u3637 ?\\u3648 ?\\u3604 ?\\u3655 ?\\u3585 ?\\u3649 ?\\u3621 ?\\u3632 ?\\u3648 ?\\u3618 ?\\u3634 ?\\u3623 ?\\u3594 ?\\u3609 ?/\\u3629 ?\\u3634 ?\\u3594 ?\\u3597 ?\\u3634 ?\\u3585 ?\\u3619 ?\\u3619 ?\\u3617 ?....................................\\par\r\n\\plain\\f1\\fs40 [ ] \\u3611 ?\\u3619 ?\\u3632 ?\\u3623 ?\\u3633 ?\\u3605 ?\\u3636 ?\\u3585 ?\\u3634 ?\\u3619 ?\\u3651 ?\\u3594 ?\\u3657 ?\\u3618 ?\\u3634 ?/\\u3626 ?\\u3634 ?\\u3619 ?\\u3648 ?\\u3626 ?\\u3614 ?\\u3605 ?\\u3636 ?\\u3604 ?...................................\\par\r\n\\plain\\f1\\fs40 [ ] \\u3611 ?\\u3619 ?\\u3632 ?\\u3623 ?\\u3633 ?\\u3605 ?\\u3636 ?\\u3650 ?\\u3619 ?\\u3588 ?\\u3607 ?\\u3634 ?\\u3591 ?\\u3592 ?\\u3636 ?\\u3605 ?\\u3648 ?\\u3623 ?\\u3594 ?\\u3651 ?\\u3609 ?\\u3588 ?\\u3619 ?\\u3629 ?\\u3610 ?\\u3588 ?\\u3619 ?\\u3633 ?\\u3623 ?.......................................\\par\r\n\\pard\\plain\\plain\\f1\\fs40\\par\r\n\\plain\\f1\\fs40\\u3611 ?\\u3619 ?\\u3632 ?\\u3623 ?\\u3633 ?\\u3605 ?\\u3636 ?\\u3585 ?\\u3634 ?\\u3619 ?\\u3648 ?\\u3592 ?\\u3655 ?\\u3610 ?\\u3611 ?\\u3656 ?\\u3623 ?\\u3618 ?\\u3586 ?\\u3629 ?\\u3591 ?\\u3619 ?\\u3632 ?\\u3610 ?\\u3610 ?\\u3619 ?\\u3656 ?\\u3634 ?\\u3591 ?\\u3585 ?\\u3634 ?\\u3618 ?\\u3629 ?\\u3639 ?\\u3656 ?\\u3609 ? \\u3654 ? \\par\r\n\\plain\\f1\\fs40 [ ] \\u3611 ?\\u3585 ?\\u3605 ?\\u3636 ? [ ] \\u3612 ?\\u3636 ?\\u3604 ?\\u3611 ?\\u3585 ?\\u3605 ?\\u3636 ? ...........................................\\par\r\n\\pard\\plain\\plain\\f1\\fs40\\par\r\n\\plain\\f1\\fs40\\u3585 ?\\u3634 ?\\u3619 ?\\u3605 ?\\u3619 ?\\u3623 ?\\u3592 ?\\u3626 ?\\u3640 ?\\u3586 ?\\u3616 ?\\u3634 ?\\u3614 ?\\u3592 ?\\u3636 ?\\u3605 ? \\par\r\n\\plain\\f1\\fs40 [ ] \\u3612 ?\\u3641 ?\\u3657 ?\\u3611 ?\\u3656 ?\\u3623 ?\\u3618 ?\\par\r\n\\plain\\f1\\fs40 [ ] N/A  \\u3648 ?\\u3609 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3592 ?\\u3634 ?\\u3585 ?...........................................\\par\r\n\\pard\\plain\\plain\\f1\\fs40\\par\r\n\\plain\\f1\\fs40 MSE\\par\r\n\\plain\\f1\\fs40 GA* [ ] Normal [ ] Fidget [ ] Hyperactive [ ] Impulse [ ] Repetivite behavior\\par\r\n\\plain\\f1\\fs40 Eye contact [ ] Poor [ ] Fair [ ] Good\\par\r\n\\plain\\f1\\fs40 Speech* [ ] Normal [ ] Talktive [ ] Mute [ ] Neologism [ ] \\u3614 ?\\u3641 ?\\u3604 ?\\u3652 ?\\u3617 ?\\u3656 ?\\u3594 ?\\u3633 ?\\u3604 ? [ ] \\u3629 ?\\u3639 ?\\u3656 ?\\u3609 ? \\u3654 ?...................................\\par\r\n\\plain\\f1\\fs40 Mood & Affcet* [ ] Euthymic [ ] Irritable [ ] Depressed [ ] Anxious [ ] Restricted [ ] Blunt  [ ] Flat [ ] Appropriate [ ] Inappropriate [ ] \\u3629 ?\\u3639 ?\\u3656 ?\\u3609 ? \\u3654 ? ..................................\\par\r\n\\plain\\f1\\fs40 Perception* [ ] Normal [ ] VH [ ] AH\\par\r\n\\plain\\f1\\fs40 Thought* [ ] Normal [ ] Abnormal [ ] Delusion..........................................\\par\r\n\\plain\\f1\\fs40 Death wish [ ] No [ ] Yes\\par\r\n\\plain\\f1\\fs40 Suicidal idea [ ] No [ ] Yes\\par\r\n\\plain\\f1\\fs40 Play [ ] Normal [ ] Abnormal ......................................................\\par\r\n\\pard\\plain\\plain\\f1\\fs40\\par\r\n\\plain\\f1\\fs40 Sensorium & Cognition\\par\r\n\\plain\\f1\\fs40 Orientation* [ ] Normal [ ] Abnormal.......................................................\\par\r\n\\plain\\f1\\fs40 Attention/Concentration* [ ] Normal [ ] Abnormal.............................\\par\r\n\\plain\\f1\\fs40 [ ] DF............................... [ ] DB....................................\\par\r\n\\plain\\f1\\fs40 Memory recall [ ] Normal [ ] Abnormal....................................................\\par\r\n}}",
    "hos_guid": null,
    "template_field_text": null,
    "template_normal_text": null,
    "order_no": null,
    "template_html": null
  },
  {
    "template_id": 4,
    "doctor": "353",
    "template_name": "mental exam ASD ADHD",
    "template_text": "{\\rtf1\\ansi\\deff0\\uc1\\ansicpg874\\deftab720{\\fonttbl{\\f0\\fnil\\fcharset1 Angsana New;}{\\f1\\fnil\\fcharset2 Wingdings;}{\\f2\\fnil\\fcharset2 Symbol;}}{\\colortbl\\red0\\green0\\blue0;\\red255\\green0\\blue0;\\red0\\green128\\blue0;\\red0\\green0\\blue255;\\red255\\green255\\blue0;\\red255\\green0\\blue255;\\red128\\green0\\blue128;\\red128\\green0\\blue0;\\red0\\green255\\blue0;\\red0\\green255\\blue255;\\red0\\green128\\blue128;\\red0\\green0\\blue128;\\red255\\green255\\blue255;\\red192\\green192\\blue192;\\red128\\green128\\blue128;\\red0\\green0\\blue0;}\\wpprheadfoot1\\paperw11906\\paperh16838\\margl527\\margr493\\margt624\\margb493\\headery720\\footery720\\ftnbj\\sftnbj\\sftnrstcont\\nocolbal\\sftnnar\\saftnnar\\fet0\\endnhere\\sectdefaultcl{\\*\\generator WPTools_8.008-PRM;}{\\plain\\fs40\\cf0\\cb0 Coperative  Non-Coperative\\par\r\n\\plain\\fs40\\cf0\\cb0 GA  normal  fidget  hyperactive impulsive\\par\r\n\\plain\\fs40\\cf0\\cb0 Repetitive behavior\\par\r\n\\plain\\fs40\\cf0\\cb0 EC\\par\r\n\\plain\\fs40\\cf0\\cb0 mood  euthymic  anxious depressed  irritable\\par\r\n\\plain\\fs40\\cf0\\cb0 affect restrict   approriate\\par\r\n\\plain\\fs40\\cf0\\cb0 Language \\par\r\n\\plain\\fs40\\cf0\\cb0 Receptive  \\cf0\\cb0\\u3648 ?\\u3586 ?\\u3657 ?\\u3634 ?\\u3651 ?\\u3592 ? \\u3607 ?\\u3635 ?\\u3605 ?\\u3634 ?\\u3617 ?\\u3588 ?\\u3635 ?\\u3626 ?\\u3633 ?\\u3656 ?\\u3591 ?\\u3652 ?\\u3604 ?\\u3657 ? \\u3606 ?\\u3634 ?\\u3617 ?\\u3605 ?\\u3629 ?\\u3610 ?\\u3605 ?\\u3619 ?\\u3591 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3648 ?\\u3604 ?\\u3655 ?\\u3609 ?\\par\r\n\\plain\\fs40\\cf0\\cb0 Expressive\\cf0\\cb0  \\u3605 ?\\u3629 ?\\u3610 ?\\u3588 ?\\u3635 ?\\u3606 ?\\u3634 ?\\u3617 ?\\u3629 ?\\u3632 ?\\u3652 ?\\u3619 ? \\u3651 ?\\u3588 ?\\u3619 ? \\u3607 ?\\u3637 ?\\u3656 ?\\u3652 ?\\u3627 ?\\u3609 ? \\u3629 ?\\u3618 ?\\u3656 ?\\u3634 ?\\u3591 ?\\u3652 ?\\u3619 ? \\u3652 ?\\u3604 ?\\u3657 ? \\par\r\n\\plain\\fs40\\cf0\\cb0                     \\u3614 ?\\u3641 ?\\u3604 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3650 ?\\u3618 ?\\u3588 ? \\u3649 ?\\u3605 ?\\u3656 ?\\u3626 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3626 ?\\u3634 ?\\u3619 ?\\u3607 ?\\u3634 ?\\u3591 ?\\u3648 ?\\u3604 ?\\u3637 ?\\u3618 ?\\u3623 ?          \\par\r\n\\plain\\fs40\\cf0\\cb0                     \\u3648 ?\\u3621 ?\\u3656 ?\\u3634 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3611 ?\\u3619 ?\\u3632 ?\\u3650 ?\\u3618 ?\\u3588 ?\\u3626 ?\\u3633 ?\\u3657 ?\\u3609 ?\\u3654 ? \\u3652 ?\\u3617 ?\\u3656 ?\\u3617 ?\\u3637 ?\\u3588 ?\\u3635 ?\\u3648 ?\\u3594 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3617 ?\\par\r\n\\plain\\fs40\\cf0\\cb0                     \\u3648 ?\\u3621 ?\\u3656 ?\\u3634 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3652 ?\\u3604 ?\\u3657 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3648 ?\\u3619 ?\\u3639 ?\\u3656 ?\\u3629 ?\\u3591 ?\\u3648 ?\\u3611 ?\\u3655 ?\\u3609 ?\\u3619 ?\\u3634 ?\\u3623 ?\\par\r\n\\plain\\fs40\\cf0\\cb0                    Neologism  Mute\\par\r\n\\plain\\fs40\\cf0\\cb0 Insight     good fair poor  N/A\\par\r\n\\plain\\fs40\\cf0\\cb0 Judgement good fair poor  N/A\\par\r\n\\pard\\plain\\plain\\fs40\\cf0\\cb0\\par\r\n}}",
    "hos_guid": null,
    "template_field_text": null,
    "template_normal_text": null,
    "order_no": null,
    "template_html": null
  }
]
```
