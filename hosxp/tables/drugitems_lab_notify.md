# `drugitems_lab_notify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_lab_notify_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| tmt_tpu_code | varchar(25) | YES |  | NULL |  |  |
| notify_text | text | YES |  | NULL |  |  |
| provider_cid | varchar(13) | YES |  | NULL |  |  |
| provider_name | varchar(85) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| substance_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_tmt_tpu_code | cid | yes | 1 |
| ix_cid_tmt_tpu_code | tmt_tpu_code | yes | 2 |
| PRIMARY | drugitems_lab_notify_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
