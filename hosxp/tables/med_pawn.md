# `med_pawn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_pawn_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| med_pawn_date | date | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| med_pawn_note_text | text | YES |  | NULL |  |  |
| receive_ok | char(1) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | med_pawn_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
