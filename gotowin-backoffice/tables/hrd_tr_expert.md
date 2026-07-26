# `hrd_tr_expert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| EXPERT_NAME | varchar(200) | YES |  |  |  |  |
| EXPERT_DETAIL | varchar(500) | YES |  |  |  |  |
| EXPERT_EXAM | varchar(500) | YES |  |  |  |  |
| IMG1 | longblob | YES |  | NULL |  |  |
| IMG2 | longblob | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "ID": 1,
    "PERSON_ID": "71",
    "EXPERT_NAME": "การพยาบาลสุขภาพจิตเด็กและวัยรุ่น/การเยียวยาจิตใจผู้ประสบภาวะวิกฤตสุขภาพจิต",
    "EXPERT_DETAIL": null,
    "EXPERT_EXAM": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "71",
    "updated_at": "2020-09-28 03:18:53",
    "created_at": "2020-09-28 03:18:53"
  },
  {
    "ID": 2,
    "PERSON_ID": "70",
    "EXPERT_NAME": "การพยาบาลผู้ป่วยเด็กออทิสติก",
    "EXPERT_DETAIL": "เป็นผลงาน ขอประเมินเพื่อแต่งตั้งให้ดำรงตำแหน่ง พยาบาลวิชาชีพ 7 วช. ด้านการพยาบาล ตำแหน่งเลขที่  1391",
    "EXPERT_EXAM": "การพยาบาลผู้ป่วยเด็กออทิสติกที่มีปัญหาการควบคุมความต้องการของตนเอง กรณีศึกษา",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "70",
    "updated_at": "2020-09-28 04:15:55",
    "created_at": "2020-09-28 04:15:55"
  },
  {
    "ID": 3,
    "PERSON_ID": "188",
    "EXPERT_NAME": "คอมพิวเตอร์",
    "EXPERT_DETAIL": null,
    "EXPERT_EXAM": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "188",
    "updated_at": "2020-09-28 08:10:16",
    "created_at": "2020-09-28 08:10:16"
  },
  {
    "ID": 4,
    "PERSON_ID": "57",
    "EXPERT_NAME": "จิตเวชเด็กและวัยรุ่น",
    "EXPERT_DETAIL": "เป็นจิตแพทย์เด็กและวัยรุ่น",
    "EXPERT_EXAM": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "57",
    "updated_at": "2020-09-29 10:06:33",
    "created_at": "2020-09-29 10:06:33"
  },
  {
    "ID": 5,
    "PERSON_ID": "124",
    "EXPERT_NAME": "การให้รหัสทางการเเพทย์เเละวิเคราะห์ข้อมูลทางการเเพทย์",
    "EXPERT_DETAIL": "การวิเคราะห์ข้อมูลเพื่อการเพิ่มศักยภาพที่ดีในการให้บริการของโรงพยาบาล",
    "EXPERT_EXAM": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "124",
    "updated_at": "2020-09-30 11:03:02",
    "created_at": "2020-09-30 11:03:02"
  },
  {
    "ID": 6,
    "PERSON_ID": "70",
    "EXPERT_NAME": "การพยาบาลผู้ป่วยเด็กออทิสติก",
    "EXPERT_DETAIL": "เป็นผลงาน ขอประเมินเพื่อแต่งตั้งให้ดำรงตำแหน่ง พยาบาลวิชาชีพชำนาญการพิเศษ (ด้านการพยาบาล) กลุ่มงานการพยาบาลผู้ป่วยหนัก เลขที่ตำแหน่ง 1372",
    "EXPERT_EXAM": "ผลของโปรแกรมการควบคุมตนเองต่อการลดพฤติกรรมก้าวร้าวในเด็กออทิสติก (The Effect of Self-Regulation Program to Reduce Aggressive Behaviors in Autistic Children)",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "70",
    "updated_at": "2022-05-25 01:57:14",
    "created_at": "2022-05-25 01:57:14"
  }
]
```
