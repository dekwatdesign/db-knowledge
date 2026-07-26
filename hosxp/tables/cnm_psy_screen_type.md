# `cnm_psy_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cnm_psy_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| cnm_psy_screen_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cnm_psy_screen_type_name | cnm_psy_screen_type_name | yes | 1 |
| PRIMARY | cnm_psy_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cnm_psy_screen_type_id": 1,
    "cnm_psy_screen_type_name": "SMIV1 : มีประวัติการทำร้ายตนเองด้วยวิธีรุนแรงหวังให้เสียชีวิต"
  },
  {
    "cnm_psy_screen_type_id": 2,
    "cnm_psy_screen_type_name": "SMIV2 : มีประวัติทำร้ายผู้อื่น / ก่อเหตุรุนแรงในชุมชน"
  },
  {
    "cnm_psy_screen_type_id": 3,
    "cnm_psy_screen_type_name": "SMIV3 : ผู้ป่วยมีอาการหลงผิด มีความคิดทำร้ายผู้อื่นให้ถึงแก่ชีวิต หรือมุ่งร้ายผู้อื่น แบบเฉพาะเจาะจง เช่นระบุชื่อบุคคลที่มุ่งจะทำร้าย"
  },
  {
    "cnm_psy_screen_type_id": 4,
    "cnm_psy_screen_type_name": "SMIV4 : เคยมีประวัติก่อคดีรุนแรง (ฆ่า , พยายามฆ่า , ข่มขืน, วางเพลิง)"
  }
]
```
