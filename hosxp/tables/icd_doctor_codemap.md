# `icd_doctor_codemap`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd_doctor_codemap_id | int(11) | NO | PRI | 0 |  |  |
| codemap_name | varchar(250) | YES | MUL | NULL |  |  |
| codemap_keyword | varchar(200) | YES |  | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_2 | doctor_code | no | 1 |
| ix_2 | codemap_name | no | 2 |
| ix_2 | codemap_keyword | no | 3 |
| ix_doctor_name | doctor_code | no | 1 |
| ix_doctor_name | codemap_name | no | 2 |
| ix_doctor_name_index | codemap_name | no | 1 |
| ix_doctor_name_index | doctor_code | no | 2 |
| PRIMARY | icd_doctor_codemap_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icd_doctor_codemap_id": 2,
    "codemap_name": "สมาธิสั้น",
    "codemap_keyword": "ADHD",
    "icd10": "F900",
    "doctor_code": "999"
  },
  {
    "icd_doctor_codemap_id": 3,
    "codemap_name": "",
    "codemap_keyword": null,
    "icd10": "F809",
    "doctor_code": "334"
  },
  {
    "icd_doctor_codemap_id": 4,
    "codemap_name": "",
    "codemap_keyword": "rispira",
    "icd10": "J00",
    "doctor_code": "065"
  },
  {
    "icd_doctor_codemap_id": 9,
    "codemap_name": "โรคออทิสติก",
    "codemap_keyword": "ออทิสติก ASD",
    "icd10": "F840",
    "doctor_code": "187"
  },
  {
    "icd_doctor_codemap_id": 10,
    "codemap_name": "ออทิสติก",
    "codemap_keyword": "ออ ASD",
    "icd10": "F840",
    "doctor_code": "349"
  },
  {
    "icd_doctor_codemap_id": 12,
    "codemap_name": null,
    "codemap_keyword": null,
    "icd10": "f32",
    "doctor_code": "0048"
  },
  {
    "icd_doctor_codemap_id": 13,
    "codemap_name": "Major depressive disorder",
    "codemap_keyword": null,
    "icd10": "f32",
    "doctor_code": "0048"
  },
  {
    "icd_doctor_codemap_id": 14,
    "codemap_name": "โรคสมาธิสั้น",
    "codemap_keyword": "สมาธิสั้น ADHD",
    "icd10": "F900",
    "doctor_code": "187"
  }
]
```
