# `tb_vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vital_sign_id | varchar(20) | NO | PRI |  |  |  |
| vital_sign_datetime | datetime | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| sbp | double(15,3) | YES |  | NULL |  |  |
| dbp | double(15,3) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| spo2 | double(15,3) | YES |  | NULL |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| vital_sign_db_datetime | datetime | YES |  | NULL |  |  |
| vital_sign_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vital_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
