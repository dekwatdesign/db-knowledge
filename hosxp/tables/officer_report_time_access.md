# `officer_report_time_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_report_time_access_id | int(11) | NO | PRI | 0 |  |  |
| officer_report_access_id | int(11) | YES | MUL | NULL |  |  |
| time_begin | time | YES |  | NULL |  |  |
| time_end | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_report_access_id | officer_report_access_id | no | 1 |
| PRIMARY | officer_report_time_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
