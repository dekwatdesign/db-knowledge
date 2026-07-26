# `kpi_moph_date_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| kpi_moph_date_type_id | int(11) | NO | PRI | 0 |  |  |
| kpi_moph_date_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | kpi_moph_date_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "kpi_moph_date_type_id": 1,
    "kpi_moph_date_type_name": "ปี"
  },
  {
    "kpi_moph_date_type_id": 2,
    "kpi_moph_date_type_name": "เดีอน"
  }
]
```
