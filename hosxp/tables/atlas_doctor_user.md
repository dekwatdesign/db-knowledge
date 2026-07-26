# `atlas_doctor_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| atlas_doctor_user_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| token_id | varchar(250) | YES | MUL | NULL |  |  |
| online_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| access_token | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_atlas_user_cid_idx_copy1 | cid | no | 1 |
| ix_atlas_user_token_id_idx_copy1 | token_id | no | 1 |
| PRIMARY | atlas_doctor_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
