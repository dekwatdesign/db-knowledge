# `opd_qs_speak_lock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_name | varchar(150) | NO | PRI |  |  |  |
| lock_datetime | datetime | YES |  | NULL |  |  |
| opd_qs_location_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_location_id | opd_qs_location_id | no | 1 |
| PRIMARY | computer_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
