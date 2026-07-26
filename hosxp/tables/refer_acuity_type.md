# `refer_acuity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_acuity_type_id | int(11) | NO | PRI | 0 |  |  |
| refer_acuity_type_name | varchar(200) | YES | UNI | NULL |  |  |
| type_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_refer_acuity_type_name | refer_acuity_type_name | yes | 1 |
| PRIMARY | refer_acuity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "refer_acuity_type_id": 1,
    "refer_acuity_type_name": "I : Unstable",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 2,
    "refer_acuity_type_name": "II : Stable with High risk of deteroiration",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 3,
    "refer_acuity_type_name": "III : Stable with Mediam risk of deteroiration",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 4,
    "refer_acuity_type_name": "IV : Stable with Low risk of deteroiration",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 5,
    "refer_acuity_type_name": "V : Stable with No risk of deteroiration",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 6,
    "refer_acuity_type_name": "Ungency",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 7,
    "refer_acuity_type_name": "OPD-New case",
    "type_code": null
  },
  {
    "refer_acuity_type_id": 8,
    "refer_acuity_type_name": "OPD-นัดเดิม",
    "type_code": null
  }
]
```
