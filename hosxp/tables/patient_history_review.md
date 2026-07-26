# `patient_history_review`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_history_review_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| fsh | text | YES |  | NULL |  |  |
| pmh | text | YES |  | NULL |  |  |
| sh | text | YES |  | NULL |  |  |
| ros | text | YES |  | NULL |  |  |
| review_datetime | datetime | YES |  | NULL |  |  |
| review_staff | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_history_review_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
