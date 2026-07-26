# `dtmain_area_chart_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_area_chart_type_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_area_chart_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtmain_area_chart_type_name | dtmain_area_chart_type_name | yes | 1 |
| PRIMARY | dtmain_area_chart_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "dtmain_area_chart_type_id": 2,
    "dtmain_area_chart_type_name": "Shape"
  },
  {
    "dtmain_area_chart_type_id": 1,
    "dtmain_area_chart_type_name": "Teeth"
  }
]
```
