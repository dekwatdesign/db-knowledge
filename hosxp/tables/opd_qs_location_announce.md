# `opd_qs_location_announce`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_location_announce_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_location_id | int(11) | YES | MUL | NULL |  |  |
| announce_text | text | YES |  | NULL |  |  |
| announce_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_location_id | opd_qs_location_id | no | 1 |
| PRIMARY | opd_qs_location_announce_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
