# `atlas_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| atlas_user_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| token_id | varchar(250) | YES | MUL | NULL |  |  |
| online_datetime | datetime | YES |  | NULL |  |  |
| url | longtext | YES |  | NULL |  |  |
| officer_id_call | varchar(10) | YES | MUL | NULL |  |  |
| officer_name_call | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_atlas_user_cid_idx | cid | no | 1 |
| ix_atlas_user_officer_id_call_idx | officer_id_call | no | 1 |
| ix_atlas_user_token_id_idx | token_id | no | 1 |
| PRIMARY | atlas_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
