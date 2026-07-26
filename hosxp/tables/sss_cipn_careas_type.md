# `sss_cipn_careas_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| careas_type_code | varchar(10) | NO | PRI |  |  |  |
| careas_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_careas_type_name | careas_type_name | yes | 1 |
| PRIMARY | careas_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "careas_type_code": "M",
    "careas_type_name": "รักษากับสถานพยาบาลตามสิทธิ"
  },
  {
    "careas_type_code": "B",
    "careas_type_name": "รักษากับสถานพยาบาลเครือข่าย"
  },
  {
    "careas_type_code": "A",
    "careas_type_name": "รักษากับสถานพยายาล supra"
  },
  {
    "careas_type_code": "X",
    "careas_type_name": "รักษากับสถานพยาบาลประเภทอื่นๆ"
  }
]
```
