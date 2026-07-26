# `reporttemplate_param_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_param_type_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_param_type_name | varchar(50) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reporttemplate_param_type_name | reporttemplate_param_type_name | yes | 1 |
| PRIMARY | reporttemplate_param_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "reporttemplate_param_type_id": 1,
    "reporttemplate_param_type_name": "String"
  },
  {
    "reporttemplate_param_type_id": 2,
    "reporttemplate_param_type_name": "Number"
  },
  {
    "reporttemplate_param_type_id": 3,
    "reporttemplate_param_type_name": "Date"
  },
  {
    "reporttemplate_param_type_id": 4,
    "reporttemplate_param_type_name": "Time"
  },
  {
    "reporttemplate_param_type_id": 5,
    "reporttemplate_param_type_name": "DateTime"
  }
]
```
