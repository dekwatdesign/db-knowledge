# `opd_qs_schedule_tmpl_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_schedule_tmpl_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_schedule_tmpl_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_schedule_tmpl_type_name | opd_qs_schedule_tmpl_type_name | yes | 1 |
| PRIMARY | opd_qs_schedule_tmpl_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "opd_qs_schedule_tmpl_type_id": 1,
    "opd_qs_schedule_tmpl_type_name": "แพทย์"
  },
  {
    "opd_qs_schedule_tmpl_type_id": 2,
    "opd_qs_schedule_tmpl_type_name": "คลินิก"
  },
  {
    "opd_qs_schedule_tmpl_type_id": 3,
    "opd_qs_schedule_tmpl_type_name": "คลินิก : แพทย์"
  }
]
```
