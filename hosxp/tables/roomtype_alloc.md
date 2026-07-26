# `roomtype_alloc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| roomtype_alloc_id | int(11) | NO | PRI | 0 |  |  |
| roomtype_reserve_id | int(11) | YES | MUL | NULL |  |  |
| alloc_datetime | datetime | YES |  | NULL |  |  |
| roomno | varchar(4) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| alloc_note_text | text | YES |  | NULL |  |  |
| checkin_date | date | YES |  | NULL |  |  |
| checkin_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rtrid | roomtype_reserve_id | no | 1 |
| PRIMARY | roomtype_alloc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
