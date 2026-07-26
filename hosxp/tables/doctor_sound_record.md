# `doctor_sound_record`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_sound_record_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| record_datetime | datetime | YES |  | NULL |  |  |
| record_format | varchar(10) | YES |  | NULL |  |  |
| record_data | longblob | YES |  | NULL |  |  |
| elapsed_time | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | doctor_sound_record_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
