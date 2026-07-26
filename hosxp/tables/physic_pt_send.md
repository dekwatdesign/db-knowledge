# `physic_pt_send`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pt_send_id | int(11) | NO | PRI | 0 |  |  |
| send_date | date | YES |  | NULL |  |  |
| physic_status_id | int(11) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| anvn | varchar(13) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_anvn | anvn | yes | 1 |
| ix_idx_hn | hn | no | 1 |
| ix_physic_status_id | physic_status_id | no | 1 |
| PRIMARY | physic_pt_send_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
