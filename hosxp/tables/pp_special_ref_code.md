# `pp_special_ref_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pp_special_code | varchar(15) | NO | PRI |  |  |  |
| pp_special_type_name | varchar(500) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pp_special_type_name | pp_special_type_name | yes | 1 |
| PRIMARY | pp_special_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pp_special_code": "1B1282",
    "pp_special_type_name": "1B1282 การตรวจคัดกรองสมรรถนะผู้สูงอายุเกี่ยวกับความสามารถในการทำกิจวัตรประจำวัน พบว่าช่วยเหลือตัวเองได้น้อย / ไม่ได้เลย /ภาวะติดเตียง (ADL 0-4 คะแนน) และได้รับการจัดทำ Care Plan"
  },
  {
    "pp_special_code": "1B0110",
    "pp_special_type_name": "1B0110 การตรวจคัดกรองไวรัสตับอักเสบ ซี ได้ผลเป็นบวก (screening examination for viral hepatitis C, positive)"
  },
  {
    "pp_special_code": "1B011",
    "pp_special_type_name": "1B011 การตรวจคัดกรองไวรัสตับอักเสบ ซี (screening examination for viral hepatitis C)"
  },
  {
    "pp_special_code": "1B0101",
    "pp_special_type_name": "1B0101 การตรวจคัดกรองไวรัสตับอักเสบ บี ได้ผลเป็นลบ (screening examination for viral hepatitis B, negative)"
  },
  {
    "pp_special_code": "1B0100",
    "pp_special_type_name": "1B0100 การตรวจคัดกรองไวรัสตับอักเสบ บี ได้ผลเป็นบวก (screening examination for viral hepatitis B, positive)"
  },
  {
    "pp_special_code": "1B1281",
    "pp_special_type_name": "1B1281 การตรวจคัดกรองสมรรถนะผู้สูงอายุเกี่ยวกับความสามารถในการทำกิจวัตรประจำวันพบว่าช่วยเหลือตัวเองได้บ้าง / บางส่วน /ติดบ้าน (ADL 5-11 คะแนน) และได้รับการจัดทำ Care Plan"
  },
  {
    "pp_special_code": "1B010",
    "pp_special_type_name": "1B010 การตรวจคัดกรองไวรัสตับอักเสบ บี (screening examination for viral hepatitis B)"
  },
  {
    "pp_special_code": "1B0061",
    "pp_special_type_name": "1B0061 ตรวจคัดกรองความเสี่ยง/โรคมะเร็งลำไส้ ได้ผลบวก"
  }
]
```
