# `addiction_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| addiction_care_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctorcode | varchar(7) | YES | MUL | NULL |  |  |
| addiction_care_status | char(1) | YES |  | NULL |  |  |
| addiction_care_date | date | YES | MUL | NULL |  |  |
| addiction_care_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_addiction_care_date | addiction_care_date | no | 1 |
| ix_addiction_care_doctorcode | doctorcode | no | 1 |
| ix_addiction_care_hn | hn | no | 1 |
| ix_addiction_care_vn | vn | no | 1 |
| PRIMARY | addiction_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
