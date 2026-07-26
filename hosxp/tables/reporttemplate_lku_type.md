# `reporttemplate_lku_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_lku_type_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_lku_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reporttemplate_lku_type_name | reporttemplate_lku_type_name | yes | 1 |
| PRIMARY | reporttemplate_lku_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "reporttemplate_lku_type_id": 1,
    "reporttemplate_lku_type_name": "Text"
  },
  {
    "reporttemplate_lku_type_id": 2,
    "reporttemplate_lku_type_name": "Integer"
  },
  {
    "reporttemplate_lku_type_id": 3,
    "reporttemplate_lku_type_name": "Float"
  },
  {
    "reporttemplate_lku_type_id": 4,
    "reporttemplate_lku_type_name": "Date"
  },
  {
    "reporttemplate_lku_type_id": 5,
    "reporttemplate_lku_type_name": "Time"
  },
  {
    "reporttemplate_lku_type_id": 6,
    "reporttemplate_lku_type_name": "DateTime"
  },
  {
    "reporttemplate_lku_type_id": 7,
    "reporttemplate_lku_type_name": "DateRange"
  },
  {
    "reporttemplate_lku_type_id": 8,
    "reporttemplate_lku_type_name": "DateTimeRange"
  }
]
```
