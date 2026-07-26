# `roomtype_reserve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| roomtype_reserve_id | int(11) | NO | PRI | 0 |  |  |
| roomtype | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| reserve_date | date | YES | MUL | NULL |  |  |
| reserve_time | time | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| room_reserve_status_id | int(11) | YES |  | NULL |  |  |
| contact_person | varchar(200) | YES |  | NULL |  |  |
| contact_phone | varchar(200) | YES |  | NULL |  |  |
| est_adm_date | date | YES | MUL | NULL |  |  |
| reserve_note | text | YES |  | NULL |  |  |
| room_priority_type_id | int(11) | YES |  | NULL |  |  |
| queue_no | int(11) | YES |  | NULL |  |  |
| roomtype_count | int(11) | YES |  | NULL |  |  |
| avail_room_count | int(11) | YES |  | NULL |  |  |
| roomno | varchar(4) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| doctor_allow | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_est_adm_date | est_adm_date | no | 1 |
| ix_hn | hn | no | 1 |
| ix_reserve_date | reserve_date | no | 1 |
| PRIMARY | roomtype_reserve_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
