# `ipd_do_week_date_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_do_week_date_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_do_week_date_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_do_week_date_type_name | ipd_do_week_date_type_name | yes | 1 |
| PRIMARY | ipd_do_week_date_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "ipd_do_week_date_type_id": 1,
    "ipd_do_week_date_type_name": "จันทร์"
  },
  {
    "ipd_do_week_date_type_id": 2,
    "ipd_do_week_date_type_name": "อังคาร"
  },
  {
    "ipd_do_week_date_type_id": 3,
    "ipd_do_week_date_type_name": "พุธ"
  },
  {
    "ipd_do_week_date_type_id": 4,
    "ipd_do_week_date_type_name": "พฤหัสบดี"
  },
  {
    "ipd_do_week_date_type_id": 5,
    "ipd_do_week_date_type_name": "ศุกร์"
  },
  {
    "ipd_do_week_date_type_id": 6,
    "ipd_do_week_date_type_name": "เสาร์"
  },
  {
    "ipd_do_week_date_type_id": 7,
    "ipd_do_week_date_type_name": "อาทิตย์"
  }
]
```
