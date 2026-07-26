# `er_indication_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_indication_type_id | int(11) | NO | PRI | 0 |  |  |
| er_indication_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_indication_type_name | er_indication_type_name | yes | 1 |
| PRIMARY | er_indication_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "er_indication_type_id": 1,
    "er_indication_type_name": "เป็นการรักษาด่วน"
  },
  {
    "er_indication_type_id": 2,
    "er_indication_type_name": "ต้องผ่าตัดด่วน"
  },
  {
    "er_indication_type_id": 3,
    "er_indication_type_name": "เป็นโรคที่คณะกรรมการกำหนด"
  }
]
```
