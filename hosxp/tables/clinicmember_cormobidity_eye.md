# `clinicmember_cormobidity_eye`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_result_left_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_result_right_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_macular_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_cataract_id | int(11) | YES |  | NULL |  |  |
| dmht_eye_screen_blindness_id | int(11) | YES |  | NULL |  |  |
| va_left_text | varchar(100) | YES |  | NULL |  |  |
| va_right_text | varchar(100) | YES |  | NULL |  |  |
| iop_left_text | varchar(100) | YES |  | NULL |  |  |
| iop_right_text | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
