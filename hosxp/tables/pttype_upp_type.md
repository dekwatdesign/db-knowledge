# `pttype_upp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_upp_type_id | int(11) | NO | PRI | 0 |  |  |
| pttype_upp_type_name | varchar(200) | YES | UNI | NULL |  |  |
| pttype_upp_type_code | varchar(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_upp_type_code | pttype_upp_type_code | no | 1 |
| ix_pttype_upp_type_name | pttype_upp_type_name | yes | 1 |
| PRIMARY | pttype_upp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_upp_type_id": 1,
    "pttype_upp_type_name": "สวัสดิการข้าราชการ กรมบัญชีกลาง",
    "pttype_upp_type_code": "10"
  },
  {
    "pttype_upp_type_id": 2,
    "pttype_upp_type_name": "สิทธิสวัสดิการ ขรก. ส่วนท้องถิ่น กรุงเทพมหานคร",
    "pttype_upp_type_code": "20"
  },
  {
    "pttype_upp_type_id": 3,
    "pttype_upp_type_name": "สิทธิสวัสดิการ ขรก. ส่วนท้องถิ่น เมืองพัทยา",
    "pttype_upp_type_code": "21"
  },
  {
    "pttype_upp_type_id": 4,
    "pttype_upp_type_name": "สิทธิสวัสดิการ องค์กรอื่นๆ ของรัฐ กสทช.",
    "pttype_upp_type_code": "30"
  },
  {
    "pttype_upp_type_id": 5,
    "pttype_upp_type_name": "สิทธิสวัสดิการ องค์กรอื่นๆ ของรัฐ กกต.",
    "pttype_upp_type_code": "31"
  },
  {
    "pttype_upp_type_id": 6,
    "pttype_upp_type_name": "สิทธิสวัสดิการ รัฐวิสาหกิจ",
    "pttype_upp_type_code": "40"
  },
  {
    "pttype_upp_type_id": 7,
    "pttype_upp_type_name": "สิทธิประกันสังคม",
    "pttype_upp_type_code": "80"
  },
  {
    "pttype_upp_type_id": 8,
    "pttype_upp_type_name": "สิทธิกองทุนเงินทดแทน ประกันสังคม",
    "pttype_upp_type_code": "81"
  }
]
```
