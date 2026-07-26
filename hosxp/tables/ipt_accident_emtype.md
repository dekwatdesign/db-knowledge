# `ipt_accident_emtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_accident_emtype_code | char(1) | NO | PRI |  |  |  |
| ipt_accident_emtype_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_accident_emtype_name | ipt_accident_emtype_name | yes | 1 |
| PRIMARY | ipt_accident_emtype_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_accident_emtype_code": "1",
    "ipt_accident_emtype_name": "ต้องเป็นการรักษาด่วน"
  },
  {
    "ipt_accident_emtype_code": "2",
    "ipt_accident_emtype_name": "ต้องผ่าตัดด่วน"
  },
  {
    "ipt_accident_emtype_code": "3",
    "ipt_accident_emtype_name": "โรคที่คณะกรรมการกำหนด"
  }
]
```
