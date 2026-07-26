# `opd_qs_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_location_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_location_name | varchar(200) | YES | UNI | NULL |  |  |
| rtc_caller_ip | varchar(150) | YES |  | NULL |  |  |
| rtc_caller_port | int(11) | YES |  | NULL |  |  |
| opd_qs_location_type_id | int(11) | YES |  | NULL |  |  |
| use_pt_priority_prefix | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_location_name | opd_qs_location_name | yes | 1 |
| PRIMARY | opd_qs_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
