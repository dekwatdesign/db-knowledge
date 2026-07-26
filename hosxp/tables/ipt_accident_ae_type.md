# `ipt_accident_ae_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_accident_ae_type_code | char(1) | NO | PRI |  |  |  |
| ipt_accident_ae_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_accident_ae_type_name | ipt_accident_ae_type_name | yes | 1 |
| PRIMARY | ipt_accident_ae_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_accident_ae_type_code": "N",
    "ipt_accident_ae_type_name": "Normal"
  },
  {
    "ipt_accident_ae_type_code": "E",
    "ipt_accident_ae_type_name": "ฉุกเฉิน (Emergency)"
  },
  {
    "ipt_accident_ae_type_code": "A",
    "ipt_accident_ae_type_name": "อุบัติเหตุ (Accident/Accident+Emergency)"
  }
]
```
