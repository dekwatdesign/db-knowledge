# `clinic_awareness_reached`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_awareness_reached_id | int(11) | NO | PRI | 0 |  |  |
| clinic_awareness_media_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinicmember_id | int(11) | YES | MUL | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| reached_datetime | datetime | YES |  | NULL |  |  |
| reached_location_address | varchar(200) | YES |  | NULL |  |  |
| reached_location_latitude | varchar(50) | YES |  | NULL |  |  |
| reached_location_longitude | varchar(50) | YES |  | NULL |  |  |
| rating_score | int(11) | YES |  | NULL |  |  |
| rating_comment | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_clinicmember_id | clinicmember_id | no | 1 |
| ix_clinic_awareness_media_id | clinic_awareness_media_id | no | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | clinic_awareness_reached_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
