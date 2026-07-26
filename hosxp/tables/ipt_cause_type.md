# `ipt_cause_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_cause_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_cause_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_cause_type_name | ipt_cause_type_name | yes | 1 |
| PRIMARY | ipt_cause_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_cause_type_id": 1,
    "ipt_cause_type_name": "ปัญหาพฤติกรรมรุนแรง อารมณ์ สังคมอย่างรุนแรง"
  },
  {
    "ipt_cause_type_id": 2,
    "ipt_cause_type_name": "ภาวะโรคร่วมที่เกี่ยวข้องกับการใช้สารเสพติด/สุรา"
  },
  {
    "ipt_cause_type_id": 3,
    "ipt_cause_type_name": "ปัญหาชุมชนไม่ยอมรับ"
  },
  {
    "ipt_cause_type_id": 4,
    "ipt_cause_type_name": "ความเสี่ยงต่อการเป็นอันตรายต่อตนเองหรือผู้อื่น หรือมีพฤติกรรมพยายามฆ่าตัวตายภายใน 1ปี ก่อนมาโรงพยาบาล"
  },
  {
    "ipt_cause_type_id": 5,
    "ipt_cause_type_name": "ไม่มีญาติ/ญาติทิ้ง"
  },
  {
    "ipt_cause_type_id": 6,
    "ipt_cause_type_name": "ปัญหานิติจิตเวช"
  },
  {
    "ipt_cause_type_id": 7,
    "ipt_cause_type_name": "Admit>= 3 ครั้งใน 1ปี"
  },
  {
    "ipt_cause_type_id": 8,
    "ipt_cause_type_name": "ฟื้นฟูสมรรถภาพทางจิตสังคม"
  }
]
```
