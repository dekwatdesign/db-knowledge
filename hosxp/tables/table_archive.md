# `table_archive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_archive_id | int(11) | NO | PRI | 0 |  |  |
| table_archive_name | varchar(200) | YES | UNI | NULL |  |  |
| table_archive_date_field | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_table_archive_name | table_archive_name | yes | 1 |
| PRIMARY | table_archive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "table_archive_id": 1,
    "table_archive_name": "opitemrece",
    "table_archive_date_field": "rxdate"
  },
  {
    "table_archive_id": 2,
    "table_archive_name": "opdscreen",
    "table_archive_date_field": "vstdate"
  },
  {
    "table_archive_id": 3,
    "table_archive_name": "ovst",
    "table_archive_date_field": "vstdate"
  },
  {
    "table_archive_id": 4,
    "table_archive_name": "vn_stat",
    "table_archive_date_field": "vstdate"
  },
  {
    "table_archive_id": 5,
    "table_archive_name": "ovstdiag",
    "table_archive_date_field": "vstdate"
  }
]
```
