# `report_group_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_group_type_id | int(11) | NO | PRI | 0 |  |  |
| report_group_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_report_group_type_name | report_group_type_name | yes | 1 |
| PRIMARY | report_group_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "report_group_type_id": 1,
    "report_group_type_name": "กลุ่ม"
  },
  {
    "report_group_type_id": 2,
    "report_group_type_name": "บุคคล"
  }
]
```
